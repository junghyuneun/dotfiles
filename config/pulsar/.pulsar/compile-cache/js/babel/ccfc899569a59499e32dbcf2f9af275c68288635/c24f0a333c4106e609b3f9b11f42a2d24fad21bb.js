'use babel';

/**
 * Namespace for settings in Atom.
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ns = exports.applyColor = void 0;
const ns = 'flexicons';

/**
 * Converts color to RGBa string with default 70% alpha channel.
 *
 * @todo Add configuration option for alpha instead of hardcoded to 70%.
 *
 * @param {string} color - Color to convert to RGBa.
 *
 * @returns {string} RGBa CSS string.
 */
exports.ns = ns;
const toRGBA = color => /^rgba/.test(color) ? color : `rgba(${color}, .7)`;

/**
 * This function is used to apply the overlay colors to icons. Sets the
 * `background` CSS property using a linear-gradient.
 *
 * @param {string} color - Color of the overlay to apply to the icon.
 *
 * @param {string} url - Path to the icon.
 *
 * @returns {object} Contains the styles to apply color overlay.
 */
const applyColor = (color, url) => ({
  background: `
    linear-gradient(${toRGBA(color)}, ${toRGBA(color)}),
    ${url}`,
  backgroundSize: 'contain'
});
exports.applyColor = applyColor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJucyIsInRvUkdCQSIsImNvbG9yIiwidGVzdCIsImFwcGx5Q29sb3IiLCJ1cmwiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFNpemUiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG4vKipcbiAqIE5hbWVzcGFjZSBmb3Igc2V0dGluZ3MgaW4gQXRvbS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5zID0gJ2ZsZXhpY29ucydcblxuLyoqXG4gKiBDb252ZXJ0cyBjb2xvciB0byBSR0JhIHN0cmluZyB3aXRoIGRlZmF1bHQgNzAlIGFscGhhIGNoYW5uZWwuXG4gKlxuICogQHRvZG8gQWRkIGNvbmZpZ3VyYXRpb24gb3B0aW9uIGZvciBhbHBoYSBpbnN0ZWFkIG9mIGhhcmRjb2RlZCB0byA3MCUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yIC0gQ29sb3IgdG8gY29udmVydCB0byBSR0JhLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJHQmEgQ1NTIHN0cmluZy5cbiAqL1xuY29uc3QgdG9SR0JBID0gY29sb3IgPT5cbiAgL15yZ2JhLy50ZXN0KGNvbG9yKSA/IGNvbG9yIDogYHJnYmEoJHtjb2xvcn0sIC43KWBcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXBwbHkgdGhlIG92ZXJsYXkgY29sb3JzIHRvIGljb25zLiBTZXRzIHRoZVxuICogYGJhY2tncm91bmRgIENTUyBwcm9wZXJ0eSB1c2luZyBhIGxpbmVhci1ncmFkaWVudC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gY29sb3IgLSBDb2xvciBvZiB0aGUgb3ZlcmxheSB0byBhcHBseSB0byB0aGUgaWNvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gUGF0aCB0byB0aGUgaWNvbi5cbiAqXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBDb250YWlucyB0aGUgc3R5bGVzIHRvIGFwcGx5IGNvbG9yIG92ZXJsYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBseUNvbG9yID0gKCBjb2xvciwgdXJsICkgPT4gKHtcbiAgYmFja2dyb3VuZDogYFxuICAgIGxpbmVhci1ncmFkaWVudCgke3RvUkdCQShjb2xvcil9LCAke3RvUkdCQShjb2xvcil9KSxcbiAgICAke3VybH1gLFxuICBiYWNrZ3JvdW5kU2l6ZTogJ2NvbnRhaW4nLFxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFGQTtFQUFBO0FBQUE7QUFBQTtBQUdPLE1BQU1BLEVBQUUsR0FBRyxXQUFXOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVNBLE1BQU1DLE1BQU0sR0FBR0MsS0FBSyxJQUNsQixPQUFPLENBQUNDLElBQUksQ0FBQ0QsS0FBSyxDQUFDLEdBQUdBLEtBQUssR0FBSSxRQUFPQSxLQUFNLE9BQU07O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sTUFBTUUsVUFBVSxHQUFHLENBQUVGLEtBQUssRUFBRUcsR0FBRyxNQUFPO0VBQzNDQyxVQUFVLEVBQUc7QUFDZixzQkFBc0JMLE1BQU0sQ0FBQ0MsS0FBSyxDQUFFLEtBQUlELE1BQU0sQ0FBQ0MsS0FBSyxDQUFFO0FBQ3RELE1BQU1HLEdBQUksRUFBQztFQUNURSxjQUFjLEVBQUU7QUFDbEIsQ0FBQyxDQUFDO0FBQUEifQ==