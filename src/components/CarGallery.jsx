import React, { useState } from 'react'
import FilterPanel from './FilterPanel'
import CarCard from './CarCard'

import cardetail from '../data/cardetail'
export default function CarGallery({ search, reccar }) {
  const [category, setcategory] = useState('All')
  const [fueltype, setfueltype] = useState('All')
  const [transmission, settransmission] = useState('All')
  const filtered = reccar.filter((car) => {

    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase()) || car.location.toLowerCase().includes(search.toLowerCase())
    const matchCategory = category === "All" || car.category === category;

    const matchFuel = fueltype === "All" || car.fuelType === fueltype;

    const matchTransmission = transmission === "All" || car.Transmission === transmission;

    return (
      matchSearch &&
      matchCategory &&
      matchFuel &&
      matchTransmission
    );
  }
  )
  return (
    <>

      <div className="main">
        <FilterPanel category={category} setcategory={setcategory} fueltype={fueltype} setfueltype={setfueltype} transmission={transmission} settransmission={settransmission} />

        <div className="carcard pt-[15px]">

          {filtered.map((cars) =>
            <CarCard key={cars.id} cardata={cars} />


          )}
        </div>
      </div>

    </>
  )
}
