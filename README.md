<h1 align="center"> 
vitepress-plugin-linkcard
</h1>

<div align="center">

[![NPM Version](https://img.shields.io/npm/v/vitepress-plugin-linkcard?style=flat&logo=npm&logoColor=white&labelColor=CB3837&color=CB3837&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fvitepress-plugin-linkcard)](https://www.npmjs.com/package/vitepress-plugin-linkcard)
[![Vitepress](https://img.shields.io/badge/Vitepress-5C73E7?logo=vitepress&logoColor=white)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)

**A VitePress plugin to generate pretty linkcards.**

**This plugin was forked from [markdown-it-link-to-card](https://github.com/luckrya/markdown-it-link-to-card).**

</div>

<p align="center">
  <a href="https://github.com/asumo-1xts/vitepress-plugin-linkcard/blob/main/image/screen.webp?raw=true">
    <img width="75%" src="https://github.com/asumo-1xts/vitepress-plugin-linkcard/blob/main/image/screen.webp?raw=true" />
  </a>
</p>

## Getting started

### Install

```shell
npm i -D vitepress-plugin-linkcard      # npm
yarn add -D vitepress-plugin-linkcard   # yarn
pnpm add -D vitepress-plugin-linkcard   # pnpm
```

### Usage

#### `docs/.vitepress/config.ts`

```ts
import { defineConfig } from "vitepress";
import { linkToCardPlugin } from "vitepress-plugin-linkcard";
import type { LinkToCardPluginOptions } from "vitepress-plugin-linkcard";

export default defineConfig({
  // ...
  markdown: {
    config: (md) => {
      md.use<LinkToCardPluginOptions>(linkToCardPlugin, {
        // // Supported options:
        // target: "_self",
        // borderColor: "#039393",
        // bgColor: "#CB3837"
      });
    },
  }
  // ...
});
```

#### `*.md`

Generates a link card when `@:` appended.

```md
[example](@:https://example.com)
```

## Supported options

### borderColor

Specifies the border color of linkcards with a color code. For exmaple:

- `#7d7d7dff` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### bgColor

Specifies the background color of linkcards with a color code. For exmaple:

- `#7d7d7d00` (default)
- `rgba(3, 147, 147, 0.39)`
- ...

### target

Specifies the target window in which to open a link.

- `_blank` (default)
- `_self`
- `_top`
- `_parent`