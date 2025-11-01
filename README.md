<h1 align="center"> 
vitepress-plugin-linkcard
</h1>

<div align="center">

[![NPM](https://nodei.co/npm/vitepress-plugin-linkcard.svg?style=compact)](https://www.npmjs.com/package/vitepress-plugin-linkcard)

[![Yarn](https://img.shields.io/badge/Built_with_Yarn-v4.9.2-%232C8EBB?logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![VitePress](https://img.shields.io/badge/For_VitePress-v1.6.4-%235C73E7?logo=vitepress&logoColor=white)](https://vuejs.github.io/vitepress/v1/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](/LICENSE)

[![ESLint CI](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/eslint.yml/badge.svg)](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/eslint.yml)
[![Prettier CI](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/prettier.yml/badge.svg)](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/prettier.yml)
[![Generate TypeDoc](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/typedoc.yml/badge.svg)](https://github.com/asumo-1xts/vitepress-plugin-linkcard/actions/workflows/typedoc.yml)

</div>

<p align="center">
  <a href="https://github.com/asumo-1xts/vitepress-plugin-linkcard/blob/main/image/screen.webp?raw=true">
    <img width="80%" src="https://github.com/asumo-1xts/vitepress-plugin-linkcard/blob/main/image/screen.webp?raw=true" />
  </a>
</p>

<div align="center">

**This plugin was forked from [markdown-it-link-to-card](https://github.com/luckrya/markdown-it-link-to-card).**

</div>

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

## Other specifications

### Special handling for `github.com`

When the domain is `github.com`, trimming is performed as shown in the following example to avoid duplication of the title and description.
| | Title | Description |
| - | - | - |
| Before | GitHub - asumo-1xts/vitepress-plugin-linkcard: A VitePress plugin to generate pretty link cards. | A VitePress plugin to generate pretty link cards. Contribute to asumo-1xts/vitepress-plugin-linkcard development by creating an account on GitHub. |
| After | asumo-1xts/vitepress-plugin-linkcard | A VitePress plugin to generate pretty link cards. |

