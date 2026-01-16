# git aliases
alias gb 'git br'
alias gs 'git st'
alias gp 'git add .; git commit; wait_for_input git push origin HEAD'
alias gpf 'git add .; git commit --amend; wait_for_input git push --force-with-lease origin HEAD'
alias cat 'bat'
alias ls 'eza'

# Others
set -x MANPAGER "sh -c 'col -bx | bat --color=always --theme=1337 -l man -p'"

if status is-interactive
  function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
  end

  set -l dw '~/Downloads/'
  abbr --add dw --regex '^dw$' --set-cursor $dw"%"

  oh-my-posh init fish --config $XDG_CONFIG_HOME/oh-my-posh/config.omp.json | source
  set -l fp "$HOME/.iterm2_shell_integration.fish"
  test -e $fp; and source $fp
  clean_fnm
end


# pnpm
set -gx PNPM_HOME "/Users/jasoneun/.local/share/pnpm"
if not string match -q -- $PNPM_HOME $PATH
  set -gx PATH "$PNPM_HOME" $PATH
end
# pnpm end


# BEGIN opam configuration
# This is useful if you're using opam as it adds:
#   - the correct directories to the PATH
#   - auto-completion for the opam binary
# This section can be safely removed at any time if needed.
test -r '/Users/jasoneun/.opam/opam-init/init.fish' && source '/Users/jasoneun/.opam/opam-init/init.fish' > /dev/null 2> /dev/null; or true
# END opam configuration
