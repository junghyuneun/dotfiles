function mitm
  set -l ffp $fish_function_path[1]
  env fish $ffp/proxy_on.fish
  mitmweb --set tls_version_client_min=SSL3
  echo "Exiting mitmweb..."
  echo "Turning off proxy..."
  env fish $ffp/proxy_off.fish
  echo "Finished cleaning up."
end
