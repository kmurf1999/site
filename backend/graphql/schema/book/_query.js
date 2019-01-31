import { gql } from 'apollo-server-express';

import bookModel from './_model';

const Query = gql`
  extend type Query {
    books(filter: booksFilterInput): [Book]
    book(id: String!): Book
  }
`;

export const queryTypes = () => [Query];

export const queryResolvers = {
  Query: {
    books: async (_, { filter = {} }) => {
      const books = await bookModel.find({}, null, filter);
      return books.map(book => book.toGraph());
    },
    book: async (_, { id }) => {
      const book = await bookModel.findById(id);
      return book.toGraph();
    }
  }
};
