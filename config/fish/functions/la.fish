function la
  eza --oneline --all --group-directories-first --no-quotes \
  --classify=always --color=always --icons=always --color-scale=all --color-scale-mode=gradient \
  --header --mounts --long --binary --smart-group \
  --git --git-repos $argv \
  --time-style='+%y/%b%d %H:%M' --created --accessed \
  --width=$(tput cols)
end
