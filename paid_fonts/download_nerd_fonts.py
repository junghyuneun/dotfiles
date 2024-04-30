import requests
token = "token"
headers = {"Authorization": f"token {token}"}
response = requests.get("https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest", headers=headers)
response_json = response.json()
for asset in response_json['assets']:
    if asset['name'].endswith('zip'):
        print(asset['name'])
        url_key = 'browser_url' if 'browser_url' in asset else 'browser_download_url'
        download_url = asset[url_key]
        data = requests.get(download_url).content
        with open(asset['name'], 'wb') as f:
            f.write(data)
