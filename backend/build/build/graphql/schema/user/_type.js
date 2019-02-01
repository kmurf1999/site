"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeResolvers = exports.types = void 0;

var _apolloServerExpress = require("apollo-server-express");

const User = _apolloServerExpress.gql`
  type User {
    email: String!
    _id: ID!
  }

  type AuthPayload {
    token: String!
    user: User
  }
`;

const types = () => [User];

exports.types = types;
const typeResolvers = {};
exports.typeResolvers = typeResolvers;
//# sourceMappingURL=_type.js.map