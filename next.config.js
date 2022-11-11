module.exports = {
  reactStrictMode: true,
  images: {
    // URL のホスト名を images.domains 構成に追加
    domains: [
      "picsum.photos",
      "images.microcms-assets.io",
      "vercel.app",
      "hanshin-branch.org",
    ],
    // unoptimized: true, // 画像最適化の無効化。Vercel なら不要
    // https://nextjs.org/docs/messages/export-image-api
  },
}

module.exports = {}
