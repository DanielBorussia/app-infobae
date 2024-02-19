import { Cookies } from 'react-cookie'
// Services

// Redux
import { createSlice } from '@reduxjs/toolkit'
import { getDataUserByGoogle } from '../../shared/services/Auth'
import { type ProfileGoogle, type UserLogin } from '../../shared/interfaces/Profile'

const cookies = new Cookies()
const currentUser = cookies.get('user') || {}

const initialState: UserLogin = {
  name: currentUser.name,
  email: currentUser.email,
  picture: currentUser.picture
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUserLogin: (state, action) => {
      const { name, email, picture } = action.payload
      state.name = name
      state.email = email
      state.picture = picture
    },
    removeUser: (state, _action) => {
      cookies.remove('user', { path: '/' })
      localStorage.clear()
      state.name = null
      state.email = null
    }
  }
})

/**
 * Calls the login service and executes the given callback
 */
export const getDataUser = (onSuccess: (user: ProfileGoogle) => void) => {
  getDataUserByGoogle()
    .then((res: any) => {
      cookies.set('user', res, { path: '/' })
      onSuccess(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const { addUserLogin, removeUser } = userSlice.actions
export default userSlice.reducer
