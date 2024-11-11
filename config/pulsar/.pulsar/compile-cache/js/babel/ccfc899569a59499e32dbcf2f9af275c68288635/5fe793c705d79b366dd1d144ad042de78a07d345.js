'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helpers = require("./helpers");
var _overrides = require("../overrides");
/**
 * This function constructs the styles used by tabs. It optionally will apply
 * muted and overlay styles if the settings are enabled.
 *
 * @param {array[]} colors - Array of colors from the theme. We destructure
 * just the last color for the muted overlay.
 *
 * @param {string} key - Icon key to look up icon config.
 *
 * @returns {object} Styles configuration for the specific icon.
 */
const tab = ([,,, text], key) => {
  const {
    muted
  } = atom.config.get(`${_helpers.ns}.global`);
  const {
    disabled,
    icon,
    overlay
  } = atom.config.get(`${_helpers.ns}.icons.${key}`);
  const url = `url('atom://flexicons/lib/icons/${icon}.png') 0 0 no-repeat`;
  if (disabled) {
    return {};
  }
  let styles = {
    content: '"" !important',
    width: 14,
    height: 14,
    display: 'inline-flex',
    verticalAlign: 'middle',
    marginRight: 6,
    marginTop: -2,
    background: url,
    backgroundSize: 'contain',
    ..._overrides.tab[icon]
  };
  if (muted || overlay.enabled) {
    styles = {
      ...styles,
      WebkitMask: url,
      WebkitMaskSize: 'contain'
    };
  }
  if (overlay.enabled) {
    styles = {
      ...styles,
      ...(0, _helpers.applyColor)(overlay.color.toRGBAString(), url)
    };
  }
  if (muted) {
    styles = {
      ...styles,
      ...(0, _helpers.applyColor)(text, url)
    };
  }
  return styles;
};
var _default = tab;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0YWIiLCJ0ZXh0Iiwia2V5IiwibXV0ZWQiLCJhdG9tIiwiY29uZmlnIiwiZ2V0IiwibnMiLCJkaXNhYmxlZCIsImljb24iLCJvdmVybGF5IiwidXJsIiwic3R5bGVzIiwiY29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5SaWdodCIsIm1hcmdpblRvcCIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kU2l6ZSIsIm92ZXJyaWRlcyIsImVuYWJsZWQiLCJXZWJraXRNYXNrIiwiV2Via2l0TWFza1NpemUiLCJhcHBseUNvbG9yIiwiY29sb3IiLCJ0b1JHQkFTdHJpbmciXSwic291cmNlcyI6WyJ0YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IHsgYXBwbHlDb2xvciwgbnMgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgeyB0YWIgYXMgb3ZlcnJpZGVzIH0gZnJvbSAnLi4vb3ZlcnJpZGVzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29uc3RydWN0cyB0aGUgc3R5bGVzIHVzZWQgYnkgdGFicy4gSXQgb3B0aW9uYWxseSB3aWxsIGFwcGx5XG4gKiBtdXRlZCBhbmQgb3ZlcmxheSBzdHlsZXMgaWYgdGhlIHNldHRpbmdzIGFyZSBlbmFibGVkLlxuICpcbiAqIEBwYXJhbSB7YXJyYXlbXX0gY29sb3JzIC0gQXJyYXkgb2YgY29sb3JzIGZyb20gdGhlIHRoZW1lLiBXZSBkZXN0cnVjdHVyZVxuICoganVzdCB0aGUgbGFzdCBjb2xvciBmb3IgdGhlIG11dGVkIG92ZXJsYXkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIEljb24ga2V5IHRvIGxvb2sgdXAgaWNvbiBjb25maWcuXG4gKlxuICogQHJldHVybnMge29iamVjdH0gU3R5bGVzIGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBzcGVjaWZpYyBpY29uLlxuICovXG5jb25zdCB0YWIgPSAoIFsgLCAsICwgdGV4dCBdLCBrZXkgKSA9PiB7XG4gIGNvbnN0IHsgbXV0ZWQgfSA9IGF0b20uY29uZmlnLmdldChgJHtuc30uZ2xvYmFsYClcbiAgY29uc3QgeyBkaXNhYmxlZCwgaWNvbiwgb3ZlcmxheSB9ID0gYXRvbS5jb25maWcuZ2V0KGAke25zfS5pY29ucy4ke2tleX1gKVxuICBjb25zdCB1cmwgPSBgdXJsKCdhdG9tOi8vZmxleGljb25zL2xpYi9pY29ucy8ke2ljb259LnBuZycpIDAgMCBuby1yZXBlYXRgXG5cbiAgaWYgKCBkaXNhYmxlZCApIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGxldCBzdHlsZXMgPSB7XG4gICAgY29udGVudDogJ1wiXCIgIWltcG9ydGFudCcsXG4gICAgd2lkdGg6IDE0LFxuICAgIGhlaWdodDogMTQsXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBtYXJnaW5SaWdodDogNixcbiAgICBtYXJnaW5Ub3A6IC0yLFxuICAgIGJhY2tncm91bmQ6IHVybCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxuICAgIC4uLm92ZXJyaWRlc1tpY29uXSxcbiAgfVxuXG4gIGlmICggbXV0ZWQgfHwgb3ZlcmxheS5lbmFibGVkICkge1xuICAgIHN0eWxlcyA9IHtcbiAgICAgIC4uLnN0eWxlcyxcbiAgICAgIFdlYmtpdE1hc2s6IHVybCxcbiAgICAgIFdlYmtpdE1hc2tTaXplOiAnY29udGFpbicsXG4gICAgfVxuICB9XG5cbiAgaWYgKCBvdmVybGF5LmVuYWJsZWQgKSB7XG4gICAgc3R5bGVzID0ge1xuICAgICAgLi4uc3R5bGVzLFxuICAgICAgLi4uYXBwbHlDb2xvcihvdmVybGF5LmNvbG9yLnRvUkdCQVN0cmluZygpLCB1cmwpLFxuICAgIH1cbiAgfVxuXG4gIGlmICggbXV0ZWQgKSB7XG4gICAgc3R5bGVzID0ge1xuICAgICAgLi4uc3R5bGVzLFxuICAgICAgLi4uYXBwbHlDb2xvcih0ZXh0LCB1cmwpLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGFiXG4iXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBQUE7RUFBQTtBQUFBO0FBQUE7QUFFWDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLEdBQUcsR0FBRyxDQUFFLEtBQVFDLElBQUksQ0FBRSxFQUFFQyxHQUFHLEtBQU07RUFDckMsTUFBTTtJQUFFQztFQUFNLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxHQUFFQyxXQUFHLFNBQVEsQ0FBQztFQUNqRCxNQUFNO0lBQUVDLFFBQVE7SUFBRUMsSUFBSTtJQUFFQztFQUFRLENBQUMsR0FBR04sSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxHQUFFQyxXQUFHLFVBQVNMLEdBQUksRUFBQyxDQUFDO0VBQ3pFLE1BQU1TLEdBQUcsR0FBSSxtQ0FBa0NGLElBQUssc0JBQXFCO0VBRXpFLElBQUtELFFBQVEsRUFBRztJQUNkLE9BQU8sQ0FBQyxDQUFDO0VBQ1g7RUFFQSxJQUFJSSxNQUFNLEdBQUc7SUFDWEMsT0FBTyxFQUFFLGVBQWU7SUFDeEJDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCQyxhQUFhLEVBQUUsUUFBUTtJQUN2QkMsV0FBVyxFQUFFLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNiQyxVQUFVLEVBQUVULEdBQUc7SUFDZlUsY0FBYyxFQUFFLFNBQVM7SUFDekIsR0FBR0MsY0FBUyxDQUFDYixJQUFJO0VBQ25CLENBQUM7RUFFRCxJQUFLTixLQUFLLElBQUlPLE9BQU8sQ0FBQ2EsT0FBTyxFQUFHO0lBQzlCWCxNQUFNLEdBQUc7TUFDUCxHQUFHQSxNQUFNO01BQ1RZLFVBQVUsRUFBRWIsR0FBRztNQUNmYyxjQUFjLEVBQUU7SUFDbEIsQ0FBQztFQUNIO0VBRUEsSUFBS2YsT0FBTyxDQUFDYSxPQUFPLEVBQUc7SUFDckJYLE1BQU0sR0FBRztNQUNQLEdBQUdBLE1BQU07TUFDVCxHQUFHLElBQUFjLG1CQUFVLEVBQUNoQixPQUFPLENBQUNpQixLQUFLLENBQUNDLFlBQVksRUFBRSxFQUFFakIsR0FBRztJQUNqRCxDQUFDO0VBQ0g7RUFFQSxJQUFLUixLQUFLLEVBQUc7SUFDWFMsTUFBTSxHQUFHO01BQ1AsR0FBR0EsTUFBTTtNQUNULEdBQUcsSUFBQWMsbUJBQVUsRUFBQ3pCLElBQUksRUFBRVUsR0FBRztJQUN6QixDQUFDO0VBQ0g7RUFFQSxPQUFPQyxNQUFNO0FBQ2YsQ0FBQztBQUFBLGVBRWNaLEdBQUc7QUFBQTtBQUFBIn0=