function wt
  argparse -x r,l,a,b,g,m 'm/main' 'g/go' 'r/remove' 'l/list' 'a/add' 'b/base' -- $argv
  function check_is_in_worktree
    if string match -eq /worktree/ (pwd)
      return 0
    else
      return 1
    end
  end
  set -l _proj_base (path normalize ~/Documents/)
  set -l _worktree_base (path normalize ~/Documents/worktree/)
  # main worktree is always the first record, no matter where we are in the repo;
  # keep its path and the branch it has checked out (empty when main is detached)
  set -l _main_dir
  set -l _main_branch
  for line in (git worktree list --porcelain 2>/dev/null)
    set -l fields (string split -m1 ' ' -- $line)
    switch $fields[1]
      case worktree
        # a second worktree record means the main record is done
        set -q _main_dir[1]; and break
        set _main_dir $fields[2]
      case branch
        set _main_branch (string replace 'refs/heads/' '' -- $fields[2])
    end
  end
  set -l _cur_proj
  set -l cur_proj_worktree_dir
  if set -q _main_dir[1]
    set _cur_proj (path basename $_main_dir)
    set cur_proj_worktree_dir (path normalize $_main_dir/../worktree/$_cur_proj)
  end
  if set -q _flag_r
    check_is_in_worktree
    if test $status -eq 0
      return 1
    end
    for arg in $argv
      git worktree remove $arg
      git br -D $arg
    end
  else if set -q _flag_l
    git worktree list
  else if set -q _flag_a
    check_is_in_worktree
    if test $status -eq 0
      return 1
    end
    if not set -q argv[1]; or not set -q _main_branch[1]
      return 1
    end
    mkdir -p $cur_proj_worktree_dir
    for arg in $argv
      git worktree add $cur_proj_worktree_dir/$arg -b $arg $_main_branch
    end
    wt -g $arg
  else if set -q _flag_b
    check_is_in_worktree
    if test $status -eq 0
      return 1
    end
    if test (count $argv) -ne 2; or not set -q cur_proj_worktree_dir[1]
      return 1
    end
    mkdir -p $cur_proj_worktree_dir
    git worktree add $cur_proj_worktree_dir/$argv[1] -b $argv[1] $argv[2]
  else if set -q _flag_m
    if set -q _main_dir[1]
      cd $_main_dir
    else
      return 1
    end
  else if set -q _flag_g
    if test -z "$argv[1]"
      return 1
    end
    # every linked worktree of this repo (main is listed first; drop it),
    # so this works from the main checkout and from inside any worktree
    set -l wt_paths (git worktree list --porcelain 2>/dev/null | string replace -rf '^worktree ' '')[2..]
    for pattern in "$argv[1]" "*$argv[1]*"
      for wt_path in $wt_paths
        if string match -qi -- $pattern (path basename $wt_path)
          cd $wt_path
          return
        end
      end
    end
    return 1
  end
end

