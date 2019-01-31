import { gql } from 'apollo-server-express';

const Book = gql`
  type Book {
    title: String!
    author: String!
    _id: ID!
  }
`;

export const types = () => [Book];

export const typeResolvers = {

};
