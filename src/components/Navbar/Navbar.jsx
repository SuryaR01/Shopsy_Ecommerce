//  import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { FaCartShopping } from "react-icons/fa6";
// import { FaCaretDown } from "react-icons/fa6";
// import Logo from "/src/assets/logo.png";
// import DarkMode from "../Navbar/DarkMode";
// import { Link } from "react-router-dom";
// import { useStore } from "../../Multipages/CartContext/Context";
// import { useState, useEffect } from "react";
// import { CiHeart } from "react-icons/ci";
// import { FaTimes } from "react-icons/fa";
// import { FaBarsStaggered } from "react-icons/fa6";
// import NavbarJson from "../../components/Navbar/Navbar.json";
// import { FaUserCircle } from "react-icons/fa";
// import { CiLogin, CiLogout } from "react-icons/ci";
// import { CgProfile } from "react-icons/cg";
// import { useNavigate } from "react-router-dom";
// import { IoCloseOutline } from "react-icons/io5";
// import { IoCloseSharp } from "react-icons/io5";
// // import { useStore } from "../../Multipages/CartContext/Context";

// const Menu = [
//   { id: 1, name: "Home", link: "/" },
//   { id: 2, name: "Shopping", link: "/kidswear" },
//   { id: 3, name: "Women", link: "/#" },
//   { id: 4, name: "Men", link: "/#" },
//   { id: 5, name: "Kid's", link: "/#" },
//   { id: 6, name: "Delivery", link: "/delivery" },
// ];

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState();
//   const [inout, setInout] = useState(false);
//   const [hoveredCategory, setHoveredCategory] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [showProfileMenu, setShowProfileMenu] = useState(false);

//   const {
//     favitem,
//     cortitem,
//     handleOrderPopup,
//     Addtocart,
//     RemoveOrdercart,
//     Incrementqty,
//     Decrementqty,
//   } = useStore();

//   // const navigate = useNavigate();
//   const total = cortitem.reduce(
//     (acc, item) => acc + item.price * item.Quantity,
//     0
//   );

//   const getSubcategories = (category) => {
//     return NavbarJson.find((item) => item.category === category);
//   };

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   useEffect(() => {
//     const auth = localStorage.getItem("isAuthenticated");
//     const user = localStorage.getItem("username");

//     if (auth === "true" && user) {
//       setInout(true);
//       setUsername(user);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("username");
//     setInout(false);
//     setUsername("");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 top-0 left-0 w-full z-50">
//       <div className="bg-white dark:bg-gray-900 py-3 border-b">
//         <div className="container mx-auto px-4 flex justify-between items-center">
//           {/* Logo and Desktop Menu */}
//           <div className="flex items-center gap-8">
//             <Link
//               to="/"
//               className="font-bold text-2xl sm:text-3xl flex gap-2 items-center"
//             >
//               <img src={Logo} alt="Logo" className="w-10" />
//               Shopsy
//             </Link>

//             <div className="hidden sm:flex items-center gap-6 text-sm font-medium">
//               {Menu.map((item) => {
//                 const isDropdown = ["Women", "Men", "Kid's"].includes(
//                   item.name
//                 );
//                 return (
//                   <div
//                     key={item.id}
//                     className="relative group"
//                     onMouseEnter={() =>
//                       isDropdown && setHoveredCategory(item.name)
//                     }
//                     onMouseLeave={() => isDropdown && setHoveredCategory(null)}
//                   >
//                     <Link
//                       to={item.link}
//                       className="hover:text-orange-400 transition-colors flex items-center gap-1"
//                     >
//                       {item.name}
//                       {isDropdown && <FaCaretDown />}
//                     </Link>

//                     {isDropdown && hoveredCategory === item.name && (
//                       <div className="absolute right-0 top-full mt-0 bg-white text-black shadow-lg rounded z-50 w-[500px] md:-left-80 sm:w-[300px] sm:-right-20 md:w-[500px] lg:w-[700px] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {getSubcategories(item.name)?.sections?.map(
//                           (section, index) => (
//                             <div key={index}>
//                               <h3 className="font-semibold text-sm uppercase tracking-[2px] mb-2 bg-gray-300 px-2 py-1 rounded">
//                                 {section.title}
//                               </h3>
//                               <ul className="space-y-1">
//                                 {section.items.map((subItem, i) => (
//                                   <li key={i}>
//                                     <Link
//                                       to={
//                                         subItem.list?.[0]?.category
//                                           ? `/category/${subItem.list[0].category}`
//                                           : "#"
//                                       }
//                                       className="block text-sm hover:text-orange-500 leading-7"
//                                     >
//                                       {subItem.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Right Icons */}
//           <div className="flex items-center gap-4 relative">
//             <div className="relative hidden lg:block">
//               <input
//                 type="search"
//                 placeholder="Search"
//                 className="w-[200px] hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none"
//               />
//               <IoMdSearch className="absolute top-1/2 right-10 -translate-y-1/2 text-gray-500 hover:text-orange-500" />
//             </div>

//             <Link
//               to="/favoritelist"
//               className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-orange-700"
//             >
//               <span className="absolute top-0 -right-1 text-white text-xs font-bold bg-amber-900 rounded-full h-5 w-5 flex items-center justify-center">
//                 {favitem.length}
//               </span>
//               <CiHeart size={30} />
//             </Link>

//             <Link
//               to="/viewcart"
//               onClick={handleOrderPopup}
//               className="bg-gradient-to-r relative from-orange-400 to-orange-700 text-white py-1 px-4 rounded-full flex items-center gap-2"
//             >
//               <span className="absolute -top-2 bg-amber-800 text-white font-bold p-2 right-1 h-5 w-5 flex items-center justify-center rounded-full">
//                 {cortitem.length}
//               </span>
//               <FaCartShopping className="text-xl" />
//             </Link>

//             <div className="relative">
//               <button onClick={() => setShowProfileMenu(!showProfileMenu)}>
//                 {inout && username ? (
//                   <div
//                     className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full text-md font-bold uppercase"
//                     title={username}
//                   >
//                     {username[0]}
//                   </div>
//                 ) : (
//                   <FaUserCircle size={30} className="text-blue-400" />
//                 )}
//               </button>

//               {showProfileMenu && (
//                 <div className="absolute right-0 mt-2 shadow-2xl bg-white text-black p-5 capitalize rounded-2xl z-50">
//                   {inout ? (
//                     <>
//                       <Link
//                         onClick={logout}
//                         className="flex items-center gap-3 pb-3"
//                         to="/"
//                       >
//                         <CiLogout size={20} className="text-red-500" /> Logout
//                       </Link>
//                       <Link className="flex items-center gap-3" to="/profile">
//                         <CgProfile size={20} /> Profile
//                       </Link>
//                     </>
//                   ) : (
//                     <Link
//                       onClick={() => setShowProfileMenu(!showProfileMenu)}
//                       className="flex items-center gap-3 w-[80px]"
//                       to="/login"
//                     >
//                       <CiLogin size={20} className="text-blue-500" /> Log in
//                     </Link>
//                   )}
//                 </div>
//               )}
//             </div>

//             <button onClick={toggleMenu} className="text-2xl sm:hidden">
//               {menuOpen ? <FaTimes /> : <FaBarsStaggered />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="sm:hidden px-4 pb-4">
//             <ul className="flex flex-col gap-4 mt-4 w-full">
//               {Menu.map((item) => {
//                 const isDropdown = ["Women", "Men", "Kid's"].includes(
//                   item.name
//                 );
//                 return (
//                   <li key={item.id}>
//                     <div className="flex justify-between items-center">
//                       <Link
//                         to={item.link}
//                         onClick={() => !isDropdown && toggleMenu()}
//                         className="block font-medium hover:text-orange-400"
//                       >
//                         {item.name}
//                       </Link>
//                       {isDropdown && (
//                         <button
//                           onClick={() =>
//                             setDropdownOpen(
//                               dropdownOpen === item.name ? null : item.name
//                             )
//                           }
//                           className="text-orange-500"
//                         >
//                           <FaCaretDown />
//                         </button>
//                       )}
//                     </div>

//                     {isDropdown && dropdownOpen === item.name && (
//                       <div className="bg-gray-100 rounded mt-2 p-3">
//                         {getSubcategories(item.name)?.sections?.map(
//                           (section, index) => (
//                             <div key={index} className="mb-3">
//                               <h4 className="font-semibold text-xs uppercase text-gray-600 mb-1">
//                                 {section.title}
//                               </h4>
//                               <ul className="space-y-1">
//                                 {section.items.map((subItem, i) => (
//                                   <li key={i}>
//                                     <Link
//                                       to={
//                                         subItem.list?.[0]?.category
//                                           ? `/category/${subItem.list[0].category}`
//                                           : "#"
//                                       }
//                                       className="text-sm block text-gray-700 hover:text-orange-500"
//                                       onClick={toggleMenu}
//                                     >
//                                       {subItem.name}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         )}
//       </div>
//       {/* ADD TO CART LIST SHOW OPTION  */}
//       <div>
//         <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out overflow-y-auto p-6">
//           {/* Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-semibold">Cart</h2>
//             <IoCloseOutline
//               className="text-3xl cursor-pointer hover:text-red-500"
//               onClick={() => navigate("/kidswear")}
//             />
//           </div>

//           <hr className="mb-4" />

//           {cortitem.length > 0 ? (
//             cortitem.map((item) => (
//               <div key={item.id} className="mb-6">
//                 <div className="flex gap-4">
//                   <img
//                     src={item.img[0]}
//                     alt={item.title}
//                     className="w-24 h-28 object-cover rounded-md"
//                   />
//                   <div className="flex-1">
//                     <h3 className="text-md font-semibold">{item.title}</h3>
//                     <p className="text-sm font-semibold text-gray-700">
//                       Size: {item.size}
//                     </p>
//                     <div className="flex items-center gap-3 mt-2">
//                       <button
//                         onClick={() => Decrementqty(item.id)}
//                         className="w-8 h-8 border text-lg"
//                       >
//                         −
//                       </button>
//                       <span className="text-md">{item.Quantity}</span>
//                       <button
//                         onClick={() => Incrementqty(item.id)}
//                         className="w-8 h-8 border text-lg"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                   <p className="text-md font-semibold">Rs. {item.price}</p>
//                   <Link
//                     onClick={() => RemoveOrdercart(item.id)}
//                     className=" flex justify-center items-center text-red-500"
//                   >
//                     <IoCloseSharp size={20} />
//                   </Link>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-10">No items in cart.</p>
//           )}

//           {/* Order Note */}
//           <div className="mb-6">
//             <label className="block uppercase tracking-wide text-xs font-bold mb-2">
//               Order Note
//             </label>
//             <textarea
//               rows="4"
//               placeholder="Add special instructions here..."
//               className="w-full border border-gray-300 rounded-md p-2"
//             ></textarea>
//           </div>

//           {/* Footer Section */}
//           <div className="mt-auto border-t pt-4">
//             <div className="flex justify-between text-md mb-1">
//               <span className="font-medium">Subtotal</span>
//               <span className="font-semibold">Rs. {total.toFixed(2)}</span>
//             </div>
//             <p className="text-xs text-gray-500">
//               Shipping, taxes, and discount codes calculated at checkout.
//             </p>

//             <Link
//               to="/checkout"
//               className="block mt-4 w-full text-center bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-900"
//             >
//               CHECK OUT
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// Full working Navbar component with cart panel toggle
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import { CiLogin, CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Logo from "/src/assets/logo.png";
import DarkMode from "../Navbar/DarkMode";
import NavbarJson from "../../components/Navbar/Navbar.json";
import { useStore } from "../../Multipages/CartContext/Context";
import { FaBarsStaggered } from "react-icons/fa6";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Shopping", link: "/kidswear" },
  { id: 3, name: "Women", link: "/#" },
  { id: 4, name: "Men", link: "/#" },
  { id: 5, name: "Kid's", link: "/#" },
  { id: 6, name: "Delivery", link: "/delivery" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [inout, setInout] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCartPanel, setShowCartPanel] = useState(false);

  const {
    favitem,
    cortitem,
    Addtocart,
    RemoveOrdercart,
    Incrementqty,
    Decrementqty,
    handleOrderPopup,
  } = useStore();

  const total = cortitem.reduce(
    (acc, item) => acc + item.price * item.Quantity,
    0
  );

  const getSubcategories = (category) => {
    return NavbarJson.find((item) => item.category === category);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    const user = localStorage.getItem("username");

    if (auth === "true" && user) {
      setInout(true);
      setUsername(user);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    setInout(false);
    setUsername("");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 top-0 left-0 w-full z-50 sticky">
      <div className="bg-white 900 py-3 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo and Desktop Menu */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="font-bold text-2xl sm:text-3xl flex gap-2 items-center text-black"
            >
              <img src={Logo} alt="Logo" className="w-10" />
              Shopsy
            </Link>

            <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-black uppercase">
              {Menu.map((item) => {
                const isDropdown = ["Women", "Men", "Kid's"].includes(
                  item.name
                );
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() =>
                      isDropdown && setHoveredCategory(item.name)
                    }
                    onMouseLeave={() => isDropdown && setHoveredCategory(null)}
                  >
                    <Link
                      to={item.link}
                      className="hover:text-orange-400 transition-colors flex items-center gap-1"
                    >
                      {item.name}
                      {isDropdown && <FaCaretDown />}
                    </Link>

                    {isDropdown && hoveredCategory === item.name && (
                      <div className="absolute right-0 top-full mt-0 bg-white text-black shadow-lg rounded z-50 w-[500px] md:-left-80 sm:w-[300px] sm:-right-20 md:w-[500px] lg:w-[700px] p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {getSubcategories(item.name)?.sections?.map(
                          (section, index) => (
                            <div key={index}>
                              <h3 className="font-semibold text-sm uppercase tracking-[2px] mb-2 bg-gray-300 px-2 py-1 rounded">
                                {section.title}
                              </h3>
                              <ul className="space-y-1">
                                {section.items.map((subItem, i) => (
                                  <li key={i}>
                                    <Link
                                      to={
                                        subItem.list?.[0]?.category
                                          ? `/category/${subItem.list[0].category}`
                                          : "#"
                                      }
                                      className="block text-sm hover:text-orange-500 leading-7"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 relative">
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search"
                className="w-[200px] hover:w-[300px] text-gray-500 transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none"
              />
              <IoMdSearch className="absolute top-1/2 right-10 -translate-y-1/2 text-gray-500 hover:text-orange-500" />
            </div>

            <Link
              to="/favoritelist"
              className="relative text-black  flex items-center justify-center rounded-full "
            >
              <span className="absolute -top-1 -right-1 text-white text-xs font-bold bg-gray-700 rounded-full h-5 w-5 flex items-center justify-center">
                {favitem.length}
              </span>
              <CiHeart size={40} />
            </Link>

            <Link
              // to="/viewcart"
              onClick={() => setShowCartPanel(true)}
              className="relative text-black py-1 px-4 rounded-full flex items-center gap-0"
            >
              <span className="absolute -top-2 bg-gray-700 text-white font-bold p-2 right-2  h-5 w-5 flex items-center justify-center rounded-full">
                {cortitem.length}
              </span>
              <FaCartShopping size={25} className="text-xl" />
            </Link>

            <div className="relative">
              <button onClick={() => setShowProfileMenu(!showProfileMenu)}>
                {inout && username ? (
                  <div
                    className="w-8 h-8 hover:cursor-pointer flex items-center justify-center text-gray-700 font-serif text-3xl rounded-full text-md font-bold uppercase"
                    title={username}
                  >
                    {username[0]}
                  </div>
                ) : (
                  <FaUserCircle size={30} className="text-gray-500" />
                )}
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 shadow-2xl bg-white text-black p-5 capitalize rounded-2xl z-50">
                  {inout ? (
                    <>
                      <Link
                        onClick={logout}
                        className="flex items-center gap-3 pb-3"
                        to="/"
                      >
                        <CiLogout size={20} className="text-red-500" /> Logout
                      </Link>
                      <Link className="flex items-center gap-3" to="/profile">
                        <CgProfile size={20} /> Profile
                      </Link>
                    </>
                  ) : (
                    <Link
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                      className="flex items-center gap-3 w-[80px]"
                      to="/login"
                    >
                      <CiLogin size={20} className="text-blue-500" /> Log in
                    </Link>
                  )}
                </div>
              )}
            </div>

            <button onClick={toggleMenu} className="text-2xl sm:hidden">
              {menuOpen ? <FaTimes /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 mt-4 w-full">
              {Menu.map((item) => {
                const isDropdown = ["Women", "Men", "Kid's"].includes(
                  item.name
                );
                return (
                  <li key={item.id}>
                    <div className="flex justify-between items-center">
                      <Link
                        to={item.link}
                        onClick={() => !isDropdown && toggleMenu()}
                        className="block font-medium hover:text-orange-400"
                      >
                        {item.name}
                      </Link>
                      {isDropdown && (
                        <button
                          onClick={() =>
                            setDropdownOpen(
                              dropdownOpen === item.name ? null : item.name
                            )
                          }
                          className="text-orange-500"
                        >
                          <FaCaretDown />
                        </button>
                      )}
                    </div>

                    {isDropdown && dropdownOpen === item.name && (
                      <div className="bg-gray-100 rounded mt-2 p-3">
                        {getSubcategories(item.name)?.sections?.map(
                          (section, index) => (
                            <div key={index} className="mb-3">
                              <h4 className="font-semibold text-xs uppercase text-gray-600 mb-1">
                                {section.title}
                              </h4>
                              <ul className="space-y-1">
                                {section.items.map((subItem, i) => (
                                  <li key={i}>
                                    <Link
                                      to={
                                        subItem.list?.[0]?.category
                                          ? `/category/${subItem.list[0].category}`
                                          : "#"
                                      }
                                      className="text-sm block text-gray-700 hover:text-orange-500"
                                      onClick={toggleMenu}
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      {/* Cart Panel */}
      {showCartPanel && (
        <div className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-white z-50 shadow-xl overflow-y-auto p-6 rounded-bl-2xl rounded-tl-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-black uppercase">Cart</h2>
            <IoCloseOutline
              className="text-3xl cursor-pointer text-black hover:text-red-500"
              onClick={() => setShowCartPanel(false)}
            />
          </div>
          <hr className="mb-4" />

          {cortitem.length > 0 ? (
            cortitem.map((item) => (
              <div key={item.id} className="mb-6">
                <div className="flex gap-4">
                  <img
                    src={item?.img?.[0]}
                    alt={item?.title}
                    className="w-24 h-28 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-md font-semibold text-black">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-gray-700">
                      Size: {item.size}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button
                        onClick={() => Decrementqty(item.id)}
                        className="w-8 h-8 border text-lg text-black"
                      >
                        −
                      </button>
                      <span className="text-md text-black">
                        {item.Quantity}
                      </span>
                      <button
                        onClick={() => Incrementqty(item.id)}
                        className="w-8 h-8 border text-lg text-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-md font-semibold text-black">
                    Rs. {item.price}
                  </p>
                  <button
                    onClick={() => RemoveOrdercart(item.id)}
                    className="text-red-500"
                  >
                    <IoCloseSharp size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">No items in cart.</p>
          )}

          {/* Note */}
          <div className="mb-6">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2 text-black">
              Order Note
            </label>
            <textarea
              rows="4"
              placeholder="Add special instructions here..."
              className="w-full text-black border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="mt-auto border-t pt-4">
            <div className="flex justify-between text-md mb-1">
              <span className="font-medium text-black">Subtotal</span>
              <span className="font-semibold text-black">
                Rs. {total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
            <Link
              to="/checkout"
              className="block mt-4 w-full text-center bg-black text-white font-semibold py-3 rounded-full hover:bg-gray-900"
            >
              CHECK OUT
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
