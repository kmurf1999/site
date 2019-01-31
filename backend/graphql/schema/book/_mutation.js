import { gql } from 'apollo-server-express';

import bookModel from './_model';

const Mutation = gql`
  extend type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id: String!): Book
  }
`;

export const mutationTypes = () => [Mutation];

export const mutationResolvers = {
  Mutation: {
    addBook: async (_, { title, author }) => {
      const book = await bookModel.create({ title, author });
      return book.toGraph();
    },
    deleteBook: async (_, { id }) => {
      const book = await bookModel.findByIdAndRemove(id);
      return book ? book.toGraph() : null;
    }
  }
};
