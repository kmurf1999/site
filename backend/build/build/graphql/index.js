"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _schema = _interopRequireDefault(require("./schema"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var _default = app => {
  _schema.default.applyMiddleware({
    app,
    path: '/'
  });
};

exports.default = _default;
//# sourceMappingURL=index.js.map