import { Filter } from 'lucide-react'
import React, { useState } from 'react'
import './Filterpanel.css'
import CarCard from './CarCard'
export default function FilterPanel() {
    const [category, setcategory] = useState('All')
    const [fueltype, setfueltype] = useState('All')
    const [transmission, settransmission] = useState('All')
    const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury', 'Electric', 'MPV']
    const fuel = ['All', 'Petrol', 'Diesel', 'Electric']
    const transmissions = ['All', 'Manual', 'Automatic']
    

    return (
        <>
            <div className='bg-white relative  container2  m-2.5 w-[200px]'>
                <div className='filter mt-4 '><Filter size={15} color='cyan' />
                    <h2 className='font-extrabold text-[19px]   relative left-1.5'>Filters</h2></div>

                <div className=' m-2.5 text-[15px] font-bold  grid    '>
                    <span className='pl-2 font-bold'>Car Category</span>
                    <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {categories.map((type) => (
                            <button key={type} onClick={()=>setcategory(type)} className={`pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5 flex items-center
                            ${category === type ? 'bg-blue-500 text-white' : 'hover:bg-sky-200'}   `}>{type}
                            </button>
                        ))}
                    </div>
                    <span className='pl-2'>Fuel Type</span>
                    <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {fuel.map((type) => (
                            <button key={type} onClick={()=>setfueltype(type)} className={`pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5 flex items-center
                            ${fueltype === type ? 'bg-blue-500 text-white' : 'hover:bg-sky-200'}   `}>{type}
                            </button>
                        ))}
                    </div>
                    <span className='pl-2'>Transmission</span>
                    <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {transmissions.map((type) => (
                            <button key={type} onClick={()=>settransmission(type)} className={`pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5   flex items-center ${transmission === type ? 'bg-blue-500 text-white' : 'hover:bg-sky-200'} `}>{type}
                            </button>
                        ))}
                    </div>
                </div>


            </div >
          
           
        </>
    )
}
