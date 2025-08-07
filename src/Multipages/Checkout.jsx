// import React, { useState, useEffect } from "react";
// import { useStore } from "./CartContext/Context";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";

// function Checkout() {
//   const [addres, setAddres] = useState({
//     name: "",
//     contact: "",
//     email: "",
//     pincode: "",
//     address: "",
//   });

//   const { cortitem, RemoveOrdercart, setCortitem } = useStore();
//   const navigate = useNavigate();

//   const finalbill = cortitem.reduce(
//     (acc, curnt) => acc + curnt.price * curnt.Quantity,
//     0
//   );

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handleadres = (e) => {
//     setAddres({ ...addres, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!window.Razorpay) {
//       alert("Razorpay SDK failed to load.");
//       return;
//     }

//     const numericAmount = parseFloat(finalbill);
//     if (isNaN(Math.round(numericAmount)) || numericAmount <= 0) {
//       alert("Invalid amount");
//       return;
//     }

//     localStorage.setItem("deliveryadd", JSON.stringify(addres));
//     localStorage.setItem("deliverydet", JSON.stringify(cortitem));

//     const orders = JSON.parse(localStorage.getItem("allorder")) || [];

//     const neworder = {
//       orderid: "ODR" + Date.now(),
//       Orderdate: new Date().toISOString(),
//       total:finalbill,
//       deliveryadd: addres,
//       deliverydet: cortitem,
//     };

//     localStorage.setItem("allorder", JSON.stringify([neworder, ...orders]));

//     const options = {
//       key: "rzp_test_J5uVuIKgMpadsi",
//       amount: numericAmount * 100,
//       currency: "INR",
//       name: "STARTUP_PROJECTS",
//       description: "Test Payment",
//       handler: function (response) {
//         alert(
//           "Payment Successful!\nPayment ID: " + response.razorpay_payment_id
//         );
//         setCortitem([]);
//         navigate("/delivery");
//       },
//       prefill: {
//         name: addres.name,
//         email: addres.email,
//         contact: addres.contact,
//       },
//       notes: {
//         address: addres.address,
//       },
//       theme: {
//         color: "#ff5733",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Order Summary */}
//           <div className="text-center my-5">
//             <h1 className="text-2xl uppercase font-bold py-10 text-orange-400">
//               Order Summary
//             </h1>
//             {cortitem.length > 0 ? (
//               cortitem.map((item) => (
//                 <div
//                   key={item.id}
//                   className="flex gap-5 m-5 rounded-3xl p-3 justify-around bg-white shadow"
//                 >
//                   <div className="h-30 w-32">
//                     <img
//                       className="h-full w-full object-cover rounded-2xl"
//                       src={item.img[0]}
//                       alt={item.title}
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2 items-center justify-center">
//                     <h2 className="sm:text-xl font-bold text-orange-500 text-[15px]">
//                       {item.title}l
//                     </h2>
//                     <p className="text-sm text-gray-500">Size: {item.size}</p>
//                     <p className="sm:text-2xl text-cyan-700">
//                       ₹ {item.price * item.Quantity}
//                     </p>
//                     <p className="sm:text-md text-[15px] text-gray-500">
//                       QUANTITY :{" "}
//                       <span className="text-cyan-600">{item.Quantity}</span>
//                     </p>
//                   </div>
//                   <div
//                     onClick={() => RemoveOrdercart(item.id)}
//                     className="flex items-center cursor-pointer hover:text-red-500"
//                   >
//                     <RiDeleteBin6Line className="sm:text-2xl" />
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-600 text-lg">Your cart is empty.</p>
//             )}
//             <h1 className="border rounded-2xl py-2 mx-5 text-2xl font-bold uppercase">
//               Final bill : <span className=" text-red-500">₹</span>{" "}
//               {finalbill.toFixed(2)}
//             </h1>
//           </div>

//           {/* Address Details */}
//           <div className="m-10 text-center lg:mt-10">
//             <h1 className="text-orange-400 font-bold text-2xl py-9 uppercase">
//               Details
//             </h1>
//             <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
//               <input
//                 name="name"
//                 required
//                 onChange={handleadres}
//                 placeholder="NAME"
//                 className="bg-gray-200 shadow-md h-12 rounded-2xl pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
//               />
//               <input
//                 name="contact"
//                 type="number"
//                 required
//                 onChange={handleadres}
//                 placeholder="CONTACT"
//                 className="bg-gray-200 shadow-md h-12 rounded-2xl pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
//               />
//               <input
//                 name="email"
//                 type="email"
//                 required
//                 onChange={handleadres}
//                 placeholder="MAIL-ID"
//                 className="bg-gray-200 shadow-md h-12 rounded-2xl pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
//               />
//               <input
//                 name="pincode"
//                 type="text"
//                 required
//                 onChange={handleadres}
//                 placeholder="PIN-CODE"
//                 className="bg-gray-200 shadow-md h-12 rounded-2xl pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
//               />
//               <input
//                 name="address"
//                 type="text"
//                 required
//                 onChange={handleadres}
//                 placeholder="ADDRESS"
//                 className="bg-gray-200 shadow-md h-12 rounded-2xl pl-4 text-gray-800 placeholder:text-gray-400 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="mt-4 bg-orange-400 text-white font-bold py-2 rounded-2xl hover:bg-orange-500 transition duration-300"
//               >
//                 Place Order
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Checkout;


import React, { useState, useEffect } from "react";
import { useStore } from "./CartContext/Context";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// function Checkout() {
//   const [addres, setAddres] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     pincode: "",
//     city: "",
//     state: "",
//     address: "",
//     country: "",
//     deliveryOption: "",
//   });

//   const { cortitem, RemoveOrdercart, setCortitem } = useStore();
//   const navigate = useNavigate();

//   const finalbill = cortitem.reduce(
//     (acc, curnt) => acc + curnt.price * curnt.Quantity,
//     0
//   );

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);
//   }, []);

//   const handleadres = (e) => {
//     const { name, value } = e.target;
//     setAddres((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!window.Razorpay) {
//       alert("Razorpay SDK failed to load.");
//       return;
//     }

//     const numericAmount = parseFloat(finalbill);
//     if (isNaN(Math.round(numericAmount)) || numericAmount <= 0) {
//       alert("Invalid amount");
//       return;
//     }

//     localStorage.setItem("deliveryadd", JSON.stringify(addres));
//     localStorage.setItem("deliverydet", JSON.stringify(cortitem));

//     const orders = JSON.parse(localStorage.getItem("allorder")) || [];

//     const neworder = {
//       orderid: "ODR" + Date.now(),
//       Orderdate: new Date().toISOString(),
//       total: finalbill,
//       deliveryadd: addres,
//       deliverydet: cortitem,
//     };

//     localStorage.setItem("allorder", JSON.stringify([neworder, ...orders]));

//     const options = {
//       key: "rzp_test_J5uVuIKgMpadsi",
//       amount: numericAmount * 100,
//       currency: "INR",
//       name: "STARTUP_PROJECTS",
//       description: "Test Payment",
//       handler: function (response) {
//         alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
//         setCortitem([]);
//         navigate("/delivery");
//       },
//       prefill: {
//         name: addres.name,
//         email: addres.email,
//         contact: addres.contact,
//       },
//       notes: {
//         address: addres.address,
//       },
//       theme: {
//         color: "#ff5733",
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div className="bg-[#f2f9e9] min-h-screen p-6">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
//         {/* Form Section */}
//         <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow">
//           <h2 className="text-xl font-bold mb-6">Billing Details</h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input name="name" onChange={handleadres} required placeholder="Full Name*" className="input" />
//             <input name="email" onChange={handleadres} required type="email" placeholder="Email Id*" className="input" />
//             <input name="contact" onChange={handleadres} required type="tel" placeholder="Contact No*" className="input" />
//             <input name="pincode" onChange={handleadres} required placeholder="Zip Code*" className="input" />
//             <input name="city" onChange={handleadres} required placeholder="City*" className="input" />
//             <input name="state" onChange={handleadres} required placeholder="State*" className="input" />
//             <input name="address" onChange={handleadres} required placeholder="Street address*" className="col-span-2 input" />
//             <input name="country" onChange={handleadres} required placeholder="Country*" className="col-span-2 input" />
//             <div className="col-span-2 flex gap-4 items-center">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="deliveryOption" value="same" onChange={handleadres} />
//                 Same as shipping address
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="deliveryOption" value="different" onChange={handleadres} />
//                 Use different billing address
//               </label>
//             </div>
//             <button
//               type="submit"
//               className="col-span-2 mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-md"
//             >
//               Proceed to Checkout
//             </button>
//           </form>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white rounded-xl p-6 shadow h-fit">
//           <h2 className="font-bold text-lg mb-4">Order Summary</h2>
//           <div className="border-t border-b py-4 space-y-2 text-sm">
//             <div className="flex justify-between">
//               <span>Items</span>
//               <span>{cortitem.length}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Sub Total</span>
//               <span>₹{finalbill.toFixed(2)}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Shipping</span>
//               <span>₹0.00</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Taxes</span>
//               <span>₹0.00</span>
//             </div>
//             <div className="flex justify-between text-red-500">
//               <span>Coupon Discount</span>
//               <span>-₹00.00</span>
//             </div>
//           </div>
//           <div className="flex justify-between mt-4 font-bold text-lg">
//             <span>Total</span>
//             <span>₹{finalbill.toFixed(2)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;


// ... imports remain the same

function Checkout() {
  const [addres, setAddres] = useState({
    name: "",
    email: "",
    contact: "",
    pincode: "",
    city: "",
    state: "",
    address: "",
    country: "",
    deliveryOption: "",
  });

  const { cortitem, RemoveOrdercart, setCortitem } = useStore();
  const navigate = useNavigate();

  const finalbill = cortitem.reduce(
    (acc, curr) => acc + curr.price * curr.Quantity,
    0
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleadres = (e) => {
    const { name, value } = e.target;
    setAddres((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const numericAmount = parseFloat(finalbill);
    if (isNaN(Math.round(numericAmount)) || numericAmount <= 0) {
      alert("Invalid amount");
      return;
    }

    localStorage.setItem("deliveryadd", JSON.stringify(addres));
    localStorage.setItem("deliverydet", JSON.stringify(cortitem));

    const orders = JSON.parse(localStorage.getItem("allorder")) || [];

    const neworder = {
      orderid: "ODR" + Date.now(),
      Orderdate: new Date().toISOString(),
      total: finalbill,
      deliveryadd: addres,
      deliverydet: cortitem,
    };

    localStorage.setItem("allorder", JSON.stringify([neworder, ...orders]));

    const options = {
      key: "rzp_test_J5uVuIKgMpadsi",
      amount: numericAmount * 100,
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
        setCortitem([]);
        navigate("/delivery");
      },
      prefill: {
        name: addres.name,
        email: addres.email,
        contact: addres.contact,
      },
      notes: {
        address: addres.address,
      },
      theme: {
        color: "#22c55e",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-700 font-serif">Billing Information</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: "name", placeholder: "Full Name*" },
              { name: "email", type: "email", placeholder: "Email Address*" },
              { name: "contact", type: "tel", placeholder: "Phone Number*" },
              { name: "pincode", placeholder: "Pin Code*" },
              { name: "city", placeholder: "City*" },
              { name: "state", placeholder: "State*" },
            ].map((field, i) => (
              <input
                key={i}
                name={field.name}
                type={field.type || "text"}
                required
                placeholder={field.placeholder}
                onChange={handleadres}
                className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            ))}

            <textarea
              name="address"
              placeholder="Full Address*"
              onChange={handleadres}
              required
              className="col-span-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <input
              name="country"
              placeholder="Country*"
              onChange={handleadres}
              required
              className="col-span-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
            />

            <div className="col-span-2 flex flex-col sm:flex-row gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="same"
                  onChange={handleadres}
                  required
                />
                <span className="text-sm text-gray-700">Same as shipping address</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="different"
                  onChange={handleadres}
                  required
                />
                <span className="text-sm text-gray-700">Use different billing address</span>
              </label>
            </div>

            <button
              type="submit"
              className="col-span-2 mt-6 bg-gray-600 hover:bg-gray-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-lg shadow-md"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-lg h-fit">
          <h3 className="text-xl font-semibold text-gray-700 mb-4 font-serif">Order Summary</h3>
          <div className="border-t border-b py-4 space-y-3 text-sm text-gray-700">
            <div className="flex justify-between font-serif">
              <span>Total Items</span>
              <span>{cortitem.length}</span>
            </div>
            <div className="flex justify-between font-serif">
              <span>Subtotal</span>
              <span>₹{finalbill.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-serif">
              <span>Shipping</span>
              <span className="text-gray-600 font-medium">FREE</span>
            </div>
            <div className="flex justify-between font-serif">
              <span>Taxes</span>
              <span>₹0.00</span>
            </div>
            <div className="flex justify-between text-red-500 font-serif">
              <span>Discount</span>
              <span>- ₹0.00</span>
            </div>
          </div>
          <div className="flex justify-between mt-6 text-lg font-bold text-gray-800 font-serif">
            <span>Grand Total</span>
            <span>₹{finalbill.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
