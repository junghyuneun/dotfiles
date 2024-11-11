'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = exports.default = void 0;
var _selectors = require("./selectors");
var _make = _interopRequireDefault(require("./make"));
var _lodash = _interopRequireDefault(require("lodash.mapvalues"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Object that contains the type property to each icon to be used when building
 * the dynamic settings in Atom.
 */
const types = {
  ...(0, _lodash.default)(_selectors.ends, item => ({
    ...item,
    type: 'ends'
  })),
  ...(0, _lodash.default)(_selectors.is, item => ({
    ...item,
    type: 'is'
  })),
  ...(0, _lodash.default)(_selectors.path, item => ({
    ...item,
    type: 'path'
  })),
  ...(0, _lodash.default)(_selectors.starts, item => ({
    ...item,
    type: 'starts'
  }))
};
exports.types = types;
var _default = (0, _make.default)(types);
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0eXBlcyIsIm1hcFZhbHVlcyIsImVuZHMiLCJpdGVtIiwidHlwZSIsImlzIiwicGF0aCIsInN0YXJ0cyIsIm1ha2UiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgeyBlbmRzLCBpcywgcGF0aCwgc3RhcnRzIH0gZnJvbSAnLi9zZWxlY3RvcnMnXG5pbXBvcnQgbWFrZSBmcm9tICcuL21ha2UnXG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC5tYXB2YWx1ZXMnXG5cbi8qKlxuICogT2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHR5cGUgcHJvcGVydHkgdG8gZWFjaCBpY29uIHRvIGJlIHVzZWQgd2hlbiBidWlsZGluZ1xuICogdGhlIGR5bmFtaWMgc2V0dGluZ3MgaW4gQXRvbS5cbiAqL1xuZXhwb3J0IGNvbnN0IHR5cGVzID0ge1xuICAuLi5tYXBWYWx1ZXMoZW5kcywgaXRlbSA9PiAoeyAuLi5pdGVtLCB0eXBlOiAnZW5kcycgfSkpLFxuICAuLi5tYXBWYWx1ZXMoaXMsIGl0ZW0gPT4gKHsgLi4uaXRlbSwgdHlwZTogJ2lzJyB9KSksXG4gIC4uLm1hcFZhbHVlcyhwYXRoLCBpdGVtID0+ICh7IC4uLml0ZW0sIHR5cGU6ICdwYXRoJyB9KSksXG4gIC4uLm1hcFZhbHVlcyhzdGFydHMsIGl0ZW0gPT4gKHsgLi4uaXRlbSwgdHlwZTogJ3N0YXJ0cycgfSkpLFxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlKHR5cGVzKVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFDQTtBQUNBO0FBQXdDO0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTUEsS0FBSyxHQUFHO0VBQ25CLEdBQUcsSUFBQUMsZUFBUyxFQUFDQyxlQUFJLEVBQUVDLElBQUksS0FBSztJQUFFLEdBQUdBLElBQUk7SUFBRUMsSUFBSSxFQUFFO0VBQU8sQ0FBQyxDQUFDLENBQUM7RUFDdkQsR0FBRyxJQUFBSCxlQUFTLEVBQUNJLGFBQUUsRUFBRUYsSUFBSSxLQUFLO0lBQUUsR0FBR0EsSUFBSTtJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLENBQUMsQ0FBQztFQUNuRCxHQUFHLElBQUFILGVBQVMsRUFBQ0ssZUFBSSxFQUFFSCxJQUFJLEtBQUs7SUFBRSxHQUFHQSxJQUFJO0lBQUVDLElBQUksRUFBRTtFQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ3ZELEdBQUcsSUFBQUgsZUFBUyxFQUFDTSxpQkFBTSxFQUFFSixJQUFJLEtBQUs7SUFBRSxHQUFHQSxJQUFJO0lBQUVDLElBQUksRUFBRTtFQUFTLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBQUE7QUFBQSxlQUVjLElBQUFJLGFBQUksRUFBQ1IsS0FBSyxDQUFDO0FBQUEifQ==