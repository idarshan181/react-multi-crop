"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.coordinateType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ramda = require("ramda");

var _interactjs = _interopRequireDefault(require("interactjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Crop = /*#__PURE__*/function (_Component) {
  _inherits(Crop, _Component);

  var _super = _createSuper(Crop);

  function Crop() {
    var _this;

    _classCallCheck(this, Crop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "handleResizeMove", function (e) {
      var _this$props = _this.props,
          index = _this$props.index,
          coordinate = _this$props.coordinate,
          _this$props$coordinat = _this$props.coordinate,
          x = _this$props$coordinat.x,
          y = _this$props$coordinat.y,
          coordinates = _this$props.coordinates,
          onResize = _this$props.onResize,
          onChange = _this$props.onChange;
      var _e$rect = e.rect,
          width = _e$rect.width,
          height = _e$rect.height;
      var _e$deltaRect = e.deltaRect,
          left = _e$deltaRect.left,
          top = _e$deltaRect.top;

      var nextCoordinate = _objectSpread(_objectSpread({}, coordinate), {}, {
        x: x + left,
        y: y + top,
        width: width,
        height: height
      });

      var nextCoordinates = (0, _ramda.update)(index, nextCoordinate)(coordinates);

      if ((0, _ramda.is)(Function, onResize)) {
        onResize(nextCoordinate, index, nextCoordinates);
      }

      if ((0, _ramda.is)(Function, onChange)) {
        onChange(nextCoordinate, index, nextCoordinates);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDragMove", function (e) {
      var _this$props2 = _this.props,
          index = _this$props2.index,
          coordinate = _this$props2.coordinate,
          _this$props2$coordina = _this$props2.coordinate,
          x = _this$props2$coordina.x,
          y = _this$props2$coordina.y,
          coordinates = _this$props2.coordinates,
          onDrag = _this$props2.onDrag,
          onChange = _this$props2.onChange;
      var dx = e.dx,
          dy = e.dy;

      var nextCoordinate = _objectSpread(_objectSpread({}, coordinate), {}, {
        x: x + dx,
        y: y + dy
      });

      var nextCoordinates = (0, _ramda.update)(index, nextCoordinate)(coordinates);

      if ((0, _ramda.is)(Function, onDrag)) {
        onDrag(nextCoordinate, index, nextCoordinates);
      }

      if ((0, _ramda.is)(Function, onChange)) {
        onChange(nextCoordinate, index, nextCoordinates);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDelete", function () {
      var _this$props3 = _this.props,
          index = _this$props3.index,
          coordinate = _this$props3.coordinate,
          onDelete = _this$props3.onDelete,
          coordinates = _this$props3.coordinates;
      var nextCoordinates = remove(index, 1)(coordinates);

      if ((0, _ramda.is)(Function, onDelete)) {
        onDelete(coordinate, index, nextCoordinates);
      }
    });

    return _this;
  }

  _createClass(Crop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _interactjs["default"])(this.crop).draggable({}).resizable({
        edges: {
          left: true,
          right: true,
          bottom: true,
          top: true
        }
      }).on('dragmove', this.handleDragMove).on('resizemove', this.handleResizeMove);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      // reduce uncessary update
      return !(0, _ramda.equals)(nextProps.coordinate, this.props.coordinate) || nextProps.index !== this.props.index;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _interactjs["default"])(this.crop).unset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          coordinate = _this$props4.coordinate,
          index = _this$props4.index;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: Crop.cropStyle(coordinate),
        ref: function ref(crop) {
          return _this2.crop = crop;
        }
      }, /*#__PURE__*/_react["default"].createElement(NumberIcon, {
        number: index + 1
      }), /*#__PURE__*/_react["default"].createElement(DeleteIcon, {
        onClick: this.handleDelete
      }));
    }
  }]);

  return Crop;
}(_react.Component);

_defineProperty(Crop, "cropStyle", function (coordinate) {
  var x = coordinate.x,
      y = coordinate.y,
      width = coordinate.width,
      height = coordinate.height;
  return {
    // border: '1px dotted rgba(153,153,153,1)',
    // background: 'rgba(153,153,153,0.3)',
    display: 'inline-block',
    position: 'absolute',
    width: width,
    height: height,
    top: y,
    left: x,
    boxShadow: '0 0 6px #000',
    background: '#8c8c8c',
    opacity: 0.6
  };
});

var coordinateType = _propTypes["default"].shape({
  x: _propTypes["default"].number.isRequired,
  y: _propTypes["default"].number.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired
});

exports.coordinateType = coordinateType;
Crop.propTypes = {
  coordinate: coordinateType.isRequired,
  index: _propTypes["default"].number.isRequired,
  onResize: _propTypes["default"].func,
  // eslint-disable-line
  onDrag: _propTypes["default"].func,
  // eslint-disable-line
  onDelete: _propTypes["default"].func,
  // eslint-disable-line
  onChange: _propTypes["default"].func,
  // eslint-disable-line
  coordinates: _propTypes["default"].array // eslint-disable-line

};
var _default = Crop;
exports["default"] = _default;