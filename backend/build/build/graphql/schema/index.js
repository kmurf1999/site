"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _apolloServerExpress = require("apollo-server-express");

var _lodash = require("lodash");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _model = _interopRequireDefault(require("./user/_model"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const jwtSecret = process.env.JWT_SECRET;

class RequireAuthDirective extends _apolloServerExpress.SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const {
      resolve = defaultFieldResolver
    } = field;
    const {
      role
    } = this.args;

    field.resolve = async function (...args) {
      const [,, ctx] = args;

      if (ctx.req && ctx.req.headers.authorization) {
        let token;
        let decoded;

        try {
          token = ctx.req.headers.authorization.split(" ")[1];
          decoded = _jsonwebtoken.default.verify(token, jwtSecret);
        } catch (e) {
          throw new _apolloServerExpress.AuthenticationError("You must be signed in to view this resource.");
        }

        const user = await _model.default.findById(decoded.id);

        if (role && (!user.role || !user.role.includes(role))) {
          throw new _apolloServerExpress.AuthenticationError("You are not authorized to view this resource.");
        } else {
          const result = await resolve.apply(this, args);
          return result;
        }
      } else {
        throw new _apolloServerExpress.AuthenticationError("You must be signed in to view this resource.");
      }
    };
  }

}

const Auth = _apolloServerExpress.gql`
  directive @requireAuth(role: Role) on FIELD_DEFINITION
  enum Role {
    ADMIN
    USER
  }
`;
const Query = _apolloServerExpress.gql`
  type Query {
    status: String
  }
`;
const Mutation = _apolloServerExpress.gql`
  type Mutation {
    _empty: String
  }
`;
let resolvers = {
  Query: {
    status: () => 'ok'
  }
};
const typeDefs = [Query, Mutation, Auth]; // read the current directory and load types and resolvers automatically

_fs.default.readdirSync(__dirname).filter(dir => dir.indexOf('.') < 0).forEach(dir => {
  const tmp = require(_path.default.join(__dirname, dir)).default;

  resolvers = (0, _lodash.merge)(resolvers, tmp.resolvers);
  typeDefs.push(tmp.types);
});

const schema = new _apolloServerExpress.ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    requireAuth: RequireAuthDirective
  },
  context: ({
    req
  }) => ({
    req
  })
});
var _default = schema;
exports.default = _default;
//# sourceMappingURL=index.js.map