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
    // 圧縮はフレームワークが処理するから不要？
    // ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
}
