"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var bookSchema = new _mongoose.default.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  }
});
/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */

bookSchema.set('toObject', {
  virtuals: true
});
bookSchema.method('toGraph', function toGraph() {
  return JSON.parse(JSON.stringify(this));
});

var _default = _mongoose.default.model('Book', bookSchema);

exports.default = _default;
//# sourceMappingURL=_model.js.map