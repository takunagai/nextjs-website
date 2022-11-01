/**
 * microCMS user-comments の型情報
 * ★★TODO: API スキーマから型を生成する方法
 */
export type UserComment = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  city: string[]
  body: string
  initial: string
}
