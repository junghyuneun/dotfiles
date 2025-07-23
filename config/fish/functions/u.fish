function u
  argparse s/split -- $argv
  set -f unicodes
  set -f prefix
  for a in $argv
    if string match -rq '^[0-9a-fA-F]{5,6}$' $a
      set prefix "\U"
    else if string match -rq '^[0-9a-fA-F]{1,4}$' $a
      set prefix "\u"
    else
      continue
    end
    set -a unicodes (string unescape $prefix$a)
  end
  if test -n "$unicodes"
    if set -q _flag_s
      string split ' ' $unicodes
    else
      echo $unicodes
    end
  end
end
