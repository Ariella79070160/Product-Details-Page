import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import ProductListingPage from './pages/ProductListing'
import ProductDetailsPage from './pages/ProductDetail'
import LatestArrivalsPage from './pages/LatestArrivals'

import ToastContextProvider from './context/ToastContext'
import CartContextProvider from './context/CartContext'

import './App.css'

function App() {
  return (
      <ToastContextProvider>
        <CartContextProvider>
          <Routes>
            <Route path='/' element={<Layout />}>
                  <Route path="/products" element={<ProductListingPage />} />
                  <Route path="/latest" element={<LatestArrivalsPage />} />
                  <Route
                    path="/products/:productId"
                    element={<ProductDetailsPage />}
                  />
            </Route>
          </Routes>
        </CartContextProvider>
      </ToastContextProvider>
  )
}

export default App
