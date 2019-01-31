import fs from 'fs';
import path from 'path';
import {
  ApolloServer, gql,
  SchemaDirectiveVisitor,
  AuthenticationError
} from 'apollo-server-express';
import { merge } from 'lodash';

import jwt from 'jsonwebtoken';
import userModel from './user/_model';

const jwtSecret = process.env.JWT_SECRET;

class RequireAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { role } = this.args;
    field.resolve = async function(...args) {
      const [, , ctx] = args;
      if (ctx.req && ctx.req.headers.authorization) {
        let token;
        let decoded;
        try {
          token = ctx.req.headers.authorization.split(" ")[1];
          decoded = jwt.verify(token, jwtSecret);
        } catch(e) {
          throw new AuthenticationError(
            "You must be signed in to view this resource."
          );
        }
        const user = await userModel.findById(decoded.id);
        if (role && (!user.role || !user.role.includes(role))) {
          throw new AuthenticationError(
            "You are not authorized to view this resource."
          );
        } else {
          const result = await resolve.apply(this, args);
          return result;
        }
      } else {
        throw new AuthenticationError(
          "You must be signed in to view this resource."
        );
      }
    };
  }
}

const Auth = gql`
  directive @requireAuth(role: Role) on FIELD_DEFINITION
  enum Role {
    ADMIN
    USER
  }
`;

const Query = gql`
  type Query {
    status: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

let resolvers = {
  Query: {
    status: () => 'ok'
  }
};

const typeDefs = [Query, Mutation, Auth];

// read the current directory and load types and resolvers automatically
fs.readdirSync(__dirname)
  .filter(dir => (dir.indexOf('.') < 0))
  .forEach(dir => {
    const tmp = require(path.join(__dirname, dir)).default;
    resolvers = merge(resolvers, tmp.resolvers);
    typeDefs.push(tmp.types);
  });

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    requireAuth: RequireAuthDirective
  },
  context: ({ req }) => ({ req })
});

export default schema;
