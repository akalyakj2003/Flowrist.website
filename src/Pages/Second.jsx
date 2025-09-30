import React from 'react';
import { LuNotepadText } from "react-icons/lu";

const Second = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      {/* Heading */}
      <p className="playfair-display-uniquifier text-center font-bold text-2xl sm:text-3xl md:text-4xl">
        ORDER IN 3 EASY STEPS
      </p>

      {/* Steps */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <LuNotepadText className="bg-green-700 w-14 h-14 sm:w-16 sm:h-16 text-white p-3 rounded-full" />
          <p className="playfair-display-uniquifier mt-4 border border-gray-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-bold w-full max-w-[240px]">
            CHOOSE BOUQUET
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center">
          <LuNotepadText className="bg-green-700 w-14 h-14 sm:w-16 sm:h-16 text-white p-3 rounded-full" />
          <p className="playfair-display-uniquifier mt-4 border border-gray-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-bold w-full max-w-[240px]">
            SCHEDULE DELIVERY
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center">
          <LuNotepadText className="bg-green-700 w-14 h-14 sm:w-16 sm:h-16 text-white p-3 rounded-full" />
          <p className="playfair-display-uniquifier mt-4 border border-gray-300 rounded-lg px-4 sm:px-6 py-2 sm:py-3 font-bold w-full max-w-[240px]">
            MAKE THEIR DAY
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-12">
        <button className="playfair-display-uniquifier bg-green-700 hover:bg-green-800 transition px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg md:text-2xl text-white font-bold w-full sm:w-auto">
          SHOP BEST SELLERS
        </button>
        <button className="playfair-display-uniquifier bg-green-700 hover:bg-green-800 transition px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg md:text-2xl text-white font-bold w-full sm:w-auto">
          SHOP ALL OCCASIONS
        </button>
      </div>

      {/* Mother's Day Heading */}
      <div className="mt-16">
        <p className="text-center playfair-display-uniquifier font-medium text-2xl sm:text-3xl md:text-5xl">
          Mother&apos;s Day Features!
        </p>
      </div>
    </div>
  );
};

export default Second;
