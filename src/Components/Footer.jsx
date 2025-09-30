import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row md:justify-between p-10 gap-10 md:gap-20">
        
        {/* About Us */}
        <div className="flex-1">
          <p className="font-bold playfair-display-uniquifier mb-2">ABOUT US</p>
          <p>We are your local, full service</p>
          <p>Tampa florist and take pride in</p> 
          <p>providing our customers with</p>
          <p>quality flowers, same day</p>
          <p>delivery, artfully designed</p> 
          <p>arrangements and gifts for all</p> 
          <p>occasions. From birthday flowers</p> 
          <p>to holiday flowers to sympathy </p>
          <p>flowers, Read More...</p>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <p className="font-bold playfair-display-uniquifier mb-2">NAVIGATION</p>
          <div className="space-y-1">
            <p className="flex items-center gap-2"><FaLongArrowAltRight /> About Us</p>
            <p className="flex items-center gap-2"><FaLongArrowAltRight /> Areas Served</p>
            <p className="flex items-center gap-2"><FaLongArrowAltRight /> Privacy Policy</p>
          </div>
          <p className="mt-3">View Cart (0 items)</p>
        </div>

        {/* Address */}
        <div className="flex-1">
          <p className="font-bold playfair-display-uniquifier mb-2">ADDRESS</p>
          <p className="font-bold">Carrollwood Florist</p>
          <div className="flex gap-2 items-start">
            <FaLocationDot />
            <p>11745 N Dale Mabry Highway</p>
          </div>
          <p>Tampa, Florida 33618</p>
          <p className="flex items-center gap-2"><MdCall /> 813-962-1917</p>
          <p className="ml-6">800-877-1917</p>
          <p className="flex items-center gap-2"><IoIosMail /> customerservice@carrollwoodflorist.com</p>

          <p className="font-bold playfair-display-uniquifier mt-3">HOURS</p>
          <p>Mon-Fri 9 am - 6 pm</p>
          <p>Sat 9 am - 4 pm</p>
          <p>Sun Closed</p>
        </div>

        {/* Social + Badges */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-3 mb-4">
            <img 
              src="https://www.carrollwoodflorist.com/files/8515/3176/7410/review-us-on-Google.png"
              alt="Review us on Google"
              className="w-28 md:w-32"
            />
            <img 
              src="https://www.carrollwoodflorist.com/files/1815/3176/7427/people-love-us-on-yelp.png"
              alt="People love us on Yelp"
              className="w-28 md:w-32"
            />
          </div>

          <p className="font-bold">CONNECT WITH US</p>
          <div className="flex text-3xl gap-3 mt-3">
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaGoogle className="cursor-pointer hover:text-red-500" />
            <ImInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
