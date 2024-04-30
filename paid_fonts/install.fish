#!/opt/homebrew/bin/fish
for i in ./*
  if test -d $i
    cp -R $i ~/Library/Fonts
  end
end
