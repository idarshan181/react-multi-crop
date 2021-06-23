"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeid = exports.addid = void 0;

var _nanoid = require("nanoid");

var _ramda = require("ramda");

var addid = (0, _ramda.map)((0, _ramda.assoc)('id', (0, _nanoid.nanoid)()));
exports.addid = addid;
var removeid = (0, _ramda.map)((0, _ramda.omit)(['id']));
exports.removeid = removeid;