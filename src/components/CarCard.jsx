import React from 'react'
import './carcard.css'
import { CircleGauge, Fuel, FuelIcon, IndianRupee, MapPin, Star, User } from 'lucide-react'
export default function CarCard({ cardata }) {
  
  return (
    <>
     
        <div className='card '>
          <div className='image2'> 
             <img  className='image h-[177px] w-full' src={cardata.img} alt={cardata.name} /></div>
        
          <div className='bottom-container p-[12px]'>
            <div className='flex justify-between m-2 m-[1px]'>
              <h1 className='text-[15px]'>{cardata.name}</h1>
              <div className='flex'> <IndianRupee size={16} className='m-auto'/><h1 className='font-bold text-[15px] '>{cardata.price}</h1></div>
             

            </div>
            <div className='flex justify-between m-[1px]'>
              <h1 className='text-[15px] font-normal'>{cardata.category}</h1>
              <h1 className='font-normal text-[15px] '>/day</h1>
            </div>
            <div className='flex justify-items-start  rating'>
              <div className='border2 flex'><Star size={20} fill='orange' color='orange' className='m-auto' />
              <h2 className='font-bold text-black'>{cardata.rating}</h2></div>
              
              <div className='location'>
                <MapPin size={20} className='m-auto' />
                <h2 className='font-normal  text-black text-gray-500'>{cardata.location}</h2></div>
            </div>
            <div className='flex justify-items-start m-1 manual'>
              <div className='flex m-0.5 justify-evenly gap-x-1'>
                <Fuel size={15} color='cyan' className='m-auto' />
                <h3 className='font-normal text-black'>{cardata.fuelType}</h3>
              </div>
              <div className='flex m-0.5 justify-evenly gap-x-1'>
                <User size={15} color='cyan' className='m-auto'/>
                <h3 className='font-normal text-black'>{cardata.seats}</h3>
              </div>
               <div className='flex m-0.5 justify-evenly gap-x-1'>
                <CircleGauge size={15} color='cyan' className='m-auto'/>
                <h3 className='font-normal text-black'>{cardata. Transmission}</h3>
              </div>
            </div>

          </div>
          <div className='button flex justify-evenly'>
          <button className='h-8 w-28 cursor-pointer  border-blue-400 text-blue-300 font-bold viewbutton hover:bg-cyan-50'>View Details</button>
           <button className='h-8 w-28 cursor-pointer bg-blue-300 text-white font-bold  shadow'>Book Now</button>
        </div>
        </div>

        
      
    </>
  )
}
