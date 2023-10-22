// uno.config.ts
import { defineConfig } from "unocss";
import presetMini from "@unocss/preset-mini";
import { variantParentMatcher } from "@unocss/preset-mini/utils";

export default defineConfig({
  shortcuts: {
    "typo-h1": "text-5xl pb-3",
    "typo-h2": "font-light text-3xl pb-3",

    separator: "min-w-1px min-h-1px self-stretch bg-black/80 dark:bg-white/80",
    "separator-inverted": "self-center flex-1",

    a: "cursor-pointer text-blue hover-text-blue-500 active:translate-y-1px",

    container: "w-800px mx-auto px-50px md:px-100px max-w-screen",
    "container-margins": "mx-25px md:mx-50px",
  },
  rules: [
    ["isolate", { isolation: "isolate" }],
    ["mix-blend-color", { "mix-blend-mode": "color" }],
    ["mix-blend-exclusion", { "mix-blend-mode": "exclusion" }],
    ["mix-blend-overlay", { "mix-blend-mode": "overlay" }],
    ["mix-blend-normal", { "mix-blend-mode": "normal" }],

    ["mix-blend-difference", { "mix-blend-mode": "difference" }],
    ["mix-blend-darken", { "mix-blend-mode": "darken" }],
    ["mix-blend-hue", { "mix-blend-mode": "hue" }],
    ["mix-blend-lighten", { "mix-blend-mode": "lighten" }],
    ["mix-blend-multiply", { "mix-blend-mode": "multiply" }],

    [
      /^container-shift-(.+)$/,
      ([, d]) => ({
        width: `calc(800px + 2 * ${d})`,
        "margin-left": `calc(-${d})`,
      }),
    ],
  ],
  theme: {
    breakpoints: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: [variantParentMatcher("height", "@media (max-height: 700px)")],
  presets: [
    presetMini({
      dark: "media",
    }),
  ],
});
