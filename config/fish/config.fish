if status is-interactive
  function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
  end

  set -l doc '~/Documents/'
  set -l dw '~/Downloads/'
  abbr --add cdc --position anywhere --regex '~/dc' --set-cursor $doc"%"
  abbr --add cdw --position anywhere --regex '~/dw' --set-cursor $dw"%"
  abbr --add dc --regex '^dc$' --set-cursor $doc"%"
  abbr --add dw --regex '^dw$' --set-cursor $dw"%"
  test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

  starship init fish | source
end

