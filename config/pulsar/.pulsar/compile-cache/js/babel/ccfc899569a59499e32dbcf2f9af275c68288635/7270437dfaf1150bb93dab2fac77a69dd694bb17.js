"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _atom = require("atom");
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _temp = _interopRequireDefault(require("temp"));
var _lsArchive = _interopRequireDefault(require("ls-archive"));
var _getIconServices = _interopRequireDefault(require("./get-icon-services"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** @babel */

class FileView {
  constructor(parentView, indexInParentView, archivePath, entry) {
    this.disposables = new _atom.CompositeDisposable();
    this.parentView = parentView;
    this.indexInParentView = indexInParentView;
    this.archivePath = archivePath;
    this.entry = entry;
    this.element = document.createElement('li');
    this.element.classList.add('list-item', 'entry');
    this.element.tabIndex = -1;
    this.name = document.createElement('span');
    (0, _getIconServices.default)().updateFileIcon(this);
    this.name.textContent = this.entry.getName();
    this.element.appendChild(this.name);
    const clickHandler = () => {
      this.select();
      this.openFile();
    };
    this.element.addEventListener('click', clickHandler);
    this.disposables.add(new _atom.Disposable(() => {
      this.element.removeEventListener('click', clickHandler);
    }));
    this.disposables.add(atom.commands.add(this.element, {
      'core:confirm': () => {
        if (this.isSelected()) {
          this.openFile();
        }
      },
      'core:move-down': () => {
        if (this.isSelected()) {
          this.parentView.selectFileAfterIndex(this.indexInParentView);
        }
      },
      'core:move-up': () => {
        if (this.isSelected()) {
          this.parentView.selectFileBeforeIndex(this.indexInParentView);
        }
      }
    }));
  }
  destroy() {
    this.disposables.dispose();
    this.element.remove();
  }
  isSelected() {
    return this.element.classList.contains('selected');
  }
  logError(message, error) {
    console.error(message, error.stack != null ? error.stack : error);
  }
  openFile() {
    _lsArchive.default.readFile(this.archivePath, this.entry.getPath(), (error, contents) => {
      if (error != null) {
        this.logError(`Error reading: ${this.entry.getPath()} from ${this.archivePath}`, error);
      } else {
        _temp.default.mkdir('atom-', (error, tempDirPath) => {
          if (error != null) {
            this.logError(`Error creating temp directory: ${tempDirPath}`, error);
          } else {
            const tempArchiveDirPath = _path.default.join(tempDirPath, _path.default.basename(this.archivePath));
            _fs.default.mkdir(tempArchiveDirPath, {
              recursive: true
            }, error => {
              if (error != null) {
                this.logError(`Error creating archive directory ${tempArchiveDirPath}`, error);
              } else {
                const tempFilePath = _path.default.join(tempArchiveDirPath, this.entry.getName());
                _fs.default.writeFile(tempFilePath, contents, error => {
                  if (error != null) {
                    this.logError(`Error writing to ${tempFilePath}`, error);
                  } else {
                    atom.workspace.open(tempFilePath);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  select() {
    this.element.focus();
    const archiveEditorElement = this.element.closest('.archive-editor');
    // On initial tree creation, it is not possible for any entries to be selected
    // (The entries also haven't been added to the DOM yet)
    if (archiveEditorElement) {
      for (const selected of archiveEditorElement.querySelectorAll('.selected')) {
        selected.classList.remove('selected');
      }
    }
    this.element.classList.add('selected');
  }
}
exports.default = FileView;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWxlVmlldyIsImNvbnN0cnVjdG9yIiwicGFyZW50VmlldyIsImluZGV4SW5QYXJlbnRWaWV3IiwiYXJjaGl2ZVBhdGgiLCJlbnRyeSIsImRpc3Bvc2FibGVzIiwiQ29tcG9zaXRlRGlzcG9zYWJsZSIsImVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0YWJJbmRleCIsIm5hbWUiLCJnZXRJY29uU2VydmljZXMiLCJ1cGRhdGVGaWxlSWNvbiIsInRleHRDb250ZW50IiwiZ2V0TmFtZSIsImFwcGVuZENoaWxkIiwiY2xpY2tIYW5kbGVyIiwic2VsZWN0Iiwib3BlbkZpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiRGlzcG9zYWJsZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhdG9tIiwiY29tbWFuZHMiLCJpc1NlbGVjdGVkIiwic2VsZWN0RmlsZUFmdGVySW5kZXgiLCJzZWxlY3RGaWxlQmVmb3JlSW5kZXgiLCJkZXN0cm95IiwiZGlzcG9zZSIsInJlbW92ZSIsImNvbnRhaW5zIiwibG9nRXJyb3IiLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIiwic3RhY2siLCJhcmNoaXZlIiwicmVhZEZpbGUiLCJnZXRQYXRoIiwiY29udGVudHMiLCJ0ZW1wIiwibWtkaXIiLCJ0ZW1wRGlyUGF0aCIsInRlbXBBcmNoaXZlRGlyUGF0aCIsInBhdGgiLCJqb2luIiwiYmFzZW5hbWUiLCJmcyIsInJlY3Vyc2l2ZSIsInRlbXBGaWxlUGF0aCIsIndyaXRlRmlsZSIsIndvcmtzcGFjZSIsIm9wZW4iLCJmb2N1cyIsImFyY2hpdmVFZGl0b3JFbGVtZW50IiwiY2xvc2VzdCIsInNlbGVjdGVkIiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VzIjpbImZpbGUtdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGJhYmVsICovXG5cbmltcG9ydCB7Q29tcG9zaXRlRGlzcG9zYWJsZSwgRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSdcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgdGVtcCBmcm9tICd0ZW1wJ1xuaW1wb3J0IGFyY2hpdmUgZnJvbSAnbHMtYXJjaGl2ZSdcblxuaW1wb3J0IGdldEljb25TZXJ2aWNlcyBmcm9tICcuL2dldC1pY29uLXNlcnZpY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlVmlldyB7XG4gIGNvbnN0cnVjdG9yIChwYXJlbnRWaWV3LCBpbmRleEluUGFyZW50VmlldywgYXJjaGl2ZVBhdGgsIGVudHJ5KSB7XG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKClcbiAgICB0aGlzLnBhcmVudFZpZXcgPSBwYXJlbnRWaWV3XG4gICAgdGhpcy5pbmRleEluUGFyZW50VmlldyA9IGluZGV4SW5QYXJlbnRWaWV3XG4gICAgdGhpcy5hcmNoaXZlUGF0aCA9IGFyY2hpdmVQYXRoXG4gICAgdGhpcy5lbnRyeSA9IGVudHJ5XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScsICdlbnRyeScpXG4gICAgdGhpcy5lbGVtZW50LnRhYkluZGV4ID0gLTFcblxuICAgIHRoaXMubmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuICAgIGdldEljb25TZXJ2aWNlcygpLnVwZGF0ZUZpbGVJY29uKHRoaXMpXG4gICAgdGhpcy5uYW1lLnRleHRDb250ZW50ID0gdGhpcy5lbnRyeS5nZXROYW1lKClcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5uYW1lKVxuXG4gICAgY29uc3QgY2xpY2tIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZWxlY3QoKVxuICAgICAgdGhpcy5vcGVuRmlsZSgpXG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcilcbiAgICB0aGlzLmRpc3Bvc2FibGVzLmFkZChuZXcgRGlzcG9zYWJsZSgoKSA9PiB7IHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsaWNrSGFuZGxlcikgfSkpXG5cbiAgICB0aGlzLmRpc3Bvc2FibGVzLmFkZChhdG9tLmNvbW1hbmRzLmFkZCh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICdjb3JlOmNvbmZpcm0nOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHRoaXMub3BlbkZpbGUoKVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnY29yZTptb3ZlLWRvd24nOiAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgIHRoaXMucGFyZW50Vmlldy5zZWxlY3RGaWxlQWZ0ZXJJbmRleCh0aGlzLmluZGV4SW5QYXJlbnRWaWV3KVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAnY29yZTptb3ZlLXVwJzogKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc1NlbGVjdGVkKCkpIHtcbiAgICAgICAgICB0aGlzLnBhcmVudFZpZXcuc2VsZWN0RmlsZUJlZm9yZUluZGV4KHRoaXMuaW5kZXhJblBhcmVudFZpZXcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSlcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuZGlzcG9zYWJsZXMuZGlzcG9zZSgpXG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpXG4gIH1cblxuICBpc1NlbGVjdGVkICgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKVxuICB9XG5cbiAgbG9nRXJyb3IgKG1lc3NhZ2UsIGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlLCBlcnJvci5zdGFjayAhPSBudWxsID8gZXJyb3Iuc3RhY2sgOiBlcnJvcilcbiAgfVxuXG4gIG9wZW5GaWxlICgpIHtcbiAgICBhcmNoaXZlLnJlYWRGaWxlKHRoaXMuYXJjaGl2ZVBhdGgsIHRoaXMuZW50cnkuZ2V0UGF0aCgpLCAoZXJyb3IsIGNvbnRlbnRzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxvZ0Vycm9yKGBFcnJvciByZWFkaW5nOiAke3RoaXMuZW50cnkuZ2V0UGF0aCgpfSBmcm9tICR7dGhpcy5hcmNoaXZlUGF0aH1gLCBlcnJvcilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlbXAubWtkaXIoJ2F0b20tJywgKGVycm9yLCB0ZW1wRGlyUGF0aCkgPT4ge1xuICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ0Vycm9yKGBFcnJvciBjcmVhdGluZyB0ZW1wIGRpcmVjdG9yeTogJHt0ZW1wRGlyUGF0aH1gLCBlcnJvcilcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGVtcEFyY2hpdmVEaXJQYXRoID0gcGF0aC5qb2luKHRlbXBEaXJQYXRoLCBwYXRoLmJhc2VuYW1lKHRoaXMuYXJjaGl2ZVBhdGgpKVxuICAgICAgICAgICAgZnMubWtkaXIodGVtcEFyY2hpdmVEaXJQYXRoLCB7cmVjdXJzaXZlOnRydWV9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dFcnJvcihgRXJyb3IgY3JlYXRpbmcgYXJjaGl2ZSBkaXJlY3RvcnkgJHt0ZW1wQXJjaGl2ZURpclBhdGh9YCwgZXJyb3IpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcEZpbGVQYXRoID0gcGF0aC5qb2luKHRlbXBBcmNoaXZlRGlyUGF0aCwgdGhpcy5lbnRyeS5nZXROYW1lKCkpXG4gICAgICAgICAgICAgICAgZnMud3JpdGVGaWxlKHRlbXBGaWxlUGF0aCwgY29udGVudHMsIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9nRXJyb3IoYEVycm9yIHdyaXRpbmcgdG8gJHt0ZW1wRmlsZVBhdGh9YCwgZXJyb3IpXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhdG9tLndvcmtzcGFjZS5vcGVuKHRlbXBGaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgc2VsZWN0ICgpIHtcbiAgICB0aGlzLmVsZW1lbnQuZm9jdXMoKVxuXG4gICAgY29uc3QgYXJjaGl2ZUVkaXRvckVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmFyY2hpdmUtZWRpdG9yJylcbiAgICAvLyBPbiBpbml0aWFsIHRyZWUgY3JlYXRpb24sIGl0IGlzIG5vdCBwb3NzaWJsZSBmb3IgYW55IGVudHJpZXMgdG8gYmUgc2VsZWN0ZWRcbiAgICAvLyAoVGhlIGVudHJpZXMgYWxzbyBoYXZlbid0IGJlZW4gYWRkZWQgdG8gdGhlIERPTSB5ZXQpXG4gICAgaWYgKGFyY2hpdmVFZGl0b3JFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IHNlbGVjdGVkIG9mIGFyY2hpdmVFZGl0b3JFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RlZCcpKSB7XG4gICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJylcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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