"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryResolvers = exports.queryTypes = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _model = _interopRequireDefault(require("./_model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Query = _apolloServerExpress.gql`
  extend type Query {
    books(filter: booksFilterInput): [Book]
    book(id: String!): Book
  }
`;

const queryTypes = () => [Query];

exports.queryTypes = queryTypes;
const queryResolvers = {
  Query: {
    books: async (_, {
      filter = {}
    }) => {
      const books = await _model.default.find({}, null, filter);
      return books.map(book => book.toGraph());
    },
    book: async (_, {
      id
    }) => {
      const book = await _model.default.findById(id);
      return book.toGraph();
    }
  }
};
exports.queryResolvers = queryResolvers;
//# sourceMappingURL=_query.js.map