'use babel';

/**
 * Icon config for icons that utilize the `is` mixin. Each key is an object,
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
  editorconfig: {
    config: {
      description: '.editorconfig',
      icons: ['EditorConfig'],
      title: 'EditorConfig'
    },
    match: ['.editorconfig']
  },
  packagejson: {
    config: {
      description: 'package.json',
      icons: ['npm', 'npmAlt'],
      title: 'npm'
    },
    match: ['package.json']
  },
  travisyml: {
    config: {
      description: '.travis.yml',
      icons: ['Travis'],
      title: 'Travis-CI'
    },
    match: ['.travis.yml']
  }
};
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJlZGl0b3Jjb25maWciLCJjb25maWciLCJkZXNjcmlwdGlvbiIsImljb25zIiwidGl0bGUiLCJtYXRjaCIsInBhY2thZ2Vqc29uIiwidHJhdmlzeW1sIl0sInNvdXJjZXMiOlsiaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCdcblxuLyoqXG4gKiBJY29uIGNvbmZpZyBmb3IgaWNvbnMgdGhhdCB1dGlsaXplIHRoZSBgaXNgIG1peGluLiBFYWNoIGtleSBpcyBhbiBvYmplY3QsXG4gKiB3aGVyZSB0aGUga2V5IG5hbWUgbWF0Y2hlcyB0aGUgQ1NTIGZpbGUgd2hlcmUgdGhlIG1peGluIGlzIHVzZWQuIFRoZSB2YWx1ZVxuICogaXMgYW4gb2JqZWN0IHdpdGggMiBwcm9wZXJ0aWVzLCBgY29uZmlnYCBhbmQgYG1hdGNoYC4gVGhlIGBjb25maWdgIHByb3BlcnR5XG4gKiBpcyB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgc2V0dGluZ3MgeW91IHNlZSBpbiBBdG9tLiBUaGUgYG1hdGNoYCBwcm9wZXJ0eSBpc1xuICogdXNlZCBieSB0aGUgbWl4aW4gdG8gYnVpbGQgb3V0IHRoZSBjb3JyZWN0IENTUyBzZWxlY3RvcnMuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZWRpdG9yY29uZmlnOiB7XG4gICAgY29uZmlnOiB7XG4gICAgICBkZXNjcmlwdGlvbjogJy5lZGl0b3Jjb25maWcnLFxuICAgICAgaWNvbnM6IFsgJ0VkaXRvckNvbmZpZycgXSxcbiAgICAgIHRpdGxlOiAnRWRpdG9yQ29uZmlnJyxcbiAgICB9LFxuICAgIG1hdGNoOiBbICcuZWRpdG9yY29uZmlnJyBdLFxuICB9LFxuICBwYWNrYWdlanNvbjoge1xuICAgIGNvbmZpZzoge1xuICAgICAgZGVzY3JpcHRpb246ICdwYWNrYWdlLmpzb24nLFxuICAgICAgaWNvbnM6IFsgJ25wbScsICducG1BbHQnIF0sXG4gICAgICB0aXRsZTogJ25wbScsXG4gICAgfSxcbiAgICBtYXRjaDogWyAncGFja2FnZS5qc29uJyBdLFxuICB9LFxuICB0cmF2aXN5bWw6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnLnRyYXZpcy55bWwnLFxuICAgICAgaWNvbnM6IFsgJ1RyYXZpcycgXSxcbiAgICAgIHRpdGxlOiAnVHJhdmlzLUNJJyxcbiAgICB9LFxuICAgIG1hdGNoOiBbICcudHJhdmlzLnltbCcgXSxcbiAgfSxcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUEsV0FBVzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0VBQUE7QUFBQTtBQUFBO0FBQUEsZUFPZTtFQUNiQSxZQUFZLEVBQUU7SUFDWkMsTUFBTSxFQUFFO01BQ05DLFdBQVcsRUFBRSxlQUFlO01BQzVCQyxLQUFLLEVBQUUsQ0FBRSxjQUFjLENBQUU7TUFDekJDLEtBQUssRUFBRTtJQUNULENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUUsZUFBZTtFQUMxQixDQUFDO0VBQ0RDLFdBQVcsRUFBRTtJQUNYTCxNQUFNLEVBQUU7TUFDTkMsV0FBVyxFQUFFLGNBQWM7TUFDM0JDLEtBQUssRUFBRSxDQUFFLEtBQUssRUFBRSxRQUFRLENBQUU7TUFDMUJDLEtBQUssRUFBRTtJQUNULENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUUsY0FBYztFQUN6QixDQUFDO0VBQ0RFLFNBQVMsRUFBRTtJQUNUTixNQUFNLEVBQUU7TUFDTkMsV0FBVyxFQUFFLGFBQWE7TUFDMUJDLEtBQUssRUFBRSxDQUFFLFFBQVEsQ0FBRTtNQUNuQkMsS0FBSyxFQUFFO0lBQ1QsQ0FBQztJQUNEQyxLQUFLLEVBQUUsQ0FBRSxhQUFhO0VBQ3hCO0FBQ0YsQ0FBQztBQUFBO0FBQUEifQ==