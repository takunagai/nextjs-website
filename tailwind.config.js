/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class', // 'media'(デフォルト、この行削除するとこれが適用), false
  theme: {
    container: { // Preline Container デフォルト
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: { // Theme 関数の使用：theme('colors.primary')
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          100: '#E5D3DA', // 使用: bg-primary-100
          200: '#CAA8B5',
          light: '#B07C91',
          300: '#B07C91',
          400: '#96516C',
          DEFAULT: '#7C2648',
          500: '#7C2648',
          600: '#66203C',
          dark: '#591C34',
          700: '#591C34',
          800: '#4D182D',
          900: '#401425',
        },
        'secondary': '#948D35',
        'accent': '#187994',
        'accent-dark': '#0F3B47',
        'base': '#F0F0EC',
        // cyan: '#79FFE1', // 既存色の上書き設定
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "Liberation Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      listStyleType: {
        square: 'square',
        // roman: 'upper-roman',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundImage: {
        'dots': "url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')",
      },
    },
  },
  plugins: [
    require('preline/plugin')
  ],
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
}
