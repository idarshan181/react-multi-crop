"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "removeid", {
  enumerable: true,
  get: function get() {
    return _utils.removeid;
  }
});
Object.defineProperty(exports, "addid", {
  enumerable: true,
  get: function get() {
    return _utils.addid;
  }
});
exports["default"] = void 0;

var _MultiCrops = _interopRequireDefault(require("./components/MultiCrops"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import React from 'react'
// import styles from './styles.module.css'
// const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
var _default = _MultiCrops["default"];
exports["default"] = _default;