"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _apolloServerExpress = require("apollo-server-express");

const Input = _apolloServerExpress.gql`
  input booksFilterInput {
    limit: Int
  }
`;

var _default = () => [Input];

exports.default = _default;
//# sourceMappingURL=_input.js.map