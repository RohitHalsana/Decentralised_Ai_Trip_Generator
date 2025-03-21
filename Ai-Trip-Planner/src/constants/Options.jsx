export const SelectTravelsList=[
    {
        id  : 1,
        title:'Just me',
        desc:'A Solo traveler',
        icon:'',
        people:1
    },
    {
        id  : 2,
        title:'Couple',
        desc:'2 people',
        icon:'',
        people:2
    },
    {
        id  : 3,
        title:'With family',
        desc:'4-5 people',
        icon:'',
        people:'3 to 5 people'
    }
]

export const SelecetBudgetOptions=[
    {
        id  : 1,
        title:'Cheap',
        desc:'Stay consious about cost',
        icon:'',
        people:1
    },
    {
        id  : 2,
        title:'Moderate',
        desc:'Keep it average',
        icon:'',
        people:2
    },
    {
        id  : 3,
        title:'Luxury',
        desc:'Dont worry about the cost',
        icon:'',
        people:'3 to 5 people'
    }
]

export const AI_PROMT = "Generate Travel Plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format."