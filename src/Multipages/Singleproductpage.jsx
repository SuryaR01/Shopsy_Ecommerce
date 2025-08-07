// import React, { useState } from "react";
// import Productjson from "../Product.json";
// import { useParams, Link } from "react-router-dom";
// import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
// import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
// import { useStore } from "./CartContext/Context";

// function Singleproductpage() {
//   const { id } = useParams();
//   const { Addtocart } = useStore();
//   const singleproduct = Productjson.find((item) => item.id === parseInt(id));
//   const [selectedSize, setSelectedSize] = useState("Not Selected");
//   const [quantity, setQuantity] = useState(1);

//   if (!singleproduct) {
//     return (
//       <h2 className="text-center text-red-600 mt-10">Product not found</h2>
//     );
//   }

//   const getStars = (rating) => {
//     const fullStars = Math.round(rating);
//     return Array.from({ length: 5 }, (_, i) =>
//       i < fullStars ? (
//         <FaStar key={i} className="text-orange-500 text-lg" />
//       ) : (
//         <FaRegStar key={i} className="text-gray-300 text-lg" />
//       )
//     );
//   };

//   const handleAddToCart = () => {
//     Addtocart(
//       {
//         ...singleproduct,
//         size: selectedSize,
//       },
//       quantity
//     );
//   };
//   const [selectedImage, setSelectedImage] = useState(singleproduct.img[0]); // add this state

//   return (
//     <div className="container mx-auto px-4 py-8 m-5  border-dashed shadow-2xl rounded-2xl ">
//       <div className="grid md:grid-cols-2 gap-10 items-start">
//         {/* Left Side - Image Carousel */}
//         <div className="relative w-full">
//           {/* Main Image */}
//           <div className="rounded-xl overflow-hidden flex items-center justify-center">
//             <img
//               src={selectedImage} // show selected image
//               alt={singleproduct.title}
//               className="object-contain max-h-96 w-full transition-transform duration-500 hover:scale-105"
//             />
//           </div>

//           <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white  p-2 cursor-pointer">
//             <IoIosArrowBack className="text-gray-500 text-xl" />
//           </div>
//           <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white  p-2 cursor-pointer">
//             <IoIosArrowForward className="text-gray-500 text-xl" />
//           </div>

//           <div className="flex gap-3 justify-center mt-4">
//             {singleproduct.img.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`Thumbnail ${idx}`}
//                 onClick={() => setSelectedImage(img)} // image click sets selected
//                 className={`w-10 h-15 md:w-18 md:h-22 cursor-pointer border-2 rounded-md p-1 transition-all duration-200 ${
//                   selectedImage === img
//                     ? "border-yellow-500 ring-2 ring-yellow-400"
//                     : "border-gray-200"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Details */}
//         <div className="space-y-5">
//           <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
//             {singleproduct.title}
//           </h1>

//           <div className="flex items-center gap-2">
//             <span className="text-yellow-300 flex">
//               {getStars(singleproduct.rating)}
//             </span>
//             <span className="text-gray-600 text-sm">
//               ({singleproduct.rating}/5) - {singleproduct.reviews} Reviews
//             </span>
//           </div>

//           <p className="text-lg">
//             Price :{" "}
//             <span className="line-through text-gray-400">
//               ₹{singleproduct.originalPrice}
//             </span>{" "}
//             <span className="text-gray-500 font-bold text-2xl">
//               {quantity * (singleproduct.price)}
//             </span>{" "}
//             <span className="text-sm text-gray-600">
//               {/* (You save ₹{singleproduct.originalPrice - singleproduct.price}) */}
//             </span>
//           </p>

//           {/* Size Filter */}
//           <div className="mb-6 md:w-full">
//             <label className="block font-semibold mb-2 text-2xl uppercase">Size</label>
//             <div className="max-w-md">
//               {["S", "M", "L", "XL", "XS", "XXL"].map((size) => (
//                 <button
//                   key={size}
//                   className={`px-4 py-2 m-1 border rounded  ${
//                     selectedSize === size
//                       ? "bg-black text-white"
//                       : "bg-white text-black"
//                   }`}
//                   onClick={() => setSelectedSize(size)}
//                   type="button"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Size Selection */}
//           <div className="flex gap-3 items-center">
//             <div className="flex items-center gap-6 bg-gray-300 px-4 py-1 rounded-md shadow-2xl">
//               <button
//                 onClick={() => setQuantity((q) => Math.max(1, q - 1))}
//                 className=" font-bold"
//               >
//                 −
//               </button>
//               <span className="text-lg font-semibold text-gray-700">
//                 {String(quantity).padStart(2)}
//               </span>
//               <button
//                 onClick={() => setQuantity((q) => q + 1)}
//                 className=" font-bold"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <button
//               onClick={handleAddToCart}
//               className="  hover:text-white px-6 py-1 bg-gray-300 rounded-md font-bold hover:bg-gray-800 shadow-2xl"
//             >
//               Add to Cart
//             </button>
//             <Link
//               to="/viewcart"
//               className=" borderorange-text-orange-500 bg-gray-300 px-6 py-1 pt-3 rounded-md font-bold shadow-2xl hover:bg-gray-800 hover:text-white"
//             >
//               Buy Now
//             </Link>
//             <button className="p-4 borderorange-text-orange-500 rounded-full hover:bg-gray-800 bg-gray-300 text-white hover:text-white transition-all duration-300">
//               <FaHeart size={20} />
//             </button>
//           </div>

//           <div className="border-b border-dashed mt-4 pb-4 text-gray-700">
//             <p>
//               <strong>Free Shipping</strong> on orders above ₹399
//             </p>
//           </div>

//           {/* Features Icons (Static for now) */}
//           <div className=" p-2 text-justify">
//             <span className=" font-bold text-gray-800 text-2xl uppercase">Discription </span><br />
//             <span>{singleproduct.desciption}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Singleproductpage;
import React, { useState } from "react";
import Productjson from "../Product.json";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useStore } from "./CartContext/Context";

function Singleproductpage() {
  const { id } = useParams();
  const { Addtocart, addToFavorites } = useStore();
    const [isLiked, setIsLiked] = useState(false);
  const singleproduct = Productjson.find((item) => item.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(singleproduct?.img[0]);
  const [quantity, setQuantity] = useState(1);

  if (!singleproduct) {
    return (
      <h2 className="text-center text-red-600 mt-10">Product not found</h2>
    );
  }

  const getStars = (rating) => {
    const fullStars = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) =>
      i < fullStars ? (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ) : (
        <FaRegStar key={i} className="text-gray-300 text-sm" />
      )
    );
  };

  const handleAddToCart = () => {
    Addtocart({ ...singleproduct, size: selectedSize }, quantity);
  };

  return (
    <div className="w-full px-5 py-10 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-0">
        {/* Left: Thumbnails + Main Image */}
        <div className="flex gap-6 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto lg:mt-25">
            {singleproduct.img.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(img)}
                alt={`thumb-${index}`}
                className={`w-16 h-20 object-cover border rounded-md cursor-pointer  ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="flex-1  rounded-xl flex items-center justify-center ">
            <img
              src={selectedImage}
              alt={singleproduct.title}
              className="object-contain w-full h-[500px] p-4 hover:scale-110 transition-all duration-500 "
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-2xl font-semibold">{singleproduct.title}</h1>

          {/* Price */}
          <div className="text-xl font-medium text-black">
            ₹{singleproduct.price}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">{getStars(singleproduct.rating)}</div>
          </div>

          {/* Size */}
          <div>
            <p className="font-semibold mb-1 uppercase">Size</p>
            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-sm font-medium ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-4">
            <button
              onClick={() => {
                setIsLiked(!isLiked);
                addToFavorites(singleproduct);
              }}
              className="w-full border py-2 rounded-full font-medium"
            >
            
              {isLiked ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
            </button>
            <button
              onClick={handleAddToCart}
              className="w-full border py-2 rounded-full font-medium"
            >
              Add to Cart
            </button>
            <Link
              to="/viewcart"
              className="w-full block bg-black text-white py-2 text-center rounded-full font-medium"
            >
              Buy It Now
            </Link>
          </div>

          {/* Accordion Sections */}
          <div className="border-t pt-0 space-y-3">
            <details className="border-b py-2 cursor-pointer" >
              <summary className="font-medium py-1 cursor-pointer">
                Description
              </summary>
              <p className="text-sm mt-2">{singleproduct.desciption}</p>
            </details>
            <details className="border-b py-1 cursor-pointer">
              <summary className="font-medium cursor-pointer">
                Return & Exchange Information
              </summary>
              <p className="text-sm mt-2"> Returns accepted within 7 days. Exchange available for size mismatch.</p>
            </details>
            <details className="border-b py-1 cursor-pointer">
              <summary className="font-medium cursor-pointer">
                Ask a Question
              </summary>
              <p className="text-sm mt-2">Reach out to support@example.com</p>
            </details>
          </div>

          {/* Review */}
          <div className="pt-6">
            <h2 className="text-lg font-semibold mb-1">Customer Reviews</h2>
            <p className="text-sm text-gray-500 mb-2">
              Be the first to write a review
            </p>
            <button className="bg-violet-700 text-white px-4 py-2 rounded-md text-sm">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singleproductpage;
