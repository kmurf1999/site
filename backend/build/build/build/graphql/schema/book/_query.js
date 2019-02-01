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
  var data = _taggedTemplateLiteral(["\n  extend type Query {\n    books(filter: booksFilterInput): [Book]\n    book(id: String!): Book\n  }\n"]);

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

var Query = (0, _apolloServerExpress.gql)(_templateObject());

var queryTypes = function queryTypes() {
  return [Query];
};

exports.queryTypes = queryTypes;
var queryResolvers = {
  Query: {
    books: function () {
      var _books = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(_, _ref) {
        var _ref$filter, filter, books;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? {} : _ref$filter;
                _context.next = 3;
                return _model.default.find({}, null, filter);

              case 3:
                books = _context.sent;
                return _context.abrupt("return", books.map(function (book) {
                  return book.toGraph();
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function books(_x, _x2) {
        return _books.apply(this, arguments);
      }

      return books;
    }(),
    book: function () {
      var _book = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(_, _ref2) {
        var id, book;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = _ref2.id;
                _context2.next = 3;
                return _model.default.findById(id);

              case 3:
                book = _context2.sent;
                return _context2.abrupt("return", book.toGraph());

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function book(_x3, _x4) {
        return _book.apply(this, arguments);
      }

      return book;
    }()
  }
};
exports.queryResolvers = queryResolvers;
//# sourceMappingURL=_query.js.map