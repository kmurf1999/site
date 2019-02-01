"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryResolvers = exports.queryTypes = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _model = _interopRequireDefault(require("./_model"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const Query = _apolloServerExpress.gql`
  extend type Query {
    users(filter: usersFilterInput): [User] @requireAuth(role: ADMIN)
  }
`;

const queryTypes = () => [Query];

exports.queryTypes = queryTypes;
const queryResolvers = {
  Query: {
    users: async (_, {
      filter = {}
    }) => {
      const users = await _model.default.find({}, null, filter);
      return users.map(user => user.toGraph());
    }
  }
};
exports.queryResolvers = queryResolvers;
//# sourceMappingURL=_query.js.map