function unzip_nerd_fonts
  for i in $argv/*.zip
    set -l filename (string split . (basename $i))[1]
    unzip $i -d $filename
    rm $i
  end
end

