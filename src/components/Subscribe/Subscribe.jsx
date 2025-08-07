// import React from "react";
// import Banner from "../../assets/website/orange-pattern.jpg";

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };
// const Subscribe = () => {

//     const Subscribee = () => {
//         alert("Thanks For Subscribe")
//     };
//   return (
//     <div
//       data-aos="zoon-in"
//       className="  bg-gray-100 dark:bg-gray-800 text-white"
//       style={BannerImg}
//     >
//       <div className="container backdrop-blur-sm py-10">
//         <div className="space-y-6 max-w-xl mx-auto flex items-center justify-center flex-col">
//           <h1 className=" text-2xl text-center sm:text-4xl font-semibold">
//             Get Notified About New Products
//           </h1>
//           <input
//             data-aos="fade-up"
//             type="text"
//             placeholder="Enter your email"
//             className="w-full p-3 bg-amber-50 rounded-full text-gray-600 "
//           />
//           <button onClick={Subscribee} className=" border-2 border-none px-5 py-2 rounded-full bg-green-100 text-black hover:scale-105 duration-300 hover:text-white hover:bg-orange-700">Subscribe</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscribe;


import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const Subscribe = () => {
  const handleSubscribe = () => {
    alert("Thanks for subscribing!");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 py-20 px-6 flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 font-serif">
          Stay in the Loop
        </h1>
        <p className="text-lg text-gray-200 mb-8 font-serif">
          Be the first to know about new arrivals, exclusive offers, and the latest styles.
        </p>

        {/* Input & Button */}
        <div className="flex w-full max-w-md flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-3 rounded-full text-black bg-white focus:outline-none shadow-md"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
