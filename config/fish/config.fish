# git aliases
alias gp 'git add .; git commit; wait_for_input git push origin HEAD'
alias gpf 'git add .; git commit --amend; wait_for_input git push --force-with-lease origin HEAD'
alias cat 'bat'
alias ls 'eza'

# Others
set -gx EDITOR vim
set -gx LESSCHARSET utf-8
set -x MANPAGER "sh -c 'col -bx | bat --theme=\"Catppuccin Frappe\" -l man -p'"

if status is-interactive
  function multicd
    echo cd (string repeat -n (math (string length -- $argv[1]) - 1) ../)
  end

  set -l dw ~/Downloads/
  set -l do ~/Documents/
  set -l sp '~/Library/Application\ Support/'
  set -l co '~/.config/'
  set -l fs '~/.config/fish/config.fish'
  abbr --add dw --position anywhere --set-cursor "$dw%"
  abbr --add do --position anywhere --set-cursor "$do%"
  abbr --add sp --position anywhere --set-cursor "$sp%"
  abbr --add co --position anywhere --set-cursor "$co%"
  abbr --add fs --position anywhere --set-cursor "$fs%"

  oh-my-posh init fish --config $XDG_CONFIG_HOME/oh-my-posh/config.omp.json | source
  clean_fnm
end

# fzf
fzf --fish | source

# brew
set -gx HOMEBREW_NO_REQUIRE_TAP_TRUST 1
set -gx HOMEBREW_UPGRADE_GREEDY 1

# pnpm
set -gx PNPM_HOME "$HOME/.local/share/pnpm"
if not string match -q -- $PNPM_HOME $PATH
  set -gx PATH "$PNPM_HOME" $PATH
end
# pnpm end

# Shell Integration
test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

# ngrok
set -gx NGROK_AUTHTOKEN 7h1JAKkVvfxgmjAM8pnJ5_6doYqrgWZfYjG9R96SH9E

# bun
set -gx BUN_INSTALL "$HOME/.bun"
set -gx PATH $BUN_INSTALL/bin $PATH

# Codex
set -gx CODEX_HOME $HOME/.codex
cp (npm root -g)/context-mode/configs/codex/AGENTS.md $CODEX_HOME/AGENTS.md


# BEGIN opam configuration
# This is useful if you're using opam as it adds:
#   - the correct directories to the PATH
#   - auto-completion for the opam binary
# This section can be safely removed at any time if needed.
test -r "$HOME/.opam/opam-init/init.fish" && source "$HOME/.opam/opam-init/init.fish" > /dev/null 2> /dev/null; or true
# END opam configuration

# Shell Integration
test -e {$HOME}/.iterm2_shell_integration.fish ; and source {$HOME}/.iterm2_shell_integration.fish

# ngrok
set -gx NGROK_AUTHTOKEN 7h1JAKkVvfxgmjAM8pnJ5_6doYqrgWZfYjG9R96SH9E
