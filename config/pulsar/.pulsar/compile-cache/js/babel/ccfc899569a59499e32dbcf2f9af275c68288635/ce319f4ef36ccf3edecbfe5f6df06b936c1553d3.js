'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _locations = require("../locations");
var _selectors = require("../../config/selectors");
/**
 * This function will tranform the mixin `starts` into the proper styles for the
 * tree-view, tabs, and fuzzy finder.
 *
 * @param {string[]} color - Array of color codes, hex or rgba format.
 *
 * @returns {object} Contains all selectors for all icons specified.
 */
const starts = color => (rule, key) => ({
  ..._selectors.starts[key].match.reduce((prev, match) => ({
    ...prev,
    [`.name.icon[data-name^="${match}"]`]: {
      '&.icon-file-text,&.icon-file-media,&.icon-book': {
        '&:before': (0, _locations.tree)(color, key)
      }
    },
    [`tabs-bar tabs-tab .title[data-name^="${match}"],
        .tab-bar .tab .title[data-name^="${match}"]
        `]: {
      '&:before': (0, _locations.tab)(color, key)
    },
    [`.fuzzy-finder .icon[data-name^="${match}"]`]: {
      '&:before': (0, _locations.finder)(color, key)
    }
  }), {})
});
var _default = starts;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzdGFydHMiLCJjb2xvciIsInJ1bGUiLCJrZXkiLCJtYXBwaW5ncyIsIm1hdGNoIiwicmVkdWNlIiwicHJldiIsInRyZWUiLCJ0YWIiLCJmaW5kZXIiXSwic291cmNlcyI6WyJzdGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IHsgZmluZGVyLCB0YWIsIHRyZWUgfSBmcm9tICcuLi9sb2NhdGlvbnMnXG5pbXBvcnQgeyBzdGFydHMgYXMgbWFwcGluZ3MgfSBmcm9tICcuLi8uLi9jb25maWcvc2VsZWN0b3JzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gd2lsbCB0cmFuZm9ybSB0aGUgbWl4aW4gYHN0YXJ0c2AgaW50byB0aGUgcHJvcGVyIHN0eWxlcyBmb3IgdGhlXG4gKiB0cmVlLXZpZXcsIHRhYnMsIGFuZCBmdXp6eSBmaW5kZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gY29sb3IgLSBBcnJheSBvZiBjb2xvciBjb2RlcywgaGV4IG9yIHJnYmEgZm9ybWF0LlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IENvbnRhaW5zIGFsbCBzZWxlY3RvcnMgZm9yIGFsbCBpY29ucyBzcGVjaWZpZWQuXG4gKi9cbmNvbnN0IHN0YXJ0cyA9IGNvbG9yID0+ICggcnVsZSwga2V5ICkgPT4gKHtcbiAgLi4ubWFwcGluZ3Nba2V5XS5tYXRjaC5yZWR1Y2UoXG4gICAgKCBwcmV2LCBtYXRjaCApID0+ICh7XG4gICAgICAuLi5wcmV2LFxuICAgICAgW2AubmFtZS5pY29uW2RhdGEtbmFtZV49XCIke21hdGNofVwiXWBdOiB7XG4gICAgICAgICcmLmljb24tZmlsZS10ZXh0LCYuaWNvbi1maWxlLW1lZGlhLCYuaWNvbi1ib29rJzoge1xuICAgICAgICAgICcmOmJlZm9yZSc6IHRyZWUoY29sb3IsIGtleSksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBgdGFicy1iYXIgdGFicy10YWIgLnRpdGxlW2RhdGEtbmFtZV49XCIke21hdGNofVwiXSxcbiAgICAgICAgLnRhYi1iYXIgLnRhYiAudGl0bGVbZGF0YS1uYW1lXj1cIiR7bWF0Y2h9XCJdXG4gICAgICAgIGBcbiAgICAgIF06IHtcbiAgICAgICAgJyY6YmVmb3JlJzogdGFiKGNvbG9yLCBrZXkpLFxuICAgICAgfSxcbiAgICAgIFtgLmZ1enp5LWZpbmRlciAuaWNvbltkYXRhLW5hbWVePVwiJHttYXRjaH1cIl1gXToge1xuICAgICAgICAnJjpiZWZvcmUnOiBmaW5kZXIoY29sb3IsIGtleSksXG4gICAgICB9LFxuICAgIH0pLFxuICB7fSksXG59KVxuXG5leHBvcnQgZGVmYXVsdCBzdGFydHNcbiJdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFBQTtFQUFBO0FBQUE7QUFBQTtBQUVYO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHQyxLQUFLLElBQUksQ0FBRUMsSUFBSSxFQUFFQyxHQUFHLE1BQU87RUFDeEMsR0FBR0MsaUJBQVEsQ0FBQ0QsR0FBRyxDQUFDLENBQUNFLEtBQUssQ0FBQ0MsTUFBTSxDQUMzQixDQUFFQyxJQUFJLEVBQUVGLEtBQUssTUFBTztJQUNsQixHQUFHRSxJQUFJO0lBQ1AsQ0FBRSwwQkFBeUJGLEtBQU0sSUFBRyxHQUFHO01BQ3JDLGdEQUFnRCxFQUFFO1FBQ2hELFVBQVUsRUFBRSxJQUFBRyxlQUFJLEVBQUNQLEtBQUssRUFBRUUsR0FBRztNQUM3QjtJQUNGLENBQUM7SUFDRCxDQUNHLHdDQUF1Q0UsS0FBTTtBQUN0RCwyQ0FBMkNBLEtBQU07QUFDakQsU0FBUyxHQUNBO01BQ0QsVUFBVSxFQUFFLElBQUFJLGNBQUcsRUFBQ1IsS0FBSyxFQUFFRSxHQUFHO0lBQzVCLENBQUM7SUFDRCxDQUFFLG1DQUFrQ0UsS0FBTSxJQUFHLEdBQUc7TUFDOUMsVUFBVSxFQUFFLElBQUFLLGlCQUFNLEVBQUNULEtBQUssRUFBRUUsR0FBRztJQUMvQjtFQUNGLENBQUMsQ0FBQyxFQUNKLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUFBLGVBRWFILE1BQU07QUFBQTtBQUFBIn0=