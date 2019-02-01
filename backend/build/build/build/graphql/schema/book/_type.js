"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeResolvers = exports.types = void 0;

var _apolloServerExpress = require("apollo-server-express");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  type Book {\n    title: String!\n    author: String!\n    _id: ID!\n  }\n"]);

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

var Book = (0, _apolloServerExpress.gql)(_templateObject());

var types = function types() {
  return [Book];
};

exports.types = types;
var typeResolvers = {};
exports.typeResolvers = typeResolvers;
//# sourceMappingURL=_type.js.map