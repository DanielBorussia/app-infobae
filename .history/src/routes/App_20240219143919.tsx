import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'

const App = () => {
  return (
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Home/>} />
            </Routes>
            </Layout>
        </BrowserRouter>
  )
}

export default App
