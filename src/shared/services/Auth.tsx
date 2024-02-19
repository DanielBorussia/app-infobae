import { axiosInstanceGoogleSignInApi } from './Instance'

/**
 *
 * @param
 * @returns get data by user logged in
 */
export const getDataUserByGoogle = async () => {
  const currentUser = localStorage.getItem('access_token') ?? ''
  return await axiosInstanceGoogleSignInApi.get(`userinfo?${currentUser}`)
}
