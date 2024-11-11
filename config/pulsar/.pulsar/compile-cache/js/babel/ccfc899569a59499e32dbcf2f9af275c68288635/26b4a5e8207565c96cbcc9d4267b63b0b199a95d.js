'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _locations = require("../locations");
var _selectors = require("../../config/selectors");
/**
 * This function will tranform the mixin `is` into the proper styles for the
 * tree-view, tabs, and fuzzy finder.
 *
 * @param {string[]} color - Array of color codes, hex or rgba format.
 *
 * @returns {object} Contains all selectors for all icons specified.
 */
const is = color => (rule, key) => ({
  ..._selectors.is[key].match.reduce((prev, match) => ({
    ...prev,
    [`.name.icon[data-name="${match}"]`]: {
      '&.icon-file-text,&.icon-file-media,&.icon-book': {
        '&:before': (0, _locations.tree)(color, key)
      }
    },
    [`tabs-bar tabs-tab .title[data-name="${match}"],
        .tab-bar .tab .title[data-name="${match}"]
        `]: {
      '&:before': (0, _locations.tab)(color, key)
    },
    [`.fuzzy-finder .icon[data-name="${match}"]`]: {
      '&:before': (0, _locations.finder)(color, key)
    }
  }), {})
});
var _default = is;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJpcyIsImNvbG9yIiwicnVsZSIsImtleSIsIm1hcHBpbmdzIiwibWF0Y2giLCJyZWR1Y2UiLCJwcmV2IiwidHJlZSIsInRhYiIsImZpbmRlciJdLCJzb3VyY2VzIjpbImlzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmltcG9ydCB7IGZpbmRlciwgdGFiLCB0cmVlIH0gZnJvbSAnLi4vbG9jYXRpb25zJ1xuaW1wb3J0IHsgaXMgYXMgbWFwcGluZ3MgfSBmcm9tICcuLi8uLi9jb25maWcvc2VsZWN0b3JzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0cmFuZm9ybSB0aGUgbWl4aW4gYGlzYCBpbnRvIHRoZSBwcm9wZXIgc3R5bGVzIGZvciB0aGVcbiAqIHRyZWUtdmlldywgdGFicywgYW5kIGZ1enp5IGZpbmRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjb2xvciAtIEFycmF5IG9mIGNvbG9yIGNvZGVzLCBoZXggb3IgcmdiYSBmb3JtYXQuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gQ29udGFpbnMgYWxsIHNlbGVjdG9ycyBmb3IgYWxsIGljb25zIHNwZWNpZmllZC5cbiAqL1xuY29uc3QgaXMgPSBjb2xvciA9PiAoIHJ1bGUsIGtleSApID0+ICh7XG4gIC4uLm1hcHBpbmdzW2tleV0ubWF0Y2gucmVkdWNlKFxuICAgICggcHJldiwgbWF0Y2ggKSA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIFtgLm5hbWUuaWNvbltkYXRhLW5hbWU9XCIke21hdGNofVwiXWBdOiB7XG4gICAgICAgICcmLmljb24tZmlsZS10ZXh0LCYuaWNvbi1maWxlLW1lZGlhLCYuaWNvbi1ib29rJzoge1xuICAgICAgICAgICcmOmJlZm9yZSc6IHRyZWUoY29sb3IsIGtleSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBgdGFicy1iYXIgdGFicy10YWIgLnRpdGxlW2RhdGEtbmFtZT1cIiR7bWF0Y2h9XCJdLFxuICAgICAgICAudGFiLWJhciAudGFiIC50aXRsZVtkYXRhLW5hbWU9XCIke21hdGNofVwiXVxuICAgICAgICBgXG4gICAgICBdOiB7XG4gICAgICAgICcmOmJlZm9yZSc6IHRhYihjb2xvciwga2V5KSxcbiAgICAgIH0sXG4gICAgICBbYC5mdXp6eS1maW5kZXIgLmljb25bZGF0YS1uYW1lPVwiJHttYXRjaH1cIl1gXToge1xuICAgICAgICAnJjpiZWZvcmUnOiBmaW5kZXIoY29sb3IsIGtleSksXG4gICAgICB9LFxuICAgIH0pLFxuICB7fSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBpc1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxFQUFFLEdBQUdDLEtBQUssSUFBSSxDQUFFQyxJQUFJLEVBQUVDLEdBQUcsTUFBTztFQUNwQyxHQUFHQyxhQUFRLENBQUNELEdBQUcsQ0FBQyxDQUFDRSxLQUFLLENBQUNDLE1BQU0sQ0FDM0IsQ0FBRUMsSUFBSSxFQUFFRixLQUFLLE1BQU87SUFDbEIsR0FBR0UsSUFBSTtJQUNQLENBQUUseUJBQXdCRixLQUFNLElBQUcsR0FBRztNQUNwQyxnREFBZ0QsRUFBRTtRQUNoRCxVQUFVLEVBQUUsSUFBQUcsZUFBSSxFQUFDUCxLQUFLLEVBQUVFLEdBQUc7TUFDN0I7SUFDRixDQUFDO0lBQ0QsQ0FDRyx1Q0FBc0NFLEtBQU07QUFDckQsMENBQTBDQSxLQUFNO0FBQ2hELFNBQVMsR0FDQTtNQUNELFVBQVUsRUFBRSxJQUFBSSxjQUFHLEVBQUNSLEtBQUssRUFBRUUsR0FBRztJQUM1QixDQUFDO0lBQ0QsQ0FBRSxrQ0FBaUNFLEtBQU0sSUFBRyxHQUFHO01BQzdDLFVBQVUsRUFBRSxJQUFBSyxpQkFBTSxFQUFDVCxLQUFLLEVBQUVFLEdBQUc7SUFDL0I7RUFDRixDQUFDLENBQUMsRUFDSixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFBQSxlQUVhSCxFQUFFO0FBQUE7QUFBQSJ9