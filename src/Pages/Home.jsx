import React from 'react';

const Home = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen">
      {/* Background Image */}
      <img
        src="https://www.carrollwoodflorist.com/files/6217/4553/6542/CarrollwoodFlorist-130.jpg"
        alt="Hero"
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-white/40">
        <div className="text-center px-4 sm:px-8 py-6 sm:py-10 bg-white/60 rounded-2xl shadow-lg max-w-2xl md:max-w-3xl">
          
          {/* Heading */}
          <h1 className="playfair-display-uniquifier font-bold text-2xl sm:text-4xl md:text-6xl leading-snug md:leading-tight">
            SHOW HOW MUCH <br className="hidden sm:block" /> YOU CARE
          </h1>

          {/* Subtext */}
          <p className="font-bold text-xs sm:text-base md:text-2xl mt-3 sm:mt-5">
            Make a lasting impression with a fresh, creative bouquet{" "}
            <br className="hidden md:block" /> delivered on time
          </p>

          {/* Button */}
          <div className="flex justify-center mt-5 sm:mt-8">
            <button className="playfair-display-uniquifier bg-green-700 hover:bg-green-800 transition px-5 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-lg md:text-2xl text-white font-bold">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
