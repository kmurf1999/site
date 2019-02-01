"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeResolvers = exports.types = void 0;

var _apolloServerExpress = require("apollo-server-express");

const Book = _apolloServerExpress.gql`
  type Book {
    title: String!
    author: String!
    _id: ID!
  }
`;

const types = () => [Book];

exports.types = types;
const typeResolvers = {};
exports.typeResolvers = typeResolvers;
//# sourceMappingURL=_type.js.map