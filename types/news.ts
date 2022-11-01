/**
 * microCMS news の型情報
 * ★★TODO: API スキーマから型を生成する方法
 */
export type NewsItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  date: string
  title: string
  body: string
}
