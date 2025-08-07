



// import React, { useState, useEffect, useRef } from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";

// const Delivery = () => {
//   const printRef =useRef();
//   const [delivery, setDelivery] = useState([]);

//   useEffect(() => {
//     const orders = JSON.parse(localStorage.getItem("allorder")) || [];
//     setDelivery(orders);
//   }, []);

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

//   // const handlePrint = () => {

//   //   window.print();
//   // };

//   const handlePrint = () => {
//     const printContent = printRef.current.innerHTML;
//     const printWindow = window.open("", "", "width=800,height=600");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Super Market - Delivery Info</title>
//           <style>
//             body { font-family: Arial; padding: 20px; color: #333; }
//             .print-container { border: 1px solid #ccc; padding: 20px; max-width: 800px; margin: auto; }
//             h2, h3 { color: #256029; }
//             footer { margin-top: 40px; text-align: center; font-size: 12px; border-top: 1px solid #ccc; padding-top: 10px; }
//           </style>
//         </head>
//         <body>
//           <div class="print-container">${printContent}</div>
//           <footer><p>Printed on: ${new Date().toLocaleString()}</p></footer>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//     printWindow.focus();
//     printWindow.onload = () => {
//       printWindow.print();
//       printWindow.close();
//     };
//   };
//   return (
//     <div className="p-4 max-w-5xl mx-auto h-screen ">
//       <div className="flex justify-between items-center print:hidden">
//         <h1 className="text-2xl font-semibold mb-4 text-orange-400 uppercase">
//           Your Deliveries Details
//         </h1>
//         <button
//           onClick={handlePrint}
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
//         >
//           Print
//         </button>
//       </div>

//       <div className="space-y-6">
//         {delivery.length === 0 ? (
//           <p className="text-gray-500">No delivery history found.</p>
//         ) : (
//           delivery.map((order, orderIndex) => (
//             <div ref={printRef}
//               key={order.orderid}
//               className="space-y-3 border-b pb-6 grid sm:grid-cols-2 shadow-2xl items-center"
//             >
//               <div className="flex flex-col justify-center items-center">
//                 <div>
//                   <h2 className="text-lg font-semibold text-blue-500 pb-2">
//                     <span className="font-bold">Order ID:</span> {order.orderid}
//                   </h2>
//                   <p className="text-md uppercase">
//                     <span className="font-bold text-gray-600">Name:</span>{" "}
//                     {order.deliveryadd.name}
//                   </p>
//                   <p className="text-md">
//                     <span className="font-bold text-gray-600">Contact:</span>{" "}
//                     {order.deliveryadd.contact}
//                   </p>
//                   <p className="text-md">
//                     <span className="font-bold text-gray-600">Mail-ID:</span>{" "}
//                     {order.deliveryadd.email}
//                   </p>
//                   <p className="text-md">
//                     <span className="font-bold text-gray-600">Address:</span>{" "}
//                     {order.deliveryadd.address}
//                   </p>
//                   <p className="text-md">
//                     <span className="font-bold text-gray-600">Pin-Code:</span>{" "}
//                     {order.deliveryadd.pincode}
//                   </p>
//                   <p className="text-md text-gray-500 pt-2">
//                     <span className="font-bold">Order Date:</span>{" "}
//                     {new Date(order.Orderdate).toLocaleString()}
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 {order.deliverydet.map((item, itemIndex) => (
//                   <div
//                     key={`${orderIndex}-${itemIndex}`}
//                     className="flex flex-col sm:flex-row items-center justify-between sm:items-start bg-white rounded-2xl p-4 gap-4"
//                   >
//                     <div className="flex w-full justify-between space-y-1 sm:text-left border-b-1 mr-3">
//                       <div className="flex flex-col">
//                         <h2 className="text-lg font-medium">{item.title}</h2>
//                         <p className="text-blue-400">
//                           <span className="font-bold">Quantity:</span>{" "}
//                           {item.Quantity}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-red-500">₹ {item.price}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <h1 className="uppercase font-bold text-red-500 flex justify-end pr-6">
//                   Total: ₹ {order.total}
//                 </h1>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Delivery;


import React, { useState, useEffect, useRef } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Delivery = () => {
  const printRef = useRef();
  const [delivery, setDelivery] = useState([]);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem("allorder")) || [];
    setDelivery(orders);
  }, []);

  const getStars = (rating) => {
    const fullStars = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) =>
      i < fullStars ? (
        <FaStar key={i} className="text-yellow-400 inline text-sm mr-1" />
      ) : (
        <FaRegStar key={i} className="text-gray-300 inline text-sm mr-1" />
      )
    );
  };

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write(`
      <html>
        <head>
          <title>Super Market - Delivery Info</title>
          <style>
            body { font-family: Arial; padding: 20px; color: #333; }
            .print-container { border: 1px solid #ccc; padding: 20px; max-width: 800px; margin: auto; }
            h2, h3 { color: #256029; }
            footer { margin-top: 40px; text-align: center; font-size: 12px; border-top: 1px solid #ccc; padding-top: 10px; }
          </style>
        </head>
        <body>
          <div class="print-container">${printContent}</div>
          <footer><p>Printed on: ${new Date().toLocaleString()}</p></footer>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.onload = () => {
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center print:hidden">
        <h1 className="text-2xl font-semibold mb-4 text-orange-400 uppercase">
          Your Deliveries Details
        </h1>
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Print
        </button>
      </div>

      <div ref={printRef}>
        {delivery.length === 0 ? (
          <p className="text-gray-500">No delivery history found.</p>
        ) : (
          delivery.map((order) => (
            <div
              key={order.orderid}
              className="space-y-3 border-b pb-6 mb-6 grid sm:grid-cols-2 shadow-lg items-center"
            >
              <div className="flex flex-col justify-center items-start px-4">
                <h2 className="text-lg font-semibold text-blue-500 pb-2">
                  <span className="font-bold">Order ID:</span> {order.orderid}
                </h2>
                <p><span className="font-bold text-gray-600">Name:</span> {order.deliveryadd.name}</p>
                <p><span className="font-bold text-gray-600">Contact:</span> {order.deliveryadd.contact}</p>
                <p><span className="font-bold text-gray-600">Mail-ID:</span> {order.deliveryadd.email}</p>
                <p><span className="font-bold text-gray-600">Address:</span> {order.deliveryadd.address}</p>
                <p><span className="font-bold text-gray-600">Pin-Code:</span> {order.deliveryadd.pincode}</p>
                <p className="text-gray-500 pt-2">
                  <span className="font-bold">Order Date:</span> {new Date(order.Orderdate).toLocaleString()}
                </p>
              </div>

              <div className="px-4">
                {order.deliverydet.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 border mb-2"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <p className="text-blue-400">
                          <span className="font-bold">Quantity:</span> {item.Quantity}
                        </p>
                      </div>
                      <p className="text-red-500 font-bold">₹ {item.price}</p>
                    </div>
                  </div>
                ))}
                <h1 className="uppercase font-bold text-red-500 flex justify-end pr-2">
                  Total: ₹ {order.total}
                </h1>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Delivery;
