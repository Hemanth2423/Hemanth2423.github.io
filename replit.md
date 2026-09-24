# Hemanth Kumar portfolio

A root-level static Jekyll website for GitHub Pages, built from Markdown pages, HTML layouts/includes, CSS, and a small theme-toggle script.

## Run & operate
- Install Ruby 3.2 and Bundler, then `bundle install`.
- `bundle exec jekyll serve --host 0.0.0.0 --port "${PORT:-4000}"` previews the site.
- `JEKYLL_ENV=production bundle exec jekyll build` checks the build.
- GitHub Pages builds from `main` / `/` of a repository named `Hemanth2423.github.io`; no custom domain.

## Structure
- `index.md`, `about.md`, `experience.md`, `contact.md`: content with YAML front matter.
- `_config.yml`: site URL, empty baseurl, SEO and sitemap plugins.
- `_layouts/`, `_includes/`: reusable HTML.
- `assets/css/style.css`, `assets/js/theme.js`, `assets/favicon.svg`: presentation.
- `README.md`: editing, publishing, and verification guide.

## Project-specific constraints
- Keep the GitHub Pages site in the repository root. Do not add a separate app, framework, backend, database, blog, or trackers.
- Use only résumé facts supplied by the user; do not fetch personal details from a LinkedIn URL or invent accomplishments.
- The user approved publishing their email as a mailto link, but not their phone number.