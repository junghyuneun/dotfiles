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
  abbr --add doc --regex '^doc$' --set-cursor $doc"%"
  abbr --add dw --regex '^dw$' --set-cursor $dw"%"

  oh-my-posh init fish --config ~/.local/share/oh-my-posh/themes/devious-diamonds.omp.yaml | source
  test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

  set -l NODE_MODULES_PATH /usr/local/lib/node_modules
  if test ! -L $NODE_MODULES_PATH -o ! -e $NODE_MODULES_PATH
    if test -s $NODE_MODULES_PATH
      rm $NODE_MODULES_PATH
    end
    ln -s $FNM_MULTISHELL_MODULES_PATH/lib/node_modules/ /usr/local/lib/
  end

end

