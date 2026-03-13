# Neoclassical: A modern take on the classic blog theme for Hugo

Neoclassical is a Hugo theme that offers a modern take on the classic blog design. It is built with a focus on simplicity, accessibility, and performance. The theme is designed to be easy to customize and extend, making it a great choice for bloggers, writers, and anyone looking to create a beautiful and functional website with Hugo.

## Usage

To use the Neoclassical theme, install it as a Hugo module:

```bash
hugo mod get github.com/veselosky/neoclassical
```

OR add it as a submodule to your Hugo site repository:

```bash
git submodule add https://github.com/veselosky/neoclassical.git themes/neoclassical
```

To enable caption and citation support in blockquote rendering, add the following to your site's `hugo.yaml`:

```yaml
markup:
  goldmark:
    parser:
      attribute:
        block: true
        title: true
```

## Features

- Classic blog layout with a modern twist
- Two options for post lists: classic text layout and magazine-style card layout
- Pagination for post lists
- Support for series of posts
- Customizable sidebar modules:
  - recent posts
  - featured posts
  - categories
  - tag cloud
  - search
  - blogroll/links
  - Social media links
  - Monthly archive
- Date-based archives for posts
- RSS feeds for categories and tags as well as the main blog
- Responsive design that looks great on all devices
- Built with accessibility in mind; compliant with WCAG 2.1 AA standards
- Supports dark mode (with automatic switching based on user preference)
- Optional banner image in the header (overridable per page/post) with image credits support
- Optional cover image for posts, with image credits support
- Copyright notice and image credits in the footer
- SEO sitemap generation
- Open Graph and Twitter Card metadata for better social media sharing
- [Pagefind](https://pagefind.app/) integration for fast client-side search
- Support for blockquotes with captions and citations, as well as alert/admonition types (caution, important, note, tip, warning) from GitHub Flavored Markdown (GFM)

## Future plans
- Internationalization (i18n) support for multiple languages
- Support multiple authors with author pages and metadata
- Customizable Bootstrap 5 color scheme
