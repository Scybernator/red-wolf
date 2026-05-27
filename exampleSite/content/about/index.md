+++
date = '2026-05-27T00:00:00Z'
title = 'About This Site'
subtitle = 'A demo about page'
tags = ['demo', 'red-wolf', 'about']
+++

This is the about page for the Red Wolf theme demo. It demonstrates the page layout with a table of contents, date display, title and subtitle rendering, and tags listing.

## What is Red Wolf?

Red Wolf is a Hugo theme designed for personal blogs and portfolio sites. It features a clean, minimal design with a focus on content readability.

## Features

The theme includes several notable features:

### Image extraction

Images are automatically extracted from page bundles and content. The theme tries multiple strategies in priority order:
1. `featuredImage` front-matter parameter
2. Page resource matching the URL base name
3. First image resource in the bundle
4. Remote image URL in content
5. Fallback default image

### Tag cloud

The home page includes a tag cloud generated from all site taxonomies. Each tag links to its term page, which lists all posts with that tag.

### Table of contents

Single pages include an auto-generated table of contents based on heading levels 1 through 4.

> Red Wolf is designed to work with Hugo's native asset pipeline — no JavaScript build tools required.

## Getting started

To use this theme, add it to your site's `theme` configuration and copy any templates you want to customize.

### Configuration

The minimal configuration needs just:

```toml
theme = 'red-wolf'
```

### Customization

Override any template by placing a file with the same name in your site's `layouts/` directory.
