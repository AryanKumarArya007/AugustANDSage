import React, { use,useContext,useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = ({ showThemeToggle = false, isDark = false, onToggleTheme }) => {

    const [visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext)

    const logout=()=>{
        navigate('/login')
        localStorage.removeItem("token")
        setToken('')
        setCartItems({})
       
    }





  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <Link to='/'>  <img src={assets.company_logo2} className='w-40 h-27' alt="" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>

            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>

            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden '/>

            </NavLink>

            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>

            </NavLink>
            
        </ul>
        <div className='flex items-center gap-6'>
           <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-6 cursor-pointer' />

            <div className='group relative'>
               <img onClick={()=>token ?null: navigate('/login')} className='w-8 cursor-pointer' src={assets.profile_icon1} alt="" />
               {/* {dropdown menu} */}
               {token && 
               <div  className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500  rounded'>
                        <p  className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p  onClick={logout} className='cursor-pointer hover:text-black'> Logout</p>
                    </div>
                    
                </div> }
               
               
                
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-8 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

            </Link>
                        {showThemeToggle && (
                            <button
                                type="button"
                                aria-label="Toggle dark mode"
                                onClick={onToggleTheme}
                                className="relative flex items-center w-12 h-6 rounded-full bg-slate-700 dark:bg-slate-800 transition-colors"
                            >
                                <span
                                    className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-gray-400 transition-transform ${isDark ? 'translate-x-6 bg-blue-400' : 'translate-x-0'}`}
                                />
                                <span className="absolute right-1 top-1 w-4 h-4 text-blue-300">
                                    {/* Inline moon icon */}
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                                    </svg>
                                </span>
                            </button>
                        )}
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' />
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt='' />
                    <p>Back</p>

                </div>
                <NavLink  onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/' >HOME</NavLink>
                <NavLink  onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/collection' >COLLECTION</NavLink>
                <NavLink  onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/about' >ABOUT</NavLink>
                <NavLink  onClick={()=>setVisible(false)}  className='py-2 pl-6 border' to='/contact' >CONTACT</NavLink>


            </div>
        </div>

          
    </div>
  )
}

export default Navbar
