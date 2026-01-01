import React, { useContext, useEffect,useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const{search,setSearch,showSearch,setShowSearch}=useContext(ShopContext);
    const[visible,setVisible] = useState(false);
    const location=useLocation();

     useEffect(() => {
       if (location.pathname.includes('collection')) {
         setVisible(true);
       } else {
         setVisible(false);
       }
     }, [location])




  return showSearch && visible ?(
    <div className='border-t border-b bg-gray-50 dark:bg-slate-900 text-center transition-colors'>
        <div className='inline-flex items-center justify-center border border-gray-400 dark:border-gray-700 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white/40 dark:bg-slate-800/60 backdrop-blur-sm'>
            <input
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className='flex-1 outline-none bg-transparent text-sm text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400'
              type="text"
              placeholder='search'
            />
            <img className='w-4 filter dark:invert' src={assets.search_icon} alt="Search" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer filter dark:invert' src={assets.cross_icon} alt="Close"/>
    </div>
  ) : null
}

export default SearchBar
