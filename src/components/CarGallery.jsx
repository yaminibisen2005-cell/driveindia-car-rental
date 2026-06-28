import React from 'react'

import img1 from '../assets/carimages/audi.webp'
import img2 from '../assets/carimages/audi2.webp'
import img3 from '../assets/carimages/electric range rover.webp'
import img4 from '../assets/carimages/maruti copy.webp'
import img5 from '../assets/carimages/maruti wegon.webp'
import img6 from '../assets/carimages/maruti.webp'
import img7 from '../assets/carimages/mercedes suv.webp'
import img8 from '../assets/carimages/mercedes.webp'
import img9 from '../assets/carimages/mpv.webp'
import img10 from '../assets/carimages/seadan.webp'
import img11 from '../assets/carimages/toyoto.webp'
import CarCard from './CarCard'
import FilterPanel from './FilterPanel'

export default function CarGallery({search}) {
  const cardetail = [
    {
      id: 1,
      name: "Audi",
      category: 'Luxury',
      img: img1,
      fuelType: 'Petrol',
      Transmission: 'Mannual',
      price: 2000,
      seats: 3,
      location: 'Pune',
      rating: 4.6
    },
    {
      id: 2,
      img: img2,
      name: "Audi ",
      category: 'Electric',
      fuelType: 'Petrol',
      Transmission: 'Automatic',
      price: 2500,
      seats: 3,
      location: 'Delhi',
      rating: 4.0
    },
    {
      id: 3,
      img: img3,
      category: 'Luxury',
      name: "Range Rover",
      fuelType: 'Diesel',
      Transmission: 'Mannual',
      price: 3000,
      seats: 5,
      location: 'Mumbai',
      rating: 3.5
    },
    {
      id: 4,
      img: img4,
      category: 'Hatchback',
      name: "Maruti",
      fuelType: 'Petrol',
      Transmission: 'Mannual',
      price: 2000,
      seats: 4,
      location: 'Haryana',
      rating: 4.4
    },
    {
      id: 5,
      img: img5,
      category: 'SUV',
      name: "Maruti Wegon",
      fuelType: 'Petrol',
      Transmission: 'Automatic',
      price: 2700,
      seats: 5,
      location: 'Himachal',
      rating: 4.1
    },
    {
      id: 6,
      img: img6,
      category: 'MPV',
      name: "Maruti",
      fuelType: 'Petrol',
      Transmission: 'Mannual',
      price: 1000,
      seats: 4,
      location: 'Jind',
      rating: 5.1
    },
    {
      id: 7,
      img: img7,
      category: 'SUV',
      name: "Mercedes SUV",
      fuelType: 'Petrol',
      Transmission: 'Automatic',
      price: 4000,
      seats: 3,
      location: 'Hyderabad',
      rating: 5.4
    },
    {
      id: 8,
      img: img8,
      category: 'Luxury',
      name: "Mercedes",
      fuelType: 'Electric',
      Transmission: 'Mannual',
      price: 5000,
      seats: 4,
      location: 'Banglore',
      rating: 4.2
    },
    {
      id: 9,
      img: img9,
      category: 'Luxury',
      name: "Toyoto",
      fuelType: 'Petrol',
      Transmission: 'Mannual',
      price: 3000,
      seats: 7,
      location: 'Gujrat',
      rating: 4.6
    },
    {
      id: 10,
      img: img10,
      category: 'Luxury',
      name: "Seadan",
      fuelType: 'Petrol',
      Transmission: 'Mannual',
      price: 3300,
      seats: 4,
      location: 'Delhi',
      rating: 4.0
    },
    {
      id: 11,
      img: img11,
      category: 'Luxury',
      name: "Toyoto",
      fuelType: 'Diesel',
      Transmission: 'Mannual',
      price: 3000,
      seats: 5,
      location: 'Hissar',
      rating: 3.2
    },

  ]
  
  const filtered=cardetail.filter((car)=>
  car.name.toLowerCase().includes(search.toLowerCase()) ||car.location.toLowerCase().includes(search.toLowerCase()) )
  return (
    <>
   
      <div className="main">
        <FilterPanel />

        <div className="carcard pt-[15px]">

          {search==='' ? cardetail.map((cars) => (
            <CarCard  key={cars.id} cardata={cars} />
          )): filtered.map((cars) => (
            <CarCard  key={cars.id} cardata={cars}  />
          ))}
        </div>
      </div>

    </>
  )
}
