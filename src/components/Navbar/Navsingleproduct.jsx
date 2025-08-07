// import React, { useState } from "react";
// import NavbarJson from "../../components/Navbar/Navbar.json";
// import { Link, useParams } from "react-router-dom";
// import { useStore } from "../../Multipages/CartContext/Context";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";

// function Navsingleproduct() {
//   const { Addtocart } = useStore();
//   const { id } = useParams();
//   const [selectedSize, setSelectedSize] = useState("");
//   const [isLiked, setIsLiked] = useState(false);

//   const singleproduct = NavbarJson.flatMap((section) => section.sections)
//     .flatMap((section) => section.items)
//     .flatMap((item) => item.list || [])
//     .find((product) => product.id === parseInt(id));

//   if (!singleproduct) {
//     return (
//       <h2 className="text-center text-xl text-red-600 mt-10">
//         Product not found
//       </h2>
//     );
//   }

//   const getStars = (rating) => {
//     const fullStars = Math.round(rating);
//     return Array.from({ length: 5 }, (_, i) =>
//       i < fullStars ? (
//         <FaStar key={i} className="text-yellow-400 inline text-sm mr-1" />
//       ) : (
//         <FaRegStar key={i} className="text-gray-300 inline text-sm mr-1" />
//       )
//     );
//   };

//   const handleAddToCart = () => {
//     const productWithSize = {
//       ...singleproduct,
//       size: selectedSize || "Not Selected",
//     };
//     Addtocart(productWithSize, 1);
//   };

//   return (
//     <div className="container mx-auto px-6 py-10 relative mt-10">
//       <h1 className="font-bold text-orange-500 text-4xl mb-8 text-center">
//         {singleproduct.title}
//       </h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Image Section */}

//         <div className="relative w-full lg:w-1/2 shadow hover:shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
//           <img
//             src={singleproduct.img[0]}
//             alt={singleproduct.title}
//             className="w-full h-auto max-h-96 object-contain p-4 hover:scale-105 transition-all duration-500"
//           />
//           {isLiked ? (
//             <FaHeart
//               size={35}
//               className="absolute top-10 right-10 text-red-500 cursor-pointer"
//               onClick={() => setIsLiked(false)}
//               title="Remove from wishlist"
//             />
//           ) : (
//             <FaRegHeart
//               size={35}
//               className="absolute top-10 right-10 text-red-500 cursor-pointer"
//               onClick={() => setIsLiked(true)}
//               title="Add to wishlist"
//             />
//           )}
//         </div>

//         {/* Product Info Section */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             Price:{" "}
//             <span className="text-green-600">₹ {singleproduct.price}</span>
//           </h2>

//           <div className="flex items-center gap-2 text-yellow-500">
//             <span className="text-lg font-medium text-gray-700">
//               {getStars(singleproduct.rating)}
//             </span>
//           </div>

//           {/* Size Filter */}
//           <div className="mb-6 md:w-60">
//             <label className="block font-semibold mb-2">Size</label>
//             <div className="max-w-md">
//               {["S", "M", "L", "XL", "XS", "XXL"].map((size) => (
//                 <button
//                   key={size}
//                   className={`px-4 py-2 m-1 border rounded ${
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

//           <h3 className="text-lg text-gray-600">
//             Color: <span className="font-semibold">{singleproduct.color}</span>
//           </h3>

//           <p className="text-gray-700 leading-relaxed text-justify">
//             {singleproduct.desciption}
//           </p>

//           <Link
//             to="/viewcart"
//             onClick={handleAddToCart}
//             className="bg-amber-500 p-3 rounded-2xl text-white hover:bg-amber-700"
//           >
//             ADD TO CART
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navsingleproduct;


import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useStore } from "../../Multipages/CartContext/Context";
import NavbarJson from "../../components/Navbar/Navbar.json";

function Navsingleproduct() {
  const { Addtocart , addToFavorites } = useStore();
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("M");
  const [isLiked, setIsLiked] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const singleproduct = NavbarJson.flatMap((section) => section.sections)
    .flatMap((section) => section.items)
    .flatMap((item) => item.list || [])
    .find((product) => product.id === parseInt(id));

  if (!singleproduct) {
    return <h2 className="text-center text-red-600 mt-10">Product not found</h2>;
  }

  const getStars = (rating) => {
    const fullStars = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) =>
      i < fullStars ? (
        <FaStar key={i} className="text-yellow-400 text-sm" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 text-sm" />
      )
    );
  };

  const handleAddToCart = () => {
    const productWithSize = {
      ...singleproduct,
      size: selectedSize || "Not Selected",
    };
    Addtocart(productWithSize, 1);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT: Thumbnails + Main Image */}
        <div className="flex gap-6 w-full lg:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2 max-h-[500px] lg:mt-25 overflow-y-auto">
            {singleproduct.img.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-16 h-20 object-cover border rounded cursor-pointer ${
                  index === currentImageIndex
                    ? "border-black"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="relative w-full flex justify-center items-center">
            <img
              src={singleproduct.img[currentImageIndex]}
              alt="main"
              className="w-full h-[500px] object-contain"
            />
            <button
              onClick={() => setIsLiked(!isLiked)}
              className="absolute top-5 right-5 text-red-500"
            >
              {/* {isLiked ? <FaHeart size={30} /> : <FaRegHeart size={30} />} */}
            </button>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h2 className="text-2xl font-semibold">{singleproduct.title}</h2>
          <p className="text-lg font-semibold">₹ {singleproduct.price}</p>

          {/* Star Rating */}
          <div className="flex items-center gap-1">{getStars(singleproduct.rating)}</div>

          {/* Size Selection */}
          <div>
            <p className="font-semibold mb-2">Size</p>
            <div className="flex gap-2 flex-wrap">
              {["S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-1 border rounded-full text-sm ${
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
          <div className="flex flex-col gap-3 mt-4">
            <button
              onClick={() => {setIsLiked(!isLiked)
                addToFavorites(singleproduct)
              }}
              className="border border-black py-2 rounded-full hover:bg-gray-100"
            >
              {isLiked ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
            </button>
            <button
              onClick={handleAddToCart}
              className="border border-black py-2 rounded-full hover:bg-gray-100"
            >
              Add to Cart
            </button>
            <Link
              to="/checkout"
              className="bg-black text-white text-center py-2 rounded-full hover:bg-gray-800"
            >
              Buy It Now
            </Link>
          </div>

          {/* Details Accordion */}
          <div className="mt-6">
            <details className="border-b py-3 cursor-pointer ">
              <summary className="font-semibold text-gray-800">Description</summary>
              <p className="text-sm text-gray-600 mt-2">
                {singleproduct.desciption}
              </p>
            </details>
            <details className="border-b py-3 cursor-pointer">
              <summary className="font-semibold text-gray-800">
                Return & Exchange Information
              </summary>
              <p className="text-sm text-gray-600 mt-2">
                Returns accepted within 7 days. Exchange available for size mismatch.
              </p>
            </details>
            <details className="border-b py-3 cursor-pointer">
              <summary className="font-semibold text-gray-800">Ask a Question</summary>
              <p className="text-sm text-gray-600 mt-2">
                Contact our support team via the chat icon or email for Reach out to support@example.com.
              </p>
            </details>
          </div>

          {/* Customer Reviews */}
          <div className="mt-8 pt-4">
            <h3 className="font-bold text-lg mb-2">Customer Reviews</h3>
            <p className="text-gray-500 text-sm">Be the first to write a review</p>
            <button className="mt-2 bg-indigo-900 text-white text-sm px-4 py-2 rounded">
              Write a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navsingleproduct;
