"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _compression = _interopRequireDefault(require("compression"));

var _graphql = _interopRequireDefault(require("./graphql"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

require('dotenv').load();

const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGO_URI;
const app = (0, _express.default)();

_mongoose.default.connect(mongoURI, {
  useNewUrlParser: true
});

_mongoose.default.connection.on('connected', () => {
  console.log('Mongoose connection open on ' + mongoURI);
});

app.use((0, _cors.default)({
  orgin: process.env.CORS_DOMAIN || '*',
  optionsSuccessStatus: 200
}));
if (process.env.NODE_ENV === 'production') app.use((0, _compression.default)());
(0, _graphql.default)(app);
app.listen(port, () => console.log(`Listening on port ${port}!`));
//# sourceMappingURL=index.js.map