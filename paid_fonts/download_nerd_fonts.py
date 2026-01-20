from pathlib import Path
import functools
import os
import requests
import shutil
from tqdm.auto import tqdm
# token = "token"
# headers = {"Authorization": f"token {token}"}
# response = requests.get("https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest", headers=headers)
current_dir = os.path.abspath(os.path.dirname(__file__))
response = requests.get("https://api.github.com/repos/ryanoasis/nerd-fonts/releases/latest")
response_json = response.json()
assets = response_json['assets']
total_number_of_fonts = len(assets)
for i in range(total_number_of_fonts):
    asset = assets[i]
    file_name = asset['name']
    print(f'(#{i+1} / {total_number_of_fonts}) Processing {file_name}...')
    if file_name.endswith('zip'):
        url_key = 'browser_url' if 'browser_url' in asset else 'browser_download_url'
        if url_key not in asset:
            print(f'  - No download link found for {file_name}, skipping...')
            continue
        download_url = asset[url_key]
        print(f'  - Trying to download {file_name} from {download_url}...')
        r = requests.get(download_url, stream=True, allow_redirects=True)
        if r.status_code != 200:
            r.raise_for_status()
            print(f'    - Failed to download {file_name} from {download_url}...')
            continue
        file_size = int(r.headers.get('Content-Length', 0))
        desc = f'Unknown total file size {file_name}' if file_size == 0 else ""
        file_save_path = os.path.join(current_dir, file_name)
        r.raw.read = functools.partial(r.raw.read, decode_content=True)
        with tqdm.wrapattr(r.raw, "read", total=file_size, desc=desc) as r_raw:
            with open(file_save_path, "wb") as f:
                shutil.copyfileobj(r_raw, f)
        print(f'  - Successfully downloaded and saved {file_save_path}')

