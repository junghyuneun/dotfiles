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
    }, "Full Change Log"), "."), _etch.default.dom("ul", null, _etch.default.dom("li", null, "Updated ", _etch.default.dom("code", null, "web-tree-sitter"), " to version 0.23.0."), _etch.default.dom("li", null, "[language-css] Updated ", _etch.default.dom("code", null, "tree-sitter-css"), " to the latest version"), _etch.default.dom("li", null, "[language-gfm] Updated ", _etch.default.dom("code", null, "tree-sitter-markdown"), " to the latest version."), _etch.default.dom("li", null, "[language-html] Updated ", _etch.default.dom("code", null, "tree-sitter-html"), " and ", _etch.default.dom("code", null, "tree-sitter-embedded-template"), " to their latest versions."), _etch.default.dom("li", null, "[language-javascript] Updated ", _etch.default.dom("code", null, "tree-sitter-javascript"), " to the latest version."), _etch.default.dom("li", null, "[language-typescript] Updated ", _etch.default.dom("code", null, "tree-sitter-typescript"), " to the latest version."), _etch.default.dom("li", null, "Added a new ", _etch.default.dom("code", null, "@match.next"), " capture for advanced control of how indentation should change from one line to the next."), _etch.default.dom("li", null, "Added new indentation-specific query predicates ", _etch.default.dom("code", null, "indent.matchesComparisonRow"), " and ", _etch.default.dom("code", null, "indent.matchesCurrentRow"), " for comparing arbitrary positions in a Tree-sitter node tree to the operative rows in an indentation suggestion query. Makes it possible to say things like \u201Cdecrease the indent on line 10 if a statement ends on line 9.\u201D"), _etch.default.dom("li", null, "Renamed indentation directives ", _etch.default.dom("code", null, "indent.matchIndentOf"), " and ", _etch.default.dom("code", null, "indent.offsetIndent"), " to ", _etch.default.dom("code", null, "indent.match"), " and ", _etch.default.dom("code", null, "indent.offset"), ", respectively. The old names still work as aliases."), _etch.default.dom("li", null, "Improved the command-line ", _etch.default.dom("code", null, "pulsar"), " script\u2019s ability to find the user\u2019s Pulsar installation location on Linux."), _etch.default.dom("li", null, "On macOS and Linux, ", _etch.default.dom("code", null, "pulsar -p"), " now invokes ", _etch.default.dom("code", null, "ppm"), " without having to launch Pulsar itself."), _etch.default.dom("li", null, "Added options to the Windows installer to add Pulsar and PPM to the PATH"), _etch.default.dom("li", null, "Fixed ", _etch.default.dom("code", null, "ppm rebuild"), " command on ARM (Apple Silicon) Macs")), _etch.default.dom("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaGFuZ2VMb2dWaWV3IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV0Y2giLCJpbml0aWFsaXplIiwiZGlkQ2hhbmdlU2hvd0NoYW5nZUxvZyIsImF0b20iLCJjb25maWciLCJzZXQiLCJjaGVja2VkIiwiZGlzbWlzc1ZlcnNpb24iLCJnZXRWZXJzaW9uIiwic3BsaXQiLCJ3YXNWZXJzaW9uRGlzbWlzc2VkIiwidmVyc2lvblNhdGlzZmllcyIsImdldCIsInVwZGF0ZSIsInNlcmlhbGl6ZSIsImRlc2VyaWFsaXplciIsInVyaSIsInJlbmRlciIsImJyYW5kaW5nIiwibmFtZSIsImdldFVSSSIsImdldFRpdGxlIiwiaXNFcXVhbCIsIm90aGVyIl0sInNvdXJjZXMiOlsiY2hhbmdlbG9nLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuLyoqIEBqc3ggZXRjaC5kb20gKi9cblxuaW1wb3J0IGV0Y2ggZnJvbSAnZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUxvZ1ZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICBldGNoLmluaXRpYWxpemUodGhpcyk7XG4gIH1cblxuICBkaWRDaGFuZ2VTaG93Q2hhbmdlTG9nKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5zaG93Q2hhbmdlTG9nJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIGRpc21pc3NWZXJzaW9uKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5sYXN0Vmlld2VkQ2hhbmdlTG9nJywgYXRvbS5nZXRWZXJzaW9uKCkuc3BsaXQoXCIgXCIpWzBdKTtcbiAgfVxuXG4gIHdhc1ZlcnNpb25EaXNtaXNzZWQoKSB7XG4gICAgLy8gVXNlIHRoZSBuZXcgYC52ZXJzaW9uU2F0aXNmaWVzKClgIEFQSSB0byBjaGVjayBpZiBvdXIgbGFzdCBkaXNtaXNzZWQgdmVyc2lvblxuICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZlcnNpb24uIGAudmVyc2lvblNhdGlzZmllcygpYCBjb21wYXJlcyBlcXVhbGl0eVxuICAgIC8vIGJ5IGRlZmF1bHQsIHNvIG5vIGNvbXBhcmF0b3IgaXMgbmVlZGVkXG4gICAgcmV0dXJuIGF0b20udmVyc2lvblNhdGlzZmllcyhhdG9tLmNvbmZpZy5nZXQoJ3dlbGNvbWUubGFzdFZpZXdlZENoYW5nZUxvZycpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHt9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNlcmlhbGl6ZXI6ICdDaGFuZ2VMb2dWaWV3JyxcbiAgICAgIHVyaTogdGhpcy5wcm9wcy51cmlcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8YSB0aXRsZT1cIkZ1bGwgQ2hhbmdlIExvZ1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPlxuICAgICAgICAgICAgICB7LyogTE9HTyBHT0VTIEhFUkUgKi99XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQ2hhbmdlIExvZ1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1wYW5lbFwiPlxuICAgICAgICAgICAgPHA+VGFrZSBhIGxvb2sgYXQgc29tZSBvZiB0aGUgYXdlc29tZSB0aGluZ3Mge2F0b20uYnJhbmRpbmcubmFtZX0gaGFzIGNoYW5nZWQ6PC9wPlxuICAgICAgICAgICAgPHA+RmVlbCBmcmVlIHRvIHJlYWQgb3VyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPkZ1bGwgQ2hhbmdlIExvZzwvYT4uPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgVXBkYXRlZCA8Y29kZT53ZWItdHJlZS1zaXR0ZXI8L2NvZGU+IHRvIHZlcnNpb24gMC4yMy4wLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgW2xhbmd1YWdlLWNzc10gVXBkYXRlZCA8Y29kZT50cmVlLXNpdHRlci1jc3M8L2NvZGU+IHRvIHRoZSBsYXRlc3QgdmVyc2lvblxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgW2xhbmd1YWdlLWdmbV0gVXBkYXRlZCA8Y29kZT50cmVlLXNpdHRlci1tYXJrZG93bjwvY29kZT4gdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgW2xhbmd1YWdlLWh0bWxdIFVwZGF0ZWQgPGNvZGU+dHJlZS1zaXR0ZXItaHRtbDwvY29kZT4gYW5kIDxjb2RlPnRyZWUtc2l0dGVyLWVtYmVkZGVkLXRlbXBsYXRlPC9jb2RlPiB0byB0aGVpciBsYXRlc3QgdmVyc2lvbnMuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBbbGFuZ3VhZ2UtamF2YXNjcmlwdF0gVXBkYXRlZCA8Y29kZT50cmVlLXNpdHRlci1qYXZhc2NyaXB0PC9jb2RlPiB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBbbGFuZ3VhZ2UtdHlwZXNjcmlwdF0gVXBkYXRlZCA8Y29kZT50cmVlLXNpdHRlci10eXBlc2NyaXB0PC9jb2RlPiB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBZGRlZCBhIG5ldyA8Y29kZT5AbWF0Y2gubmV4dDwvY29kZT4gY2FwdHVyZSBmb3IgYWR2YW5jZWQgY29udHJvbCBvZiBob3cgaW5kZW50YXRpb24gc2hvdWxkIGNoYW5nZSBmcm9tIG9uZSBsaW5lIHRvIHRoZSBuZXh0LlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQWRkZWQgbmV3IGluZGVudGF0aW9uLXNwZWNpZmljIHF1ZXJ5IHByZWRpY2F0ZXMgPGNvZGU+aW5kZW50Lm1hdGNoZXNDb21wYXJpc29uUm93PC9jb2RlPiBhbmQgPGNvZGU+aW5kZW50Lm1hdGNoZXNDdXJyZW50Um93PC9jb2RlPiBmb3IgY29tcGFyaW5nIGFyYml0cmFyeSBwb3NpdGlvbnMgaW4gYSBUcmVlLXNpdHRlciBub2RlIHRyZWUgdG8gdGhlIG9wZXJhdGl2ZSByb3dzIGluIGFuIGluZGVudGF0aW9uIHN1Z2dlc3Rpb24gcXVlcnkuIE1ha2VzIGl0IHBvc3NpYmxlIHRvIHNheSB0aGluZ3MgbGlrZSDigJxkZWNyZWFzZSB0aGUgaW5kZW50IG9uIGxpbmUgMTAgaWYgYSBzdGF0ZW1lbnQgZW5kcyBvbiBsaW5lIDku4oCdXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBSZW5hbWVkIGluZGVudGF0aW9uIGRpcmVjdGl2ZXMgPGNvZGU+aW5kZW50Lm1hdGNoSW5kZW50T2Y8L2NvZGU+IGFuZCA8Y29kZT5pbmRlbnQub2Zmc2V0SW5kZW50PC9jb2RlPiB0byA8Y29kZT5pbmRlbnQubWF0Y2g8L2NvZGU+IGFuZCA8Y29kZT5pbmRlbnQub2Zmc2V0PC9jb2RlPiwgcmVzcGVjdGl2ZWx5LiBUaGUgb2xkIG5hbWVzIHN0aWxsIHdvcmsgYXMgYWxpYXNlcy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIEltcHJvdmVkIHRoZSBjb21tYW5kLWxpbmUgPGNvZGU+cHVsc2FyPC9jb2RlPiBzY3JpcHTigJlzIGFiaWxpdHkgdG8gZmluZCB0aGUgdXNlcuKAmXMgUHVsc2FyIGluc3RhbGxhdGlvbiBsb2NhdGlvbiBvbiBMaW51eC5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE9uIG1hY09TIGFuZCBMaW51eCwgPGNvZGU+cHVsc2FyIC1wPC9jb2RlPiBub3cgaW52b2tlcyA8Y29kZT5wcG08L2NvZGU+IHdpdGhvdXQgaGF2aW5nIHRvIGxhdW5jaCBQdWxzYXIgaXRzZWxmLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgQWRkZWQgb3B0aW9ucyB0byB0aGUgV2luZG93cyBpbnN0YWxsZXIgdG8gYWRkIFB1bHNhciBhbmQgUFBNIHRvIHRoZSBQQVRIXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBGaXhlZCA8Y29kZT5wcG0gcmVidWlsZDwvY29kZT4gY29tbWFuZCBvbiBBUk0gKEFwcGxlIFNpbGljb24pIE1hY3NcbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUtcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17YXRvbS5jb25maWcuZ2V0KCd3ZWxjb21lLnNob3dDaGFuZ2VMb2cnKX1cbiAgICAgICAgICAgICAgICAgIG9uY2hhbmdlPXt0aGlzLmRpZENoYW5nZVNob3dDaGFuZ2VMb2d9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBTaG93IHRoZSBDaGFuZ2UgTG9nIGFmdGVyIGFuIHVwZGF0ZS5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUtcGFuZWxcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJpbnB1dC1jaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy53YXNWZXJzaW9uRGlzbWlzc2VkKCl9XG4gICAgICAgICAgICAgICAgICBvbmNoYW5nZT17dGhpcy5kaXNtaXNzVmVyc2lvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIERpc21pc3MgdGhpcyBDaGFuZ2UgTG9nXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGdldFVSSSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy51cmk7XG4gIH1cblxuICBnZXRUaXRsZSgpIHtcbiAgICByZXR1cm4gJ0NoYW5nZSBMb2cnO1xuICB9XG5cbiAgaXNFcXVhbChvdGhlcikge1xuICAgIHJldHVybiBvdGhlciBpbnN0YW5jZW9mIENoYW5nZUxvZ1ZpZXc7XG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7QUFBd0I7QUFI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