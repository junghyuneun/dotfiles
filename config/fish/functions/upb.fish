function upb
  brew update
  brew upgrade --greedy --greedy-latest --greedy-auto-updates
  brew cleanup --prune=all
  brew autoremove
end
