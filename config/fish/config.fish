# git aliases
alias ga 'git add'
alias gb 'git br'
alias gc 'git commit'
alias gca 'git commit --amend'
alias gcl 'git clone'
alias gco 'git co'
alias gd 'git diff'
alias gm 'git merge'
alias gp 'git push'
alias gpo 'git push origin HEAD'
alias gr 'git co -- .'
alias gs 'git st'

# Others
set -x MANPAGER "sh -c 'col -bx | bat --color=always --theme=1337 -l man -p'"

if status is-interactive
  function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
  end
  abbr --add dotdot --regex '^\.\.+$' --function multicd

  set -l doc '~/Documents/'
  set -l dw '~/Downloads/'
  abbr --add dc --regex '^dc$' --set-cursor $doc"%"
  abbr --add dw --regex '^dw$' --set-cursor $dw"%"

  starship init fish | source
  test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

end

