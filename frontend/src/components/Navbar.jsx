import React, { use,useContext,useState } from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
const Navbar = ({ showThemeToggle = false, isDark = false, onToggleTheme }) => {

    const [visible,setVisible]=useState(false);
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItems}=useContext(ShopContext)
    const location = useLocation();

    const logout=()=>{
        navigate('/login')
        localStorage.removeItem("token")
        setToken('')
        setCartItems({})
       
    }





  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      
    <Link to='/'>  <img src={assets.company_logo2} className='w-40 h-27 filter dark:invert' alt="" /></Link>

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
                     <img
                         onClick={() => {
                             if (location.pathname === '/') {
                                 navigate('/collection', { state: { openSearch: true } });
                             } else {
                                 setShowSearch(true);
                             }
                         }}
                         src={assets.search_icon}
                         className='w-6 cursor-pointer filter dark:invert'
                     />

            <div className='group relative'>
               <img onClick={()=>token ?null: navigate('/login')} className='w-8 cursor-pointer filter dark:invert' src={assets.profile_icon1} alt="" />
               {/* {dropdown menu} */}
               {token && 
               <div  className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded dark:bg-slate-800 dark:text-white shadow-lg'>
                        <p  className='cursor-pointer hover:text-black dark:hover:text-gray-200'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black dark:hover:text-gray-200'>Orders</p>
                        <p  onClick={logout} className='cursor-pointer hover:text-black dark:hover:text-gray-200'> Logout</p>
                    </div>
                    
                </div> }
               
               
                
            </div>
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-8 min-w-5 filter dark:invert' alt="" />
            <p className='absolute right-[-5px] bottom-[-4px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>

            </Link>
                        {showThemeToggle && (
                            <button
                                type="button"
                                aria-label="Toggle dark mode"
                                onClick={onToggleTheme}
                                className="relative flex items-center w-12 h-6 rounded-full bg-slate-700 dark:bg-slate-800 transition-colors"
                            >
                                {/* Sun icon on the left */}
                                <span className={`absolute left-1 top-1 w-4 h-4 text-yellow-400 transition-opacity ${isDark ? 'opacity-60' : 'opacity-100'}`}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0 4a1 1 0 0 1-1-1v-1.25a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1Zm0-18a1 1 0 0 1-1-1V1.75a1 1 0 1 1 2 0V3a1 1 0 0 1-1 1Zm9 9a1 1 0 0 1-1 1h-1.25a1 1 0 1 1 0-2H20a1 1 0 0 1 1 1ZM6.25 12a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h1.25a1 1 0 0 1 1 1Zm11.78 6.53a1 1 0 0 1-1.41 1.41l-.88-.88a1 1 0 1 1 1.41-1.41l.88.88Zm-11.24-11.3a1 1 0 1 1-1.41-1.41l.88-.88a1 1 0 0 1 1.41 1.41l-.88.88Zm11.3-2.06.88-.88a1 1 0 1 1 1.41 1.41l-.88.88a1 1 0 1 1-1.41-1.41ZM6.47 17.03l-.88.88a1 1 0 1 1-1.41-1.41l.88-.88a1 1 0 1 1 1.41 1.41Z" />
                                    </svg>
                                </span>

                                {/* Knob */}
                                <span
                                    className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-gray-400 transition-transform ${isDark ? 'translate-x-6 bg-blue-400' : 'translate-x-0'}`}
                                />

                                {/* Moon icon on the right */}
                                <span className={`absolute right-1 top-1 w-4 h-4 text-blue-300 transition-opacity ${isDark ? 'opacity-100' : 'opacity-60'}`}>
                                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
                                    </svg>
                                </span>
                            </button>
                        )}
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden filter dark:invert' />
        </div>
        {/* Sidebar menu for small screens */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full': 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180 filter dark:invert' src={assets.dropdown_icon} alt='' />
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
