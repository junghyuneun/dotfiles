(function() {
  var $, CompositeDisposable, Directory, FileIconSupplementView, View, _, ref, ref1,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  ref = require('atom'), CompositeDisposable = ref.CompositeDisposable, Directory = ref.Directory;

  ref1 = require('atom-space-pen-views'), $ = ref1.$, View = ref1.View;

  _ = require('underscore-plus');

  module.exports = FileIconSupplementView = (function(superClass) {
    var subscriptions;

    extend(FileIconSupplementView, superClass);

    function FileIconSupplementView() {
      return FileIconSupplementView.__super__.constructor.apply(this, arguments);
    }

    FileIconSupplementView.content = function() {
      return this.div({
        "class": 'fis'
      });
    };

    FileIconSupplementView.prototype.initialize = function(serializeState) {
      this.subscriptions = new CompositeDisposable;
      return process.nextTick((function(_this) {
        return function() {
          _this.handleEvents();
          return _this.loadAllSettings();
        };
      })(this));
    };

    FileIconSupplementView.prototype.serialize = function() {};

    FileIconSupplementView.prototype.handleEvents = function() {
      this.subscriptions.add(atom.commands.add('atom-workspace', {
        'file-icon-supplement:addTabClass': (function(_this) {
          return function() {
            return _this.addTabClass();
          };
        })(this),
        'file-icon-supplement:removeTabClass': (function(_this) {
          return function() {
            return _this.removeTabClass();
          };
        })(this),
        'file-icon-supplement:toggleTabClass': (function(_this) {
          return function() {
            return _this.toggleClass('tabIcons');
          };
        })(this),
        'file-icon-supplement:addTreeViewClass': (function(_this) {
          return function() {
            return _this.addTreeViewClass();
          };
        })(this),
        'file-icon-supplement:removeTreeViewClass': (function(_this) {
          return function() {
            return _this.removeTreeViewClass();
          };
        })(this),
        'file-icon-supplement:toggleTreeViewClass': (function(_this) {
          return function() {
            return _this.toggleClass('treeViewIcons');
          };
        })(this),
        'file-icon-supplement:addFuzzyFinderClass': (function(_this) {
          return function() {
            return _this.addFuzzyFinderClass();
          };
        })(this),
        'file-icon-supplement:removeFuzzyFinderClass': (function(_this) {
          return function() {
            return _this.removeFuzzyFinderClass();
          };
        })(this),
        'file-icon-supplement:toggleFuzzyFinderClass': (function(_this) {
          return function() {
            return _this.toggleClass('fuzzyFinderIcons');
          };
        })(this),
        'file-icon-supplement:addFindAndReplaceClass': (function(_this) {
          return function() {
            return _this.addFindAndReplaceClass();
          };
        })(this),
        'file-icon-supplement:removeFindAndReplaceClass': (function(_this) {
          return function() {
            return _this.removeFindAndReplaceClass();
          };
        })(this),
        'file-icon-supplement:toggleFindAndReplaceClass': (function(_this) {
          return function() {
            return _this.toggleClass('findAndReplaceIcons');
          };
        })(this),
        'file-icon-supplement:addGrammarStatusClass': (function(_this) {
          return function() {
            return _this.addGrammarStatusClass();
          };
        })(this),
        'file-icon-supplement:removeGrammarStatusClass': (function(_this) {
          return function() {
            return _this.removeGrammarStatusClass();
          };
        })(this),
        'file-icon-supplement:toggleGrammarStatusClass': (function(_this) {
          return function() {
            return _this.toggleClass('grammarStatusIcons');
          };
        })(this),
        'file-icon-supplement:addGrammarSelectorClass': (function(_this) {
          return function() {
            return _this.addGrammarSelectorClass();
          };
        })(this),
        'file-icon-supplement:removeGrammarSelectorClass': (function(_this) {
          return function() {
            return _this.removeGrammarSelectorClass();
          };
        })(this),
        'file-icon-supplement:toggleGrammarSelectorClass': (function(_this) {
          return function() {
            return _this.toggleClass('grammarSelectorIcons');
          };
        })(this),
        'file-icon-supplement:removeAllClass': (function(_this) {
          return function() {
            return _this.removeAllClass();
          };
        })(this),
        'file-icon-supplement:toggleAllClass': (function(_this) {
          return function() {
            return _this.toggleClass();
          };
        })(this),
        'project-find:show': (function(_this) {
          return function() {
            return _this.addFindAndReplaceEvent();
          };
        })(this),
        'fuzzy-finder:toggle-file-finder': (function(_this) {
          return function() {
            return _this.loadFuzzyFinderSettings();
          };
        })(this),
        'grammar-selector:show': (function(_this) {
          return function() {
            return _this.loadGrammarSelectorSettings();
          };
        })(this),
        'tree-view:recursive-expand-directory': (function(_this) {
          return function() {
            return _this.loadTreeViewSettings();
          };
        })(this)
      }));
      this.subscriptions.add(atom.config.onDidChange('file-icon-supplement.tabIcons', (function(_this) {
        return function() {
          return _this.loadTabSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('file-icon-supplement.treeViewIcons', (function(_this) {
        return function() {
          return _this.loadTreeViewSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('file-icon-supplement.fuzzyFinderIcons', (function(_this) {
        return function() {
          return _this.loadFuzzyFinderSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('file-icon-supplement.findAndReplaceIcons', (function(_this) {
        return function() {
          return _this.loadFindAndReplaceSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('file-icon-supplement.grammarStatusIcons', (function(_this) {
        return function() {
          return _this.loadGrammarStatusSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('tabs.showIcons', (function(_this) {
        return function() {
          return _this.loadTabSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('tree-view.hideVcsIgnoredFiles', (function(_this) {
        return function() {
          return _this.loadTreeViewSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('tree-view.hideIgnoredNames', (function(_this) {
        return function() {
          return _this.loadTreeViewSettings();
        };
      })(this)));
      this.subscriptions.add(atom.config.onDidChange('tree-view.expand-directory', (function(_this) {
        return function() {
          return _this.loadTreeViewSettings();
        };
      })(this)));
      this.subscriptions.add(atom.workspace.onDidChangeActivePaneItem, (function(_this) {
        return function() {
          return _this.addTabClass();
        };
      })(this));
      atom.project.getPaths().forEach((function(_this) {
        return function(projectPath) {
          var path;
          path = new Directory(projectPath);
          return path.onDidChange(function() {
            return _this.addTreeViewClass();
          });
        };
      })(this));
      return $('.tree-view-resizer').on('click', '.directory.entry', (function(_this) {
        return function(e) {
          e.stopPropagation();
          return _this.loadTreeViewSettings();
        };
      })(this));
    };

    FileIconSupplementView.prototype.destroy = function() {
      return this.detach();
    };

    FileIconSupplementView.prototype.addTabClass = function() {
      $('ul.tab-bar li.tab .title:not(.hide-icon)').addClass('fis fis-tab');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeTabClass = function() {
      return $('.fis.fis-tab').removeClass('fis fis-tab');
    };

    FileIconSupplementView.prototype.loadTabSettings = function() {
      if (atom.config.get('file-icon-supplement.tabIcons')) {
        return this.addTabClass();
      } else {
        return this.removeTabClass();
      }
    };

    FileIconSupplementView.prototype.addTreeViewClass = function() {
      $('ol.tree-view span.name.icon').addClass('fis fis-tree');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeTreeViewClass = function() {
      return $('.fis.fis-tree').removeClass('fis fis-tree');
    };

    FileIconSupplementView.prototype.loadTreeViewSettings = function() {
      if (atom.config.get('file-icon-supplement.treeViewIcons')) {
        return this.addTreeViewClass();
      } else {
        return this.removeTreeViewClass();
      }
    };

    FileIconSupplementView.prototype.addFuzzyFinderClass = function() {
      $('.fuzzy-finder .file.icon').addClass('fis fis-fuzzy');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeFuzzyFinderClass = function() {
      return $('.fis.fis-fuzzy').removeClass('fis fis-fuzzy');
    };

    FileIconSupplementView.prototype.toggleFuzzyFinderClass = function() {
      var current;
      current = atom.config.get('file-icon-supplement.FuzzyFinderIcons');
      return atom.config.set('file-icon-supplement.fuzzyFinderIcons', !current);
    };

    FileIconSupplementView.prototype.loadFuzzyFinderSettings = function() {
      if (atom.config.get('file-icon-supplement.fuzzyFinderIcons')) {
        return this.addFuzzyFinderClass();
      } else {
        return this.removeFuzzyFinderClass();
      }
    };

    FileIconSupplementView.prototype.addFindAndReplaceClass = function() {
      $('.results-view span.icon').addClass('fis fis-find');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeFindAndReplaceClass = function() {
      return $('.fis.fis-find').removeClass('fis fis-find');
    };

    FileIconSupplementView.prototype.loadFindAndReplaceSettings = function() {
      if (atom.config.get('file-icon-supplement.findAndReplaceIcons')) {
        return this.addFindAndReplaceClass();
      } else {
        this.removeFindAndReplaceClass();
        return this.removeFindAndReplaceEvent();
      }
    };

    subscriptions = {};

    FileIconSupplementView.prototype.addFindAndReplaceEvent = function() {
      if (atom.packages.loadedPackages['find-and-replace'] && atom.config.get('file-icon-supplement.findAndReplaceIcons')) {
        subscriptions.findAndReplace = atom.packages.loadedPackages['find-and-replace'].mainModule.resultsModel.onDidFinishSearching((function(_this) {
          return function() {
            return _this.addFindAndReplaceClass();
          };
        })(this));
        return atom.commands.add('atom-workspace', 'core:cancel', (function(_this) {
          return function() {
            return _this.removeFindAndReplaceEvent();
          };
        })(this));
      }
    };

    FileIconSupplementView.prototype.removeFindAndReplaceEvent = function() {
      var ref2;
      return (ref2 = subscriptions.findAndReplace) != null ? ref2.dispose() : void 0;
    };

    FileIconSupplementView.prototype.addGrammarStatusClass = function() {
      $('.grammar-status a').addClass('fis fis-grammar-status');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeGrammarStatusClass = function() {
      return $('.fis.fis-grammar-status').removeClass('fis fis-grammar-status');
    };

    FileIconSupplementView.prototype.loadGrammarStatusSettings = function() {
      if (atom.config.get('file-icon-supplement.grammarStatusIcons')) {
        return this.addGrammarStatusClass();
      } else {
        return this.removeGrammarStatusClass();
      }
    };

    FileIconSupplementView.prototype.addGrammarSelectorClass = function() {
      $('.grammar-selector li').addClass('fis fis-grammar-selector');
      return this.reloadStyleSheets();
    };

    FileIconSupplementView.prototype.removeGrammarSelectorClass = function() {
      return $('.fis.fis-grammar-selector').removeClass('fis fis-grammar-selector');
    };

    FileIconSupplementView.prototype.loadGrammarSelectorSettings = function() {
      if (atom.config.get('file-icon-supplement.grammarSelectorIcons')) {
        return this.addGrammarSelectorClass();
      } else {
        return this.removeGrammarSelectorClass();
      }
    };

    FileIconSupplementView.prototype.removeAllClass = function() {
      return $('.fis').removeClass('fis fis-tree fis-tab fis-fuzzy fis-find fis-grammar-status fis-grammar-selector');
    };

    FileIconSupplementView.prototype.loadAllSettings = function() {
      this.loadTabSettings();
      this.loadTreeViewSettings();
      this.loadFuzzyFinderSettings();
      this.loadFindAndReplaceSettings();
      this.loadGrammarStatusSettings();
      return this.loadGrammarSelectorSettings();
    };

    FileIconSupplementView.prototype.toggleClass = function(area) {
      var setting, value;
      if (area) {
        setting = 'file-icon-supplement.' + area;
        value = atom.config.get(setting);
        return atom.config.set(setting, !value);
      } else if (this.isToggledOn()) {
        this.setToggleClassCache();
        return this.disableAllSettings();
      } else {
        return this.recoverToggleClassCache();
      }
    };

    FileIconSupplementView.prototype.isToggledOn = function() {
      return atom.config.get('file-icon-supplement.tabIcons') || atom.config.get('file-icon-supplement.treeViewIcons') || atom.config.get('file-icon-supplement.fuzzyFinderIcons') || atom.config.get('file-icon-supplement.findAndReplaceIcons') || atom.config.get('file-icon-supplement.grammarStatusIcons') || atom.config.get('file-icon-supplement.grammarSelectorIcons');
    };

    FileIconSupplementView.prototype.toggleClassCache = {};

    FileIconSupplementView.prototype.setToggleClassCache = function() {
      return this.toggleClassCache = {
        tabIcons: atom.config.get('file-icon-supplement.tabIcons'),
        treeViewIcons: atom.config.get('file-icon-supplement.treeViewIcons'),
        fuzzyFinderIcons: atom.config.get('file-icon-supplement.fuzzyFinderIcons'),
        findAndReplaceIcons: atom.config.get('file-icon-supplement.findAndReplaceIcons'),
        grammarStatusIcons: atom.config.get('file-icon-supplement.grammarStatusIcons'),
        grammarSelectorIcons: atom.config.get('file-icon-supplement.grammarSelectorIcons')
      };
    };

    FileIconSupplementView.prototype.recoverToggleClassCache = function() {
      var key, ref2, results, value;
      ref2 = this.toggleClassCache;
      results = [];
      for (key in ref2) {
        value = ref2[key];
        results.push(atom.config.set('file-icon-supplement.' + key, value));
      }
      return results;
    };

    FileIconSupplementView.prototype.disableAllSettings = function() {
      atom.config.set('file-icon-supplement.tabIcons', false);
      atom.config.set('file-icon-supplement.treeViewIcons', false);
      atom.config.set('file-icon-supplement.fuzzyFinderIcons', false);
      atom.config.set('file-icon-supplement.findAndReplaceIcons', false);
      atom.config.set('file-icon-supplement.grammarStatusIcons', false);
      return atom.config.set('file-icon-supplement.grammarSelectorIcons', false);
    };

    FileIconSupplementView.prototype.reloadStyleSheets = function() {
      return atom.themes.reloadBaseStylesheets();
    };

    return FileIconSupplementView;

  })(View);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiL1VzZXJzL2phc29uZXVuLy5wdWxzYXIvcGFja2FnZXMvZmlsZS1pY29uLXN1cHBsZW1lbnQvbGliL2ZpbGUtaWNvbi1zdXBwbGVtZW50LXZpZXcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBQSw2RUFBQTtJQUFBOzs7RUFBQSxNQUFtQyxPQUFBLENBQVEsTUFBUixDQUFuQyxFQUFDLDZDQUFELEVBQXNCOztFQUN0QixPQUFZLE9BQUEsQ0FBUSxzQkFBUixDQUFaLEVBQUMsVUFBRCxFQUFJOztFQUNKLENBQUEsR0FBSSxPQUFBLENBQVEsaUJBQVI7O0VBRUosTUFBTSxDQUFDLE9BQVAsR0FDTTtBQUVKLFFBQUE7Ozs7Ozs7O0lBQUEsc0JBQUMsQ0FBQSxPQUFELEdBQVUsU0FBQTthQUNSLElBQUMsQ0FBQSxHQUFELENBQUs7UUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFPLEtBQVA7T0FBTDtJQURROztxQ0FHVixVQUFBLEdBQVksU0FBQyxjQUFEO01BQ1YsSUFBQyxDQUFBLGFBQUQsR0FBaUIsSUFBSTthQUVyQixPQUFPLENBQUMsUUFBUixDQUFpQixDQUFBLFNBQUEsS0FBQTtlQUFBLFNBQUE7VUFDZixLQUFDLENBQUEsWUFBRCxDQUFBO2lCQUNBLEtBQUMsQ0FBQSxlQUFELENBQUE7UUFGZTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakI7SUFIVTs7cUNBT1osU0FBQSxHQUFXLFNBQUEsR0FBQTs7cUNBRVgsWUFBQSxHQUFjLFNBQUE7TUFDWixJQUFDLENBQUEsYUFBYSxDQUFDLEdBQWYsQ0FBbUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFkLENBQWtCLGdCQUFsQixFQUNqQjtRQUFBLGtDQUFBLEVBQW9DLENBQUEsU0FBQSxLQUFBO2lCQUFBLFNBQUE7bUJBQUcsS0FBQyxDQUFBLFdBQUQsQ0FBQTtVQUFIO1FBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFwQztR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QUR1Qjs7cUNBSXpCLGtCQUFBLEdBQW9CLFNBQUE7TUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLCtCQUFoQixFQUFpRCxLQUFqRDtNQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQixvQ0FBaEIsRUFBc0QsS0FBdEQ7TUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsdUNBQWhCLEVBQXlELEtBQXpEO01BQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFaLENBQWdCLDBDQUFoQixFQUE0RCxLQUE1RDtNQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBWixDQUFnQix5Q0FBaEIsRUFBMkQsS0FBM0Q7YUFDQSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQVosQ0FBZ0IsMkNBQWhCLEVBQTZELEtBQTdEO0lBTmtCOztxQ0FRcEIsaUJBQUEsR0FBbUIsU0FBQTthQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFaLENBQUE7SUFEaUI7Ozs7S0ExTmdCO0FBTHJDIiwic291cmNlc0NvbnRlbnQiOlsie0NvbXBvc2l0ZURpc3Bvc2FibGUsIERpcmVjdG9yeX0gPSByZXF1aXJlICdhdG9tJ1xueyQsIFZpZXd9ID0gcmVxdWlyZSAnYXRvbS1zcGFjZS1wZW4tdmlld3MnXG5fID0gcmVxdWlyZSAndW5kZXJzY29yZS1wbHVzJ1xuXG5tb2R1bGUuZXhwb3J0cyA9XG5jbGFzcyBGaWxlSWNvblN1cHBsZW1lbnRWaWV3IGV4dGVuZHMgVmlld1xuXG4gIEBjb250ZW50OiAtPlxuICAgIEBkaXYgY2xhc3M6ICdmaXMnXG5cbiAgaW5pdGlhbGl6ZTogKHNlcmlhbGl6ZVN0YXRlKSAtPlxuICAgIEBzdWJzY3JpcHRpb25zID0gbmV3IENvbXBvc2l0ZURpc3Bvc2FibGVcblxuICAgIHByb2Nlc3MubmV4dFRpY2sgPT5cbiAgICAgIEBoYW5kbGVFdmVudHMoKVxuICAgICAgQGxvYWRBbGxTZXR0aW5ncygpXG5cbiAgc2VyaWFsaXplOiAtPlxuXG4gIGhhbmRsZUV2ZW50czogLT5cbiAgICBAc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20td29ya3NwYWNlJyxcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRUYWJDbGFzcyc6ID0+IEBhZGRUYWJDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6cmVtb3ZlVGFiQ2xhc3MnOiA9PiBAcmVtb3ZlVGFiQ2xhc3MoKVxuICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50OnRvZ2dsZVRhYkNsYXNzJzogPT4gQHRvZ2dsZUNsYXNzICd0YWJJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRUcmVlVmlld0NsYXNzJzogPT4gQGFkZFRyZWVWaWV3Q2xhc3MoKVxuICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50OnJlbW92ZVRyZWVWaWV3Q2xhc3MnOiA9PiBAcmVtb3ZlVHJlZVZpZXdDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6dG9nZ2xlVHJlZVZpZXdDbGFzcyc6ID0+IEB0b2dnbGVDbGFzcyAndHJlZVZpZXdJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRGdXp6eUZpbmRlckNsYXNzJzogPT4gQGFkZEZ1enp5RmluZGVyQ2xhc3MoKVxuICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50OnJlbW92ZUZ1enp5RmluZGVyQ2xhc3MnOiA9PiBAcmVtb3ZlRnV6enlGaW5kZXJDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6dG9nZ2xlRnV6enlGaW5kZXJDbGFzcyc6ID0+IEB0b2dnbGVDbGFzcyAnZnV6enlGaW5kZXJJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRGaW5kQW5kUmVwbGFjZUNsYXNzJzogPT4gQGFkZEZpbmRBbmRSZXBsYWNlQ2xhc3MoKVxuICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50OnJlbW92ZUZpbmRBbmRSZXBsYWNlQ2xhc3MnOiA9PiBAcmVtb3ZlRmluZEFuZFJlcGxhY2VDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6dG9nZ2xlRmluZEFuZFJlcGxhY2VDbGFzcyc6ID0+IEB0b2dnbGVDbGFzcyAnZmluZEFuZFJlcGxhY2VJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRHcmFtbWFyU3RhdHVzQ2xhc3MnOiA9PiBAYWRkR3JhbW1hclN0YXR1c0NsYXNzKClcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDpyZW1vdmVHcmFtbWFyU3RhdHVzQ2xhc3MnOiA9PiBAcmVtb3ZlR3JhbW1hclN0YXR1c0NsYXNzKClcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDp0b2dnbGVHcmFtbWFyU3RhdHVzQ2xhc3MnOiA9PiBAdG9nZ2xlQ2xhc3MgJ2dyYW1tYXJTdGF0dXNJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDphZGRHcmFtbWFyU2VsZWN0b3JDbGFzcyc6ID0+IEBhZGRHcmFtbWFyU2VsZWN0b3JDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6cmVtb3ZlR3JhbW1hclNlbGVjdG9yQ2xhc3MnOiA9PiBAcmVtb3ZlR3JhbW1hclNlbGVjdG9yQ2xhc3MoKVxuICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50OnRvZ2dsZUdyYW1tYXJTZWxlY3RvckNsYXNzJzogPT4gQHRvZ2dsZUNsYXNzICdncmFtbWFyU2VsZWN0b3JJY29ucydcbiAgICAgICdmaWxlLWljb24tc3VwcGxlbWVudDpyZW1vdmVBbGxDbGFzcyc6ID0+IEByZW1vdmVBbGxDbGFzcygpXG4gICAgICAnZmlsZS1pY29uLXN1cHBsZW1lbnQ6dG9nZ2xlQWxsQ2xhc3MnOiA9PiBAdG9nZ2xlQ2xhc3MoKVxuXG4gICAgICAncHJvamVjdC1maW5kOnNob3cnOiA9PiBAYWRkRmluZEFuZFJlcGxhY2VFdmVudCgpXG4gICAgICAnZnV6enktZmluZGVyOnRvZ2dsZS1maWxlLWZpbmRlcic6ID0+IEBsb2FkRnV6enlGaW5kZXJTZXR0aW5ncygpXG4gICAgICAnZ3JhbW1hci1zZWxlY3RvcjpzaG93JzogPT4gQGxvYWRHcmFtbWFyU2VsZWN0b3JTZXR0aW5ncygpXG4gICAgICAndHJlZS12aWV3OnJlY3Vyc2l2ZS1leHBhbmQtZGlyZWN0b3J5JzogPT4gQGxvYWRUcmVlVmlld1NldHRpbmdzKClcblxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAnZmlsZS1pY29uLXN1cHBsZW1lbnQudGFiSWNvbnMnLCA9PiBAbG9hZFRhYlNldHRpbmdzKClcbiAgICBAc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb25maWcub25EaWRDaGFuZ2UgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LnRyZWVWaWV3SWNvbnMnLCA9PiBAbG9hZFRyZWVWaWV3U2V0dGluZ3MoKVxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAnZmlsZS1pY29uLXN1cHBsZW1lbnQuZnV6enlGaW5kZXJJY29ucycsID0+IEBsb2FkRnV6enlGaW5kZXJTZXR0aW5ncygpXG4gICAgQHN1YnNjcmlwdGlvbnMuYWRkIGF0b20uY29uZmlnLm9uRGlkQ2hhbmdlICdmaWxlLWljb24tc3VwcGxlbWVudC5maW5kQW5kUmVwbGFjZUljb25zJywgPT4gQGxvYWRGaW5kQW5kUmVwbGFjZVNldHRpbmdzKClcbiAgICBAc3Vic2NyaXB0aW9ucy5hZGQgYXRvbS5jb25maWcub25EaWRDaGFuZ2UgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmdyYW1tYXJTdGF0dXNJY29ucycsID0+IEBsb2FkR3JhbW1hclN0YXR1c1NldHRpbmdzKClcblxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAndGFicy5zaG93SWNvbnMnLCA9PiBAbG9hZFRhYlNldHRpbmdzKClcblxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAndHJlZS12aWV3LmhpZGVWY3NJZ25vcmVkRmlsZXMnLCA9PiBAbG9hZFRyZWVWaWV3U2V0dGluZ3MoKVxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAndHJlZS12aWV3LmhpZGVJZ25vcmVkTmFtZXMnLCA9PiBAbG9hZFRyZWVWaWV3U2V0dGluZ3MoKVxuICAgIEBzdWJzY3JpcHRpb25zLmFkZCBhdG9tLmNvbmZpZy5vbkRpZENoYW5nZSAndHJlZS12aWV3LmV4cGFuZC1kaXJlY3RvcnknLCA9PiBAbG9hZFRyZWVWaWV3U2V0dGluZ3MoKVxuXG4gICAgQHN1YnNjcmlwdGlvbnMuYWRkIGF0b20ud29ya3NwYWNlLm9uRGlkQ2hhbmdlQWN0aXZlUGFuZUl0ZW0sXG4gICAgICA9PiBAYWRkVGFiQ2xhc3MoKVxuXG4gICAgYXRvbS5wcm9qZWN0LmdldFBhdGhzKCkuZm9yRWFjaCAocHJvamVjdFBhdGgpID0+XG4gICAgICBwYXRoID0gbmV3IERpcmVjdG9yeShwcm9qZWN0UGF0aClcbiAgICAgIHBhdGgub25EaWRDaGFuZ2UgPT4gQGFkZFRyZWVWaWV3Q2xhc3MoKVxuXG4gICAgJCgnLnRyZWUtdmlldy1yZXNpemVyJykub24gJ2NsaWNrJywgJy5kaXJlY3RvcnkuZW50cnknLCAoZSkgPT5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIEBsb2FkVHJlZVZpZXdTZXR0aW5ncygpXG5cbiAgZGVzdHJveTogLT4gQGRldGFjaCgpXG5cbiAgYWRkVGFiQ2xhc3M6IC0+XG4gICAgJCgndWwudGFiLWJhciBsaS50YWIgLnRpdGxlOm5vdCguaGlkZS1pY29uKScpLmFkZENsYXNzICdmaXMgZmlzLXRhYidcbiAgICBAcmVsb2FkU3R5bGVTaGVldHMoKVxuXG4gIHJlbW92ZVRhYkNsYXNzOiAtPlxuICAgICQoJy5maXMuZmlzLXRhYicpLnJlbW92ZUNsYXNzICdmaXMgZmlzLXRhYidcblxuICBsb2FkVGFiU2V0dGluZ3M6IC0+XG4gICAgaWYgYXRvbS5jb25maWcuZ2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC50YWJJY29ucydcbiAgICAgIEBhZGRUYWJDbGFzcygpXG4gICAgZWxzZVxuICAgICAgQHJlbW92ZVRhYkNsYXNzKClcblxuICBhZGRUcmVlVmlld0NsYXNzOiAtPlxuICAgICQoJ29sLnRyZWUtdmlldyBzcGFuLm5hbWUuaWNvbicpLmFkZENsYXNzICdmaXMgZmlzLXRyZWUnXG4gICAgQHJlbG9hZFN0eWxlU2hlZXRzKClcblxuICByZW1vdmVUcmVlVmlld0NsYXNzOiAtPlxuICAgICQoJy5maXMuZmlzLXRyZWUnKS5yZW1vdmVDbGFzcyAnZmlzIGZpcy10cmVlJ1xuXG4gIGxvYWRUcmVlVmlld1NldHRpbmdzOiAtPlxuICAgIGlmIGF0b20uY29uZmlnLmdldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQudHJlZVZpZXdJY29ucydcbiAgICAgIEBhZGRUcmVlVmlld0NsYXNzKClcbiAgICBlbHNlXG4gICAgICBAcmVtb3ZlVHJlZVZpZXdDbGFzcygpXG5cbiAgYWRkRnV6enlGaW5kZXJDbGFzczogLT5cbiAgICAkKCcuZnV6enktZmluZGVyIC5maWxlLmljb24nKS5hZGRDbGFzcyAnZmlzIGZpcy1mdXp6eSdcbiAgICBAcmVsb2FkU3R5bGVTaGVldHMoKVxuXG4gIHJlbW92ZUZ1enp5RmluZGVyQ2xhc3M6IC0+XG4gICAgJCgnLmZpcy5maXMtZnV6enknKS5yZW1vdmVDbGFzcyAnZmlzIGZpcy1mdXp6eSdcblxuICB0b2dnbGVGdXp6eUZpbmRlckNsYXNzOiAtPlxuICAgIGN1cnJlbnQgPSBhdG9tLmNvbmZpZy5nZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LkZ1enp5RmluZGVySWNvbnMnXG4gICAgYXRvbS5jb25maWcuc2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC5mdXp6eUZpbmRlckljb25zJywgIWN1cnJlbnRcblxuICBsb2FkRnV6enlGaW5kZXJTZXR0aW5nczogLT5cbiAgICBpZiBhdG9tLmNvbmZpZy5nZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmZ1enp5RmluZGVySWNvbnMnXG4gICAgICBAYWRkRnV6enlGaW5kZXJDbGFzcygpXG4gICAgZWxzZVxuICAgICAgQHJlbW92ZUZ1enp5RmluZGVyQ2xhc3MoKVxuXG4gIGFkZEZpbmRBbmRSZXBsYWNlQ2xhc3M6IC0+XG4gICAgJCgnLnJlc3VsdHMtdmlldyBzcGFuLmljb24nKS5hZGRDbGFzcyAnZmlzIGZpcy1maW5kJ1xuICAgIEByZWxvYWRTdHlsZVNoZWV0cygpXG5cbiAgcmVtb3ZlRmluZEFuZFJlcGxhY2VDbGFzczogLT5cbiAgICAkKCcuZmlzLmZpcy1maW5kJykucmVtb3ZlQ2xhc3MgJ2ZpcyBmaXMtZmluZCdcblxuICBsb2FkRmluZEFuZFJlcGxhY2VTZXR0aW5nczogLT5cbiAgICBpZiBhdG9tLmNvbmZpZy5nZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmZpbmRBbmRSZXBsYWNlSWNvbnMnXG4gICAgICBAYWRkRmluZEFuZFJlcGxhY2VDbGFzcygpXG4gICAgZWxzZVxuICAgICAgQHJlbW92ZUZpbmRBbmRSZXBsYWNlQ2xhc3MoKVxuICAgICAgQHJlbW92ZUZpbmRBbmRSZXBsYWNlRXZlbnQoKVxuXG4gIHN1YnNjcmlwdGlvbnMgPSB7fVxuXG4gIGFkZEZpbmRBbmRSZXBsYWNlRXZlbnQ6IC0+XG4gICAgaWYgYXRvbS5wYWNrYWdlcy5sb2FkZWRQYWNrYWdlc1snZmluZC1hbmQtcmVwbGFjZSddIGFuZFxuICAgIGF0b20uY29uZmlnLmdldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQuZmluZEFuZFJlcGxhY2VJY29ucydcbiAgICAgIHN1YnNjcmlwdGlvbnMuZmluZEFuZFJlcGxhY2UgPSBhdG9tLnBhY2thZ2VzXG4gICAgICAgIC5sb2FkZWRQYWNrYWdlc1snZmluZC1hbmQtcmVwbGFjZSddLm1haW5Nb2R1bGUucmVzdWx0c01vZGVsXG4gICAgICAgIC5vbkRpZEZpbmlzaFNlYXJjaGluZyA9PiBAYWRkRmluZEFuZFJlcGxhY2VDbGFzcygpXG4gICAgICBhdG9tLmNvbW1hbmRzLmFkZCAnYXRvbS13b3Jrc3BhY2UnLCAnY29yZTpjYW5jZWwnLFxuICAgICAgICA9PiBAcmVtb3ZlRmluZEFuZFJlcGxhY2VFdmVudCgpXG5cbiAgcmVtb3ZlRmluZEFuZFJlcGxhY2VFdmVudDogLT5cbiAgICBzdWJzY3JpcHRpb25zLmZpbmRBbmRSZXBsYWNlPy5kaXNwb3NlKClcblxuICBhZGRHcmFtbWFyU3RhdHVzQ2xhc3M6IC0+XG4gICAgJCgnLmdyYW1tYXItc3RhdHVzIGEnKS5hZGRDbGFzcyAnZmlzIGZpcy1ncmFtbWFyLXN0YXR1cydcbiAgICBAcmVsb2FkU3R5bGVTaGVldHMoKVxuXG4gIHJlbW92ZUdyYW1tYXJTdGF0dXNDbGFzczogLT5cbiAgICAkKCcuZmlzLmZpcy1ncmFtbWFyLXN0YXR1cycpLnJlbW92ZUNsYXNzICdmaXMgZmlzLWdyYW1tYXItc3RhdHVzJ1xuXG4gIGxvYWRHcmFtbWFyU3RhdHVzU2V0dGluZ3M6IC0+XG4gICAgaWYgYXRvbS5jb25maWcuZ2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC5ncmFtbWFyU3RhdHVzSWNvbnMnXG4gICAgICBAYWRkR3JhbW1hclN0YXR1c0NsYXNzKClcbiAgICBlbHNlXG4gICAgICBAcmVtb3ZlR3JhbW1hclN0YXR1c0NsYXNzKClcblxuICBhZGRHcmFtbWFyU2VsZWN0b3JDbGFzczogLT5cbiAgICAkKCcuZ3JhbW1hci1zZWxlY3RvciBsaScpLmFkZENsYXNzICdmaXMgZmlzLWdyYW1tYXItc2VsZWN0b3InXG4gICAgQHJlbG9hZFN0eWxlU2hlZXRzKClcblxuICByZW1vdmVHcmFtbWFyU2VsZWN0b3JDbGFzczogLT5cbiAgICAkKCcuZmlzLmZpcy1ncmFtbWFyLXNlbGVjdG9yJykucmVtb3ZlQ2xhc3MgJ2ZpcyBmaXMtZ3JhbW1hci1zZWxlY3RvcidcblxuICBsb2FkR3JhbW1hclNlbGVjdG9yU2V0dGluZ3M6IC0+XG4gICAgaWYgYXRvbS5jb25maWcuZ2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC5ncmFtbWFyU2VsZWN0b3JJY29ucydcbiAgICAgIEBhZGRHcmFtbWFyU2VsZWN0b3JDbGFzcygpXG4gICAgZWxzZVxuICAgICAgQHJlbW92ZUdyYW1tYXJTZWxlY3RvckNsYXNzKClcblxuICByZW1vdmVBbGxDbGFzczogLT5cbiAgICAkKCcuZmlzJykucmVtb3ZlQ2xhc3MgJ2ZpcyBmaXMtdHJlZSBmaXMtdGFiIGZpcy1mdXp6eSBmaXMtZmluZCBmaXMtZ3JhbW1hci1zdGF0dXMgZmlzLWdyYW1tYXItc2VsZWN0b3InXG5cbiAgbG9hZEFsbFNldHRpbmdzOiAtPlxuICAgIEBsb2FkVGFiU2V0dGluZ3MoKVxuICAgIEBsb2FkVHJlZVZpZXdTZXR0aW5ncygpXG4gICAgQGxvYWRGdXp6eUZpbmRlclNldHRpbmdzKClcbiAgICBAbG9hZEZpbmRBbmRSZXBsYWNlU2V0dGluZ3MoKVxuICAgIEBsb2FkR3JhbW1hclN0YXR1c1NldHRpbmdzKClcbiAgICBAbG9hZEdyYW1tYXJTZWxlY3RvclNldHRpbmdzKClcblxuICB0b2dnbGVDbGFzczogKGFyZWEpIC0+XG4gICAgaWYgYXJlYVxuICAgICAgc2V0dGluZyA9ICdmaWxlLWljb24tc3VwcGxlbWVudC4nICsgYXJlYVxuICAgICAgdmFsdWUgPSBhdG9tLmNvbmZpZy5nZXQgc2V0dGluZ1xuICAgICAgYXRvbS5jb25maWcuc2V0IHNldHRpbmcsICF2YWx1ZVxuICAgIGVsc2UgaWYgQGlzVG9nZ2xlZE9uKClcbiAgICAgIEBzZXRUb2dnbGVDbGFzc0NhY2hlKClcbiAgICAgIEBkaXNhYmxlQWxsU2V0dGluZ3MoKVxuICAgIGVsc2VcbiAgICAgIEByZWNvdmVyVG9nZ2xlQ2xhc3NDYWNoZSgpXG5cbiAgaXNUb2dnbGVkT246IC0+XG4gICAgYXRvbS5jb25maWcuZ2V0KCdmaWxlLWljb24tc3VwcGxlbWVudC50YWJJY29ucycpIG9yXG4gICAgYXRvbS5jb25maWcuZ2V0KCdmaWxlLWljb24tc3VwcGxlbWVudC50cmVlVmlld0ljb25zJykgb3JcbiAgICBhdG9tLmNvbmZpZy5nZXQoJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmZ1enp5RmluZGVySWNvbnMnKSBvclxuICAgIGF0b20uY29uZmlnLmdldCgnZmlsZS1pY29uLXN1cHBsZW1lbnQuZmluZEFuZFJlcGxhY2VJY29ucycpIG9yXG4gICAgYXRvbS5jb25maWcuZ2V0KCdmaWxlLWljb24tc3VwcGxlbWVudC5ncmFtbWFyU3RhdHVzSWNvbnMnKSBvclxuICAgIGF0b20uY29uZmlnLmdldCgnZmlsZS1pY29uLXN1cHBsZW1lbnQuZ3JhbW1hclNlbGVjdG9ySWNvbnMnKVxuXG4gIHRvZ2dsZUNsYXNzQ2FjaGU6IHt9XG5cbiAgc2V0VG9nZ2xlQ2xhc3NDYWNoZTogLT5cbiAgICBAdG9nZ2xlQ2xhc3NDYWNoZSA9XG4gICAgICB0YWJJY29uczogYXRvbS5jb25maWcuZ2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC50YWJJY29ucydcbiAgICAgIHRyZWVWaWV3SWNvbnM6IGF0b20uY29uZmlnLmdldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQudHJlZVZpZXdJY29ucydcbiAgICAgIGZ1enp5RmluZGVySWNvbnM6IGF0b20uY29uZmlnLmdldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQuZnV6enlGaW5kZXJJY29ucydcbiAgICAgIGZpbmRBbmRSZXBsYWNlSWNvbnM6IGF0b20uY29uZmlnLmdldChcbiAgICAgICAgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmZpbmRBbmRSZXBsYWNlSWNvbnMnKVxuICAgICAgZ3JhbW1hclN0YXR1c0ljb25zOiBhdG9tLmNvbmZpZy5nZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmdyYW1tYXJTdGF0dXNJY29ucydcbiAgICAgIGdyYW1tYXJTZWxlY3Rvckljb25zOiBhdG9tLmNvbmZpZy5nZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmdyYW1tYXJTZWxlY3Rvckljb25zJ1xuXG4gIHJlY292ZXJUb2dnbGVDbGFzc0NhY2hlOiAtPlxuICAgIGZvciBrZXksIHZhbHVlIG9mIEB0b2dnbGVDbGFzc0NhY2hlXG4gICAgICBhdG9tLmNvbmZpZy5zZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LicgKyBrZXksIHZhbHVlXG5cbiAgZGlzYWJsZUFsbFNldHRpbmdzOiAtPlxuICAgIGF0b20uY29uZmlnLnNldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQudGFiSWNvbnMnLCBmYWxzZVxuICAgIGF0b20uY29uZmlnLnNldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQudHJlZVZpZXdJY29ucycsIGZhbHNlXG4gICAgYXRvbS5jb25maWcuc2V0ICdmaWxlLWljb24tc3VwcGxlbWVudC5mdXp6eUZpbmRlckljb25zJywgZmFsc2VcbiAgICBhdG9tLmNvbmZpZy5zZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmZpbmRBbmRSZXBsYWNlSWNvbnMnLCBmYWxzZVxuICAgIGF0b20uY29uZmlnLnNldCAnZmlsZS1pY29uLXN1cHBsZW1lbnQuZ3JhbW1hclN0YXR1c0ljb25zJywgZmFsc2VcbiAgICBhdG9tLmNvbmZpZy5zZXQgJ2ZpbGUtaWNvbi1zdXBwbGVtZW50LmdyYW1tYXJTZWxlY3Rvckljb25zJywgZmFsc2VcblxuICByZWxvYWRTdHlsZVNoZWV0czogLT5cbiAgICBhdG9tLnRoZW1lcy5yZWxvYWRCYXNlU3R5bGVzaGVldHMoKVxuIl19
