'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _helpers = require("./helpers");
var _overrides = require("../overrides");
/**
 * This function constructs the styles used by the fuzzy finder. It optionally
 * will apply muted and overlay styles if the settings are enabled.
 *
 * @param {array[]} colors - Array of colors from the theme. We destructure
 * just the last color for the muted overlay.
 *
 * @param {string} key - Icon key to look up icon config.
 *
 * @returns {object} Styles configuration for the specific icon.
 */
const finder = ([,,, text], key) => {
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
    marginTop: -2,
    background: url,
    backgroundSize: 'contain',
    ..._overrides.finder[icon]
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
var _default = finder;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmaW5kZXIiLCJ0ZXh0Iiwia2V5IiwibXV0ZWQiLCJhdG9tIiwiY29uZmlnIiwiZ2V0IiwibnMiLCJkaXNhYmxlZCIsImljb24iLCJvdmVybGF5IiwidXJsIiwic3R5bGVzIiwiY29udGVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiLCJvdmVycmlkZXMiLCJlbmFibGVkIiwiV2Via2l0TWFzayIsIldlYmtpdE1hc2tTaXplIiwiYXBwbHlDb2xvciIsImNvbG9yIiwidG9SR0JBU3RyaW5nIl0sInNvdXJjZXMiOlsiZmluZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnXG5cbmltcG9ydCB7IGFwcGx5Q29sb3IsIG5zIH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgZmluZGVyIGFzIG92ZXJyaWRlcyB9IGZyb20gJy4uL292ZXJyaWRlcydcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNvbnN0cnVjdHMgdGhlIHN0eWxlcyB1c2VkIGJ5IHRoZSBmdXp6eSBmaW5kZXIuIEl0IG9wdGlvbmFsbHlcbiAqIHdpbGwgYXBwbHkgbXV0ZWQgYW5kIG92ZXJsYXkgc3R5bGVzIGlmIHRoZSBzZXR0aW5ncyBhcmUgZW5hYmxlZC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5W119IGNvbG9ycyAtIEFycmF5IG9mIGNvbG9ycyBmcm9tIHRoZSB0aGVtZS4gV2UgZGVzdHJ1Y3R1cmVcbiAqIGp1c3QgdGhlIGxhc3QgY29sb3IgZm9yIHRoZSBtdXRlZCBvdmVybGF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBJY29uIGtleSB0byBsb29rIHVwIGljb24gY29uZmlnLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IFN0eWxlcyBjb25maWd1cmF0aW9uIGZvciB0aGUgc3BlY2lmaWMgaWNvbi5cbiAqL1xuY29uc3QgZmluZGVyID0gKCBbICwgLCAsIHRleHQgXSwga2V5ICkgPT4ge1xuICBjb25zdCB7IG11dGVkIH0gPSBhdG9tLmNvbmZpZy5nZXQoYCR7bnN9Lmdsb2JhbGApXG4gIGNvbnN0IHsgZGlzYWJsZWQsIGljb24sIG92ZXJsYXkgfSA9IGF0b20uY29uZmlnLmdldChgJHtuc30uaWNvbnMuJHtrZXl9YClcbiAgY29uc3QgdXJsID0gYHVybCgnYXRvbTovL2ZsZXhpY29ucy9saWIvaWNvbnMvJHtpY29ufS5wbmcnKSAwIDAgbm8tcmVwZWF0YFxuXG4gIGlmICggZGlzYWJsZWQgKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBsZXQgc3R5bGVzID0ge1xuICAgIGNvbnRlbnQ6ICdcIlwiICFpbXBvcnRhbnQnLFxuICAgIHdpZHRoOiAxNCxcbiAgICBoZWlnaHQ6IDE0LFxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgbWFyZ2luVG9wOiAtMixcbiAgICBiYWNrZ3JvdW5kOiB1cmwsXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAuLi5vdmVycmlkZXNbaWNvbl0sXG4gIH1cblxuICBpZiAoIG11dGVkIHx8IG92ZXJsYXkuZW5hYmxlZCApIHtcbiAgICBzdHlsZXMgPSB7XG4gICAgICAuLi5zdHlsZXMsXG4gICAgICBXZWJraXRNYXNrOiB1cmwsXG4gICAgICBXZWJraXRNYXNrU2l6ZTogJ2NvbnRhaW4nLFxuICAgIH1cbiAgfVxuXG4gIGlmICggb3ZlcmxheS5lbmFibGVkICkge1xuICAgIHN0eWxlcyA9IHtcbiAgICAgIC4uLnN0eWxlcyxcbiAgICAgIC4uLmFwcGx5Q29sb3Iob3ZlcmxheS5jb2xvci50b1JHQkFTdHJpbmcoKSwgdXJsKSxcbiAgICB9XG4gIH1cblxuICBpZiAoIG11dGVkICkge1xuICAgIHN0eWxlcyA9IHtcbiAgICAgIC4uLnN0eWxlcyxcbiAgICAgIC4uLmFwcGx5Q29sb3IodGV4dCwgdXJsKSxcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRlclxuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFBO0VBQUE7QUFBQTtBQUFBO0FBRVg7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNQSxNQUFNLEdBQUcsQ0FBRSxLQUFRQyxJQUFJLENBQUUsRUFBRUMsR0FBRyxLQUFNO0VBQ3hDLE1BQU07SUFBRUM7RUFBTSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUUsR0FBRUMsV0FBRyxTQUFRLENBQUM7RUFDakQsTUFBTTtJQUFFQyxRQUFRO0lBQUVDLElBQUk7SUFBRUM7RUFBUSxDQUFDLEdBQUdOLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxHQUFHLENBQUUsR0FBRUMsV0FBRyxVQUFTTCxHQUFJLEVBQUMsQ0FBQztFQUN6RSxNQUFNUyxHQUFHLEdBQUksbUNBQWtDRixJQUFLLHNCQUFxQjtFQUV6RSxJQUFLRCxRQUFRLEVBQUc7SUFDZCxPQUFPLENBQUMsQ0FBQztFQUNYO0VBRUEsSUFBSUksTUFBTSxHQUFHO0lBQ1hDLE9BQU8sRUFBRSxlQUFlO0lBQ3hCQyxLQUFLLEVBQUUsRUFBRTtJQUNUQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxPQUFPLEVBQUUsYUFBYTtJQUN0QkMsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDYkMsVUFBVSxFQUFFUixHQUFHO0lBQ2ZTLGNBQWMsRUFBRSxTQUFTO0lBQ3pCLEdBQUdDLGlCQUFTLENBQUNaLElBQUk7RUFDbkIsQ0FBQztFQUVELElBQUtOLEtBQUssSUFBSU8sT0FBTyxDQUFDWSxPQUFPLEVBQUc7SUFDOUJWLE1BQU0sR0FBRztNQUNQLEdBQUdBLE1BQU07TUFDVFcsVUFBVSxFQUFFWixHQUFHO01BQ2ZhLGNBQWMsRUFBRTtJQUNsQixDQUFDO0VBQ0g7RUFFQSxJQUFLZCxPQUFPLENBQUNZLE9BQU8sRUFBRztJQUNyQlYsTUFBTSxHQUFHO01BQ1AsR0FBR0EsTUFBTTtNQUNULEdBQUcsSUFBQWEsbUJBQVUsRUFBQ2YsT0FBTyxDQUFDZ0IsS0FBSyxDQUFDQyxZQUFZLEVBQUUsRUFBRWhCLEdBQUc7SUFDakQsQ0FBQztFQUNIO0VBRUEsSUFBS1IsS0FBSyxFQUFHO0lBQ1hTLE1BQU0sR0FBRztNQUNQLEdBQUdBLE1BQU07TUFDVCxHQUFHLElBQUFhLG1CQUFVLEVBQUN4QixJQUFJLEVBQUVVLEdBQUc7SUFDekIsQ0FBQztFQUNIO0VBRUEsT0FBT0MsTUFBTTtBQUNmLENBQUM7QUFBQSxlQUVjWixNQUFNO0FBQUE7QUFBQSJ9