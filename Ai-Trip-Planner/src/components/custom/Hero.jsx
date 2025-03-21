import React from "react";
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center font-bold mt-10">
        "Plan <span className="text-green-700">Smart</span>, Travel{" "}
        <span className="text-blue-700">Smarter!</span>"
      </h1>
      <p className="mt-5">
        "Journey smart with AI art. Perfect trips from the very start."
      </p>
      <Link to={"/create-trip"}>
        <button className="border border-black mt-5 w-[200px] h-[40px] flex items-center justify-center bg-white">
          Get Started
        </button>
      </Link>
    </div>
  );
}

export default Hero;
