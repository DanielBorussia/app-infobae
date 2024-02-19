import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Users from '../pages/Users'

const App = () => {
  return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Home/>} />
                <Route path="/users" element={<Users/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
  )
}

export default App
