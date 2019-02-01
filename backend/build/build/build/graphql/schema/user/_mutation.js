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
  var data = _taggedTemplateLiteral(["\n  extend type Mutation {\n    signup(email: String!, password: String!): AuthPayload\n    login(email: String!, password: String!): AuthPayload\n  }\n"]);

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

var Mutation = (0, _apolloServerExpress.gql)(_templateObject());

var mutationTypes = function mutationTypes() {
  return [Mutation];
};

exports.mutationTypes = mutationTypes;
var mutationResolvers = {
  Mutation: {
    signup: function () {
      var _signup = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var email, password, usr, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;

                if (email) {
                  _context.next = 3;
                  break;
                }

                throw new Error("No Email");

              case 3:
                if (password) {
                  _context.next = 5;
                  break;
                }

                throw new Error("No Password");

              case 5:
                _context.next = 7;
                return _model.default.findOne({
                  email: email
                });

              case 7:
                usr = _context.sent;

                if (!usr) {
                  _context.next = 10;
                  break;
                }

                throw new Error("Exists");

              case 10:
                _context.next = 12;
                return new _model.default({
                  email: email
                });

              case 12:
                user = _context.sent;
                user.setPassword(password);
                user.save();
                return _context.abrupt("return", user.toAuthJSON());

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function signup(_x, _x2) {
        return _signup.apply(this, arguments);
      }

      return signup;
    }(),
    login: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_, _ref2) {
        var email, password, user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                email = _ref2.email, password = _ref2.password;

                if (email) {
                  _context2.next = 3;
                  break;
                }

                throw new Error("No Email");

              case 3:
                if (password) {
                  _context2.next = 5;
                  break;
                }

                throw new Error("No Password");

              case 5:
                _context2.next = 7;
                return _model.default.findOne({
                  email: email
                });

              case 7:
                user = _context2.sent;

                if (user) {
                  _context2.next = 10;
                  break;
                }

                throw new Error("Incorrect Email");

              case 10:
                if (user.validatePassword(password)) {
                  _context2.next = 12;
                  break;
                }

                throw new Error("Incorrect Password");

              case 12:
                return _context2.abrupt("return", user.toAuthJSON());

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function login(_x3, _x4) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }
};
exports.mutationResolvers = mutationResolvers;
//# sourceMappingURL=_mutation.js.map