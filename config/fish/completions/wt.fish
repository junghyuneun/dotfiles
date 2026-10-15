# Completions for the `wt` worktree helper (~/.config/fish/functions/wt.fish)

# Parse `git worktree list --porcelain` and emit one candidate per linked
# worktree (every worktree except the main one, which is always listed first).
#   mode = dir    → directory basename (what `wt -g` matches against)
#   mode = branch → branch name (what `wt -r` hands to git worktree remove / branch -D)
function __wt_worktrees --argument-names mode
    set -l wt_path ''
    set -l nrec 0
    git worktree list --porcelain 2>/dev/null | while read -l key value
        switch $key
            case worktree
                set nrec (math $nrec + 1)
                set wt_path $value
            case branch detached
                test $nrec -gt 1; or continue
                if test "$mode" = dir
                    printf '%s\t%s\n' (path basename -- $wt_path) $wt_path
                else if test "$key" = branch
                    printf '%s\t%s\n' (string replace 'refs/heads/' '' -- $value) $wt_path
                end
        end
    end
end

# Branches already supplied to `wt -r` should not be offered again for the
# next removal argument.
function __wt_selected_remove_branches
    set -l tokens (commandline -opc)
    set -l current_token (commandline -ct)
    if test -n "$current_token"; and test (count $tokens) -gt 0; and test "$tokens[-1]" = "$current_token"
        set -e tokens[-1]
    end

    set -l saw_remove 0
    for token in $tokens[2..]
        switch $token
            case -r --remove
                set saw_remove 1
                continue
            case --
                continue
        end

        test $saw_remove -eq 1; or continue
        printf '%s\n' $token
    end
end

function __wt_removable_branches
    set -l selected (__wt_selected_remove_branches)
    __wt_worktrees branch | while read -l branch wt_path
        contains -- $branch $selected; and continue
        printf '%s\t%s\n' $branch $wt_path
    end
end

# Any ref that can serve as the base for `wt -b NEW_BRANCH BASE`.
function __wt_all_branches
    git for-each-ref --format='%(refname:short)' refs/heads refs/remotes 2>/dev/null |
        string match -rv '/HEAD$'
end

complete -c wt -f

# Modes are mutually exclusive (argparse -x r,l,a,b,g,m): offer them only until one is chosen.
set -l no_mode 'not __fish_contains_opt -s m -s g -s r -s l -s a -s b main go remove list add base'
complete -c wt -n $no_mode -s m -l main -d "Cd to the project's main worktree"
complete -c wt -n $no_mode -s g -l go -d 'Cd to a worktree of the current project'
complete -c wt -n $no_mode -s r -l remove -d 'Remove a worktree and delete its branch'
complete -c wt -n $no_mode -s l -l list -d 'List worktrees'
complete -c wt -n $no_mode -s a -l add -d "Add worktrees off the main worktree's branch: NEW_BRANCH..."
complete -c wt -n $no_mode -s b -l base -d 'Add a worktree off a given base: NEW_BRANCH BASE'

# wt -g NAME — existing worktree directory names of the current project
complete -c wt -n '__fish_contains_opt -s g go; and __fish_is_nth_token 1' -a '(__wt_worktrees dir)'
# wt -r BRANCH... — branches checked out under the worktree directory
complete -c wt -n '__fish_contains_opt -s r remove' -a '(__wt_removable_branches)'
# wt -a NEW_BRANCH... — every argument is a fresh branch cut from the main
# worktree's branch, so there is nothing existing to complete.
# wt -b NEW_BRANCH BASE — the new branch name is free-form; the base is a ref.
complete -c wt -n '__fish_contains_opt -s b base; and __fish_is_nth_token 2' -a '(__wt_all_branches)'
