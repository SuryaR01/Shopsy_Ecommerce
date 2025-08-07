


// import React from "react";
// import BannerImg from "../../assets/women/women2.jpg";
// import { GrSecure } from "react-icons/gr";
// import { IoFastFood } from "react-icons/io5";
// import { GiFoodTruck } from "react-icons/gi";
// import { MdOutlineLocalOffer } from "react-icons/md";
// import { Link } from "react-router-dom";

// const Banner = () => {
//   return (
//     <div className="min-h-[650px] flex justify-center items-center py-10 bg-gradient-to-br from-white via-gray-50 to-gray-100  transition-all duration-500">
//       <div className="container px-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
//           {/* Image Section */}
//           <div data-aos="zoom-in" className="px-3">
//             <img
//               src={BannerImg}
//               alt="Winter Sale"
//               className="max-w-[500px] h-[450px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.4)] rounded-3xl object-cover"
//             />
//           </div>

//           {/* Text Section */}
//           <div className="flex flex-col justify-center px-6 gap-8 sm:pt-0">
//             <h1
//               data-aos="fade-up"
//               className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white leading-tight"
//             >
//               Winter Sale Upto <span className="text-amber-500">50% Off</span>
//             </h1>

//             <p
//               data-aos="fade-up"
//               className="text-base text-gray-600 dark:text-gray-300 tracking-wide leading-relaxed"
//             >
//               Upgrade your wardrobe with the latest winter essentials! Discover
//               cozy knits, stylish jackets, and trendy layers all at unbeatable
//               prices. Shop now and embrace the season in style.
//             </p>

//             <ul className="flex flex-col gap-5 text-sm sm:text-base">
//               <li data-aos="fade-up" className="flex items-center gap-4">
//                 <GrSecure className="text-4xl p-3 h-14 w-14 rounded-full bg-violet-100 dark:bg-violet-400 shadow" />
//                 <span className="text-gray-800 dark:text-white font-medium">
//                   100% Quality Assured – We guarantee the best fabric and stitching
//                 </span>
//               </li>
//               <li data-aos="fade-up" className="flex items-center gap-4">
//                 <IoFastFood className="text-4xl p-3 h-14 w-14 rounded-full bg-orange-100 dark:bg-orange-400 shadow" />
//                 <span className="text-gray-800 dark:text-white font-medium">
//                   Super-Fast Delivery – Get your orders within 2-3 days
//                 </span>
//               </li>
//               <li data-aos="fade-up" className="flex items-center gap-4">
//                 <GiFoodTruck className="text-4xl p-3 h-14 w-14 rounded-full bg-green-100 dark:bg-green-400 shadow" />
//                 <span className="text-gray-800 dark:text-white font-medium">
//                   Flexible Payments – COD, UPI, Credit Cards & More
//                 </span>
//               </li>
//               <li data-aos="fade-up" className="flex items-center gap-4">
//                 <MdOutlineLocalOffer className="text-4xl p-3 h-14 w-14 rounded-full bg-yellow-100 dark:bg-yellow-400 shadow" />
//                 <span className="text-gray-800 dark:text-white font-medium">
//                   Exclusive Offers – Daily deals and festive discounts
//                 </span>
//               </li>
//             </ul>

//             <div data-aos="fade-up" className="mt-4">
//               <Link
//                 to="/category/Formal-Shirts"
//                 className="inline-block bg-amber-600 hover:bg-amber-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              <span className="block">Winter Sale</span>
              <span className="text-amber-500">Up to 50% Off</span>
            </h1>

            <p className="text-lg text-gray-600">
              Embrace the season in style with our latest collection. Cozy knits, sleek jackets, and more — all at unbeatable prices!
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mt-4">
              <Feature icon={<GrSecure />} color="violet" text="100% Quality Assured – Premium fabric and stitching" />
              <Feature icon={<IoFastFood />} color="orange" text="Super-Fast Delivery – Orders in 2-3 days" />
              <Feature icon={<GiFoodTruck />} color="green" text="Flexible Payments – UPI, COD, Cards & more" />
              <Feature icon={<MdOutlineLocalOffer />} color="yellow" text="Exclusive Offers – Festive & daily deals" />
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <Link
                to="/category/Formal-Shirts"
                className="inline-block bg-amber-600 hover:bg-amber-700 transition-all duration-300 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-md"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Right - Image */}
          <div className="text-center">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="rounded-3xl w-full max-w-md mx-auto shadow-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, color, text }) => {
  const bgClass = {
    violet: "bg-violet-100",
    orange: "bg-orange-100",
    green: "bg-green-100",
    yellow: "bg-yellow-100",
  };

  return (
    <div className="flex items-start gap-4">
      <div className={`text-2xl p-3 rounded-full shadow ${bgClass[color]}`}>
        {icon}
      </div>
      <span className="text-gray-700 text-sm sm:text-base">{text}</span>
    </div>
  );
};

export default Banner;
