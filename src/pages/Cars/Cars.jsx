import { Search } from 'lucide-react'

import React, { useState } from 'react'
import './car.css'

import CarGallery from '../../components/CarGallery'
export default function Cars() {
    const[search,setsearch]=useState('')
    const[range,setrange]=useState('')
    return (
        <>
            <div className='container font-black text-[16px] grid bg-white  relative top-5  max-w-7xl m-auto ' >
                <div className="search   flex ">
                    <Search className='searchtag '  size={18}/>
                    <input className='input'  type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search by car name or city...' />
                </div>
                <div className=" recommended  " onChange={(e)=>{setrange(e.target.value)}} >
                  
                  <select >
                        <option value="recommended">Recommended</option>
                        <option value="low to high">Price: Low to High</option>
                        <option value="high to low">Price: High to Low</option>
                        <option value="top">Top Rated</option>
                    </select>
                </div>



              
                   <CarGallery search={search} range={range}/>
            

            </div>
        </>
    )
}
