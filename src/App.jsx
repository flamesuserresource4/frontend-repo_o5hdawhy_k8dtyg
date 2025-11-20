import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Mbanx from './pages/product/Mbanx'
import RapidX from './pages/product/RapidX'
import Wallet from './pages/product/Wallet'
import MarginX from './pages/product/MarginX'
import Ocoplex from './pages/product/Ocoplex'
import Services from './pages/Services'
import Industries from './pages/Industries'
import CaseStudies from './pages/CaseStudies'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/m-banx" element={<Mbanx />} />
      <Route path="/products/rapidx" element={<RapidX />} />
      <Route path="/products/wallet" element={<Wallet />} />
      <Route path="/products/margin-x" element={<MarginX />} />
      <Route path="/products/ocoplex" element={<Ocoplex />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
