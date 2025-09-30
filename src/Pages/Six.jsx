import React from 'react';

const Six = () => {
  const products = [
    {
      name: "Blossom",
      price: "$78",
      img: "https://www.carrollwoodflorist.com/files/cache/1f70b6b863f52766803a51ef8fd352e7_f708.png",
    },
    {
      name: "Blossom",
      price: "$78",
      img: "https://www.carrollwoodflorist.com/files/cache/1f70b6b863f52766803a51ef8fd352e7_f708.png",
    },
    {
      name: "Blossom",
      price: "$78",
      img: "https://www.carrollwoodflorist.com/files/cache/1f70b6b863f52766803a51ef8fd352e7_f708.png",
    },
    {
      name: "Blossom",
      price: "$78",
      img: "https://www.carrollwoodflorist.com/files/cache/1f70b6b863f52766803a51ef8fd352e7_f708.png",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-10 bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center font-bold playfair-display-uniquifier text-2xl sm:text-3xl md:text-4xl mb-10 text-gray-800">
        Featured Products
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-56 sm:h-64 object-contain p-4 bg-gray-100"
            />
            <div className="p-4 text-center flex-grow flex flex-col justify-between">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-600 font-medium mt-2">{product.price}</p>
              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Six;
