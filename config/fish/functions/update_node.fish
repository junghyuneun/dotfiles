function update_node
  set -l cnv (fnm current)
  set -l lnv (fnm list-remote)[-1]
  if string match -q -r '^v[\d\.]+$' $lnv; and test $cnv != $lnv
    fnm install $lnv
    fnm alias $lnv default
    fnm use default
    fnm uninstall $cnv
    clean_fnm
  end
end
