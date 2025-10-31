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
    bgColor: `bgColor="${options.bgColor}"`,
  };
  const inject = (s: string, c: string) => {
    if (isString(options.classPrefix) && !!options.classPrefix) return c;
    return s;
  };
  const escapeHTML = (str: string) =>
    str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  const classes = classNames(options.classPrefix);
  const style = STYLE(
    options.borderColor || "#7d7d7dff",
    options.bgColor || "#7d7d7d00"
  );
  const url = options.href || "";
  const domain = new URL(url).origin;

  return `<span style="display:block;">
  <a ${aa.rel} ${aa.target} ${aa.href} ${aa.title} ${style.a}>
    <span ${inject(style.container, classes.container)}>
      <span ${inject(style.texts, classes.texts)}>
        <span ${inject(style.title, classes.title)}>
          ${escapeHTML(data.title || "")}
        </span>
        <span ${inject(style.domain, classes.domain)}>
          ${escapeHTML(domain || "(Unknown domain)")}
        </span>
        <span ${inject(style.description, classes.description)}>
          ${escapeHTML(data.description || "")}
        </span>
      </span>
      <img src="${data?.logo}" ${inject(style.img, classes.img)}/>
    </span>
  </a>
</span>`;
};
