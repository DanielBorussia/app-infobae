import { axiosInstanceDummyApi } from './Instance'

/**
 *
 * @param
 * @returns list of all users
 */
export const getAllUsers = async () => {
  return await axiosInstanceDummyApi.get('/user')
}
