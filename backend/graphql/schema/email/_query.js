import { gql } from 'apollo-server-express';

import emailModel from './_model';

const Query = gql`
  extend type Query {
    emails(filter: emailsFilterInput): [Email] @requireAuth(role: ADMIN)
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    emails: async (_, { filter = {} }) => {
      return {};
    }
  }
};

