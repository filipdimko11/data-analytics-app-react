import React from 'react'
import LaptopImage from "../assets/laptop.jpg"

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img 
            className='w-[500px] mx-auto'
            src={LaptopImage} alt="/" />
            <div className='flex flex-col justify-center'
            >
                <p
                className='text-[#00df9a] font-bold'
                >
                    DATA ANALYTICS DASHBOARD
                </p>
                <h1
                className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'
                >
                    Manage Data Analytics Centrally
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ullam quisquam aspernatur molestiae, odit quibusdam laboriosam neque nostrum sapiente quo suscipit atque animi, explicabo ab dolorum reprehenderit inventore et vel.
                </p>
                <button
                className='bg-black w-32 h-10 p-2 m-4 rounded-lg mx-auto md:ml-0 md:mt-8 text-[#00df9a] font-semibold'
                >
                    Get Started
                </button>
            </div>
        </div>
    </div>
  )
}

export default Analytics