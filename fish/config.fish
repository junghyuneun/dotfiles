if status is-interactive
  function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
  end
  abbr --add dotdot --regex '^\.\.+$' --set-cursor "cd ../%"

  test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

  starship init fish | source
end

