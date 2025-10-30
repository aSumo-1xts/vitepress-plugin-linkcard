import type { Size } from "../types";

function hyphenate(str: string): string {
  return str.replace(/\B([A-Z])/g, "-$1").toLowerCase();
}

function join(style: Record<string, string | number>) {
  return Object.entries(style)
    .map(([k, v]) => {
      if (k && v) return `${hyphenate(k)}: ${v};`;
    })
    .filter(Boolean)
    .join(" ");
}

function inlineStyle(style: Record<string, string | number>) {
  return `style="${join(style)}"`;
}

const ellipsisStyle = (line: number = 3) => ({
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": line,
  lineClamp: line,
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

// See: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFeature.vue
const STYLE = {
  a: inlineStyle({
    color: "unset !important",
    display: "block",
    minWidth: "340px",
    textDecoration: "none",
  }),
  container: inlineStyle({
    display: "flex",
    alignItems: "center",
    padding: "12px 12px",
    borderRadius: "12px",
    border: "1px solid #7d7d7d", // TODO : make changeable
  }),
  img: inlineStyle({
    marginRight: "12px",
    borderRadius: "12px",
    width: "210px",
    height: "110px",
  }),
  texts: inlineStyle({}),
  title: inlineStyle({
    ...ellipsisStyle(2),
    opacity: 1,
    fontSize: "18px",
    lineHeight: "24px",
    margin: "2px 2px 12px 2px",
    fontWeight: "bold",
  }),
  description: inlineStyle({
    ...ellipsisStyle(),
    opacity: 0.8,
    fontSize: "14px",
    lineHeight: "20px",
    margin: "12px 2px 2px 2px",
  }),
};

export function styleNames(size: Size) {
  return STYLE;
}

export const classNames = (prefix?: string) => ({
  container: `${prefix}__container`,
  img: `${prefix}__img`,
  texts: `${prefix}__texts`,
  title: `${prefix}__texts--title`,
  description: `${prefix}__texts--desc`,
});
