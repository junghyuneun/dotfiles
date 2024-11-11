'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildColorSettings;
var _tinycolor = _interopRequireDefault(require("tinycolor2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function buildColorSettings(baseColor = '#009688', accentColor = '#FFFFFF') {
  const newAccent = typeof accentColor === 'object' ? accentColor.toHexString() : accentColor;
  const newBase = typeof baseColor === 'object' ? baseColor.toHexString() : baseColor;
  const luminance = (0, _tinycolor.default)(newBase).getLuminance();
  let accentTextColor = '#666';
  if (luminance <= 0.3 && luminance > 0.22) {
    accentTextColor = 'rgba(255,255,255,0.9)';
  } else if (luminance <= 0.22) {
    accentTextColor = 'rgba(255,255,255,0.8)';
  } else if (luminance > 0.3) {
    accentTextColor = 'rgba(0,0,0,0.6)';
  }
  return `
        @accent-color: ${newAccent};
        @accent-text-color: ${accentTextColor};
        @base-color: ${newBase};
    `;
}
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJidWlsZENvbG9yU2V0dGluZ3MiLCJiYXNlQ29sb3IiLCJhY2NlbnRDb2xvciIsIm5ld0FjY2VudCIsInRvSGV4U3RyaW5nIiwibmV3QmFzZSIsImx1bWluYW5jZSIsInRpbnljb2xvciIsImdldEx1bWluYW5jZSIsImFjY2VudFRleHRDb2xvciJdLCJzb3VyY2VzIjpbImJ1aWxkLWNvbG9yLXNldHRpbmdzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgYmFiZWwnO1xuXG5pbXBvcnQgdGlueWNvbG9yIGZyb20gJ3Rpbnljb2xvcjInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZENvbG9yU2V0dGluZ3MoYmFzZUNvbG9yID0gJyMwMDk2ODgnLCBhY2NlbnRDb2xvciA9ICcjRkZGRkZGJykge1xuICAgIGNvbnN0IG5ld0FjY2VudCA9ICh0eXBlb2YgYWNjZW50Q29sb3IgPT09ICdvYmplY3QnKSA/XG4gICAgICAgIGFjY2VudENvbG9yLnRvSGV4U3RyaW5nKCkgOlxuICAgICAgICBhY2NlbnRDb2xvcjtcblxuICAgIGNvbnN0IG5ld0Jhc2UgPSAodHlwZW9mIGJhc2VDb2xvciA9PT0gJ29iamVjdCcpID9cbiAgICAgICAgYmFzZUNvbG9yLnRvSGV4U3RyaW5nKCkgOlxuICAgICAgICBiYXNlQ29sb3I7XG5cbiAgICBjb25zdCBsdW1pbmFuY2UgPSB0aW55Y29sb3IobmV3QmFzZSkuZ2V0THVtaW5hbmNlKCk7XG4gICAgbGV0IGFjY2VudFRleHRDb2xvciA9ICcjNjY2JztcblxuICAgIGlmIChsdW1pbmFuY2UgPD0gMC4zICYmIGx1bWluYW5jZSA+IDAuMjIpIHtcbiAgICAgICAgYWNjZW50VGV4dENvbG9yID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC45KSc7XG4gICAgfSBlbHNlIGlmIChsdW1pbmFuY2UgPD0gMC4yMikge1xuICAgICAgICBhY2NlbnRUZXh0Q29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJztcbiAgICB9IGVsc2UgaWYgKGx1bWluYW5jZSA+IDAuMykge1xuICAgICAgICBhY2NlbnRUZXh0Q29sb3IgPSAncmdiYSgwLDAsMCwwLjYpJztcbiAgICB9XG5cbiAgICByZXR1cm4gYFxuICAgICAgICBAYWNjZW50LWNvbG9yOiAke25ld0FjY2VudH07XG4gICAgICAgIEBhY2NlbnQtdGV4dC1jb2xvcjogJHthY2NlbnRUZXh0Q29sb3J9O1xuICAgICAgICBAYmFzZS1jb2xvcjogJHtuZXdCYXNlfTtcbiAgICBgO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFDO0VBQUE7QUFBQTtBQUFBO0FBRVo7QUFBbUM7QUFFcEIsU0FBU0Esa0JBQWtCLENBQUNDLFNBQVMsR0FBRyxTQUFTLEVBQUVDLFdBQVcsR0FBRyxTQUFTLEVBQUU7RUFDdkYsTUFBTUMsU0FBUyxHQUFJLE9BQU9ELFdBQVcsS0FBSyxRQUFRLEdBQzlDQSxXQUFXLENBQUNFLFdBQVcsRUFBRSxHQUN6QkYsV0FBVztFQUVmLE1BQU1HLE9BQU8sR0FBSSxPQUFPSixTQUFTLEtBQUssUUFBUSxHQUMxQ0EsU0FBUyxDQUFDRyxXQUFXLEVBQUUsR0FDdkJILFNBQVM7RUFFYixNQUFNSyxTQUFTLEdBQUcsSUFBQUMsa0JBQVMsRUFBQ0YsT0FBTyxDQUFDLENBQUNHLFlBQVksRUFBRTtFQUNuRCxJQUFJQyxlQUFlLEdBQUcsTUFBTTtFQUU1QixJQUFJSCxTQUFTLElBQUksR0FBRyxJQUFJQSxTQUFTLEdBQUcsSUFBSSxFQUFFO0lBQ3RDRyxlQUFlLEdBQUcsdUJBQXVCO0VBQzdDLENBQUMsTUFBTSxJQUFJSCxTQUFTLElBQUksSUFBSSxFQUFFO0lBQzFCRyxlQUFlLEdBQUcsdUJBQXVCO0VBQzdDLENBQUMsTUFBTSxJQUFJSCxTQUFTLEdBQUcsR0FBRyxFQUFFO0lBQ3hCRyxlQUFlLEdBQUcsaUJBQWlCO0VBQ3ZDO0VBRUEsT0FBUTtBQUNaLHlCQUF5Qk4sU0FBVTtBQUNuQyw4QkFBOEJNLGVBQWdCO0FBQzlDLHVCQUF1QkosT0FBUTtBQUMvQixLQUFLO0FBQ0w7QUFBQyJ9