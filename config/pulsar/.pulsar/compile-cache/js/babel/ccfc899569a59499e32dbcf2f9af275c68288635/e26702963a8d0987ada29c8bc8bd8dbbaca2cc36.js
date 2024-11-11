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
    }, "Full Change Log"), "."), _etch.default.dom("ul", null, _etch.default.dom("li", null, "Resolved some issues of using ", _etch.default.dom("code", null, "pulsar -p"), " to access ", _etch.default.dom("code", null, "ppm"), " in the command line on Windows."), _etch.default.dom("li", null, "Added a new icon for Pulsar on Windows, increasing it's visual fidelity in most locations."), _etch.default.dom("li", null, "[snippets] Fixed an issue with expanding snippet variables in certain scenarios if the snippet inserted new lines into the buffer."), _etch.default.dom("li", null, "Updated misconfigured links in the ", _etch.default.dom("code", null, "CONTRIBUTING.md"), " file."), _etch.default.dom("li", null, "[ppm] Resolved an issue that could prevent renaming an existing package."), _etch.default.dom("li", null, "Various Tree-sitter improvements (folds, indents, custom queries, grammar updates...)")), _etch.default.dom("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaGFuZ2VMb2dWaWV3IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImV0Y2giLCJpbml0aWFsaXplIiwiZGlkQ2hhbmdlU2hvd0NoYW5nZUxvZyIsImF0b20iLCJjb25maWciLCJzZXQiLCJjaGVja2VkIiwiZGlzbWlzc1ZlcnNpb24iLCJnZXRWZXJzaW9uIiwic3BsaXQiLCJ3YXNWZXJzaW9uRGlzbWlzc2VkIiwidmVyc2lvblNhdGlzZmllcyIsImdldCIsInVwZGF0ZSIsInNlcmlhbGl6ZSIsImRlc2VyaWFsaXplciIsInVyaSIsInJlbmRlciIsImJyYW5kaW5nIiwibmFtZSIsImdldFVSSSIsImdldFRpdGxlIiwiaXNFcXVhbCIsIm90aGVyIl0sInNvdXJjZXMiOlsiY2hhbmdlbG9nLXZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBiYWJlbCAqL1xuLyoqIEBqc3ggZXRjaC5kb20gKi9cblxuaW1wb3J0IGV0Y2ggZnJvbSAnZXRjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZUxvZ1ZpZXcge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICBldGNoLmluaXRpYWxpemUodGhpcyk7XG4gIH1cblxuICBkaWRDaGFuZ2VTaG93Q2hhbmdlTG9nKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5zaG93Q2hhbmdlTG9nJywgdGhpcy5jaGVja2VkKTtcbiAgfVxuXG4gIGRpc21pc3NWZXJzaW9uKCkge1xuICAgIGF0b20uY29uZmlnLnNldCgnd2VsY29tZS5sYXN0Vmlld2VkQ2hhbmdlTG9nJywgYXRvbS5nZXRWZXJzaW9uKCkuc3BsaXQoXCIgXCIpWzBdKTtcbiAgfVxuXG4gIHdhc1ZlcnNpb25EaXNtaXNzZWQoKSB7XG4gICAgLy8gVXNlIHRoZSBuZXcgYC52ZXJzaW9uU2F0aXNmaWVzKClgIEFQSSB0byBjaGVjayBpZiBvdXIgbGFzdCBkaXNtaXNzZWQgdmVyc2lvblxuICAgIC8vIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IHZlcnNpb24uIGAudmVyc2lvblNhdGlzZmllcygpYCBjb21wYXJlcyBlcXVhbGl0eVxuICAgIC8vIGJ5IGRlZmF1bHQsIHNvIG5vIGNvbXBhcmF0b3IgaXMgbmVlZGVkXG4gICAgcmV0dXJuIGF0b20udmVyc2lvblNhdGlzZmllcyhhdG9tLmNvbmZpZy5nZXQoJ3dlbGNvbWUubGFzdFZpZXdlZENoYW5nZUxvZycpKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHt9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNlcmlhbGl6ZXI6ICdDaGFuZ2VMb2dWaWV3JyxcbiAgICAgIHVyaTogdGhpcy5wcm9wcy51cmlcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8YSB0aXRsZT1cIkZ1bGwgQ2hhbmdlIExvZ1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPlxuICAgICAgICAgICAgICB7LyogTE9HTyBHT0VTIEhFUkUgKi99XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3ZWxjb21lLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgQ2hhbmdlIExvZ1xuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1wYW5lbFwiPlxuICAgICAgICAgICAgPHA+VGFrZSBhIGxvb2sgYXQgc29tZSBvZiB0aGUgYXdlc29tZSB0aGluZ3Mge2F0b20uYnJhbmRpbmcubmFtZX0gaGFzIGNoYW5nZWQ6PC9wPlxuICAgICAgICAgICAgPHA+RmVlbCBmcmVlIHRvIHJlYWQgb3VyIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHVsc2FyLWVkaXQvcHVsc2FyL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZFwiPkZ1bGwgQ2hhbmdlIExvZzwvYT4uPC9wPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgUmVzb2x2ZWQgc29tZSBpc3N1ZXMgb2YgdXNpbmcgPGNvZGU+cHVsc2FyIC1wPC9jb2RlPiB0byBhY2Nlc3MgPGNvZGU+cHBtPC9jb2RlPiBpbiB0aGUgY29tbWFuZCBsaW5lIG9uIFdpbmRvd3MuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBBZGRlZCBhIG5ldyBpY29uIGZvciBQdWxzYXIgb24gV2luZG93cywgaW5jcmVhc2luZyBpdCdzIHZpc3VhbCBmaWRlbGl0eSBpbiBtb3N0IGxvY2F0aW9ucy5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFtzbmlwcGV0c10gRml4ZWQgYW4gaXNzdWUgd2l0aCBleHBhbmRpbmcgc25pcHBldCB2YXJpYWJsZXMgaW4gY2VydGFpbiBzY2VuYXJpb3MgaWYgdGhlIHNuaXBwZXQgaW5zZXJ0ZWQgbmV3IGxpbmVzIGludG8gdGhlIGJ1ZmZlci5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIFVwZGF0ZWQgbWlzY29uZmlndXJlZCBsaW5rcyBpbiB0aGUgPGNvZGU+Q09OVFJJQlVUSU5HLm1kPC9jb2RlPiBmaWxlLlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgW3BwbV0gUmVzb2x2ZWQgYW4gaXNzdWUgdGhhdCBjb3VsZCBwcmV2ZW50IHJlbmFtaW5nIGFuIGV4aXN0aW5nIHBhY2thZ2UuXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICBWYXJpb3VzIFRyZWUtc2l0dGVyIGltcHJvdmVtZW50cyAoZm9sZHMsIGluZGVudHMsIGN1c3RvbSBxdWVyaWVzLCBncmFtbWFyIHVwZGF0ZXMuLi4pXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3ZWxjb21lLXBhbmVsXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2F0b20uY29uZmlnLmdldCgnd2VsY29tZS5zaG93Q2hhbmdlTG9nJyl9XG4gICAgICAgICAgICAgICAgICBvbmNoYW5nZT17dGhpcy5kaWRDaGFuZ2VTaG93Q2hhbmdlTG9nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgU2hvdyB0aGUgQ2hhbmdlIExvZyBhZnRlciBhbiB1cGRhdGUuXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3ZWxjb21lLXBhbmVsXCI+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiaW5wdXQtY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMud2FzVmVyc2lvbkRpc21pc3NlZCgpfVxuICAgICAgICAgICAgICAgICAgb25jaGFuZ2U9e3RoaXMuZGlzbWlzc1ZlcnNpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBEaXNtaXNzIHRoaXMgQ2hhbmdlIExvZ1xuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXRVUkkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcHMudXJpO1xuICB9XG5cbiAgZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuICdDaGFuZ2UgTG9nJztcbiAgfVxuXG4gIGlzRXF1YWwob3RoZXIpIHtcbiAgICByZXR1cm4gb3RoZXIgaW5zdGFuY2VvZiBDaGFuZ2VMb2dWaWV3O1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBO0FBQXdCO0FBSHhCO0FBQ0E7O0FBSWUsTUFBTUEsYUFBYSxDQUFDO0VBQ2pDQyxXQUFXLENBQUNDLEtBQUssRUFBRTtJQUNqQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUNsQkMsYUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3ZCO0VBRUFDLHNCQUFzQixHQUFHO0lBQ3ZCQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDO0VBQ3hEO0VBRUFDLGNBQWMsR0FBRztJQUNmSixJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLDZCQUE2QixFQUFFRixJQUFJLENBQUNLLFVBQVUsRUFBRSxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDakY7RUFFQUMsbUJBQW1CLEdBQUc7SUFDcEI7SUFDQTtJQUNBO0lBQ0EsT0FBT1AsSUFBSSxDQUFDUSxnQkFBZ0IsQ0FBQ1IsSUFBSSxDQUFDQyxNQUFNLENBQUNRLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0VBQzlFO0VBRUFDLE1BQU0sR0FBRyxDQUFDO0VBRVZDLFNBQVMsR0FBRztJQUNWLE9BQU87TUFDTEMsWUFBWSxFQUFFLGVBQWU7TUFDN0JDLEdBQUcsRUFBRSxJQUFJLENBQUNqQixLQUFLLENBQUNpQjtJQUNsQixDQUFDO0VBQ0g7RUFFQUMsTUFBTSxHQUFHO0lBQ1AsT0FDRTtNQUFLLFNBQVMsRUFBQztJQUFTLEdBQ3RCO01BQUssU0FBUyxFQUFDO0lBQW1CLEdBQ2hDO01BQUssU0FBUyxFQUFDO0lBQVEsR0FDckI7TUFBRyxLQUFLLEVBQUMsaUJBQWlCO01BQUMsSUFBSSxFQUFDO0lBQWdFLEdBRTlGO01BQUksU0FBUyxFQUFDO0lBQWUsZ0JBRXhCLENBQ0gsQ0FDQSxFQUNOO01BQUssU0FBUyxFQUFDO0lBQWUsR0FDNUIsMkVBQThDZCxJQUFJLENBQUNlLFFBQVEsQ0FBQ0MsSUFBSSxrQkFBa0IsRUFDbEYsdURBQXlCO01BQUcsSUFBSSxFQUFDO0lBQWdFLHFCQUFvQixNQUFLLEVBQzFILDhCQUNFLGdFQUNnQyw0Q0FBc0IsaUJBQVcsc0NBQWdCLHFDQUM1RSxFQUNMLDJIQUVLLEVBQ0wsbUtBRUssRUFDTCxxRUFDcUMsa0RBQTRCLFdBQzVELEVBQ0wseUdBRUssRUFDTCxzSEFFSyxDQUNGLEVBRUw7TUFBUyxTQUFTLEVBQUM7SUFBZSxHQUNoQyxpQ0FDRTtNQUFPLFNBQVMsRUFBQyxnQkFBZ0I7TUFDL0IsSUFBSSxFQUFDLFVBQVU7TUFDZixPQUFPLEVBQUVoQixJQUFJLENBQUNDLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDLHVCQUF1QixDQUFFO01BQ2xELFFBQVEsRUFBRSxJQUFJLENBQUNWO0lBQXVCLEVBQ3RDLHlDQUVJLENBQ0EsRUFDVjtNQUFTLFNBQVMsRUFBQztJQUFlLEdBQ2hDLGlDQUNFO01BQU8sU0FBUyxFQUFDLGdCQUFnQjtNQUMvQixJQUFJLEVBQUMsVUFBVTtNQUNmLE9BQU8sRUFBRSxJQUFJLENBQUNRLG1CQUFtQixFQUFHO01BQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUNIO0lBQWUsRUFDOUIsNEJBRUksQ0FDQSxDQUNOLENBQ0YsQ0FDRjtFQUVWO0VBRUFhLE1BQU0sR0FBRztJQUNQLE9BQU8sSUFBSSxDQUFDckIsS0FBSyxDQUFDaUIsR0FBRztFQUN2QjtFQUVBSyxRQUFRLEdBQUc7SUFDVCxPQUFPLFlBQVk7RUFDckI7RUFFQUMsT0FBTyxDQUFDQyxLQUFLLEVBQUU7SUFDYixPQUFPQSxLQUFLLFlBQVkxQixhQUFhO0VBQ3ZDO0FBQ0Y7QUFBQztBQUFBIn0=