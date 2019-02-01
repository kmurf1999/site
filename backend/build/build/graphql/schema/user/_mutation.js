"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationResolvers = exports.mutationTypes = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _model = _interopRequireDefault(require("./_model"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const Mutation = _apolloServerExpress.gql`
  extend type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }
`;

const mutationTypes = () => [Mutation];

exports.mutationTypes = mutationTypes;
const mutationResolvers = {
  Mutation: {
    signup: async (_, {
      email,
      password
    }) => {
      if (!email) throw new Error("No Email");
      if (!password) throw new Error("No Password");
      const usr = await _model.default.findOne({
        email
      });
      if (usr) throw new Error("Exists");
      const user = await new _model.default({
        email
      });
      user.setPassword(password);
      user.save();
      return user.toAuthJSON();
    },
    login: async (_, {
      email,
      password
    }) => {
      if (!email) throw new Error("No Email");
      if (!password) throw new Error("No Password");
      const user = await _model.default.findOne({
        email
      });
      if (!user) throw new Error("Incorrect Email");
      if (!user.validatePassword(password)) throw new Error("Incorrect Password");
      return user.toAuthJSON();
    }
  }
};
exports.mutationResolvers = mutationResolvers;
//# sourceMappingURL=_mutation.js.map