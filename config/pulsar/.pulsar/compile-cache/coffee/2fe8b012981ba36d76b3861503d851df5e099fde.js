(function() {
  module.exports = {
    config: {
      colourlessIcons: {
        type: 'boolean',
        "default": true,
        description: "Tick to force colourless tab icons"
      }
    },
    activate: function(state) {
      var self, varKey;
      varKey = 'predawn-ui.colourlessIcons';
      self = this;
      atom.config.onDidChange(varKey, function(arg) {
        var newValue, oldValue;
        newValue = arg.newValue, oldValue = arg.oldValue;
        return self.setColoured(newValue);
      });
      return this.setColoured(atom.config.get(varKey));
    },
    setColoured: function(enable) {
      var tabBar;
      tabBar = document.querySelector('.tab-bar');
      if (!enable) {
        return tabBar.className = tabBar.className.replace(/\scolourless-icons/, '');
      } else {
        return tabBar.className = tabBar.className + " " + 'colourless-icons';
      }
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2phc29uZXVuLy5wdWxzYXIvcGFja2FnZXMvcHJlZGF3bi11aS9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxNQUFNLENBQUMsT0FBUCxHQUNFO0lBQUEsTUFBQSxFQUNFO01BQUEsZUFBQSxFQUNFO1FBQUEsSUFBQSxFQUFNLFNBQU47UUFDQSxDQUFBLE9BQUEsQ0FBQSxFQUFTLElBRFQ7UUFFQSxXQUFBLEVBQWEsb0NBRmI7T0FERjtLQURGO0lBS0EsUUFBQSxFQUFVLFNBQUMsS0FBRDtBQUNSLFVBQUE7TUFBQSxNQUFBLEdBQVM7TUFDVCxJQUFBLEdBQU87TUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVosQ0FBd0IsTUFBeEIsRUFBZ0MsU0FBQyxHQUFEO0FBQzlCLFlBQUE7UUFEZ0MseUJBQVU7ZUFDMUMsSUFBSSxDQUFDLFdBQUwsQ0FBaUIsUUFBakI7TUFEOEIsQ0FBaEM7YUFFQSxJQUFDLENBQUEsV0FBRCxDQUFhLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixNQUFoQixDQUFiO0lBTFEsQ0FMVjtJQVdBLFdBQUEsRUFBYSxTQUFDLE1BQUQ7QUFDWCxVQUFBO01BQUEsTUFBQSxHQUFTLFFBQVEsQ0FBQyxhQUFULENBQXVCLFVBQXZCO01BQ1QsSUFBRyxDQUFDLE1BQUo7ZUFDRSxNQUFNLENBQUMsU0FBUCxHQUFtQixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQWpCLENBQXlCLG9CQUF6QixFQUErQyxFQUEvQyxFQURyQjtPQUFBLE1BQUE7ZUFHRSxNQUFNLENBQUMsU0FBUCxHQUFtQixNQUFNLENBQUMsU0FBUCxHQUFtQixHQUFuQixHQUF5QixtQkFIOUM7O0lBRlcsQ0FYYjs7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID1cbiAgY29uZmlnOlxuICAgIGNvbG91cmxlc3NJY29uczpcbiAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgZGVzY3JpcHRpb246IFwiVGljayB0byBmb3JjZSBjb2xvdXJsZXNzIHRhYiBpY29uc1wiXG4gIGFjdGl2YXRlOiAoc3RhdGUpIC0+XG4gICAgdmFyS2V5ID0gJ3ByZWRhd24tdWkuY29sb3VybGVzc0ljb25zJ1xuICAgIHNlbGYgPSBAXG4gICAgYXRvbS5jb25maWcub25EaWRDaGFuZ2UgdmFyS2V5LCAoe25ld1ZhbHVlLCBvbGRWYWx1ZX0pIC0+XG4gICAgICBzZWxmLnNldENvbG91cmVkKG5ld1ZhbHVlKVxuICAgIEBzZXRDb2xvdXJlZChhdG9tLmNvbmZpZy5nZXQodmFyS2V5KSlcbiAgc2V0Q29sb3VyZWQ6IChlbmFibGUpIC0+XG4gICAgdGFiQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYi1iYXInKVxuICAgIGlmICFlbmFibGVcbiAgICAgIHRhYkJhci5jbGFzc05hbWUgPSB0YWJCYXIuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2NvbG91cmxlc3MtaWNvbnMvLCAnJylcbiAgICBlbHNlXG4gICAgICB0YWJCYXIuY2xhc3NOYW1lID0gdGFiQmFyLmNsYXNzTmFtZSArIFwiIFwiICsgJ2NvbG91cmxlc3MtaWNvbnMnXG4iXX0=
