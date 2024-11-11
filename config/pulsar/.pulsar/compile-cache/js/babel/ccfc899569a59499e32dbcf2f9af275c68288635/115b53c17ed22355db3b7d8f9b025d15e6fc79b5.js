'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function writeConfigFile(content, reload = false) {
  return new Promise((resolve, reject) => {
    if (!content) return reject({
      success: false,
      error: 'No content given'
    });
    _fs.default.writeFile(`${__dirname}/../../styles/user-settings.less`, content, 'utf8', error => {
      if (error) return reject({
        success: false,
        error: 'Failed to write settings file'
      });
      if (reload) {
        const amuPackage = atom.packages.getLoadedPackage('atom-material-ui');
        if (amuPackage) {
          amuPackage.deactivate();
          setImmediate(() => amuPackage.activate());
        }
      }
      return resolve({
        success: true,
        error: null
      });
    });
    return resolve({
      success: true,
      error: null
    });
  });
}
var _default = writeConfigFile;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ3cml0ZUNvbmZpZ0ZpbGUiLCJjb250ZW50IiwicmVsb2FkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJmcyIsIndyaXRlRmlsZSIsIl9fZGlybmFtZSIsImFtdVBhY2thZ2UiLCJhdG9tIiwicGFja2FnZXMiLCJnZXRMb2FkZWRQYWNrYWdlIiwiZGVhY3RpdmF0ZSIsInNldEltbWVkaWF0ZSIsImFjdGl2YXRlIl0sInNvdXJjZXMiOlsid3JpdGUtY29uZmlnLWZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBiYWJlbCc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmZ1bmN0aW9uIHdyaXRlQ29uZmlnRmlsZShjb250ZW50LCByZWxvYWQgPSBmYWxzZSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmICghY29udGVudCkgcmV0dXJuIHJlamVjdCh7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ05vIGNvbnRlbnQgZ2l2ZW4nIH0pO1xuXG4gICAgICAgIGZzLndyaXRlRmlsZShgJHtfX2Rpcm5hbWV9Ly4uLy4uL3N0eWxlcy91c2VyLXNldHRpbmdzLmxlc3NgLCBjb250ZW50LCAndXRmOCcsIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gcmVqZWN0KHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIHdyaXRlIHNldHRpbmdzIGZpbGUnIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVsb2FkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW11UGFja2FnZSA9IGF0b20ucGFja2FnZXMuZ2V0TG9hZGVkUGFja2FnZSgnYXRvbS1tYXRlcmlhbC11aScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFtdVBhY2thZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgYW11UGFja2FnZS5kZWFjdGl2YXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEltbWVkaWF0ZSgoKSA9PiBhbXVQYWNrYWdlLmFjdGl2YXRlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBlcnJvcjogbnVsbCB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JpdGVDb25maWdGaWxlO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFDO0VBQUE7QUFBQTtBQUFBO0FBRVo7QUFBb0I7QUFFcEIsU0FBU0EsZUFBZSxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sR0FBRyxLQUFLLEVBQUU7RUFDOUMsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEtBQUs7SUFDcEMsSUFBSSxDQUFDSixPQUFPLEVBQUUsT0FBT0ksTUFBTSxDQUFDO01BQUVDLE9BQU8sRUFBRSxLQUFLO01BQUVDLEtBQUssRUFBRTtJQUFtQixDQUFDLENBQUM7SUFFMUVDLFdBQUUsQ0FBQ0MsU0FBUyxDQUFFLEdBQUVDLFNBQVUsa0NBQWlDLEVBQUVULE9BQU8sRUFBRSxNQUFNLEVBQUdNLEtBQUssSUFBSztNQUNyRixJQUFJQSxLQUFLLEVBQUUsT0FBT0YsTUFBTSxDQUFDO1FBQUVDLE9BQU8sRUFBRSxLQUFLO1FBQUVDLEtBQUssRUFBRTtNQUFnQyxDQUFDLENBQUM7TUFFcEYsSUFBSUwsTUFBTSxFQUFFO1FBQ1IsTUFBTVMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUM7UUFFckUsSUFBSUgsVUFBVSxFQUFFO1VBQ1pBLFVBQVUsQ0FBQ0ksVUFBVSxFQUFFO1VBQ3ZCQyxZQUFZLENBQUMsTUFBTUwsVUFBVSxDQUFDTSxRQUFRLEVBQUUsQ0FBQztRQUM3QztNQUNKO01BRUEsT0FBT2IsT0FBTyxDQUFDO1FBQUVFLE9BQU8sRUFBRSxJQUFJO1FBQUVDLEtBQUssRUFBRTtNQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQUM7SUFFRixPQUFPSCxPQUFPLENBQUM7TUFBRUUsT0FBTyxFQUFFLElBQUk7TUFBRUMsS0FBSyxFQUFFO0lBQUssQ0FBQyxDQUFDO0VBQ2xELENBQUMsQ0FBQztBQUNOO0FBQUMsZUFFY1AsZUFBZTtBQUFBO0FBQUEifQ==