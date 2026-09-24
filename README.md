# Hemanth Kumar — personal portfolio

A static Jekyll portfolio for **Hemanth Kumar Nara Jayasankar**, published from the repository root on GitHub Pages. Content pages are Markdown with YAML front matter; presentation lives in `_layouts/`, `_includes/`, and `assets/css/style.css`. There is no app backend or build framework.

## Publish on GitHub Pages

1. Put these root-level site files in a repository named **`Hemanth2423.github.io`**, on the `main` branch. GitHub repository names are case-insensitive, but the username must be `Hemanth2423`.
2. In GitHub, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, and save. GitHub Pages builds the Jekyll site automatically; no action or manual build is needed.
3. The resulting address is **https://hemanth2423.github.io/**. `_config.yml` keeps `baseurl: ""` for a user site. Do **not** add `.nojekyll`.
4. To publish changes, commit and push edits to `main`. GitHub Pages will rebuild automatically.

No custom domain is configured.

## Update the site

- Edit `index.md`, `about.md`, `experience.md`, and `contact.md` for page content. Keep the YAML front matter at the top.
- Edit `_includes/header.html` and `_includes/footer.html` for navigation and footer links. Keep URL filters (`relative_url`) on internal links.
- Edit `_config.yml` for site metadata, including `url` if the GitHub username changes. Theme colors and typography live in `assets/css/style.css`; the theme toggle lives in `assets/js/theme.js`.
- The email address is intentionally public. `mailto:` opens the visitor's configured email app; the address is also written plainly on the Contact page so visitors can copy it.
- `jekyll-seo-tag` supplies metadata and canonical URLs; `jekyll-sitemap` creates `/sitemap.xml`. Both are supported by GitHub Pages. The favicon is local SVG.
- `theme: null` in `_config.yml` prevents GitHub Pages' default Primer theme from replacing the site's own CSS.
- No projects page or projects have been invented. Add them only when there are real projects you want to share.

## Preview locally

Install a Ruby version compatible with the current GitHub Pages gem and Bundler, then from this repository root run:

```sh
bundle install
bundle exec jekyll serve --livereload
```

Open `http://localhost:4000/`. To check the production build locally:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

The generated `_site/` directory is ignored by Git. Local preview uses Ruby and Bundler only; GitHub Pages handles the published build.

## Lighthouse and responsive checks

After serving locally or publishing, open the site in Chrome DevTools → **Lighthouse**. Select mobile and desktop and run **Performance**, **Accessibility**, **Best Practices**, and **SEO** audits; target at least 90 in each. In the device toolbar check both **375px** and **1280px** widths. Also test every nav link, the theme toggle (including persistence after refresh), keyboard focus, and the email link. Lighthouse scores may vary by browser, network, and environment.

Local audit on the finished preview: **100 / 100 / 100 / 100** (Performance / Accessibility / Best Practices / SEO) in both Lighthouse mobile and desktop presets. The home page was inspected at 375px and 1280px; the experience page was also inspected at 375px, and the dark palette at 1280px. All four routes and the CSS, favicon, and sitemap returned HTTP 200. A production-mode Jekyll build succeeded with the expected canonical URL.

## Technical choices and assumptions

- Jekyll is GitHub Pages' native build path; Markdown content stays separate from reusable HTML and one stylesheet.
- System fonts avoid third-party requests and help keep performance high.
- Light/dark follows the system setting by default; a tiny script saves manual choice locally. No analytics or trackers are included.
- The supplied `Hemanth2423.github.io` was interpreted as the GitHub user-site address, with `Hemanth2423` as username. The site is not configured for `Thenjhemanth.com`.
- Résumé facts supplied in this conversation are the only source of professional claims. The résumé phone number is intentionally omitted because only email publication was confirmed. No achievements, employers, clients, projects, or metrics were invented.