import React from 'react';

function PlacesToVisit({ trip }) {
    console.log(trip.tripData);

    return (
        <div className='mt-10'>
            <h2 className='font-bold text-lg mb-4'>Places to Visit</h2>
            <div className='flex flex-col space-y-6'>
                {trip.tripData?.trip_plan?.itinerary?.map((item, index) => (
                    <div key={index}>
                        {/* Check if the current item day is different from the previous item */}
                        {index === 0 || item.day !== trip.tripData.trip_plan.itinerary[index - 1].day ? (
                            <h3 className='text-xl font-bold mb-2'>{`${item.day}`}</h3>
                        ) : null}
                        <div className='flex flex-col md:flex-row md:space-x-4 p-4 border rounded-lg shadow-md'>
                            <div className='flex flex-col justify-between'>
                                <h4 className='text-xl font-semibold'>{item.placeName}</h4>
                                <p className='text-gray-700'>{item.placeDetails}</p>
                                <p className='text-gray-500'>Rating: {item.rating}</p>
                                <p className='text-gray-500'>Time: {item.time}</p>
                                <p className='text-gray-500'>Ticket Pricing: {item.ticketPricing}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlacesToVisit;
