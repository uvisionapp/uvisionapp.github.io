# UVision website (GitHub Pages)

Buildless static site for `https://uvisionapp.github.io`.

## Files

- `index.html` — product introduction.
- `support.html` — official email and Instagram support links.
- `privacy.html` — English/Russian working draft, visibly marked as unapproved.
- `styles.css`, `script.js` — responsive design and local language/theme controls.
- `assets/uvision-icon.png` — copy of the approved 1024×1024 app icon.
- `sitemap.xml`, `robots.txt` — crawler metadata; `.nojekyll` keeps the static files unprocessed.

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. No build step, server-side code, API key, analytics, cookie banner or third-party library is used.

## Publish to `uvisionapp/uvisionapp.github.io`

1. Before publishing, have the owner approve the privacy wording and fill in the developer/legal entity, applicable jurisdiction/address, and effective date where required. `privacy.html` is explicitly marked as a draft until then.
2. Clone the repository:

   ```sh
   git clone https://github.com/uvisionapp/uvisionapp.github.io.git
   cd uvisionapp.github.io
   ```

3. Copy the **contents** of this folder into the repository root, preserving the `assets/` folder. Do not copy the containing `UVision-GitHub-Pages` directory itself.
4. Review the diff and test the three pages locally. Then commit and push using the repository’s normal workflow.
5. In the repository settings, choose **Deploy from a branch**, branch **`main`**, folder **`/(root)`**. The root already contains `index.html` and needs no build step. After deployment, check `https://uvisionapp.github.io` and its support/privacy pages.

This preparation does not publish or commit anything.
