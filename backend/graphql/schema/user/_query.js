import { gql } from 'apollo-server-express';

import userModel from './_model';

const Query = gql`
  extend type Query {
    users(filter: usersFilterInput): [User] @requireAuth(role: ADMIN)
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    users: async (_, { filter = {} }) => {
      const users = await userModel.find({}, null, filter);
      return users.map(user => user.toGraph());
    }
  }
};
