import React from 'react'
import {
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaDribbble,
    FaFacebookSquare,
    FaInstagramSquare,
    FaDiagnoses,
    FaDribbbleSquare
} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-8 gap-8 grid md:grid-cols-3 text-gray-300'>
        <div className='sm:grid sm:grid-col-3'>
            <div>
            <h1 className='text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni atque aperiam distinctio reiciendis ad ex nemo ipsam minus rem.</p>

            <div className='flex justify-between my-3'>
                <FaFacebookSquare size={30}/>
                <FaInstagramSquare size={30}/>
                <FaDribbbleSquare size={30}/>
                <FaTwitterSquare size={30}/>
            </div>

            </div>
        </div>     
        <div className='sm:col-span-2 flex justify-between mx-4'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            Analytics
                        </li>
                        <li className='py-2 text-sm'>
                            Commerce
                        </li>
                        <li className='py-2 text-sm'>
                            Marketing
                        </li>
                        <li className='py-2 text-sm'>
                            Insights
                        </li>
                    </ul>
                </div><div>
                    <h6 className='font-medium text-gray-400'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            Pricing
                        </li>
                        <li className='py-2 text-sm'>
                            Documentation
                        </li>
                        <li className='py-2 text-sm'>
                            Guides
                        </li>
                        <li className='py-2 text-sm'>
                            API Status
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            About
                        </li>
                        <li className='py-2 text-sm'>
                            Blog
                        </li>
                        <li className='py-2 text-sm'>
                            Jobs
                        </li>
                        <li className='py-2 text-sm'>
                            Press
                        </li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>
                            Claim
                        </li>
                        <li className='py-2 text-sm'>
                            Privacy Policy
                        </li>
                        <li className='py-2 text-sm'>
                            Terms & Conditions
                        </li>
                    </ul>
                </div>
        </div>    
        
    </div>
  )
}

export default Footer