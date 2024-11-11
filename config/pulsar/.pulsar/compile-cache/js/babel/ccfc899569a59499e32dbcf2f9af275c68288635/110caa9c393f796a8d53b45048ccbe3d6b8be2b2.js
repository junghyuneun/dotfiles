'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _locations = require("../locations");
var _selectors = require("../../config/selectors");
/**
 * This function will tranform the mixin `ends` into the proper styles for the
 * tree-view, tabs, and fuzzy finder.
 *
 * @param {string[]} color - Array of color codes, hex or rgba format.
 *
 * @returns {object} Contains all selectors for all icons specified.
 */
const ends = color => (rule, key) => ({
  ..._selectors.ends[key].match.reduce((prev, match) => ({
    ...prev,
    [`.name.icon[data-name$="${match}"]`]: {
      '&.icon-file-text,&.icon-file-media,&.icon-book': {
        '&:before': (0, _locations.tree)(color, key)
      }
    },
    [`tabs-bar tabs-tab .title[data-name$="${match}"],
        .tab-bar .tab .title[data-name$="${match}"]
        `]: {
      '&:before': (0, _locations.tab)(color, key)
    },
    [`.fuzzy-finder .icon[data-name$="${match}"]`]: {
      '&:before': (0, _locations.finder)(color, key)
    }
  }), {})
});
var _default = ends;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlbmRzIiwiY29sb3IiLCJydWxlIiwia2V5IiwibWFwcGluZ3MiLCJtYXRjaCIsInJlZHVjZSIsInByZXYiLCJ0cmVlIiwidGFiIiwiZmluZGVyIl0sInNvdXJjZXMiOlsiZW5kcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgeyBmaW5kZXIsIHRhYiwgdHJlZSB9IGZyb20gJy4uL2xvY2F0aW9ucydcbmltcG9ydCB7IGVuZHMgYXMgbWFwcGluZ3MgfSBmcm9tICcuLi8uLi9jb25maWcvc2VsZWN0b3JzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0cmFuZm9ybSB0aGUgbWl4aW4gYGVuZHNgIGludG8gdGhlIHByb3BlciBzdHlsZXMgZm9yIHRoZVxuICogdHJlZS12aWV3LCB0YWJzLCBhbmQgZnV6enkgZmluZGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbG9yIC0gQXJyYXkgb2YgY29sb3IgY29kZXMsIGhleCBvciByZ2JhIGZvcm1hdC5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBDb250YWlucyBhbGwgc2VsZWN0b3JzIGZvciBhbGwgaWNvbnMgc3BlY2lmaWVkLlxuICovXG5jb25zdCBlbmRzID0gY29sb3IgPT4gKCBydWxlLCBrZXkgKSA9PiAoe1xuICAuLi5tYXBwaW5nc1trZXldLm1hdGNoLnJlZHVjZShcbiAgICAoIHByZXYsIG1hdGNoICkgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbYC5uYW1lLmljb25bZGF0YS1uYW1lJD1cIiR7bWF0Y2h9XCJdYF06IHtcbiAgICAgICAgJyYuaWNvbi1maWxlLXRleHQsJi5pY29uLWZpbGUtbWVkaWEsJi5pY29uLWJvb2snOiB7XG4gICAgICAgICAgJyY6YmVmb3JlJzogdHJlZShjb2xvciwga2V5KSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIGB0YWJzLWJhciB0YWJzLXRhYiAudGl0bGVbZGF0YS1uYW1lJD1cIiR7bWF0Y2h9XCJdLFxuICAgICAgICAudGFiLWJhciAudGFiIC50aXRsZVtkYXRhLW5hbWUkPVwiJHttYXRjaH1cIl1cbiAgICAgICAgYFxuICAgICAgXToge1xuICAgICAgICAnJjpiZWZvcmUnOiB0YWIoY29sb3IsIGtleSksXG4gICAgICB9LFxuICAgICAgW2AuZnV6enktZmluZGVyIC5pY29uW2RhdGEtbmFtZSQ9XCIke21hdGNofVwiXWBdOiB7XG4gICAgICAgICcmOmJlZm9yZSc6IGZpbmRlcihjb2xvciwga2V5KSxcbiAgICAgIH0sXG4gICAgfSksXG4gIHt9KSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGVuZHNcbiJdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFBQTtFQUFBO0FBQUE7QUFBQTtBQUVYO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsSUFBSSxHQUFHQyxLQUFLLElBQUksQ0FBRUMsSUFBSSxFQUFFQyxHQUFHLE1BQU87RUFDdEMsR0FBR0MsZUFBUSxDQUFDRCxHQUFHLENBQUMsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQzNCLENBQUVDLElBQUksRUFBRUYsS0FBSyxNQUFPO0lBQ2xCLEdBQUdFLElBQUk7SUFDUCxDQUFFLDBCQUF5QkYsS0FBTSxJQUFHLEdBQUc7TUFDckMsZ0RBQWdELEVBQUU7UUFDaEQsVUFBVSxFQUFFLElBQUFHLGVBQUksRUFBQ1AsS0FBSyxFQUFFRSxHQUFHO01BQzdCO0lBQ0YsQ0FBQztJQUNELENBQ0csd0NBQXVDRSxLQUFNO0FBQ3RELDJDQUEyQ0EsS0FBTTtBQUNqRCxTQUFTLEdBQ0E7TUFDRCxVQUFVLEVBQUUsSUFBQUksY0FBRyxFQUFDUixLQUFLLEVBQUVFLEdBQUc7SUFDNUIsQ0FBQztJQUNELENBQUUsbUNBQWtDRSxLQUFNLElBQUcsR0FBRztNQUM5QyxVQUFVLEVBQUUsSUFBQUssaUJBQU0sRUFBQ1QsS0FBSyxFQUFFRSxHQUFHO0lBQy9CO0VBQ0YsQ0FBQyxDQUFDLEVBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBQUEsZUFFYUgsSUFBSTtBQUFBO0FBQUEifQ==