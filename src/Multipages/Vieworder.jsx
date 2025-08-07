// import { Link, useNavigate } from "react-router-dom";
// import { useStore } from "./CartContext/Context";
// import { IoCloseOutline } from "react-icons/io5";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaStar, FaRegStar } from "react-icons/fa";
// import emptyimg from "/Empty.jpeg"

// const Vieworder = () => {
//   const { Addtocart, cortitem, RemoveOrdercart, Incrementqty, Decrementqty } =
//     useStore();

//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate("/kidswear");
//   };

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

//   const total = cortitem.reduce(
//     (acc, item) => acc + item.price * item.Quantity,
//     0
//   );

//   return (
//     <>
//       {/* <IoCloseOutline
//           onClick={handleNavigate}
//           size={40}
//           className=' sticky top-5 left-5 rounded-xl bg-amber-500 hover:bg-gray-500 hover:text-white cursor-pointer z-20 mt-15'
//         /> */}
//       <h1 className=" text-2xl uppercase text-orange-400 font-bold p-5 pl-24">
//         cart list
//       </h1>
//       <section className="  flex items-center relative mt-0">
//         <div className="container mx-auto">
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
//             {cortitem.length > 0 ? (
//               cortitem.map((item) => {
//                 const {
//                   id,
//                   img,
//                   title,
//                   price,
//                   rating,
//                   description,
//                   Quantity,
//                   size,
//                 } = item;

//                 return (
//                   <div
//                     key={id}
//                     data-aos="fade-up"
//                     className="rounded-xl shadow-md relative hover:shadow-gray-500"
//                   >
//                     <RiDeleteBin6Line
//                       data-aos="fade-left"
//                       onClick={() => RemoveOrdercart(id)}
//                       size={24}
//                       className="absolute top-4 right-4 text-gray-600 hover:text-red-500 cursor-pointer"
//                       title="Remove from order"
//                     />

//                     <div className="flex justify-center mb-4 rounded-md">
//                       <img
//                         className="w-full h-60 object-contain "
//                         src={img[0]}
//                         alt={title}
//                       />
//                     </div>

//                     <h2 className="text-xl font-semibold text-center mb-2">
//                       {title}
//                     </h2>

//                     <div data-aos="fade-up" className="text-center mb-4">
//                       <h3 data-aos="fade-up" className="font-bold text-lg mb-1">
//                         Size : {size}
//                       </h3>

//                       <h1> {getStars(rating)}</h1>
//                     </div>

//                     <div
//                       data-aos="fade-up"
//                       className="flex justify-center items-center gap-4 mb-2"
//                     >
//                       <button
//                         onClick={() => Decrementqty(id)}
//                         className="border rounded-xl w-10 h-10 text-2xl hover:text-red-500"
//                       >
//                         -
//                       </button>
//                       <span className="text-xl">{Quantity}</span>
//                       <button
//                         onClick={() => Incrementqty(id)}
//                         className="border rounded-xl w-10 h-10 text-2xl hover:text-red-500"
//                       >
//                         +
//                       </button>
//                     </div>

//                     <div
//                       data-aos="fade-up"
//                       className="text-center text-red-500 text-lg font-semibold mb-2"
//                     >
//                       ₹ {(price * Quantity).toFixed(2)}
//                     </div>

//                     <p className="text-sm text-gray-600 text-center">
//                       {description}
//                     </p>
//                   </div>
//                 );
//               })
//             ) : (
//               <div className=" h-[75vh] w-screen flex flex-col items-center justify-center bg-white ">
//                 {/* <img src={emptyimg} alt="empty" /> */}
//                 <p
//                   data-aos="fade-up"
//                   className="text-center text-gray-500 text-lg col-span-full"
//                 >
//                   No items in the order.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {cortitem.length > 0 && (
//         <div className="flex flex-col items-center mb-6 mt-10">
//           <h2
//             data-aos="fade-right"
//             className="text-2xl font-bold py-3 uppercase"
//           >
//             Total Price : <span className="text-red-500"> ₹ </span>{" "}
//             {total.toFixed(2)}
//           </h2>
//           <Link
//             data-aos="fade-up"
//             to="/checkout"
//             className="font-bold px-6 py-2 rounded-xl bg-orange-300 hover:bg-orange-500 hover:text-white"
//           >
//             Proced To CheckOut
//           </Link>
//         </div>
//       )}
//     </>
//   );
// };

// export default Vieworder;


// import { useNavigate, Link } from "react-router-dom";
// import { useStore } from "./CartContext/Context";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoCloseSharp } from "react-icons/io5";

// const Vieworder = () => {
//   const {
//     Addtocart,
//     cortitem,
//     RemoveOrdercart,
//     Incrementqty,
//     Decrementqty,
//   } = useStore();

//   const navigate = useNavigate();
//   const total = cortitem.reduce(
//     (acc, item) => acc + item.price * item.Quantity,
//     0
//   );

//   return (
//     <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold uppercase">Cart</h2>
//         <IoCloseOutline
//           className="text-3xl cursor-pointer hover:text-red-500"
//           onClick={() => navigate("/kidswear")}
//         />
//       </div>

//       <hr className="mb-4" />

//       {cortitem.length > 0 ? (
//         cortitem.map((item) => (
//           <div key={item.id} className="mb-6">
//             <div className="flex gap-4">
//               <img
//                 src={item.img[0]}
//                 alt={item.title}
//                 className="w-24 h-28 object-cover rounded-md"
//               />
//               <div className="flex-1">
//                 <h3 className="text-md font-semibold">{item.title}</h3>
//                 <p className="text-sm font-semibold text-gray-700">Size: {item.size}</p>
//                 <div className="flex items-center gap-3 mt-2">
//                   <button
//                     onClick={() => Decrementqty(item.id)}
//                     className="w-8 h-8 border text-lg"
//                   >
//                     −
//                   </button>
//                   <span className="text-md">{item.Quantity}</span>
//                   <button
//                     onClick={() => Incrementqty(item.id)}
//                     className="w-8 h-8 border text-lg"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <p className="text-md font-semibold">Rs. {item.price}</p>
//               <Link onClick={() => RemoveOrdercart(item.id)} className=" flex justify-center items-center text-red-500"><IoCloseSharp  size={20}/></Link>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p className="text-center text-gray-500 mt-10">No items in cart.</p>
//       )}

//       {/* Order Note */}
//       <div className="mb-6">
//         <label className="block uppercase tracking-wide text-xs font-bold mb-2">
//           Order Note
//         </label>
//         <textarea
//           rows="4"
//           placeholder="Add special instructions here..."
//           className="w-full border border-gray-300 rounded-md p-2"
//         ></textarea>
//       </div>

//       {/* Footer Section */}
//       <div className="mt-auto border-t pt-4">
//         <div className="flex justify-between text-md mb-1">
//           <span className="font-medium">Subtotal</span>
//           <span className="font-semibold">Rs. {total.toFixed(2)}</span>
//         </div>
//         <p className="text-xs text-gray-500">
//           Shipping, taxes, and discount codes calculated at checkout.
//         </p>

//         <Link
//           to="/checkout"
//           className="block mt-4 w-full text-center bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-900"
//         >
//           CHECK OUT
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Vieworder;
