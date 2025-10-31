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

const ellipsisStyle = (line: number) => ({
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": line,
  lineClamp: line,
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

// See: https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/components/VPFeature.vue
export const STYLE = (borderColor: string, bgColor: string) => ({
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
    border: `1px solid ${borderColor}`,
    backgroundColor: `${bgColor}`,
  }),
  img: inlineStyle({
    marginRight: "14px",
    borderRadius: "12px",
    width: "240px",
    height: "126px",
  }),
  texts: inlineStyle({}),
  title: inlineStyle({
    ...ellipsisStyle(2),
    opacity: 1,
    fontSize: "18px",
    lineHeight: "24px",
    margin: "0px 2px 10px 2px",
    fontWeight: "bold",
  }),
  domain: inlineStyle({
    ...ellipsisStyle(1),
    opacity: 1,
    fontSize: "14px",
    lineHeight: "18px",
    margin: "10px 2px 10px 2px",
    textDecoration: "underline",
  }),
  description: inlineStyle({
    ...ellipsisStyle(2),
    opacity: 0.8,
    fontSize: "14px",
    lineHeight: "18px",
    margin: "10px 2px 0px 2px",
  }),
});

export const classNames = (prefix?: string) => ({
  container: `${prefix}__container`,
  img: `${prefix}__img`,
  texts: `${prefix}__texts`,
  title: `${prefix}__texts--title`,
  domain: `${prefix}__texts--domain`,
  description: `${prefix}__texts--desc`,
});
