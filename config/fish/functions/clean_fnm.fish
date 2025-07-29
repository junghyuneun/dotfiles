function clean_fnm --on-variable FNM_MULTISHELL_PATH
  for i in $HOME/.local/state/fnm_multishells/*
    if test ! -e $i -o ! -L $i
      rm $i
    end
  end

  find $XDG_STATE_HOME/fnm_multishells -type l -mtime +1d -name "*_*" -delete

  set -l lb $HOME/.local/bin
  for i in $FNM_MULTISHELL_PATH/bin/*
    set -l f (basename $i)
    set -l tn $lb/$f
    set -l sln (readlink $tn)
    if not begin; test -e $tn; and string match -q -r "^$FNM_MULTISHELL_PATH" $sln; end
      rm $tn
      ln -s $i $tn
    end
  end
end
