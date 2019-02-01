"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationResolvers = exports.mutationTypes = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _model = _interopRequireDefault(require("./_model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Mutation = _apolloServerExpress.gql`
  extend type Mutation {
    addBook(title: String!, author: String!): Book
    deleteBook(id: String!): Book
  }
`;

const mutationTypes = () => [Mutation];

exports.mutationTypes = mutationTypes;
const mutationResolvers = {
  Mutation: {
    addBook: async (_, {
      title,
      author
    }) => {
      const book = await _model.default.create({
        title,
        author
      });
      return book.toGraph();
    },
    deleteBook: async (_, {
      id
    }) => {
      const book = await _model.default.findByIdAndRemove(id);
      return book ? book.toGraph() : null;
    }
  }
};
exports.mutationResolvers = mutationResolvers;
//# sourceMappingURL=_mutation.js.map