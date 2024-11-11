'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash.mapvalues"));
var _selectors = _interopRequireDefault(require("./selectors"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This function will map all the mixin selectors defined and build all the
 * mixin functions to be used for PostCSS mixin plugin.
 *
 * @param {string[]} colors - Array of color codes, hex or rgba format.
 *
 * @returns {object} Contains all selectors for all icons specified under the
 * `mixin` property.
 */
const makeMixinsConfig = colors => ({
  mixins: {
    ...(0, _lodash.default)(_selectors.default, selector => selector(colors))
  }
});
var _default = makeMixinsConfig;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlTWl4aW5zQ29uZmlnIiwiY29sb3JzIiwibWl4aW5zIiwibWFwVmFsdWVzIiwic2VsZWN0b3JzIiwic2VsZWN0b3IiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC5tYXB2YWx1ZXMnXG5pbXBvcnQgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCBtYXAgYWxsIHRoZSBtaXhpbiBzZWxlY3RvcnMgZGVmaW5lZCBhbmQgYnVpbGQgYWxsIHRoZVxuICogbWl4aW4gZnVuY3Rpb25zIHRvIGJlIHVzZWQgZm9yIFBvc3RDU1MgbWl4aW4gcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbG9ycyAtIEFycmF5IG9mIGNvbG9yIGNvZGVzLCBoZXggb3IgcmdiYSBmb3JtYXQuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gQ29udGFpbnMgYWxsIHNlbGVjdG9ycyBmb3IgYWxsIGljb25zIHNwZWNpZmllZCB1bmRlciB0aGVcbiAqIGBtaXhpbmAgcHJvcGVydHkuXG4gKi9cbmNvbnN0IG1ha2VNaXhpbnNDb25maWcgPSBjb2xvcnMgPT4gKHtcbiAgbWl4aW5zOiB7XG4gICAgLi4ubWFwVmFsdWVzKHNlbGVjdG9ycywgc2VsZWN0b3IgPT4gc2VsZWN0b3IoY29sb3JzKSksXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlTWl4aW5zQ29uZmlnXG4iXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBQUE7RUFBQTtBQUFBO0FBQUE7QUFFWDtBQUNBO0FBQW1DO0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLGdCQUFnQixHQUFHQyxNQUFNLEtBQUs7RUFDbENDLE1BQU0sRUFBRTtJQUNOLEdBQUcsSUFBQUMsZUFBUyxFQUFDQyxrQkFBUyxFQUFFQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0osTUFBTSxDQUFDO0VBQ3REO0FBQ0YsQ0FBQyxDQUFDO0FBQUEsZUFFYUQsZ0JBQWdCO0FBQUE7QUFBQSJ9