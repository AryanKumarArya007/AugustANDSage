import React, { useEffect, useState } from 'react'
import { Routes ,Route, useLocation } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Cart from "./pages/Cart"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import PlaceOrder from "./pages/PlaceOrder"
import Product from "./pages/Product"
import PrivacyPolicy from './pages/PrivacyPolicy'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Verify from './pages/Verify'

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  // Initialize theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
    } else if (saved === 'light') {
      setIsDark(false);
    }
  }, []);

  // Apply/remove the Tailwind 'dark' class on the root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(v => !v);
  const showToggle = location.pathname === '/';

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] transition-colors duration-200'>
      <ToastContainer theme={isDark ? 'dark' : 'light'} />
      <Navbar showThemeToggle={showToggle} isDark={isDark} onToggleTheme={toggleTheme} />
      <SearchBar/>
     <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/verify' element={<Verify/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
