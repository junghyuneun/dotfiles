'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helpers = require("./helpers");
var _overrides = require("../overrides");
/**
 * This function constructs the styles used by the tree-view module. It
 * optionally will apply muted, git status, and overlay styles if the settings
 * are enabled.
 *
 * @param {array[]} colors - Array of colors from the theme.
 *
 * @param {string} key - Icon key to look up icon config.
 *
 * @returns {object} Styles configuration for the specific icon.
 */
const tree = ([added, ignored, modified, text], key) => {
  const {
    muted,
    status
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
    float: 'left',
    margin: '4px 8px 0 0',
    background: url,
    backgroundSize: 'contain',
    ..._overrides.tree[icon]
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
  if (status) {
    styles = {
      ...styles,
      '.file.status-added &,.file.status-modified &,.file.status-ignored &': {
        WebkitMask: url,
        WebkitMaskSize: 'contain'
      },
      '.file.status-added &': (0, _helpers.applyColor)(added, url),
      '.file.status-ignored &': (0, _helpers.applyColor)(ignored, url),
      '.file.status-modified &': (0, _helpers.applyColor)(modified, url)
    };
  }
  return styles;
};
var _default = tree;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0cmVlIiwiYWRkZWQiLCJpZ25vcmVkIiwibW9kaWZpZWQiLCJ0ZXh0Iiwia2V5IiwibXV0ZWQiLCJzdGF0dXMiLCJhdG9tIiwiY29uZmlnIiwiZ2V0IiwibnMiLCJkaXNhYmxlZCIsImljb24iLCJvdmVybGF5IiwidXJsIiwic3R5bGVzIiwiY29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZmxvYXQiLCJtYXJnaW4iLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJvdmVycmlkZXMiLCJlbmFibGVkIiwiV2Via2l0TWFzayIsIldlYmtpdE1hc2tTaXplIiwiYXBwbHlDb2xvciIsImNvbG9yIiwidG9SR0JBU3RyaW5nIl0sInNvdXJjZXMiOlsidHJlZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG5pbXBvcnQgeyBhcHBseUNvbG9yLCBucyB9IGZyb20gJy4vaGVscGVycydcbmltcG9ydCB7IHRyZWUgYXMgb3ZlcnJpZGVzIH0gZnJvbSAnLi4vb3ZlcnJpZGVzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29uc3RydWN0cyB0aGUgc3R5bGVzIHVzZWQgYnkgdGhlIHRyZWUtdmlldyBtb2R1bGUuIEl0XG4gKiBvcHRpb25hbGx5IHdpbGwgYXBwbHkgbXV0ZWQsIGdpdCBzdGF0dXMsIGFuZCBvdmVybGF5IHN0eWxlcyBpZiB0aGUgc2V0dGluZ3NcbiAqIGFyZSBlbmFibGVkLlxuICpcbiAqIEBwYXJhbSB7YXJyYXlbXX0gY29sb3JzIC0gQXJyYXkgb2YgY29sb3JzIGZyb20gdGhlIHRoZW1lLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBJY29uIGtleSB0byBsb29rIHVwIGljb24gY29uZmlnLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFN0eWxlcyBjb25maWd1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWMgaWNvbi5cbiAqL1xuY29uc3QgdHJlZSA9ICggWyBhZGRlZCwgaWdub3JlZCwgbW9kaWZpZWQsIHRleHQgXSwga2V5ICkgPT4ge1xuICBjb25zdCB7IG11dGVkLCBzdGF0dXMgfSA9IGF0b20uY29uZmlnLmdldChgJHtuc30uZ2xvYmFsYClcbiAgY29uc3QgeyBkaXNhYmxlZCwgaWNvbiwgb3ZlcmxheSB9ID0gYXRvbS5jb25maWcuZ2V0KGAke25zfS5pY29ucy4ke2tleX1gKVxuICBjb25zdCB1cmwgPSBgdXJsKCdhdG9tOi8vZmxleGljb25zL2xpYi9pY29ucy8ke2ljb259LnBuZycpIDAgMCBuby1yZXBlYXRgXG5cbiAgaWYgKCBkaXNhYmxlZCApIHtcbiAgICByZXR1cm4ge31cbiAgfVxuXG4gIGxldCBzdHlsZXMgPSB7XG4gICAgY29udGVudDogJ1wiXCIgIWltcG9ydGFudCcsXG4gICAgd2lkdGg6IDE0LFxuICAgIGhlaWdodDogMTQsXG4gICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICBtYXJnaW46ICc0cHggOHB4IDAgMCcsXG4gICAgYmFja2dyb3VuZDogdXJsLFxuICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgLi4ub3ZlcnJpZGVzW2ljb25dLFxuICB9XG5cbiAgaWYgKCBtdXRlZCB8fCBvdmVybGF5LmVuYWJsZWQgKSB7XG4gICAgc3R5bGVzID0ge1xuICAgICAgLi4uc3R5bGVzLFxuICAgICAgV2Via2l0TWFzazogdXJsLFxuICAgICAgV2Via2l0TWFza1NpemU6ICdjb250YWluJyxcbiAgICB9XG4gIH1cblxuICBpZiAoIG92ZXJsYXkuZW5hYmxlZCApIHtcbiAgICBzdHlsZXMgPSB7XG4gICAgICAuLi5zdHlsZXMsXG4gICAgICAuLi5hcHBseUNvbG9yKG92ZXJsYXkuY29sb3IudG9SR0JBU3RyaW5nKCksIHVybCksXG4gICAgfVxuICB9XG5cbiAgaWYgKCBtdXRlZCApIHtcbiAgICBzdHlsZXMgPSB7XG4gICAgICAuLi5zdHlsZXMsXG4gICAgICAuLi5hcHBseUNvbG9yKHRleHQsIHVybCksXG4gICAgfVxuICB9XG5cbiAgaWYgKCBzdGF0dXMgKSB7XG4gICAgc3R5bGVzID0ge1xuICAgICAgLi4uc3R5bGVzLFxuICAgICAgJy5maWxlLnN0YXR1cy1hZGRlZCAmLC5maWxlLnN0YXR1cy1tb2RpZmllZCAmLC5maWxlLnN0YXR1cy1pZ25vcmVkICYnOiB7XG4gICAgICAgIFdlYmtpdE1hc2s6IHVybCxcbiAgICAgICAgV2Via2l0TWFza1NpemU6ICdjb250YWluJyxcbiAgICAgIH0sXG4gICAgICAnLmZpbGUuc3RhdHVzLWFkZGVkICYnOiBhcHBseUNvbG9yKGFkZGVkLCB1cmwpLFxuICAgICAgJy5maWxlLnN0YXR1cy1pZ25vcmVkICYnOiBhcHBseUNvbG9yKGlnbm9yZWQsIHVybCksXG4gICAgICAnLmZpbGUuc3RhdHVzLW1vZGlmaWVkICYnOiBhcHBseUNvbG9yKG1vZGlmaWVkLCB1cmwpLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJlZVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxJQUFJLEdBQUcsQ0FBRSxDQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFFQyxJQUFJLENBQUUsRUFBRUMsR0FBRyxLQUFNO0VBQzFELE1BQU07SUFBRUMsS0FBSztJQUFFQztFQUFPLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxHQUFFQyxXQUFHLFNBQVEsQ0FBQztFQUN6RCxNQUFNO0lBQUVDLFFBQVE7SUFBRUMsSUFBSTtJQUFFQztFQUFRLENBQUMsR0FBR04sSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxHQUFFQyxXQUFHLFVBQVNOLEdBQUksRUFBQyxDQUFDO0VBQ3pFLE1BQU1VLEdBQUcsR0FBSSxtQ0FBa0NGLElBQUssc0JBQXFCO0VBRXpFLElBQUtELFFBQVEsRUFBRztJQUNkLE9BQU8sQ0FBQyxDQUFDO0VBQ1g7RUFFQSxJQUFJSSxNQUFNLEdBQUc7SUFDWEMsT0FBTyxFQUFFLGVBQWU7SUFDeEJDLEtBQUssRUFBRSxFQUFFO0lBQ1RDLE1BQU0sRUFBRSxFQUFFO0lBQ1ZDLEtBQUssRUFBRSxNQUFNO0lBQ2JDLE1BQU0sRUFBRSxhQUFhO0lBQ3JCQyxVQUFVLEVBQUVQLEdBQUc7SUFDZlEsY0FBYyxFQUFFLFNBQVM7SUFDekIsR0FBR0MsZUFBUyxDQUFDWCxJQUFJO0VBQ25CLENBQUM7RUFFRCxJQUFLUCxLQUFLLElBQUlRLE9BQU8sQ0FBQ1csT0FBTyxFQUFHO0lBQzlCVCxNQUFNLEdBQUc7TUFDUCxHQUFHQSxNQUFNO01BQ1RVLFVBQVUsRUFBRVgsR0FBRztNQUNmWSxjQUFjLEVBQUU7SUFDbEIsQ0FBQztFQUNIO0VBRUEsSUFBS2IsT0FBTyxDQUFDVyxPQUFPLEVBQUc7SUFDckJULE1BQU0sR0FBRztNQUNQLEdBQUdBLE1BQU07TUFDVCxHQUFHLElBQUFZLG1CQUFVLEVBQUNkLE9BQU8sQ0FBQ2UsS0FBSyxDQUFDQyxZQUFZLEVBQUUsRUFBRWYsR0FBRztJQUNqRCxDQUFDO0VBQ0g7RUFFQSxJQUFLVCxLQUFLLEVBQUc7SUFDWFUsTUFBTSxHQUFHO01BQ1AsR0FBR0EsTUFBTTtNQUNULEdBQUcsSUFBQVksbUJBQVUsRUFBQ3hCLElBQUksRUFBRVcsR0FBRztJQUN6QixDQUFDO0VBQ0g7RUFFQSxJQUFLUixNQUFNLEVBQUc7SUFDWlMsTUFBTSxHQUFHO01BQ1AsR0FBR0EsTUFBTTtNQUNULHFFQUFxRSxFQUFFO1FBQ3JFVSxVQUFVLEVBQUVYLEdBQUc7UUFDZlksY0FBYyxFQUFFO01BQ2xCLENBQUM7TUFDRCxzQkFBc0IsRUFBRSxJQUFBQyxtQkFBVSxFQUFDM0IsS0FBSyxFQUFFYyxHQUFHLENBQUM7TUFDOUMsd0JBQXdCLEVBQUUsSUFBQWEsbUJBQVUsRUFBQzFCLE9BQU8sRUFBRWEsR0FBRyxDQUFDO01BQ2xELHlCQUF5QixFQUFFLElBQUFhLG1CQUFVLEVBQUN6QixRQUFRLEVBQUVZLEdBQUc7SUFDckQsQ0FBQztFQUNIO0VBRUEsT0FBT0MsTUFBTTtBQUNmLENBQUM7QUFBQSxlQUVjaEIsSUFBSTtBQUFBO0FBQUEifQ==