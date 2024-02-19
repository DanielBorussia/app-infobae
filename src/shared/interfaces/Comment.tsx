import { type Owner } from './Owner'

export interface Comment {
  id: number
  message: string
  owner: Owner
  post: number
  publishDate: string
}
