import { axiosInstanceDummyApi } from './Instance'

/**
 *
 * @param
 * @returns getAllTags
 */
export const getAllTags = async () => {
  return await axiosInstanceDummyApi.get('/tag')
}
