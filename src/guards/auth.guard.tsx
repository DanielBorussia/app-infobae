import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { type AppStore } from '../shared/interfaces/AppStore'

export const AuthGuard = () => {
  const userState = useSelector((store: AppStore) => store.user)
  return userState.name ? <Outlet /> : <Navigate replace to='/' />
}

export default AuthGuard
