import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Catalogue } from './pages/Catalogue'
import { Collections } from './pages/Collections'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { ProductDetail } from './pages/ProductDetail'
import { Testimonial } from './pages/Testimonial'

function App() {
  return (
    <Routes>
      <Route path="catalogue" element={<Catalogue />} />
      <Route path="catalogue/travertine" element={<Catalogue series="travertine" />} />
      <Route path="catalogue/granite" element={<Catalogue series="granite" />} />
      <Route path="catalogue/slate" element={<Catalogue series="slate" />} />
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
