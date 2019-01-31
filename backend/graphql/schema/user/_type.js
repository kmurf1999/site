import { gql } from 'apollo-server-express';

const User = gql`
  type User {
    email: String!
    _id: ID!
  }

  type AuthPayload {
    token: String!
    user: User
  }
`;

export const types = () => [User];

export const typeResolvers = {

};
