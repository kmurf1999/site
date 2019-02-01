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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  extend type Mutation {\n    sendEmail(name: String!, from: String!, message: String!): Email\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var hostEmail = process.env.EMAIL_AUTH_USER;
var Mutation = (0, _apolloServerExpress.gql)(_templateObject());

var mutationTypes = function mutationTypes() {
  return [Mutation];
};

exports.mutationTypes = mutationTypes;
var mutationResolvers = {
  Mutation: {
    sendEmail: function () {
      var _sendEmail = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var from, name, message, messageConfig, email;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                from = _ref.from, name = _ref.name, message = _ref.message;

                if (from) {
                  _context.next = 3;
                  break;
                }

                throw new Error("No Email");

              case 3:
                if (message) {
                  _context.next = 5;
                  break;
                }

                throw new Error("No Message");

              case 5:
                if (typeof name === 'undefined') name = '';
                messageConfig = {
                  to: 'kmurf1999@gmail.com',
                  from: hostEmail,
                  subject: "Work Email from ".concat(name, " - ").concat(from),
                  body: message,
                  html: "<p>".concat(message, "</p>")
                };
                _context.next = 9;
                return new _model.default({
                  from: from,
                  to: messageConfig.from,
                  subject: messageConfig.subject,
                  name: name,
                  message: message
                });

              case 9:
                email = _context.sent;
                _context.next = 12;
                return _mailer.default.sendMail(messageConfig, function (err, info) {
                  if (err) throw new Error("Message Send Failure");
                });

              case 12:
                return _context.abrupt("return", email.toGraph());

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function sendEmail(_x, _x2) {
        return _sendEmail.apply(this, arguments);
      }

      return sendEmail;
    }()
  }
};
exports.mutationResolvers = mutationResolvers;
//# sourceMappingURL=_mutation.js.map