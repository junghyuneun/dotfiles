"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _atom = require("atom");
/** @babel */

class SettingsIconStatusView {
  constructor(statusBar) {
    this.statusBar = statusBar;
    this.disposables = new _atom.CompositeDisposable();
    this.element = document.createElement('div');
    this.element.classList.add('settings-icon', 'inline-block');
    const iconPackage = document.createElement('span');
    iconPackage.classList.add('icon', 'icon-gear', 'is-icon-only');
    this.element.appendChild(iconPackage);
    const clickHandler = () => {
      atom.workspace.open("atom://config");
    };
    this.element.addEventListener('click', clickHandler);
    this.disposables.add(new _atom.Disposable(() => {
      this.element.removeEventListener('click', clickHandler);
    }));
  }
  attach() {
    this.tile = this.statusBar.addRightTile({
      item: this,
      priority: -99
    });
  }
  destroy() {
    this.disposables.dispose();
    this.element.remove();
    if (this.tile) {
      this.tile.destroy();
      this.tile = null;
    }
  }
}
exports.default = SettingsIconStatusView;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZXR0aW5nc0ljb25TdGF0dXNWaWV3IiwiY29uc3RydWN0b3IiLCJzdGF0dXNCYXIiLCJkaXNwb3NhYmxlcyIsIkNvbXBvc2l0ZURpc3Bvc2FibGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWNvblBhY2thZ2UiLCJhcHBlbmRDaGlsZCIsImNsaWNrSGFuZGxlciIsImF0b20iLCJ3b3Jrc3BhY2UiLCJvcGVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkRpc3Bvc2FibGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXR0YWNoIiwidGlsZSIsImFkZFJpZ2h0VGlsZSIsIml0ZW0iLCJwcmlvcml0eSIsImRlc3Ryb3kiLCJkaXNwb3NlIiwicmVtb3ZlIl0sInNvdXJjZXMiOlsic2V0dGluZ3MtaWNvbi1zdGF0dXMtdmlldy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGJhYmVsICovXG5cbmltcG9ydCB7RGlzcG9zYWJsZSwgQ29tcG9zaXRlRGlzcG9zYWJsZX0gZnJvbSAnYXRvbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NJY29uU3RhdHVzVmlldyB7XG4gIGNvbnN0cnVjdG9yKHN0YXR1c0Jhcikge1xuICAgIHRoaXMuc3RhdHVzQmFyID0gc3RhdHVzQmFyXG4gICAgdGhpcy5kaXNwb3NhYmxlcyA9IG5ldyBDb21wb3NpdGVEaXNwb3NhYmxlKClcblxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NldHRpbmdzLWljb24nLCAnaW5saW5lLWJsb2NrJylcblxuICAgIGNvbnN0IGljb25QYWNrYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgaWNvblBhY2thZ2UuY2xhc3NMaXN0LmFkZCgnaWNvbicsICdpY29uLWdlYXInLCAnaXMtaWNvbi1vbmx5JylcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoaWNvblBhY2thZ2UpXG5cbiAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBhdG9tLndvcmtzcGFjZS5vcGVuKFwiYXRvbTovL2NvbmZpZ1wiKVxuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpXG4gICAgdGhpcy5kaXNwb3NhYmxlcy5hZGQobmV3IERpc3Bvc2FibGUoKCkgPT4geyB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGlja0hhbmRsZXIpIH0pKVxuXG4gIH1cblxuICBhdHRhY2ggKCkge1xuICAgIHRoaXMudGlsZSA9IHRoaXMuc3RhdHVzQmFyLmFkZFJpZ2h0VGlsZSh7XG4gICAgICBpdGVtOiB0aGlzLFxuICAgICAgcHJpb3JpdHk6IC05OVxuICAgIH0pXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmRpc3Bvc2FibGVzLmRpc3Bvc2UoKVxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmUoKVxuICAgIGlmICh0aGlzLnRpbGUpIHtcbiAgICAgIHRoaXMudGlsZS5kZXN0cm95KClcbiAgICAgIHRoaXMudGlsZSA9IG51bGxcbiAgICB9XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUE7QUFGQTs7QUFJZSxNQUFNQSxzQkFBc0IsQ0FBQztFQUMxQ0MsV0FBVyxDQUFDQyxTQUFTLEVBQUU7SUFDckIsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7SUFDMUIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsSUFBSUMseUJBQW1CLEVBQUU7SUFFNUMsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUM1QyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQztJQUUzRCxNQUFNQyxXQUFXLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sQ0FBQztJQUNsREcsV0FBVyxDQUFDRixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsQ0FBQztJQUM5RCxJQUFJLENBQUNKLE9BQU8sQ0FBQ00sV0FBVyxDQUFDRCxXQUFXLENBQUM7SUFFckMsTUFBTUUsWUFBWSxHQUFHLE1BQU07TUFDekJDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3RDLENBQUM7SUFDRCxJQUFJLENBQUNWLE9BQU8sQ0FBQ1csZ0JBQWdCLENBQUMsT0FBTyxFQUFFSixZQUFZLENBQUM7SUFDcEQsSUFBSSxDQUFDVCxXQUFXLENBQUNNLEdBQUcsQ0FBQyxJQUFJUSxnQkFBVSxDQUFDLE1BQU07TUFBRSxJQUFJLENBQUNaLE9BQU8sQ0FBQ2EsbUJBQW1CLENBQUMsT0FBTyxFQUFFTixZQUFZLENBQUM7SUFBQyxDQUFDLENBQUMsQ0FBQztFQUV6RztFQUVBTyxNQUFNLEdBQUk7SUFDUixJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJLENBQUNsQixTQUFTLENBQUNtQixZQUFZLENBQUM7TUFDdENDLElBQUksRUFBRSxJQUFJO01BQ1ZDLFFBQVEsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxDQUFDO0VBQ0o7RUFFQUMsT0FBTyxHQUFJO0lBQ1QsSUFBSSxDQUFDckIsV0FBVyxDQUFDc0IsT0FBTyxFQUFFO0lBQzFCLElBQUksQ0FBQ3BCLE9BQU8sQ0FBQ3FCLE1BQU0sRUFBRTtJQUNyQixJQUFJLElBQUksQ0FBQ04sSUFBSSxFQUFFO01BQ2IsSUFBSSxDQUFDQSxJQUFJLENBQUNJLE9BQU8sRUFBRTtNQUNuQixJQUFJLENBQUNKLElBQUksR0FBRyxJQUFJO0lBQ2xCO0VBQ0Y7QUFDRjtBQUFDO0FBQUEifQ==