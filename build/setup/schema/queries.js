"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _graphql = require("graphql");

var user = _interopRequireWildcard(require("../../modules/user/query"));

var product = _interopRequireWildcard(require("../../modules/product/query"));

var crate = _interopRequireWildcard(require("../../modules/crate/query"));

var subscription = _interopRequireWildcard(require("../../modules/subscription/query"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Query
var query = new _graphql.GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',
  fields: function fields() {
    return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, user), product), crate), subscription);
  }
});
var _default = query;
exports["default"] = _default;
//# sourceMappingURL=queries.js.map