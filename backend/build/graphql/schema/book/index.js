"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _type = require("./_type");

var _query = require("./_query");

var _input = _interopRequireDefault(require("./_input"));

var _mutation = require("./_mutation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  types: () => [_type.types, _query.queryTypes, _input.default, _mutation.mutationTypes],
  resolvers: Object.assign(_query.queryResolvers, _mutation.mutationResolvers, _type.typeResolvers)
};
exports.default = _default;
//# sourceMappingURL=index.js.map