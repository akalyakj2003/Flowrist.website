import React from "react";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { RiDoubleQuotesL } from "react-icons/ri";

const Four = () => {
  return (
    <div
      className="bg-[url('https://media.istockphoto.com/id/1155476870/photo/wedding-bouquet-with-flowers-roses-on-a-white-background-with-copy-space-minimal-concept.jpg?s=612x612&w=0&k=20&c=DoKJzfNk_PvR3icz2G6Fsw3eZ8jjkPVrnsUQgRXA-cM=')] 
                 bg-cover bg-center w-full"
    >
      {/* Overlay */}
      <div className="bg-green-700/40 w-full h-full py-16 px-6 md:px-20">
        {/* Title */}
        <p className="text-white playfair-display-uniquifier text-lg sm:text-2xl md:text-3xl text-center mb-12">
          ____________ TESTIMONIALS ____________
        </p>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="relative bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              You will not get more attentive and caring service anywhere else!
              These people are professionals and know what they are doing.
            </p>
            <RiDoubleQuotesL className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-pink-700 text-4xl bg-white rounded-full" />
          </div>

          {/* Testimonial 2 */}
          <div className="relative bg-white rounded-xl shadow-md p-6 text-center hidden md:block">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Awesome service, Beautiful flowers! The recipient was beyond
              thrilled receiving this gift! Thank you again!
            </p>
            <RiDoubleQuotesL className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-pink-700 text-4xl bg-white rounded-full" />
          </div>
        </div>

        {/* Triangles (pointers) */}
        <div className="flex justify-center md:justify-between max-w-6xl mx-auto px-4 md:px-0 mt-6">
          <TbTriangleInvertedFilled className="text-white text-3xl md:text-4xl" />
          <TbTriangleInvertedFilled className="hidden md:block text-white text-3xl md:text-4xl" />
        </div>

        {/* Dots (Carousel indicators) */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <div className="bg-white rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          <div className="bg-black rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          <div className="bg-black rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          <div className="bg-black rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          <div className="bg-black rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          <div className="bg-black rounded-full w-3 h-3 md:w-4 md:h-4"></div>
          {/* <div className="green"></div> */}
          {/* <div className="bg-pink"></div> */}
          {/* <div className="bg-yellow"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Four;
