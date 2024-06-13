function la
  eza --oneline --all --classify=always --color=always --icons=always --no-quotes \
    --group-directories-first \
    --time-style='+%y/%b %d %H:%M' \
    --long --binary --smart-group --header --created --modified --mounts \
    --git --git-repos $argv
end
