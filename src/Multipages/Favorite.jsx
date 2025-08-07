

// import { useStore } from './CartContext/Context';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaCartPlus } from "react-icons/fa";
// import { GiAngryEyes } from "react-icons/gi";
// import { Link } from 'react-router-dom';


// const Favorite = () => {
//   const { favitem, removeFromFavorites, Addtocart } = useStore();

//   return (
//     <div className="container mx-auto px-4 py-6 pt-25">
//       <h2 className="text-2xl font-bold mb-4 text-center">My Favorites</h2>

//       {favitem.length === 0 ? (
//         <p className="text-center text-gray-500">No favorite items yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {favitem.map((item) => (
//             <div
//               key={item.id}
//               className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full h-72 object-cover p-2 rounded-2xl"
//               />
//               <div className="p-4 space-y-2 relative group">
//                 <h3 data-aos="fade-left"  data-aos-duration = "500" className="text-lg font-semibold">{item.title}</h3>
//                 <p data-aos="fade-left"  data-aos-duration = "600" className="text-gray-500 dark:text-gray-300">Color: {item.color}</p>
//                 <p data-aos="fade-left"  data-aos-duration = "600" className="text-gray-500 dark:text-gray-300">Rating: {item.rating}</p>
//                 <p data-aos="fade-left"  data-aos-duration = "700" className="text-orange-500 font-bold"> ₹ {item.price}</p>

//                 <div className="flex justify-between items-center pt-2">
//                   {/* Add to Cart Button */}
//                   <Link
//                     // to={"/viewcart"}
//                     data-aos="fade-left"  data-aos-duration = "900"
//                     onClick={() => Addtocart(item)}
//                     className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded-full text-sm transition-colors"
//                   >
//                     <FaCartPlus />
//                     Add to Cart
//                   </Link>

//                   {/* Remove from Favorites Button */}
//                   <button
//                   data-aos="fade-left"  data-aos-duration = "1000"
//                     onClick={() => removeFromFavorites(item.id)}
//                     className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm transition-colors"
//                   >
//                     <RiDeleteBin6Line />
//                     Remove
//                   </button>

//                 </div>
                
//                   {/* <Link  
//                    to={`/favorite/${item.id}`} 
//                   className=' absolute -right-10 bottom-15 hover:text-red-500 group-hover:right-8 transition-all duration-500'>
//                       <GiAngryEyes size={45}/>
//                   </Link> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Favorite;





// Modified Favorite.jsx to match the provided wishlist layout
// import { useState } from 'react';
// import { useStore } from './CartContext/Context';
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { FaCartPlus } from "react-icons/fa";

// const Favorite = () => {
//   const { favitem, removeFromFavorites, Addtocart } = useStore();
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleSelectAll = (checked) => {
//     if (checked) {
//       setSelectedItems(favitem.map((item) => item.id));
//     } else {
//       setSelectedItems([]);
//     }
//   };

//   const toggleSelectItem = (id) => {
//     setSelectedItems((prev) =>
//       prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
//     );
//   };

//   const handleMoveSelectedToCart = () => {
//     favitem.forEach((item) => {
//       if (selectedItems.includes(item.id)) Addtocart(item);
//     });
//     setSelectedItems([]);
//   };

//   const handleDeleteSelected = () => {
//     selectedItems.forEach((id) => removeFromFavorites(id));
//     setSelectedItems([]);
//   };

//   const filteredItems = favitem.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="max-w-5xl mx-auto py-8 px-4">
//       <h2 className="text-3xl font-semibold mb-6 font-serif uppercase">My wishlist</h2>

//       <input
//         type="text"
//         placeholder="Search item"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="border px-4 py-2 w-full max-w-xl mb-4"
//       />

//       {favitem.length > 0 && (
//         <div className="flex items-center gap-4 mb-6">
//           <input
//             type="checkbox"
//             checked={selectedItems.length === favitem.length}
//             onChange={(e) => toggleSelectAll(e.target.checked)}
//           />
//           <span className="text-sm">Select All</span>
//           <button
//             onClick={handleMoveSelectedToCart}
//             className="text-blue-600 underline text-sm"
//           >
//             Move to cart
//           </button>
//           <button
//             onClick={handleDeleteSelected}
//             className="text-red-600 underline text-sm"
//           >
//             Delete
//           </button>
//         </div>
//       )}

//       {filteredItems.length === 0 ? (
//         <p className="text-gray-500">No items found.</p>
//       ) : (
//         filteredItems.map((item) => (
//           <div key={item.id} className="flex items-start border-b py-6 gap-6">
//             <input
//               type="checkbox"
//               checked={selectedItems.includes(item.id)}
//               onChange={() => toggleSelectItem(item.id)}
//               className="mt-2"
//             />
//             <img
//               src={item.img[0]}
//               alt={item.title}
//               className="w-32 h-40 object-cover"
//             />
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
//               <p className="text-gray-600 mb-1">Rs. {item.price.toFixed(2)}</p>
//               <p className="text-gray-500 text-sm mb-2">M</p>
//               <select className="border px-3 py-1 mb-2">
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <div>
//                 <button
//                   onClick={() => Addtocart(item)}
//                   className="bg-black text-white px-6 py-2 text-sm font-semibold"
//                 >
//                   MOVE TO CART
//                 </button>
//               </div>
//             </div>
//             <button onClick={() => removeFromFavorites(item.id)}>
//               <RiDeleteBin6Line size={20} />
//             </button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Favorite;


import { useState } from 'react';
import { useStore } from './CartContext/Context';
import { RiDeleteBin6Line } from "react-icons/ri";

const Favorite = () => {
  const { favitem, setFavitem , removeFromFavorites, Addtocart } = useStore();
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelectedItems(favitem.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const handleMoveSelectedToCart = () => {
    const itemsToMove = favitem.filter((item) => selectedItems.includes(item.id));
    itemsToMove.forEach((item) => {
      Addtocart(item);
      removeFromFavorites(item.id); // Remove from wishlist after adding to cart
    });
    setSelectedItems([]);
  };

const handleDeleteSelected = () => {
  setFavitem((prevFav) => prevFav.filter(item => !selectedItems.includes(item.id)));
  setSelectedItems([]);
};


  const filteredItems = favitem.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 border shadow-2xl m-5 p-2">
      <h2 className="text-3xl font-semibold mb-6 font-serif uppercase">My Wishlist</h2>

      <input
        type="text"
        placeholder="Search item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border px-4 py-2 w-full max-w-xl mb-4"
      />

      {favitem.length > 0 && (
        <div className="flex items-center gap-4 mb-6">
          <input
            type="checkbox"
            checked={selectedItems.length === favitem.length}
            onChange={(e) => toggleSelectAll(e.target.checked)}
          />
          <span className="text-sm">Select All</span>
          <button
            onClick={handleMoveSelectedToCart}
            disabled={selectedItems.length === 0}
            className={`text-blue-600 underline text-sm ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Move to cart
          </button>
          <button
            onClick={handleDeleteSelected}
            disabled={selectedItems.length === 0}
            className={`text-red-600 underline text-sm ${selectedItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Delete
          </button>
        </div>
      )}

      {filteredItems.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        filteredItems.map((item) => (
          <div key={item.id} className="flex items-start border-b py-6 gap-6">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => toggleSelectItem(item.id)}
              className="mt-2"
            />
            <img
              src={item.img[0]}
              alt={item.title}
              className="w-32 h-40 object-cover"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 mb-1">Rs. {item.price.toFixed(2)}</p>
              <p className="text-gray-500 text-sm mb-2">Size: M</p>
              <select className="border px-3 py-1 mb-2">
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <div>
                <button
                  onClick={() => {
                    Addtocart(item);
                    // removeFromFavorites(item.id);
                  }}
                  className="bg-black text-white px-6 py-2 text-sm font-semibold"
                >
                  MOVE TO CART
                </button>
              </div>
            </div>
            <button onClick={() => removeFromFavorites(item.id)}>
              <RiDeleteBin6Line size={20} />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Favorite;
