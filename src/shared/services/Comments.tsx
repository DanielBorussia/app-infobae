import { axiosInstanceDummyApi } from './Instance'

/**
 *
 * @param id post
 * @returns getCommentsByPost
 */
export const getCommentsByPost = async (idPost: number) => {
  return await axiosInstanceDummyApi.get(`/post/${idPost}/comment`)
}
