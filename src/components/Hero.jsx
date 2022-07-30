import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen text-center mx-auto flex flex-col justify-center'>
            <p className='uppercase text-[#00df9a] text-l font-bold p-2'>
            Growing with data analytics
            </p>
            <p className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>
            Growing with data.
            </p>
            <div className='flex justify-center py-4'>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold'>
            Fast, flexible finance for
            </p>
            <Typed className='md:text-4xl sm:text-3xl text-slate-700 text-xl font-bold md:pl-4 pl-2'
            strings={
                ["B2B", "B2C", "SASS"]}
                typespeed={120}
                backSpeed={120}
                loop
            />
            </div>
            <p className='md:text-xl text-l mx-10 text-gray-500'>
                Monitor your data analyitics to increase revenue for B2B, B2C & SASS platforms.
            </p>
            <button className='bg-[#00df9a] w-32 h-10 p-2 m-4 rounded-lg mx-auto text-black font-semibold'>
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Hero