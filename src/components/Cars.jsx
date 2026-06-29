import { Search } from 'lucide-react'

import React, { useState } from 'react'
import './car.css'
import cardetail from '../data/cardetail'
import CarGallery from '../Components/CarGallery'
export default function Cars() {
    const[search,setsearch]=useState('')
    const[range,setrange]=useState('')
   const[recommended ,setrecommended]=useState("Recommended")
    const reccar=[...cardetail]
        if(recommended==='Price: Low to High'){
           reccar.sort((a,b)=>a.price-b.price)
          
        }
       if(recommended==='Price: High to Low'){
          reccar.sort((a,b)=>b.price-a.price)
       
        }
      
        
    
    return (
        <>
            <div className='container font-black text-[16px] grid bg-white  relative top-5  max-w-7xl m-auto ' >
                <div className="search   flex ">
                    <Search className='searchtag '  size={18}/>
                    <input className='input'  type="text" onChange={(e)=>setsearch(e.target.value)} placeholder='Search by car name or city...' />
                </div>
                <div className=" recommended  " onChange={(e)=>{setrange(e.target.value)}} >
                  
                  <select >
                        <option value="recommended" >Recommended</option>
                        <option value="low to high" onClick={(e)=>setrecommended(e.target.value)}>Price: Low to High</option>
                        <option value="high to low"onClick={(e)=>setrecommended(e.target.value)} >Price: High to Low</option>
                        <option value="top">Top Rated</option>
                    </select>
                </div>



              
                   <CarGallery search={search} reccar={reccar} />
            

            </div>
        </>
    )
}
