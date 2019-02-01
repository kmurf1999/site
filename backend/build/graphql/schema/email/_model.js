"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emailSchema = new _mongoose.default.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  subject: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: new Date()
  }
});
/**
 * This property will ensure our virtuals (including "id")
 * are set on the user when we use it.
 */

emailSchema.set('toObject', {
  virtuals: true
});
emailSchema.method('toGraph', function toGraph() {
  return JSON.parse(JSON.stringify(this));
});

var _default = _mongoose.default.model('Email', emailSchema);

exports.default = _default;
//# sourceMappingURL=_model.js.map