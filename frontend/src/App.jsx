import React, {useState} from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import BuildYourCake from './components/BuildYourCake/BuildYourCake'
import Footer from './components/Footer/Footer'
import About from './pages/About/About'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/About' element={<About />} />
          <Route path='/order' element={<PlaceOrder />} />
          <Route path='/build-your-cake' element={<BuildYourCake />} />
        </Routes>
      </div>
      
      {location.pathname === "/" && <About />}
      <Footer />
    </>
  )
}

export default App
