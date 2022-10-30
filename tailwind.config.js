/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 'media'(デフォルト), false
  theme: {
    container: {
      // Preline Container デフォルト
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // extend は、デフォルト値を保持しつつ、新しい値を追加
      colors: {
        // Theme 関数の使用：theme('colors.primary')
        transparent: "transparent",
        current: "currentColor",
        primary: {
          100: "#E0D8CC", // 使用: bg-primary-100
          200: "#C1B199",
          light: "#A38A66",
          300: "#A38A66",
          400: "#846333",
          DEFAULT: "#653C00",
          500: "#653C00",
          600: "#513000",
          dark: "#3D2400",
          700: "#3D2400",
          800: "#281800",
          900: "#140C00",
        },
        secondary: {
          100: "#FCE4DB", // 使用: bg-primary-100
          200: "#F9C9B8",
          light: "#F9C9B8",
          300: "#F6AE94",
          400: "#F39371",
          DEFAULT: "#F0784D",
          500: "#F0784D",
          600: "#C0603E",
          dark: "#FF0000",
          700: "#90482E",
          800: "#60301F",
          900: "#30180F",
        },
        tertiary: {
          100: "#FFF1DE", // 使用: bg-primary-100
          200: "#FFE7C3",
          light: "#FFE7C3",
          300: "#FFDCA8",
          400: "#FFD18D",
          DEFAULT: "#FFC673",
          500: "#FFC673",
          600: "#FFBB58",
          dark: "#F2B254",
          700: "#F2B254",
          800: "#D99F4B",
          900: "#CC9646",
        },
        accent: "#187994",
        "accent-dark": "#0F3B47",
        base: "#F0F0EC",
        // cyan: '#79FFE1', // 既存色の上書き設定も可能
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      listStyleType: {
        square: "square",
        // roman: 'upper-roman',
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      backgroundImage: {
        dots: "url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')",
        craft: "url('../public/images/souffle/bg_paper.png')",
        dots2: "url('../public/images/souffle/bg_waterdot.png')",
        dots3: "url('../public/images/souffle/bg_waterdots3.png')",
        triangle: "url('../public/images/souffle/bg_triangledot.png')",
        paper: "url('../public/images/souffle/bg_paper_white.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        "25%": "25%",
      },
      typography: (theme) => ({
        // @tailwindcss/typography Plugin
        // https://tailwindcss.com/docs/typography-plugin
        DEFAULT: {
          css: {
            color: theme("colors.current"),
          },
        },
        // pink: {
        //   css: {
        //     '--tw-prose-body': theme('colors.pink[800]'),
        //     '--tw-prose-headings': theme('colors.pink[900]'),
        //     '--tw-prose-lead': theme('colors.pink[700]'),
        //     '--tw-prose-links': theme('colors.pink[900]'),
        //     '--tw-prose-bold': theme('colors.pink[900]'),
        //     '--tw-prose-counters': theme('colors.pink[600]'),
        //     '--tw-prose-bullets': theme('colors.pink[400]'),
        //     '--tw-prose-hr': theme('colors.pink[300]'),
        //     '--tw-prose-quotes': theme('colors.pink[900]'),
        //     '--tw-prose-quote-borders': theme('colors.pink[300]'),
        //     '--tw-prose-captions': theme('colors.pink[700]'),
        //     '--tw-prose-code': theme('colors.pink[900]'),
        //     '--tw-prose-pre-code': theme('colors.pink[100]'),
        //     '--tw-prose-pre-bg': theme('colors.pink[900]'),
        //     '--tw-prose-th-borders': theme('colors.pink[300]'),
        //     '--tw-prose-td-borders': theme('colors.pink[200]'),
        //     '--tw-prose-invert-body': theme('colors.pink[200]'),
        //     '--tw-prose-invert-headings': theme('colors.white'),
        //     '--tw-prose-invert-lead': theme('colors.pink[300]'),
        //     '--tw-prose-invert-links': theme('colors.white'),
        //     '--tw-prose-invert-bold': theme('colors.white'),
        //     '--tw-prose-invert-counters': theme('colors.pink[400]'),
        //     '--tw-prose-invert-bullets': theme('colors.pink[600]'),
        //     '--tw-prose-invert-hr': theme('colors.pink[700]'),
        //     '--tw-prose-invert-quotes': theme('colors.pink[100]'),
        //     '--tw-prose-invert-quote-borders': theme('colors.pink[700]'),
        //     '--tw-prose-invert-captions': theme('colors.pink[400]'),
        //     '--tw-prose-invert-code': theme('colors.white'),
        //     '--tw-prose-invert-pre-code': theme('colors.pink[300]'),
        //     '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
        //     '--tw-prose-invert-th-borders': theme('colors.pink[600]'),
        //     '--tw-prose-invert-td-borders': theme('colors.pink[700]'),
        //   },
        // },
      }),
    },
    aspectRatio: {
      // @tailwindcss/aspect-ratio Plugin
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
  },
  corePlugins: {
    aspectRatio: false, // @tailwindcss/aspect-ratio との競合を避けるため無効化
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("preline/plugin"),
  ],
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
}
