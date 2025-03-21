import React from 'react'

function InfoSection({trip}) {
  return (
    <div>
        <img src="https://digital.ihg.com/is/image/ihg/ihgor-member-rate-web-offers-1440x720" alt="Images" className='rounded-xl h-[340px] w-full ' />
        {/* <h2>{trip?.userSelection?.location?.label}</h2> */}
        <div className='my-5 flex flex-col gap-2'>
          <h2 className='font-bold text-2xl'>Location{trip?.useSelection?.location?.label}</h2>
          <div className='flex  gap-2'>
            <h2 className='p-2 px-3 bg-gray-200 rounded-full text-gray-500'>{trip?.userSelection?.noOfDays} Days ✈️</h2>
            <h2 className='p-2 px-3 bg-gray-200 rounded-full text-gray-500'>budget: {trip?.userSelection?.budget}💰</h2>
            <h2 className='p-2 px-3 bg-gray-200 rounded-full text-gray-500'>For {trip?.userSelection?.traveler}</h2>

          </div>
          
        </div>
    </div>
  )
}

export default InfoSection