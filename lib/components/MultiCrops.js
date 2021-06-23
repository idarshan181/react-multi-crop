"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nanoid = require("nanoid");

var _crop = _interopRequireDefault(require("./crop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var isValidPoint = function isValidPoint() {
  var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var strictNumber = function strictNumber(number) {
    return both(is(Number), complement(equals(NaN)))(number);
  };

  return strictNumber(point.x) && strictNumber(point.y);
};

var MultiCrops = /*#__PURE__*/function (_Component) {
  _inherits(MultiCrops, _Component);

  var _super = _createSuper(MultiCrops);

  function MultiCrops() {
    var _this;

    _classCallCheck(this, MultiCrops);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "drawingIndex", -1);

    _defineProperty(_assertThisInitialized(_this), "pointA", {});

    _defineProperty(_assertThisInitialized(_this), "id", (0, _nanoid.nanoid)());

    _defineProperty(_assertThisInitialized(_this), "renderCrops", function (props) {
      var indexedMap = addIndex(map);
      return indexedMap(function (coor, index) {
        return /*#__PURE__*/_react["default"].createElement(_crop["default"], _extends({
          key: coor.id || index,
          index: index,
          coordinate: coor
        }, props));
      })(props.coordinates);
    });

    _defineProperty(_assertThisInitialized(_this), "getCursorPosition", function (e) {
      var _this$container$getBo = _this.container.getBoundingClientRect(),
          left = _this$container$getBo.left,
          top = _this$container$getBo.top;

      return {
        x: e.clientX - left,
        y: e.clientY - top
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      var coorindates = _this.props.coorindates;

      if (e.target === _this.img || e.target === _this.container) {
        var _this$getCursorPositi = _this.getCursorPosition(e),
            x = _this$getCursorPositi.x,
            y = _this$getCursorPositi.y;

        _this.drawingIndex = coordinates.length;
        _this.pointA = {
          x: x,
          y: y
        };
        _this.id = (0, _nanoid.nanoid)();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      var _this$props = _this.props,
          onDraw = _this$props.onDraw,
          onChange = _this$props.onChange,
          coordinates = _this$props.coordinates;

      var _assertThisInitialize = _assertThisInitialized(_this),
          pointA = _assertThisInitialize.pointA;

      if (isValidPoint(pointA)) {
        var pointB = _this.getCursorPosition(e); // get the drawing coordinate


        var coordinate = {
          x: Math.min(pointA.x, pointB.x),
          y: Math.min(pointA.y, pointB.y),
          width: Math.abs(pointA.x - pointB.x),
          height: Math.abs(pointA.y - pointB.y),
          id: _this.id
        };
        var nextCoordinates = clone(coordinates);
        nextCoordinates[_this.drawingIndex] = coordinate;

        if (is(Function, onDraw)) {
          onDraw(coordinate, _this.drawingIndex, nextCoordinates);
        }

        if (is(Function, onChange)) {
          onChange(coordinate, _this.drawingIndex, nextCoordinates);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlMouseUp", function () {
      _this.pointA = {};
    });

    return _this;
  }

  _createClass(MultiCrops, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          src = _this$props2.src,
          height = _this$props2.height,
          width = _this$props2.width,
          onLoad = _this$props2.onLoad;
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'inline-block',
          position: 'relative'
        },
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handlMouseUp,
        ref: function ref(container) {
          return _this2.container = container;
        }
      }, /*#__PURE__*/_react["default"].createElement("img", {
        ref: function ref(img) {
          return _this2.img = img;
        },
        src: src,
        width: width,
        height: height,
        onLoad: onLoad,
        alt: "",
        draggable: false
      }), this.renderCrops(this.props));
    }
  }]);

  return MultiCrops;
}(_react.Component);

var string = _propTypes["default"].string,
    arrayOf = _propTypes["default"].arrayOf,
    number = _propTypes["default"].number,
    func = _propTypes["default"].func;
MultiCrops.propTypes = {
  coordinates: arrayOf(coordinateType),
  src: string,
  width: number,
  // eslint-disable-line
  height: number,
  // eslint-disable-line
  onDraw: func,
  // eslint-disable-line
  onChange: func,
  // eslint-disable-line
  onLoad: func // eslint-disable-line

};
MultiCrops.defaultProps = {
  coordinates: [],
  src: ''
};
var _default = MultiCrops;
exports["default"] = _default;