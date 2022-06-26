module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    // // postcss-preset-env を使用している場合、ネストを無効にして、代わりに tailwindcss/nesting に処理させる
    // 'postcss-preset-env': {
    //   features: { 'nesting-rules': false },
    // },
    autoprefixer: {},
    // cssnano による圧縮は問題あり？
    // https://github.com/vercel/next.js/discussions/22560
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
