import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import store from '../redux/store'
import Users from '../pages/Users'
import AuthGuard from '../guards/auth.guard'

const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Home/>} />
                <Route element={<AuthGuard />}>
                  <Route path="/users" element={<Users/>} />
                </Route>
            </Routes>
            </Layout>
        </BrowserRouter>
        </Provider>
  )
}

export default App
