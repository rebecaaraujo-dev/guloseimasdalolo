import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import BuildYourCake from './components/BuildYourCake/BuildYourCake'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'

const App = () => {

  const location = useLocation();

  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/About' element={<About />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/build-your-cake' element={<BuildYourCake />} />
        </Routes>
        {location.pathname === "/" && <About />}
      </div>
      
      <Footer />
    </>
  )
}

export default App
