/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";


  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: `Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with
HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place
Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with
best time to visit in JSON format.`},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"trip_plan\": {\n    \"destination\": \"Las Vegas, Nevada\",\n    \"duration\": \"5 days\",\n    \"travel_dates\": \"2024-03-15 to 2024-03-19\",\n    \"budget\": \"USD 1500\",\n    \"activities\": [\n      {\n        \"name\": \"Visit the Strip\",\n        \"description\": \"Explore the iconic casinos, hotels, and entertainment venues along the Las Vegas Strip.\",\n        \"duration\": \"1 day\",\n        \"cost\": \"Free (excluding gambling and entertainment expenses)\"\n      },\n      {\n        \"name\": \"See a show\",\n        \"description\": \"Catch a world-class performance at one of the many theaters on the Strip.\",\n        \"duration\": \"1 evening\",\n        \"cost\": \"USD 50 - 200 (depending on the show)\"\n      },\n      {\n        \"name\": \"Experience the Bellagio Conservatory & Botanical Garden\",\n        \"description\": \"Admire stunning floral displays and sculptures in this beautiful indoor garden.\",\n        \"duration\": \"1 hour\",\n        \"cost\": \"Free\"\n      },\n      {\n        \"name\": \"Visit the High Roller Observation Wheel\",\n        \"description\": \"Enjoy panoramic views of Las Vegas from the world's tallest observation wheel.\",\n        \"duration\": \"1 hour\",\n        \"cost\": \"USD 35 - 50 (depending on ticket type)\"\n      },\n      {\n        \"name\": \"Explore Fremont Street Experience\",\n        \"description\": \"Experience the vibrant nightlife and street performers in downtown Las Vegas.\",\n        \"duration\": \"1 evening\",\n        \"cost\": \"Free (excluding food and drinks)\"\n      }\n    ],\n    \"hotels\": [\n      {\n        \"name\": \"The Venetian Resort Las Vegas\",\n        \"location\": \"The Strip\",\n        \"price_range\": \"USD 200 - 500 per night\",\n        \"amenities\": \"Casino, multiple restaurants, spa, pool, shopping\",\n        \"highlights\": \"Luxury accommodations, romantic gondola rides, replica of Venice, Italy\"\n      },\n      {\n        \"name\": \"The Cosmopolitan of Las Vegas\",\n        \"location\": \"The Strip\",\n        \"price_range\": \"USD 250 - 600 per night\",\n        \"amenities\": \"Casino, rooftop pool, restaurants, bars, nightclubs\",\n        \"highlights\": \"Modern and stylish design, vibrant nightlife, rooftop views\"\n      },\n      {\n        \"name\": \"Caesars Palace\",\n        \"location\": \"The Strip\",\n        \"price_range\": \"USD 150 - 400 per night\",\n        \"amenities\": \"Casino, multiple restaurants, spa, pool, shopping\",\n        \"highlights\": \"Roman-themed resort, Forum Shops, world-class entertainment\"\n      },\n      {\n        \"name\": \"MGM Grand Las Vegas\",\n        \"location\": \"The Strip\",\n        \"price_range\": \"USD 100 - 300 per night\",\n        \"amenities\": \"Casino, multiple restaurants, spa, pool, shopping, entertainment venues\",\n        \"highlights\": \"Large resort complex, family-friendly atmosphere, multiple dining options\"\n      },\n      {\n        \"name\": \"The Wynn Las Vegas\",\n        \"location\": \"The Strip\",\n        \"price_range\": \"USD 300 - 700 per night\",\n        \"amenities\": \"Casino, multiple restaurants, spa, pool, golf course\",\n        \"highlights\": \"Luxurious accommodations, fine dining, high-end shopping\"\n      }\n    ]\n  }\n}\n```\n\n**Explanation:**\n\n* **`trip_plan`**: The top-level object representing the trip plan.\n* **`destination`**: The destination city, \"Las Vegas, Nevada\".\n* **`duration`**: The length of the trip, \"5 days\".\n* **`travel_dates`**: Specific dates of travel, \"2024-03-15 to 2024-03-19\".\n* **`budget`**: Estimated budget for the trip, \"USD 1500\".\n* **`activities`**: An array of planned activities with details:\n    * **`name`**: The name of the activity.\n    * **`description`**: A brief description of the activity.\n    * **`duration`**: Estimated time required for the activity.\n    * **`cost`**: Estimated cost of the activity.\n* **`hotels`**: An array of hotel recommendations with details:\n    * **`name`**: The name of the hotel.\n    * **`location`**: The location within Las Vegas (e.g., \"The Strip\").\n    * **`price_range`**: Estimated price range per night.\n    * **`amenities`**: A list of hotel amenities.\n    * **`highlights`**: Key features and attractions of the hotel.\n\n**Remember**:\n\n* This is a basic trip plan and can be customized based on your preferences and interests.\n* Hotel prices are subject to change based on availability and travel dates.\n* It's recommended to research and book accommodations and activities in advance, especially during peak travel season.\n* Consider adding information about transportation (airfare, car rentals, etc.) to the trip plan.\n"},
          ],
        },
      ],
    });
  