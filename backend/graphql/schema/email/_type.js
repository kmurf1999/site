import { gql } from 'apollo-server-express';

const Email = gql`
  type Email {
    from: String!
    to: String!
    name: String
    subject: String
    message: String!
    _id: ID!
  }
`;

export const types = () => [Email];

export const typeResolvers = {

};
