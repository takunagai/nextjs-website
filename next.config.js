// URL のホスト名を images.domains 構成に追加 & Vercel 以外なら画像最適化をオフ
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
  },
  unoptimized: true,
}
