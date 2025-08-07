// import React from "react";
// import Slider from "react-slick";
// import img1 from "../../assets/images/Men/Casual Shirts3.jpg";
// import img2 from "../../assets/images/Kid/Dresses & Frocks4.jpg";
// import img3 from "../../assets/images/Women/Sarees2.jpg";
// import img4 from "../../assets/images/Women/Lehengas And Blouse4.jpg";
// import img5 from "../../assets/images/Women/Suits3.jpg";
// import img6 from "../../assets/images/Women/Skirts5.jpg";
// import { Link } from "react-router-dom";

// const categery = [
//   {
//     id: 1,
//     imge: img1,
//     title: "Men",
//     navigate: "/category/Casual"
//   },
//   {
//     id: 2,
//     imge: img4,
//     title: "Women",
//     navigate: "/category/Lehengas And Blouse"
//   },
//   {
//     id: 4,
//     imge: img3,
//     title: "Sarees",
//     navigate: "/category/Sarees"
//   },
//   {
//     id: 5,
//     imge: img6,
//     title: "Skirts",
//     navigate: "/category/Skirts"
//   },
//   {
//     id: 6,
//     imge: img5,
//     title: "Suits",
//     navigate: "/category/Suits"
//   }, 
//   {
//     id: 3,
//     imge: img2,
//     title: "Kid's",
//     navigate: "/category/Twin-Sets-Dungrees"
//   }
// ];

// const Category = () => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 800,
//     slidesToScroll: 1,
//     slidesToShow: 6,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "ease-in-out",
//     pauseOnHover: false,
//     pauseOnFocus: true,
//   };

//   return (
//     <div className="text-center px-4 py-2">
//         <h1 className=" flex mb-10 ml-20  uppercase font-bold text-2xl tracking-[1px] text-cyan-700 border-b-gray-500 border-b-3 w-0 hover:w-[9.5%] translate-x-8 duration-300">Categorys</h1>
//       <Slider {...settings}>
//         {categery.map((data) => (
//           <div
//             key={data.id}
//             className="flex place-items-center group"
//           >
//             <div className="h-[150px] w-[150px]">
//               <img
//                 src={data.imge}
//                 alt={data.title}
//                 className="rounded-full h-full w-full object-cover mb-4"
//               />
//             </div>
//             <Link
//               to={data.navigate || "#"}
//               className=" text-xl group-hover:text-cyan-600 text-center font-bold text-gray-500 tracking-[1px]"
//             >
//               {data.title}
//             </Link>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Category;



import React from "react";
import Slider from "react-slick";
import img1 from "../../assets/images/Men/Casual Shirts3.jpg";
import img2 from "../../assets/images/Kid/Dresses & Frocks4.jpg";
import img3 from "../../assets/images/Women/Sarees2.jpg";
import img4 from "../../assets/images/Women/Lehengas And Blouse4.jpg";
import img5 from "../../assets/images/Women/Suits3.jpg";
import img6 from "../../assets/images/Women/Skirts5.jpg";
import { Link } from "react-router-dom";

const categery = [
  {
    id: 1,
    imge: img1,
    title: "Men",
    navigate: "/category/Casual",
  },
  {
    id: 2,
    imge: img4,
    title: "Women",
    navigate: "/category/Lehengas And Blouse",
  },
  {
    id: 4,
    imge: img3,
    title: "Sarees",
    navigate: "/category/Sarees",
  },
  {
    id: 5,
    imge: img6,
    title: "Skirts",
    navigate: "/category/Skirts",
  },
  {
    id: 6,
    imge: img5,
    title: "Suits",
    navigate: "/category/Suits",
  },
  {
    id: 3,
    imge: img2,
    title: "Kid's",
    navigate: "/category/Twin-Sets-Dungrees",
  },
];

const Category = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-1">
      <h1 className="text-3xl font-serif font-bold text-start text-cyan-700 uppercase mb-10  ">
        Categories
      </h1>

      <Slider {...settings}>
        {categery.map((data) => (
          <div key={data.id} className="px-3">
            <div className="flex flex-col items-center group transition-transform duration-300 hover:scale-105 mt-5">
              <div className="h-36 w-36 rounded-full overflow-hidden shadow-lg border border-gray-300">
                <img
                  src={data.imge}
                  alt={data.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition duration-300"
                />
              </div>
              <Link
                to={data.navigate || "#"}
                className="mt-4 text-base md:text-lg font-semibold text-gray-700 group-hover:text-cyan-600 transition-colors duration-200"
              >
                {data.title}
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Category;
