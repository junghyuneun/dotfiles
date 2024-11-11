"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _etch = _interopRequireDefault(require("etch"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/** @babel */
/** @jsx etch.dom */

class ChangeLogView {
  constructor(props) {
    this.props = props;
    _etch.default.initialize(this);
  }
  didChangeShowChangeLog() {
    atom.config.set('welcome.showChangeLog', this.checked);
  }
  dismissVersion() {
    atom.config.set('welcome.lastViewedChangeLog', atom.getVersion().split(" ")[0]);
  }
  wasVersionDismissed() {
    // Use the new `.versionSatisfies()` API to check if our last dismissed version
    // is the same as the current version. `.versionSatisfies()` compares equality
    // by default, so no comparator is needed
    return atom.versionSatisfies(atom.config.get('welcome.lastViewedChangeLog'));
  }
  update() {}
  serialize() {
    return {
      deserializer: 'ChangeLogView',
      uri: this.props.uri
    };
  }
  render() {
    return _etch.default.dom("div", {
      className: "welcome"
    }, _etch.default.dom("div", {
      className: "welcome-container"
    }, _etch.default.dom("div", {
      className: "header"
    }, _etch.default.dom("a", {
      title: "Full Change Log",
      href: "https://github.com/pulsar-edit/pulsar/blob/master/CHANGELOG.md"
    }, _etch.default.dom("h1", {
      className: "welcome-title"
    }, "Change Log"))), _etch.default.dom("div", {
      className: "welcome-panel"
    }, _etch.default.dom("p", null, "Take a look at some of the awesome things ", atom.branding.name, " has changed:"), _etch.default.dom("p", null, "Feel free to read our ", _etch.default.dom("a", {
      href: "https://github.com/pulsar-edit/pulsar/blob/master/CHANGELOG.md"
    }, "Full Change Log"), "."), _etch.default.dom("ul", null, _etch.default.dom("li", null, "Added a SQL State Storage alternative to IndexedDB (opt-in, off by default)."), _etch.default.dom("li", null, "Repackaged the AppImage so it uses our launcher script internally (supports more CLI/launch flags)."), _etch.default.dom("li", null, "[language-php] Highlighted \u201Cnull-safe\u201D property access correctly."), _etch.default.dom("li", null, "[language-c] Scoped template delimiters properly in C++."), _etch.default.dom("li", null, "[language-c] Consolidated common highlighting queries between the C and C++ grammars for more consistency in syntax highlighting."), _etch.default.dom("li", null, "Fixed incorrect behavior in certain scenarios for \u201CFold at Indent Level X\u201D commands."), _etch.default.dom("li", null, "Fixed exception when resolving divided folds (e.g., ", _etch.default.dom("code", null, "#ifdefs"), " in C/C++)."), _etch.default.dom("li", null, "Avoided \"length of null\" error in autocomplete-plus for the PHP Tree-sitter grammar."), _etch.default.dom("li", null, "Preserved ", _etch.default.dom("code", null, "/usr/bin/pulsar"), " and ", _etch.default.dom("code", null, "/usr/bin/ppm"), " on RPM updates."), _etch.default.dom("li", null, "[tree-view] Moved to a more modern API for file removal in preparation for an Electron upgrade.")), _etch.default.dom("section", {
      className: "welcome-panel"
    }, _etch.default.dom("label", null, _etch.default.dom("input", {
      className: "input-checkbox",
      type: "checkbox",
      checked: atom.config.get('welcome.showChangeLog'),
      onchange: this.didChangeShowChangeLog
    }), "Show the Change Log after an update.")), _etch.default.dom("section", {
      className: "welcome-panel"
    }, _etch.default.dom("label", null, _etch.default.dom("input", {
      className: "input-checkbox",
      type: "checkbox",
      checked: this.wasVersionDismissed(),
      onchange: this.dismissVersion
    }), "Dismiss this Change Log")))));
  }
  getURI() {
    return this.props.uri;
  }
  getTitle() {
    return 'Change Log';
  }
  isEqual(other) {
    return other instanceof ChangeLogView;
  }
}
exports.default = ChangeLogView;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaGFuZ2VMb2dWaWV3IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV0Y2giLCJpbml0aWFsaXplIiwiZGlkQ2hhbmdlU2hvd0NoYW5nZUxvZyIsImF0b20iLCJjb25maWciLCJzZXQiLCJjaGVja2VkIiwiZGlzbWlzc1ZlcnNpb24iLCJnZXRWZXJzaW9uIiwic3BsaXQiLCJ3YXNWZXJzaW9uRGlzbWlzc2VkIiwidmVyc2lvblNhdGlzZmllcyIsImdldCIsInVwZGF0ZSIsInNlcmlhbGl6ZSIsImRlc2VyaWFsaXplciIsInVyaSIsInJlbmRlciIsImJyYW5kaW5nIiwibmFtZSIsImdldFVSSSIsImdldFRpdGxlIiwiaXNFcXVhbCIsIm90aGVyIl0sInNvdXJjZXMiOlsiY2hhbmdlbG9nLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuLyoqIEBqc3ggZXRjaC5kb20gKi9cblxuaW1wb3J0IGV0Y2ggZnJvbSAnZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUxvZ1ZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICBldGNoLmluaXRpYWxpemUodGhpcyk7XG4gIH1cblxuICBkaWRDaGFuZ2VTaG93Q2hhbmdlTG9nKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5zaG93Q2hhbmdlTG9nJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIGRpc21pc3NWZXJzaW9uKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5sYXN0Vmlld2VkQ2hhbmdlTG9nJywgYXRvbS5nZXRWZXJzaW9uKCkuc3BsaXQoXCIgXCIpWzBdKTtcbiAgfVxuXG4gIHdhc1ZlcnNpb25EaXNtaXNzZWQoKSB7XG4gICAgLy8gVXNlIHRoZSBuZXcgYC52ZXJzaW9uU2F0aXNmaWVzKClgIEFQSSB0byBjaGVjayBpZiBvdXIgbGFzdCBkaXNtaXNzZWQgdmVyc2lvblxuICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZlcnNpb24uIGAudmVyc2lvblNhdGlzZmllcygpYCBjb21wYXJlcyBlcXVhbGl0eVxuICAgIC8vIGJ5IGRlZmF1bHQsIHNvIG5vIGNvbXBhcmF0b3IgaXMgbmVlZGVkXG4gICAgcmV0dXJuIGF0b20udmVyc2lvblNhdGlzZmllcyhhdG9tLmNvbmZpZy5nZXQoJ3dlbGNvbWUubGFzdFZpZXdlZENoYW5nZUxvZycpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHt9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNlcmlhbGl6ZXI6ICdDaGFuZ2VMb2dWaWV3JyxcbiAgICAgIHVyaTogdGhpcy5wcm9wcy51cmlcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8YSB0aXRsZT1cIkZ1bGwgQ2hhbmdlIExvZ1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPlxuICAgICAgICAgICAgICB7LyogTE9HTyBHT0VTIEhFUkUgKi99XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQ2hhbmdlIExvZ1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1wYW5lbFwiPlxuICAgICAgICAgICAgPHA+VGFrZSBhIGxvb2sgYXQgc29tZSBvZiB0aGUgYXdlc29tZSB0aGluZ3Mge2F0b20uYnJhbmRpbmcubmFtZX0gaGFzIGNoYW5nZWQ6PC9wPlxuICAgICAgICAgICAgPHA+RmVlbCBmcmVlIHRvIHJlYWQgb3VyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPkZ1bGwgQ2hhbmdlIExvZzwvYT4uPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQWRkZWQgYSBTUUwgU3RhdGUgU3RvcmFnZSBhbHRlcm5hdGl2ZSB0byBJbmRleGVkREIgKG9wdC1pbiwgb2ZmIGJ5IGRlZmF1bHQpLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgUmVwYWNrYWdlZCB0aGUgQXBwSW1hZ2Ugc28gaXQgdXNlcyBvdXIgbGF1bmNoZXIgc2NyaXB0IGludGVybmFsbHkgKHN1cHBvcnRzIG1vcmUgQ0xJL2xhdW5jaCBmbGFncykuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBbbGFuZ3VhZ2UtcGhwXSBIaWdobGlnaHRlZCDigJxudWxsLXNhZmXigJ0gcHJvcGVydHkgYWNjZXNzIGNvcnJlY3RseS5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFtsYW5ndWFnZS1jXSBTY29wZWQgdGVtcGxhdGUgZGVsaW1pdGVycyBwcm9wZXJseSBpbiBDKysuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBbbGFuZ3VhZ2UtY10gQ29uc29saWRhdGVkIGNvbW1vbiBoaWdobGlnaHRpbmcgcXVlcmllcyBiZXR3ZWVuIHRoZSBDIGFuZCBDKysgZ3JhbW1hcnMgZm9yIG1vcmUgY29uc2lzdGVuY3kgaW4gc3ludGF4IGhpZ2hsaWdodGluZy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEZpeGVkIGluY29ycmVjdCBiZWhhdmlvciBpbiBjZXJ0YWluIHNjZW5hcmlvcyBmb3Ig4oCcRm9sZCBhdCBJbmRlbnQgTGV2ZWwgWOKAnSBjb21tYW5kcy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEZpeGVkIGV4Y2VwdGlvbiB3aGVuIHJlc29sdmluZyBkaXZpZGVkIGZvbGRzIChlLmcuLCA8Y29kZT4jaWZkZWZzPC9jb2RlPiBpbiBDL0MrKykuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBdm9pZGVkIFwibGVuZ3RoIG9mIG51bGxcIiBlcnJvciBpbiBhdXRvY29tcGxldGUtcGx1cyBmb3IgdGhlIFBIUCBUcmVlLXNpdHRlciBncmFtbWFyLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgUHJlc2VydmVkIDxjb2RlPi91c3IvYmluL3B1bHNhcjwvY29kZT4gYW5kIDxjb2RlPi91c3IvYmluL3BwbTwvY29kZT4gb24gUlBNIHVwZGF0ZXMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBbdHJlZS12aWV3XSBNb3ZlZCB0byBhIG1vcmUgbW9kZXJuIEFQSSBmb3IgZmlsZSByZW1vdmFsIGluIHByZXBhcmF0aW9uIGZvciBhbiBFbGVjdHJvbiB1cGdyYWRlLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2VsY29tZS1wYW5lbFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXthdG9tLmNvbmZpZy5nZXQoJ3dlbGNvbWUuc2hvd0NoYW5nZUxvZycpfVxuICAgICAgICAgICAgICAgICAgb25jaGFuZ2U9e3RoaXMuZGlkQ2hhbmdlU2hvd0NoYW5nZUxvZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIFNob3cgdGhlIENoYW5nZSBMb2cgYWZ0ZXIgYW4gdXBkYXRlLlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2VsY29tZS1wYW5lbFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImlucHV0LWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLndhc1ZlcnNpb25EaXNtaXNzZWQoKX1cbiAgICAgICAgICAgICAgICAgIG9uY2hhbmdlPXt0aGlzLmRpc21pc3NWZXJzaW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgRGlzbWlzcyB0aGlzIENoYW5nZSBMb2dcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZ2V0VVJJKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnVyaTtcbiAgfVxuXG4gIGdldFRpdGxlKCkge1xuICAgIHJldHVybiAnQ2hhbmdlIExvZyc7XG4gIH1cblxuICBpc0VxdWFsKG90aGVyKSB7XG4gICAgcmV0dXJuIG90aGVyIGluc3RhbmNlb2YgQ2hhbmdlTG9nVmlldztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7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