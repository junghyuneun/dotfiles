function wait_for_input
  fish -c read -l >/dev/null; and eval $argv
end
