'use babel';

/**
 * Icon config for icons that utilize the `starts` mixin. Each key is an object,
 * where the key name matches the CSS file where the mixin is used. The value
 * is an object with 2 properties, `config` and `match`. The `config` property
 * is used to construct the settings you see in Atom. The `match` property is
 * used by the mixin to build out the correct CSS selectors.
 */
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  eslintrc: {
    config: {
      description: '.eslint',
      icons: ['ESLint'],
      title: 'ESLint'
    },
    match: ['.eslint']
  },
  git: {
    config: {
      description: '.git',
      icons: ['Git', 'GitHub', 'GitHubAlt'],
      title: 'Git'
    },
    match: ['.git']
  },
  license: {
    config: {
      description: 'license',
      icons: ['OSI', 'MIT'],
      title: 'License'
    },
    match: ['license']
  },
  npm: {
    config: {
      description: '.npm',
      icons: ['npm', 'npmAlt'],
      title: 'npm'
    },
    match: ['.npm']
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlc2xpbnRyYyIsImNvbmZpZyIsImRlc2NyaXB0aW9uIiwiaWNvbnMiLCJ0aXRsZSIsIm1hdGNoIiwiZ2l0IiwibGljZW5zZSIsIm5wbSJdLCJzb3VyY2VzIjpbInN0YXJ0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJ1xuXG4vKipcbiAqIEljb24gY29uZmlnIGZvciBpY29ucyB0aGF0IHV0aWxpemUgdGhlIGBzdGFydHNgIG1peGluLiBFYWNoIGtleSBpcyBhbiBvYmplY3QsXG4gKiB3aGVyZSB0aGUga2V5IG5hbWUgbWF0Y2hlcyB0aGUgQ1NTIGZpbGUgd2hlcmUgdGhlIG1peGluIGlzIHVzZWQuIFRoZSB2YWx1ZVxuICogaXMgYW4gb2JqZWN0IHdpdGggMiBwcm9wZXJ0aWVzLCBgY29uZmlnYCBhbmQgYG1hdGNoYC4gVGhlIGBjb25maWdgIHByb3BlcnR5XG4gKiBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgc2V0dGluZ3MgeW91IHNlZSBpbiBBdG9tLiBUaGUgYG1hdGNoYCBwcm9wZXJ0eSBpc1xuICogdXNlZCBieSB0aGUgbWl4aW4gdG8gYnVpbGQgb3V0IHRoZSBjb3JyZWN0IENTUyBzZWxlY3RvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZXNsaW50cmM6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnLmVzbGludCcsXG4gICAgICBpY29uczogWyAnRVNMaW50JyBdLFxuICAgICAgdGl0bGU6ICdFU0xpbnQnLFxuICAgIH0sXG4gICAgbWF0Y2g6IFsgJy5lc2xpbnQnIF0sXG4gIH0sXG4gIGdpdDoge1xuICAgIGNvbmZpZzoge1xuICAgICAgZGVzY3JpcHRpb246ICcuZ2l0JyxcbiAgICAgIGljb25zOiBbICdHaXQnLCAnR2l0SHViJywgJ0dpdEh1YkFsdCcgXSxcbiAgICAgIHRpdGxlOiAnR2l0JyxcbiAgICB9LFxuICAgIG1hdGNoOiBbICcuZ2l0JyBdLFxuICB9LFxuICBsaWNlbnNlOiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJ2xpY2Vuc2UnLFxuICAgICAgaWNvbnM6IFsgJ09TSScsICdNSVQnIF0sXG4gICAgICB0aXRsZTogJ0xpY2Vuc2UnLFxuICAgIH0sXG4gICAgbWF0Y2g6IFsgJ2xpY2Vuc2UnIF0sXG4gIH0sXG4gIG5wbToge1xuICAgIGNvbmZpZzoge1xuICAgICAgZGVzY3JpcHRpb246ICcubnBtJyxcbiAgICAgIGljb25zOiBbICducG0nLCAnbnBtQWx0JyBdLFxuICAgICAgdGl0bGU6ICducG0nLFxuICAgIH0sXG4gICAgbWF0Y2g6IFsgJy5ucG0nIF0sXG4gIH0sXG59XG4iXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtFQUFBO0FBQUE7QUFBQTtBQUFBLGVBT2U7RUFDYkEsUUFBUSxFQUFFO0lBQ1JDLE1BQU0sRUFBRTtNQUNOQyxXQUFXLEVBQUUsU0FBUztNQUN0QkMsS0FBSyxFQUFFLENBQUUsUUFBUSxDQUFFO01BQ25CQyxLQUFLLEVBQUU7SUFDVCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFFLFNBQVM7RUFDcEIsQ0FBQztFQUNEQyxHQUFHLEVBQUU7SUFDSEwsTUFBTSxFQUFFO01BQ05DLFdBQVcsRUFBRSxNQUFNO01BQ25CQyxLQUFLLEVBQUUsQ0FBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBRTtNQUN2Q0MsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBRSxNQUFNO0VBQ2pCLENBQUM7RUFDREUsT0FBTyxFQUFFO0lBQ1BOLE1BQU0sRUFBRTtNQUNOQyxXQUFXLEVBQUUsU0FBUztNQUN0QkMsS0FBSyxFQUFFLENBQUUsS0FBSyxFQUFFLEtBQUssQ0FBRTtNQUN2QkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBRSxTQUFTO0VBQ3BCLENBQUM7RUFDREcsR0FBRyxFQUFFO0lBQ0hQLE1BQU0sRUFBRTtNQUNOQyxXQUFXLEVBQUUsTUFBTTtNQUNuQkMsS0FBSyxFQUFFLENBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBRTtNQUMxQkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBRSxNQUFNO0VBQ2pCO0FBQ0YsQ0FBQztBQUFBO0FBQUEifQ==