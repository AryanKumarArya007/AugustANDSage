import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler=(event)=> {
        event.preventDefault();

    }




  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800 dark:text-white'> Subscribe now & get 20% off </p>
        <p className='text-gray-400 mt-3 dark:text-white'>
            "Become a member and get 20% OFF right away, plus VIP perks like special discounts, styling tips, and limited-edition releases."
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 dark:border-gray-700 bg-white/40 dark:bg-slate-800/60 backdrop-blur-sm'>
            <input className='w-full sm:flex outline-none bg-transparent text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400' type='email' placeholder='Enter your e-mail' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 dark:bg-white dark:text-black'> SUBSCRIBE </button>
        </form>
      
    </div>
  )
}

export default NewsletterBox
