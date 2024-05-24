function mitm
  env fish proxy_on.fish
  mitmweb --set tls_version_client_min=SSL3
  echo "Exiting mitmweb..."
  echo "Turning off proxy..."
  env fish proxy_off.fish
  echo "Finished cleaning up."
end
