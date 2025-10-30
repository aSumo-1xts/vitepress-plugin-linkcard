import type { CardDomRender } from "../types";
import { isString } from "@luckrya/utility";
import { classNames, STYLE } from "./style";

export const generateCardDomFragment: CardDomRender = (data, options) => {
  const aa = {
    rel: `rel="noopener noreferrer"`,
    target: `target="${options.target}"`,
    href: `href="${options.href}"`,
    title: `title="${options.linkTitle}"`,
    borderColor: `borderColor="${options.borderColor}"`,
  };
  const inject = (s: string, c: string) => {
    if (isString(options.classPrefix) && !!options.classPrefix) return c;
    return s;
  };
  const classes = classNames(options.classPrefix);
  const style = STYLE(options.borderColor || "#7d7d7d");

  return `<span style="display:block;">
  <a ${aa.rel} ${aa.target} ${aa.href} ${aa.title} ${style.a}>
    <span ${inject(style.container, classes.container)}>
      <img src="${data?.logo}" ${inject(style.img, classes.img)}/>
      <span ${inject(style.texts, classes.texts)}>
        <span ${inject(style.title, classes.title)}>
          ${data.title || options.linkTitle || ""}
        </span>
        <span ${inject(style.description, classes.description)}>
          ${data.description || ""}
        </span>
      </span>
    </span>
  </a>
</span>`;
};
