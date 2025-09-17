---
title: Tldraw
description: Anki Tldraw Extension
---

# Tldraw

[Tldraw](https://tldraw.com/) is a powerful whiteboard tool. This extension integrates it with Anki, enabling you to draw freely on cards during review.

Features:

- Installable in any template you like, so it works across all Anki platforms
- Automatically screenshots the card content into the canvas — perfect if you like drawing or sketching while reviewing
- Full Tldraw features, including Apple Pencil support

## Installation

Open Anki’s card template editor and add the following to the end of any template you like:

```html
<ae-tldraw></ae-tldraw>
<script src="https://cdn.jsdelivr.net/npm/@anki-eco/extensions/dist/tldraw.js" defer></script>
```

During review, you’ll see a button; click it to open the canvas. The button only includes basic styles — feel free to customize its CSS.
