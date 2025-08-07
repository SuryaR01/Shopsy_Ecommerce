// import React from "react";
// import image1 from "/one.jpg";
// import image2 from "/two.jpg";
// import image3 from "/three.jpg";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa6";

// const imgList = [
//   {
//     id: 1,
//     img: image1,
//     new : " New Collections ",
//     title: "70% off on all Products Sale",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
//   },
//   {
//     id: 2,
//     img: image2,
//     new : " Treanding Collections ",
//     title: "Upto 50% off on all Men's Wear",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
//   },
//   {
//     id: 3,
//     img: image3,
//     new : " New Collections ",
//     title: "30% off on all Women's Wear",
//     discription:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
//   },
// ];

// const Hero = ({handleOrderPopup}) => {
//   var settings = {
//     dost: false,
//     arrows: false,
//     Infinity: true,
//     speed: 800,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "ease-in-out",
//     PauseOnHover: false,
//     PauseOnFocus: true,
//   };
//   return (
//     <div className=" z-10 relative overflow-hidden min-h-[550px] sm:min-h-[600px]  flex   justify-center items-center dark:text-white duration-200 ">
//       {/* background pattern */}
//       <div className="h-[700px] w-[700px] bg-orange-300 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-2"></div>
//       {/* Hero section  */}
//       <div className="container pb-8 sm:pb-0">
//         <Slider {...settings}>
//           {imgList.map((data) => (
//             <div>
//               <div className="grid grid-cols-1 md:pl-20 sm:grid-cols-2 overflow-hidden pl-2">
//                 {/* text content section  */}
//                 <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">

//                  <h1 className=" text-cyan-700 font-bold text-2xl tracking-[2px] font-serif">
//                   {data.new}
//                  </h1>
//                   <h1
//                    data-aos = "zoom-out"
//                    data-aos-duration = "500"
//                    data-aos-once = "true"
//                   className=" text-5xl sm:text-4xl lg:text-7xl text-gray-800 capitalize font-blod py-2 font-serif ">
//                     {data.title}
//                   </h1>
//                   <p
//                    data-aos = "fade-up"
//                    data-aos-duration = "500"
//                    data-aos-delay = "100"
//                   className="text-md px-3 pb-2.5 text-justify  text-[#000000] tracking-[1px] capitalize font-serif ">
//                     {data.discription}
//                   </p>
//                   <div
//                   data-aos = "fade-up"
//                   data-aos-duration = "500"
//                   data-aos-delay = "200"
//                   >
//                     <Link
//                     to="/kidswear"
//                     // onClick={() => handleOrderPopup()}
//                     className=" flex just items-center cursor-pointer gap-5 shadow-2xl w-fit px-5 py-3 rounded-xl font-bold bg-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300">
//                       Shop Now <FaArrowRight  size={20} />
//                     </Link>
//                   </div>
//                 </div>
//                 {/* image section  */}
//                 <div className=" order-1 sm:order-2 ">
//                   <div
//                     data-aos="zoom-in"
//                     data-aos-once="true"
//                     className=" relative z-10 h-[350px]"
//                   >
//                     <img
//                       src={data.img}
//                       alt=""
//                       className="w-[300px] h-full sm:h-full sm:w-[4500px] sm:scale-120 object-contain mx-auto p-1 flex justify-center items-center"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";
import image1 from "/images/one.jpg";
import image2 from "/bgimg2.jpg";
import image3 from "/bgimg.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const imgList = [
  {
    id: 1,
    img: image3,
    new: "New Collections",
    title: "70% off on all Products Sale",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
  },
  {
    id: 2,
    img: image2,
    new: "Trending Collections",
    title: "Upto 50% off on all Men's Wear",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
  },
  {
    id: 3,
    img: image2,
    new: "New Collections",
    title: "30% off on all Women's Wear",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel ipsam doloribus nulla dolorem quidem alias non repellat exercitationem hic.",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative z-10">
  <Slider {...settings}>
    {imgList.map((data) => (
      <div key={data.id}>
        <div className="w-full h-screen relative">
          {/* Background with 50% brightness */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-30"
            style={{ backgroundImage: `url(${data.img})` }}
          ></div>

          {/* Content (100% brightness) */}
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <div className="text-white max-w-4xl mx-auto text-center px-4 sm:px-6">
              <h2 className="text-2xl text-orange-300 font-semibold mb-2 tracking-wider font-serif">
                {data.new}
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 font-serif leading-tight drop-shadow-lg">
                {data.title}
              </h1>
              <p className="text-base sm:text-lg mb-6 font-serif drop-shadow">
                {data.discription}
              </p>
              <Link
                to="/kidswear"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl"
              >
                Shop Now <FaArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Hero;
