import { axiosInstanceDummyApi } from './Instance'

/**
 *
 * @param
 * @returns list of all posts
 */
export const getAllPosts = async () => {
  return await axiosInstanceDummyApi.get('/post')
}

/**
 *
 * @param
 * @returns get list post by tag
 */
export const getPostsByTag = async (tag: string | null) => {
  return await axiosInstanceDummyApi.get(`/tag/${tag}/post`)
}
