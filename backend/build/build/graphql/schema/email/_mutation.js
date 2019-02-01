"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutationResolvers = exports.mutationTypes = void 0;

var _apolloServerExpress = require("apollo-server-express");

var _mailer = _interopRequireDefault(require("../../../mailer"));

var _model = _interopRequireDefault(require("./_model"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const hostEmail = process.env.EMAIL_AUTH_USER;
const Mutation = _apolloServerExpress.gql`
  extend type Mutation {
    sendEmail(name: String!, from: String!, message: String!): Email
  }
`;

const mutationTypes = () => [Mutation];

exports.mutationTypes = mutationTypes;
const mutationResolvers = {
  Mutation: {
    sendEmail: async (_, {
      from,
      name,
      message
    }) => {
      if (!from) throw new Error("No Email");
      if (!message) throw new Error("No Message");
      if (typeof name === 'undefined') name = '';
      const messageConfig = {
        to: 'kmurf1999@gmail.com',
        from: hostEmail,
        subject: `Work Email from ${name} - ${from}`,
        body: message,
        html: `<p>${message}</p>`
      };
      const email = await new _model.default({
        from,
        to: messageConfig.from,
        subject: messageConfig.subject,
        name,
        message
      });
      await _mailer.default.sendMail(messageConfig, (err, info) => {
        if (err) throw new Error("Message Send Failure");
      });
      return email.toGraph();
    }
  }
};
exports.mutationResolvers = mutationResolvers;
//# sourceMappingURL=_mutation.js.map