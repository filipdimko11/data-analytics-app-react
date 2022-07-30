import React from 'react'

const Newsletter = () => {
  return (
    <div className='text-white w-full h-full mx-auto grid md:pb-16 py-10 md:pt-12 px-6 lg:grid-cols-3'>
        <div className='lg:col-span-2'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl col-span-2 pt-10 font-bold'>
            Want tips & tricks to optimize your flow?
        </h1>
        <p className='flex'>Sign up for our newsletter and stay up to date</p>
        </div>
        <div className='my-4 flex-auto'>
            <div className='flex md:grid grid-rows-none justify-center md:justify-between grid grid-rows-2'>
                <input type="email" 
                className='p-3 flex rounded-md w-[200px] text-black'
                placeholder="Enter email" />
                <button className='bg-[#00df9a] text-black rounded-lg font-medium w-[200px] my-2 px-6 py-2 hover:text-[#00df9a] border border-black-2 hover:border-white-2 hover:bg-black ease-in-out duration-300'>
                    Notify me
                </button>
            </div>
        </div>

        <p className='text-sm mx-0 text-slate-400'>
            We care about the privacy of your data. Read our 
            <span className='text-indigo-400 px-1'>
                Privacy Policy.
            </span>                        
        </p>
    </div>
  )
}

export default Newsletter