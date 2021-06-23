"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelIcon = exports.DeleteIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var DeleteIcon = function DeleteIcon(props) {
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "rmc-icon-container"
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "rmc-remove"
  }), /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n      .rmc-icon-container {\n        width: 15px;\n        height: 15px;\n        cursor: pointer;\n        float: right;\n        background:#262626;\n        opacity: 0.8;\n      }\n      .rmc-remove {\n        color: white;\n        position: absolute;\n        margin-top: 6px;\n      }\n\n      .rmc-remove:hover {\n        cursor: pointer;\n      }\n\n      .rmc-remove:before {\n        content: '';\n        position: absolute;\n        width: 15px;\n        height: 1px;\n        background-color: currentColor;\n        -webkit-transform: rotate(45deg);\n                transform: rotate(45deg);\n      }\n\n      .rmc-remove:after {\n        content: '';\n        position: absolute;\n        width: 15px;\n        height: 1px;\n        background-color: currentColor;\n        -webkit-transform: rotate(-45deg);\n                transform: rotate(-45deg);\n      }\n    "));
};

exports.DeleteIcon = DeleteIcon;

var LabelIcon = function LabelIcon(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "rmc-label"
  }, label, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n      .rmc-label {\n        width: 15px;\n        height: 15px;\n        float: left;\n        position: absoulte;\n        top:-15px;\n        font-size: 12px;\n        background:#262626;\n        text-align: center;\n        line-height: 15px;\n        color: white;\n        opacity: 0.8;\n      }\n    "));
};

exports.LabelIcon = LabelIcon;
LabelIcon.propTypes = {
  label: _propTypes["default"].any
};
LabelIcon.defaultProps = {
  label: 'Q'
};