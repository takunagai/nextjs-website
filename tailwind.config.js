/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', // 'media'(デフォルト、この行削除するとこれが適用), false
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
      colors: {
        // Theme 関数の使用：theme('colors.primary')
        transparent: "transparent",
        current: "currentColor",
        primary: {
          100: "#E5D3DA", // 使用: bg-primary-100
          200: "#CAA8B5",
          light: "#B07C91",
          300: "#B07C91",
          400: "#96516C",
          DEFAULT: "#7C2648",
          500: "#7C2648",
          600: "#66203C",
          dark: "#591C34",
          700: "#591C34",
          800: "#4D182D",
          900: "#401425",
        },
        secondary: "#948D35",
        accent: "#187994",
        "accent-dark": "#0F3B47",
        base: "#F0F0EC",
        // cyan: '#79FFE1', // 既存色の上書き設定
      },
      container: {
        // container をデフォルトで中央揃え
        center: true,
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
};
