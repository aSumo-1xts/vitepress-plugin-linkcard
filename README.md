<h1 align="center"> 
vitepress-plugin-linkcard
</h1>

<div align="center">

[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/)
[![Vitepress](https://img.shields.io/badge/Vitepress-5C73E7?logo=vitepress&logoColor=white)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)

**A VitePress plugin to generate pretty link cards.**

**This plugin was forked from [markdown-it-link-to-card](https://github.com/luckrya/markdown-it-link-to-card).**

</div>

<p align="center">
  <a href="https://github.com/asumo-1xts/vitepress-plugin-linkcard/blob/main/image/screen.png?raw=true">
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
        // // options:
        // target: "_self",
        // borderColor: "#cc0000",
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

### target

Specifies the target window in which to open a link.

- `_blank` (default)
- `_self`
- `_top`
- `_parent`

### borderColor

Specifies the border color of linkcards with a color code. For exmaple:

- `#7d7d7d` (default)
- `rgba(3, 147, 147, 0.39)`
- ...
