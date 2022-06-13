"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

require("react-dates/initialize");

require("normalize.css/normalize.css");

var _configureStore = _interopRequireDefault(require("./stores/configureStore"));

require("./styles/styles.scss");

var _AppRouter = _interopRequireDefault(require("./routers/AppRouter"));

require("react-dates/lib/css/_datepicker.css");

require("./firebase/firebase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _configureStore["default"])();
console.log("Hi");

var jsx = /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(_AppRouter["default"], null));

_reactDom["default"].render(jsx, document.getElementById('app'));
