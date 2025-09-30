import React from 'react';

const Five = () => {
  return (
    <div
      className="bg-[url('https://media.istockphoto.com/id/1159802579/photo/a-lot-of-flower-bouquets-at-the-florist-shop-on-the-table-made-of-hydrangea-roses-peonies.jpg?s=612x612&w=0&k=20&c=bI1YqRYuX_F0E0HSvQM4Zqo2MawIi_-SJ-sWekU681U=')] 
                 bg-cover bg-center w-full"
    >
      <div className="bg-black/70 py-10 px-4 md:px-20">
        
        {/* Section Title */}
        <p className="text-white playfair-display-uniquifier text-sm md:text-3xl text-center mb-10">
          ____________WHY SHOP WITH US____________
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 justify-items-center">
          {/* Feature 1 */}
          <div className="text-center max-w-sm">
            <img
              src="https://www.carrollwoodflorist.com/files/5814/9211/3520/wsl_1.png"
              alt="Quality"
              className="mx-auto w-32 md:w-40"
            />
            <p className="text-white font-bold mt-4">QUALITY YOU CAN TRUST</p>
            <p className="text-white mt-3 text-sm md:text-base">
              Long-lasting premium flowers. Custom, handcrafted arrangements. Designed and ready to enjoy, never delivered in a box, never FTD or 1-800-Flowers (no assembly necessary).
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center max-w-sm">
            <img
              src="https://www.carrollwoodflorist.com/files/8514/9211/3441/wsl_2.png"
              alt="Customer Experience"
              className="mx-auto w-32 md:w-40"
            />
            <p className="text-white font-bold mt-4">
              KNOWLEDGEABLE & FRIENDLY CUSTOMER EXPERIENCE TEAM
            </p>
            <p className="text-white mt-3 text-sm md:text-base">
              Your order is taken, processed and made right in our store! We always want to ensure your satisfaction, which is why we stand by our "love it" guarantee.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center max-w-sm">
            <img
              src="https://www.carrollwoodflorist.com/files/8714/9211/3497/wsl_3.png"
              alt="Delivery"
              className="mx-auto w-32 md:w-40"
            />
            <p className="text-white font-bold mt-4">DELIVERY THAT SAVES YOU TIME</p>
            <p className="text-white mt-3 text-sm md:text-base">
              Same day delivery. Delivery confirmation. Servicing Tampa Bay and surrounding areas.
            </p>
          </div>
        </div>

        {/* Delivery Info Section */}
        <div className="mt-12 text-center">
          <p className="font-bold playfair-display-uniquifier text-xl md:text-4xl text-white mb-4">
            Daily Tampa Flower Delivery
          </p>
          <p className="text-white text-sm md:text-base max-w-4xl mx-auto px-2 md:px-0">
            Serving Tampa FL for over 30 years! Our family provides same day flower delivery service to Tampa, including the downtown area, all Tampa hospitals, businesses, and funeral homes. We are also delighted to serve the surrounding area as far as St. Petersburg, Brandon, Clearwater, and Dade City. We can deliver your order the same day, as late as 2:00 pm. If you need service after 2:00 pm, please call us to see what options are available.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Five;
