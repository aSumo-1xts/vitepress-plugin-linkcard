import type { CardDomRender } from "../types";
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
  const domain =
    new URL(url).origin.replace(/^https?:\/\//, "").replace(/^www\./, "") ||
    "Unknown domain";

  let title = data.title;
  let description = data.description;

  // Special handling for gitub.com
  if (domain == "github.com") {
    title = data.title?.split(":")[0].replace("GitHub - ", "") || "No title";
    description =
      description?.replace(` - ${title}`, "").replace(
        `Contribute to ${title} development by creating an account on GitHub.`, // 定型句
        ""
      ) || "";
  } else {
    title = data.title || "No title";
    description = data.description || "";
  }

  return `<span style="display:block;">
  <a ${aa.rel} ${aa.target} ${aa.href} ${aa.title} ${style.a}>
    <span ${inject(style.container, classes.container)}>
      <span ${inject(style.texts, classes.texts)}>
        <span ${inject(style.title, classes.title)}>
          ${escapeHTML(title)}
        </span>
        <span ${inject(style.domain, classes.domain)}>
          ${escapeHTML(domain)}
        </span>
        <span ${inject(style.description, classes.description)}>
          ${escapeHTML(description)}
        </span>
      </span>
      <img src="${data?.logo}" ${inject(style.img, classes.img)}/>
    </span>
  </a>
</span>`;
};
