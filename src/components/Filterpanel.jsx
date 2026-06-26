import React, { useState } from 'react'

export default function Filterpanel() {
    const [category, setcategory] = useState('All')
    const [fueltype, setfueltype] = useState('All')
    const [transmission, settransmission] = useState('All')
    const categories = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury', 'Electric', 'MPV']
    const fuel = ['All', 'Petrol', 'Diesel', 'Electric']
    const transmissions = ['All', 'Manual', 'Automatic']

    return (
        <>
            <div className='bg-white relative top-9 rounded-2xl border  m-2.5 w-[300px]'>
                <h2 className='font-bold text-[15px] m-2  relative left-1.5'>Filters</h2>
                <div className='w-3xs m-2.5 text-[15px] font-bold  grid    '>
                    <span className='pl-2'>Car Category</span>
                 <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {categories.map((type) => (
                            <button key={type} className='pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5 border-box hover:bg-sky-200 flex items-center '>{type}
                            </button>
                        ))}
                    </div>
                    <span className='pl-2'>Fuel Type</span>
                    <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {fuel.map((type) => (
                            <button key={type} className='pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5 border-box hover:bg-sky-200 flex items-center '>{type}
                            </button>
                        ))}
                    </div>
                    <span className='pl-2'>Transmission</span>
                    <div className='grid border-b-2 border-y-gray-200 p-2 mb-1.5'>
                        {transmissions.map((type) => (
                            <button key={type} className='pl-2.5 h-9 rounded-3xl  font-normal text-[15px] relative  text-left ml-1.5 border-box hover:bg-sky-200 flex items-center  '>{type}
                            </button>
                        ))}
                    </div>
                </div>


            </div>
        </>
    )
}
