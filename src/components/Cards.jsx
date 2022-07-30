import React from 'react'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                <img src={Single} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='tex-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-3xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Up To 2 GB</p>
                </div>
                <button
                className='bg-[#00df9a] mx-auto text-black rounded-lg font-medium w-[200px] my-2 px-6 py-2 hover:text-[#00df9a] border border-black-2 hover:border-white-2 hover:bg-black ease-in-out mt-4 duration-300'
                >Start Trial</button>
            </div>
            
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 bg-gray-200 duration-1000'>
                <img src={Double} alt="" className='w-20 mx-auto mt-[-3rem] bg-transparent'/>
                <h2 className='tex-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-3xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Up To 2 GB</p>
                </div>
                <button
                className='bg-[#00df9a] mx-auto text-black rounded-lg font-medium w-[200px] my-2 px-6 py-2 hover:text-[#00df9a] border border-black-2 hover:border-white-2 hover:bg-black ease-in-out mt-4 duration-300'
                >Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500'>
                <img src={Triple} alt="" className='w-20 mx-auto mt-[-3rem] bg-white'/>
                <h2 className='tex-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-3xl font-bold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-4'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Up To 2 GB</p>
                </div>
                <button
                className='bg-[#00df9a] mx-auto text-black rounded-lg font-medium w-[200px] my-2 px-6 py-2 hover:text-[#00df9a] border border-black-2 hover:border-white-2 hover:bg-black ease-in-out mt-4 duration-300'
                >Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards