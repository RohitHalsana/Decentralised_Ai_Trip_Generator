import React from 'react'
import { Link } from 'react-router-dom';

function Hotels({ trip }) {
    console.log(trip.tripData?.hotels);
    return (
        <div>
            <h2 className='font-bold mt-7 '>Hotel Recomendation</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {trip?.tripData?.trip_plan?.hotels?.map((hotel, index) => (
                    <Link to={'https://www.google.com/maps/search/?api=1&query=centurylink+field' + hotel.name + hotel.address} target='_blank'>
                        <div key={index} className='mt-8 p-4 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200'>
                            {/* <img src={hotel.image_url} alt={hotel.name} className='w-full h-32 object-cover rounded-lg mb-2' /> */}
                            <h2 className='font-semibold text-lg'>{hotel.name}</h2>
                            <h2 className='text-xs text-gray-600'>📍 {hotel.address}</h2>
                            <h2 className='text-sm text-green-600 font-medium'>💰 {hotel.price}</h2>
                            <h2 className='text-yellow-500'>{`⭐️ ${hotel.rating}`}</h2>
                        </div>

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Hotels