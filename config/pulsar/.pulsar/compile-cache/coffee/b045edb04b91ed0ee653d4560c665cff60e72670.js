(function() {
  var FileIconSupplementView;

  FileIconSupplementView = require('./file-icon-supplement-view');

  module.exports = {
    config: {
      treeViewIcons: {
        type: 'boolean',
        "default": true
      },
      tabIcons: {
        type: 'boolean',
        "default": true
      },
      fuzzyFinderIcons: {
        type: 'boolean',
        "default": true
      },
      findAndReplaceIcons: {
        type: 'boolean',
        "default": true
      },
      grammarStatusIcons: {
        type: 'boolean',
        "default": true
      },
      grammarSelectorIcons: {
        type: 'boolean',
        "default": true
      }
    },
    fileIconSupplementView: null,
    activate: function(state) {
      return atom.packages.onDidActivateInitialPackages((function(_this) {
        return function() {
          return _this.fileIconSupplementView = new FileIconSupplementView(state.fileIconSupplementViewState);
        };
      })(this));
    },
    deactivate: function() {
      return this.fileIconSupplementView.destroy();
    },
    serialize: function() {
      return {
        fileIconSupplementViewState: this.fileIconSupplementView.serialize()
      };
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2phc29uZXVuLy5wdWxzYXIvcGFja2FnZXMvZmlsZS1pY29uLXN1cHBsZW1lbnQvbGliL2ZpbGUtaWNvbi1zdXBwbGVtZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsc0JBQUEsR0FBeUIsT0FBQSxDQUFRLDZCQUFSOztFQUV6QixNQUFNLENBQUMsT0FBUCxHQUVFO0lBQUEsTUFBQSxFQUNFO01BQUEsYUFBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLElBRFQ7T0FERjtNQUdBLFFBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQURUO09BSkY7TUFNQSxnQkFBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLElBRFQ7T0FQRjtNQVNBLG1CQUFBLEVBQ0U7UUFBQSxJQUFBLEVBQU0sU0FBTjtRQUNBLENBQUEsT0FBQSxDQUFBLEVBQVMsSUFEVDtPQVZGO01BWUEsa0JBQUEsRUFDRTtRQUFBLElBQUEsRUFBTSxTQUFOO1FBQ0EsQ0FBQSxPQUFBLENBQUEsRUFBUyxJQURUO09BYkY7TUFlQSxvQkFBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLElBRFQ7T0FoQkY7S0FERjtJQW9CQSxzQkFBQSxFQUF3QixJQXBCeEI7SUFzQkEsUUFBQSxFQUFVLFNBQUMsS0FBRDthQUNSLElBQUksQ0FBQyxRQUFRLENBQUMsNEJBQWQsQ0FBMkMsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUN6QyxLQUFDLENBQUEsc0JBQUQsR0FDRSxJQUFJLHNCQUFKLENBQTJCLEtBQUssQ0FBQywyQkFBakM7UUFGdUM7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTNDO0lBRFEsQ0F0QlY7SUEyQkEsVUFBQSxFQUFZLFNBQUE7YUFDVixJQUFDLENBQUEsc0JBQXNCLENBQUMsT0FBeEIsQ0FBQTtJQURVLENBM0JaO0lBOEJBLFNBQUEsRUFBVyxTQUFBO2FBQ1Q7UUFBQSwyQkFBQSxFQUE2QixJQUFDLENBQUEsc0JBQXNCLENBQUMsU0FBeEIsQ0FBQSxDQUE3Qjs7SUFEUyxDQTlCWDs7QUFKRiIsInNvdXJjZXNDb250ZW50IjpbIkZpbGVJY29uU3VwcGxlbWVudFZpZXcgPSByZXF1aXJlICcuL2ZpbGUtaWNvbi1zdXBwbGVtZW50LXZpZXcnXG5cbm1vZHVsZS5leHBvcnRzID1cblxuICBjb25maWc6XG4gICAgdHJlZVZpZXdJY29uczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIHRhYkljb25zOlxuICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICBkZWZhdWx0OiB0cnVlXG4gICAgZnV6enlGaW5kZXJJY29uczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgIGZpbmRBbmRSZXBsYWNlSWNvbnM6XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICBncmFtbWFyU3RhdHVzSWNvbnM6XG4gICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICBncmFtbWFyU2VsZWN0b3JJY29uczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuXG4gIGZpbGVJY29uU3VwcGxlbWVudFZpZXc6IG51bGxcblxuICBhY3RpdmF0ZTogKHN0YXRlKSAtPlxuICAgIGF0b20ucGFja2FnZXMub25EaWRBY3RpdmF0ZUluaXRpYWxQYWNrYWdlcyAoKSA9PlxuICAgICAgQGZpbGVJY29uU3VwcGxlbWVudFZpZXcgPVxuICAgICAgICBuZXcgRmlsZUljb25TdXBwbGVtZW50VmlldyBzdGF0ZS5maWxlSWNvblN1cHBsZW1lbnRWaWV3U3RhdGVcblxuICBkZWFjdGl2YXRlOiAtPlxuICAgIEBmaWxlSWNvblN1cHBsZW1lbnRWaWV3LmRlc3Ryb3koKVxuXG4gIHNlcmlhbGl6ZTogLT5cbiAgICBmaWxlSWNvblN1cHBsZW1lbnRWaWV3U3RhdGU6IEBmaWxlSWNvblN1cHBsZW1lbnRWaWV3LnNlcmlhbGl6ZSgpXG4iXX0=
