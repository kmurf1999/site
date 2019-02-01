"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeResolvers = exports.types = void 0;

var _apolloServerExpress = require("apollo-server-express");

const Email = _apolloServerExpress.gql`
  type Email {
    from: String!
    to: String!
    name: String
    subject: String
    message: String!
    _id: ID!
  }
`;

const types = () => [Email];

exports.types = types;
const typeResolvers = {};
exports.typeResolvers = typeResolvers;
//# sourceMappingURL=_type.js.map