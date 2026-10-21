# Jack Zhang — personal academic website

A responsive, single-page personal website. Built in plain HTML, CSS, and JavaScript, with **no framework, package manager, account, or build step required**.

## See the website locally

Open `index.html` in a web browser. That's it.

## What to personalize before publishing

1. **Publications:** Open `index.html`, find `<!-- TODO: ... -->`, and replace the temporary NeurIPS entry with the actual paper title, coauthors, and optional PDF/ArXiv/code links. The venue and acceptance status are based on prior information; please verify before posting.
2. **Contact and social links:** Open `config.js` and enter your email, CV path, Google Scholar URL, GitHub URL, and LinkedIn URL. Blank links are automatically hidden. If you add your email, the “Contact details will be added here” placeholder disappears.
3. **CV:** Copy your resume to `assets/jack-zhang-cv.pdf` (or another PDF filename) and set `cv: "assets/jack-zhang-cv.pdf"` in `config.js`. The top-right CV link appears automatically.
4. **Biography and research:** Edit the prose directly in `index.html` to reflect your exact current project, advisor, academic background, etc.
5. **Metadata:** Update the `<title>`, `meta name="description"`, and Open Graph tags in `index.html` if desired.
6. **Favicon and styling:** Edit `assets/favicon.svg` and the color variables at the top of `styles.css`.

All assertions about research are deliberately broad; no publication titles, citations, profile URLs, or email addresses were invented.

## Publish for free via GitHub Pages

1. On GitHub, create a **public repository named `<your-github-username>.github.io`**. Replace the placeholder with your actual GitHub username.
2. Upload the contents of *this folder* to the root of the new repository. `index.html` should be at the repository root, not nested inside a folder.
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/(root)`, and click Save.
4. Your site will be at `https://<your-github-username>.github.io/` when GitHub completes deployment.

GitHub's documentation: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

For a custom domain later: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Folder structure

```text
jack-zhang-website/
├── index.html       # Content + sections
├── styles.css       # Visual design + responsive layout
├── config.js        # Personal links / CV
├── script.js        # Mobile menu + optional link rendering
├── assets/
│   └── favicon.svg  # Browser tab icon
└── README.md
```

## Notes

- The hero illustration is an original SVG within `index.html`; it does not load an external image.
- The site works offline and uses fallback system fonts.
- No analytics or tracking have been added.
- No contact form is included (a plain email link is simpler and avoids backend setup).
