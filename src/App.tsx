import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Collections } from './pages/Collections'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Testimonial } from './pages/Testimonial'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="collections/:slug" element={<ProductDetail />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
