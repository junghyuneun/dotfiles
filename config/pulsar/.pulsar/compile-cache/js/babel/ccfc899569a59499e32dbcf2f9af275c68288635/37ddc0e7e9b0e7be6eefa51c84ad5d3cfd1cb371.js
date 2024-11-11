'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStarts = exports.makePath = exports.makeIs = exports.makeIcons = exports.makeEnds = exports.makeConfig = exports.make = exports.default = void 0;
var _lodash = _interopRequireDefault(require("lodash.mapvalues"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * This function constructs the Atom specific config for an icon.
 *
 * @param {string} title - Title for the icon.
 *
 * @param {string} description - Description that shows how the icon will be
 * matched.
 *
 * @param {array} enums - Array of icons that can be applied.
 *
 * @returns {object} An icon config schema for Atom.
 */
const makeConfig = (title, description, enums) => ({
  properties: {
    disabled: {
      default: false,
      title: 'Disable Icon',
      type: 'boolean'
    },
    icon: {
      enum: enums,
      default: enums[0],
      description,
      title: 'Icon',
      type: 'string'
    },
    overlay: {
      properties: {
        enabled: {
          default: false,
          title: 'Overlay Enabled',
          type: 'boolean'
        },
        color: {
          default: 'transparent',
          title: 'Overlay Color',
          type: 'color'
        }
      },
      title: `${title} Overlay`,
      type: 'object'
    }
  },
  title,
  type: 'object'
});

/**
 * Small helper function to set the proper information in the Atom settings for
 * icons using the `ends` mixin.
 *
 * @param {Object} config - Icon configuration settings.
 *
 * @param {string} config.description - The extensions the mixin applies to.
 *
 * @param {string[]} config.icons - Name of icons from `/icons` folder.
 *
 * @param {string} config.title - Icon name, used as a header in settings.
 *
 * @returns {Object} Config object for the icon.
 */
exports.makeConfig = makeConfig;
const makeEnds = ({
  description,
  icons,
  title
}) => makeConfig(title, `Extensions: ${description}`, icons);

/**
 * Small helper function to set the proper information in the Atom settings for
 * icons using the `starts` mixin.
 *
 * @param {Object} config - Icon configuration settings.
 *
 * @param {string} config.description - The letters the files start with.
 *
 * @param {string[]} config.icons - Name of icons from `/icons` folder.
 *
 * @param {string} config.title - Icon name, used as a header in settings.
 *
 * @returns {Object} Config object for the icon.
 */
exports.makeEnds = makeEnds;
const makeStarts = ({
  description,
  icons,
  title
}) => makeConfig(title, `File starts with: ${description}`, icons);

/**
 * Small helper function to set the proper information in the Atom settings for
 * icons using the `path` mixin.
 *
 * @param {Object} config - Icon configuration settings.
 *
 * @param {string} config.description - Characters contained in the path.
 *
 * @param {string[]} config.icons - Name of icons from `/icons` folder.
 *
 * @param {string} config.title - Icon name, used as a header in settings.
 *
 * @returns {Object} Config object for the icon.
 */
exports.makeStarts = makeStarts;
const makePath = ({
  description,
  icons,
  title
}) => makeConfig(title, `Path contains: ${description}`, icons);

/**
 * Small helper function to set the proper information in the Atom settings for
 * icons using the `is` mixin.
 *
 * @param {Object} config - Icon configuration settings.
 *
 * @param {string} config.description - The characters to match exactly.
 *
 * @param {string[]} config.icons - Name of icons from `/icons` folder.
 *
 * @param {string} config.title - Icon name, used as a header in settings.
 *
 * @returns {Object} Config object for the icon.
 */
exports.makePath = makePath;
const makeIs = ({
  description,
  icons,
  title
}) => makeConfig(title, `File name is: ${description}`, icons);

/**
 * Maps over all icon values and calls above helper function for each icon
 * appropriately.
 *
 * @param {Object[]} icons - All the icon metadata used for configuration.
 *
 * @returns {Object[]} Config to be used in Atom settings.
 */
exports.makeIs = makeIs;
const makeIcons = icons => (0, _lodash.default)(icons, ({
  config,
  type
}) => {
  switch (type) {
    case 'ends':
      return makeEnds(config);
    case 'is':
      return makeIs(config);
    case 'path':
      return makePath(config);
    case 'starts':
      return makeStarts(config);
    default:
      return {};
  }
});

/**
 * Makes all the configuration necessary for Atom settings, which includes the
 * global options as well.
 *
 * @param {Object[]} icons - All the icon metadata used for configuration.
 *
 * @returns {Object[]} Config to be used in Atom settings.
 */
exports.makeIcons = makeIcons;
const make = icons => ({
  global: {
    properties: {
      status: {
        default: true,
        title: 'Git Status Colors',
        type: 'boolean'
      },
      muted: {
        default: false,
        description: 'Overlays default text color.',
        title: 'Muted',
        type: 'boolean'
      }
    },
    type: 'object'
  },
  icons: {
    properties: makeIcons(icons),
    type: 'object'
  }
});
exports.make = make;
var _default = make;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtYWtlQ29uZmlnIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImVudW1zIiwicHJvcGVydGllcyIsImRpc2FibGVkIiwiZGVmYXVsdCIsInR5cGUiLCJpY29uIiwiZW51bSIsIm92ZXJsYXkiLCJlbmFibGVkIiwiY29sb3IiLCJtYWtlRW5kcyIsImljb25zIiwibWFrZVN0YXJ0cyIsIm1ha2VQYXRoIiwibWFrZUlzIiwibWFrZUljb25zIiwibWFwVmFsdWVzIiwiY29uZmlnIiwibWFrZSIsImdsb2JhbCIsInN0YXR1cyIsIm11dGVkIl0sInNvdXJjZXMiOlsiaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuaW1wb3J0IG1hcFZhbHVlcyBmcm9tICdsb2Rhc2gubWFwdmFsdWVzJ1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY29uc3RydWN0cyB0aGUgQXRvbSBzcGVjaWZpYyBjb25maWcgZm9yIGFuIGljb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gVGl0bGUgZm9yIHRoZSBpY29uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBkZXNjcmlwdGlvbiAtIERlc2NyaXB0aW9uIHRoYXQgc2hvd3MgaG93IHRoZSBpY29uIHdpbGwgYmVcbiAqIG1hdGNoZWQuXG4gKlxuICogQHBhcmFtIHthcnJheX0gZW51bXMgLSBBcnJheSBvZiBpY29ucyB0aGF0IGNhbiBiZSBhcHBsaWVkLlxuICpcbiAqIEByZXR1cm5zIHtvYmplY3R9IEFuIGljb24gY29uZmlnIHNjaGVtYSBmb3IgQXRvbS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VDb25maWcgPSAoIHRpdGxlLCBkZXNjcmlwdGlvbiwgZW51bXMgKSA9PiAoe1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdGl0bGU6ICdEaXNhYmxlIEljb24nLFxuICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgIH0sXG4gICAgaWNvbjoge1xuICAgICAgZW51bTogZW51bXMsXG4gICAgICBkZWZhdWx0OiBlbnVtc1swXSxcbiAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgdGl0bGU6ICdJY29uJyxcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgIH0sXG4gICAgb3ZlcmxheToge1xuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBlbmFibGVkOiB7XG4gICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgdGl0bGU6ICdPdmVybGF5IEVuYWJsZWQnLFxuICAgICAgICAgIHR5cGU6ICdib29sZWFuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICBkZWZhdWx0OiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIHRpdGxlOiAnT3ZlcmxheSBDb2xvcicsXG4gICAgICAgICAgdHlwZTogJ2NvbG9yJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aXRsZTogYCR7dGl0bGV9IE92ZXJsYXlgLFxuICAgICAgdHlwZTogJ29iamVjdCcsXG4gICAgfSxcbiAgfSxcbiAgdGl0bGUsXG4gIHR5cGU6ICdvYmplY3QnLFxufSlcblxuLyoqXG4gKiBTbWFsbCBoZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSBwcm9wZXIgaW5mb3JtYXRpb24gaW4gdGhlIEF0b20gc2V0dGluZ3MgZm9yXG4gKiBpY29ucyB1c2luZyB0aGUgYGVuZHNgIG1peGluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBJY29uIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5kZXNjcmlwdGlvbiAtIFRoZSBleHRlbnNpb25zIHRoZSBtaXhpbiBhcHBsaWVzIHRvLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbmZpZy5pY29ucyAtIE5hbWUgb2YgaWNvbnMgZnJvbSBgL2ljb25zYCBmb2xkZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy50aXRsZSAtIEljb24gbmFtZSwgdXNlZCBhcyBhIGhlYWRlciBpbiBzZXR0aW5ncy5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb25maWcgb2JqZWN0IGZvciB0aGUgaWNvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VFbmRzID0gKHsgZGVzY3JpcHRpb24sIGljb25zLCB0aXRsZSB9KSA9PlxuICBtYWtlQ29uZmlnKHRpdGxlLCBgRXh0ZW5zaW9uczogJHtkZXNjcmlwdGlvbn1gLCBpY29ucylcblxuXG4vKipcbiAqIFNtYWxsIGhlbHBlciBmdW5jdGlvbiB0byBzZXQgdGhlIHByb3BlciBpbmZvcm1hdGlvbiBpbiB0aGUgQXRvbSBzZXR0aW5ncyBmb3JcbiAqIGljb25zIHVzaW5nIHRoZSBgc3RhcnRzYCBtaXhpbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gSWNvbiBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZGVzY3JpcHRpb24gLSBUaGUgbGV0dGVycyB0aGUgZmlsZXMgc3RhcnQgd2l0aC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBjb25maWcuaWNvbnMgLSBOYW1lIG9mIGljb25zIGZyb20gYC9pY29uc2AgZm9sZGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcudGl0bGUgLSBJY29uIG5hbWUsIHVzZWQgYXMgYSBoZWFkZXIgaW4gc2V0dGluZ3MuXG4gKlxuICogQHJldHVybnMge09iamVjdH0gQ29uZmlnIG9iamVjdCBmb3IgdGhlIGljb24uXG4gKi9cbmV4cG9ydCBjb25zdCBtYWtlU3RhcnRzID0gKHsgZGVzY3JpcHRpb24sIGljb25zLCB0aXRsZSB9KSA9PlxuICBtYWtlQ29uZmlnKHRpdGxlLCBgRmlsZSBzdGFydHMgd2l0aDogJHtkZXNjcmlwdGlvbn1gLCBpY29ucylcblxuLyoqXG4gKiBTbWFsbCBoZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSBwcm9wZXIgaW5mb3JtYXRpb24gaW4gdGhlIEF0b20gc2V0dGluZ3MgZm9yXG4gKiBpY29ucyB1c2luZyB0aGUgYHBhdGhgIG1peGluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgLSBJY29uIGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy5kZXNjcmlwdGlvbiAtIENoYXJhY3RlcnMgY29udGFpbmVkIGluIHRoZSBwYXRoLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbmZpZy5pY29ucyAtIE5hbWUgb2YgaWNvbnMgZnJvbSBgL2ljb25zYCBmb2xkZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy50aXRsZSAtIEljb24gbmFtZSwgdXNlZCBhcyBhIGhlYWRlciBpbiBzZXR0aW5ncy5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb25maWcgb2JqZWN0IGZvciB0aGUgaWNvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VQYXRoID0gKHsgZGVzY3JpcHRpb24sIGljb25zLCB0aXRsZSB9KSA9PlxuICBtYWtlQ29uZmlnKHRpdGxlLCBgUGF0aCBjb250YWluczogJHtkZXNjcmlwdGlvbn1gLCBpY29ucylcblxuLyoqXG4gKiBTbWFsbCBoZWxwZXIgZnVuY3Rpb24gdG8gc2V0IHRoZSBwcm9wZXIgaW5mb3JtYXRpb24gaW4gdGhlIEF0b20gc2V0dGluZ3MgZm9yXG4gKiBpY29ucyB1c2luZyB0aGUgYGlzYCBtaXhpbi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIC0gSWNvbiBjb25maWd1cmF0aW9uIHNldHRpbmdzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWcuZGVzY3JpcHRpb24gLSBUaGUgY2hhcmFjdGVycyB0byBtYXRjaCBleGFjdGx5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IGNvbmZpZy5pY29ucyAtIE5hbWUgb2YgaWNvbnMgZnJvbSBgL2ljb25zYCBmb2xkZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZy50aXRsZSAtIEljb24gbmFtZSwgdXNlZCBhcyBhIGhlYWRlciBpbiBzZXR0aW5ncy5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb25maWcgb2JqZWN0IGZvciB0aGUgaWNvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VJcyA9ICh7IGRlc2NyaXB0aW9uLCBpY29ucywgdGl0bGUgfSkgPT5cbiAgbWFrZUNvbmZpZyh0aXRsZSwgYEZpbGUgbmFtZSBpczogJHtkZXNjcmlwdGlvbn1gLCBpY29ucylcblxuLyoqXG4gKiBNYXBzIG92ZXIgYWxsIGljb24gdmFsdWVzIGFuZCBjYWxscyBhYm92ZSBoZWxwZXIgZnVuY3Rpb24gZm9yIGVhY2ggaWNvblxuICogYXBwcm9wcmlhdGVseS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdFtdfSBpY29ucyAtIEFsbCB0aGUgaWNvbiBtZXRhZGF0YSB1c2VkIGZvciBjb25maWd1cmF0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtPYmplY3RbXX0gQ29uZmlnIHRvIGJlIHVzZWQgaW4gQXRvbSBzZXR0aW5ncy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1ha2VJY29ucyA9IGljb25zID0+XG4gIG1hcFZhbHVlcyhpY29ucywgKHsgY29uZmlnLCB0eXBlIH0pID0+IHtcbiAgICBzd2l0Y2ggKCB0eXBlICkge1xuICAgICAgY2FzZSAnZW5kcyc6XG4gICAgICAgIHJldHVybiBtYWtlRW5kcyhjb25maWcpXG4gICAgICBjYXNlICdpcyc6XG4gICAgICAgIHJldHVybiBtYWtlSXMoY29uZmlnKVxuICAgICAgY2FzZSAncGF0aCc6XG4gICAgICAgIHJldHVybiBtYWtlUGF0aChjb25maWcpXG4gICAgICBjYXNlICdzdGFydHMnOlxuICAgICAgICByZXR1cm4gbWFrZVN0YXJ0cyhjb25maWcpXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4ge31cbiAgICB9XG4gIH0pXG5cbi8qKlxuICogTWFrZXMgYWxsIHRoZSBjb25maWd1cmF0aW9uIG5lY2Vzc2FyeSBmb3IgQXRvbSBzZXR0aW5ncywgd2hpY2ggaW5jbHVkZXMgdGhlXG4gKiBnbG9iYWwgb3B0aW9ucyBhcyB3ZWxsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0W119IGljb25zIC0gQWxsIHRoZSBpY29uIG1ldGFkYXRhIHVzZWQgZm9yIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogQHJldHVybnMge09iamVjdFtdfSBDb25maWcgdG8gYmUgdXNlZCBpbiBBdG9tIHNldHRpbmdzLlxuICovXG5leHBvcnQgY29uc3QgbWFrZSA9IGljb25zID0+ICh7XG4gIGdsb2JhbDoge1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHN0YXR1czoge1xuICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB0aXRsZTogJ0dpdCBTdGF0dXMgQ29sb3JzJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgfSxcbiAgICAgIG11dGVkOiB7XG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ092ZXJsYXlzIGRlZmF1bHQgdGV4dCBjb2xvci4nLFxuICAgICAgICB0aXRsZTogJ011dGVkJyxcbiAgICAgICAgdHlwZTogJ2Jvb2xlYW4nLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHR5cGU6ICdvYmplY3QnLFxuICB9LFxuICBpY29uczoge1xuICAgIHByb3BlcnRpZXM6IG1ha2VJY29ucyhpY29ucyksXG4gICAgdHlwZTogJ29iamVjdCcsXG4gIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlXG4iXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBQUE7RUFBQTtBQUFBO0FBQUE7QUFFWDtBQUF3QztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxVQUFVLEdBQUcsQ0FBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLEtBQUssTUFBTztFQUMxREMsVUFBVSxFQUFFO0lBQ1ZDLFFBQVEsRUFBRTtNQUNSQyxP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