/**
 * microCMS group の型情報
 * ★★TODO: API スキーマから型を生成する方法
 *   https://zenn.dev/sora_kumo/articles/2876c8f98eca56
 */
export type Group = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  mainImage?: {
    url: string
    width: number
    height: number
  }
  locationType: string[]
  city: string[]
  address: string
  summary: string
  objectPerson: string
  place: string
  activityDate: string
  cost: string
  manager: string
  contactName?: string
  contactTel: string
  contactHours: string
  contactFax?: string
  contactEmail: string
  contactLine?: string
  webUrl?: string
  leafletImage1?: {
    url: string
    width: number
    height: number
  }
  leafletImage2?: {
    url: string
    width: number
    height: number
  }
  notice?: string
}
