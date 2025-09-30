import React from 'react';

const Third = () => {
  const products = [
    {
      name: "Blossom",
      price: "$69.95 - $104.95",
      img: "https://www.carrollwoodflorist.com/files/cache/1f70b6b863f52766803a51ef8fd352e7_f708.png",
    },
    {
      name: "Premium Dozen Roses",
      price: "As Shown: $165.00",
      img: "https://www.carrollwoodflorist.com/files/cache/e1b74c64ec35297d73b1167abe95a224_f548.png",
    },
    {
      name: "Premium Two Dozen Roses",
      price: "As Shown: $225.00",
      img: "https://www.carrollwoodflorist.com/files/cache/e684f642b60847eb9c08db3d119b84e3_f619.png",
    },
    {
      name: "Prim",
      price: "$59.95 - $94.95",
      img: "https://www.carrollwoodflorist.com/files/cache/57a8b9b92e089e0b75ce827b3752842a_f503.png",
    },
    {
      name: "Victoria",
      price: "$129.95 - $239.95",
      img: "https://www.carrollwoodflorist.com/files/cache/1028fc45aa620957f3af91f2ad08c1ec_f1103.png",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-green-600 mt-1">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
        <button className="playfair-display-uniquifier bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-xl text-lg md:text-2xl text-white font-bold w-full sm:w-auto">
          SHOP BEST SELLERS
        </button>
        <button className="playfair-display-uniquifier bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-xl text-lg md:text-2xl text-white font-bold w-full sm:w-auto">
          SHOP ALL OCCASIONS
        </button>
      </div>
    </div>
  );
};

export default Third;
