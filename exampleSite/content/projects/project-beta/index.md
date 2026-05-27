+++
date = '2026-05-26T00:00:00Z'
title = 'Project Beta'
tags = ['demo', 'reference']
+++

Project Beta is a demo project without a subtitle. This demonstrates how the page template renders only the title when no subtitle is provided.

## Purpose

The purpose of this project is to verify that the subtitle section is gracefully omitted when the front matter does not include a `subtitle` parameter.

## Implementation

The page template uses:

```
<h1>{{ .Title }}{{if .Params.subtitle }}: {{ .Params.subtitle }}{{ end }}</h1>
```

This conditional ensures that the subtitle only appears when explicitly set.
