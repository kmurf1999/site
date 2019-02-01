"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _apolloServerExpress = require("apollo-server-express");

var _lodash = require("lodash");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _model = _interopRequireDefault(require("./user/_model"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  type Mutation {\n    _empty: String\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  type Query {\n    status: String\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  directive @requireAuth(role: Role) on FIELD_DEFINITION\n  enum Role {\n    ADMIN\n    USER\n  }\n"]);

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

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var jwtSecret = process.env.JWT_SECRET;

var RequireAuthDirective =
/*#__PURE__*/
function (_SchemaDirectiveVisit) {
  _inherits(RequireAuthDirective, _SchemaDirectiveVisit);

  function RequireAuthDirective() {
    _classCallCheck(this, RequireAuthDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(RequireAuthDirective).apply(this, arguments));
  }

  _createClass(RequireAuthDirective, [{
    key: "visitFieldDefinition",
    value: function visitFieldDefinition(field) {
      var _field$resolve = field.resolve,
          resolve = _field$resolve === void 0 ? defaultFieldResolver : _field$resolve;
      var role = this.args.role;
      field.resolve =
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _len,
            args,
            _key,
            ctx,
            token,
            decoded,
            user,
            result,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args[_key];
                }

                ctx = args[2];

                if (!(ctx.req && ctx.req.headers.authorization)) {
                  _context.next = 24;
                  break;
                }

                _context.prev = 3;
                token = ctx.req.headers.authorization.split(" ")[1];
                decoded = _jsonwebtoken.default.verify(token, jwtSecret);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                throw new _apolloServerExpress.AuthenticationError("You must be signed in to view this resource.");

              case 11:
                _context.next = 13;
                return _model.default.findById(decoded.id);

              case 13:
                user = _context.sent;

                if (!(role && (!user.role || !user.role.includes(role)))) {
                  _context.next = 18;
                  break;
                }

                throw new _apolloServerExpress.AuthenticationError("You are not authorized to view this resource.");

              case 18:
                _context.next = 20;
                return resolve.apply(this, args);

              case 20:
                result = _context.sent;
                return _context.abrupt("return", result);

              case 22:
                _context.next = 25;
                break;

              case 24:
                throw new _apolloServerExpress.AuthenticationError("You must be signed in to view this resource.");

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8]]);
      }));
    }
  }]);

  return RequireAuthDirective;
}(_apolloServerExpress.SchemaDirectiveVisitor);

var Auth = (0, _apolloServerExpress.gql)(_templateObject());
var Query = (0, _apolloServerExpress.gql)(_templateObject2());
var Mutation = (0, _apolloServerExpress.gql)(_templateObject3());
var resolvers = {
  Query: {
    status: function status() {
      return 'ok';
    }
  }
};
var typeDefs = [Query, Mutation, Auth]; // read the current directory and load types and resolvers automatically

_fs.default.readdirSync(__dirname).filter(function (dir) {
  return dir.indexOf('.') < 0;
}).forEach(function (dir) {
  var tmp = require(_path.default.join(__dirname, dir)).default;

  resolvers = (0, _lodash.merge)(resolvers, tmp.resolvers);
  typeDefs.push(tmp.types);
});

var schema = new _apolloServerExpress.ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  schemaDirectives: {
    requireAuth: RequireAuthDirective
  },
  context: function context(_ref2) {
    var req = _ref2.req;
    return {
      req: req
    };
  }
});
var _default = schema;
exports.default = _default;
//# sourceMappingURL=index.js.map