import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import ProductListingPage from './pages/ProductListing'
import ProductDetailsPage from './pages/ProductDetail'
import LatestArrivalsPage from './pages/LatestArrivals'

//toast context, cartcontext provider

import './App.css'

function App() {
  return (
    <>
    {/* providers */}
    <Routes>
      <Route path='/' element={<Layout />}>
            <Route path="/products" element={<ProductListingPage />} />
            <Route path="/latest" element={<LatestArrivalsPage />} />
            <Route
              path="/products/:productId"
              element={<ProductDetailPage />}
            />
      </Route>
    </Routes>
    </>
  )
}

export default App
