import { type Owner } from './Owner'

export interface Post {
  id: number
  image: string
  likes: number
  tags: string[]
  text: string
  publishDate: string
  owner: Owner
}
