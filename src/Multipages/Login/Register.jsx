


// import React, { useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "@emailjs/browser";
// import { FaUser,FaEnvelope,FaLock ,FaKey} from "react-icons/fa";
// import registerimage from "../../assets/images/register.jpeg"

// const generateOTP = () =>
//   Math.floor(100000 + Math.random() * 900000).toString();

// const Register = () => {
//   const form = useRef();
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [generatedOtp, setGeneratedOtp] = useState("");
//   const [enteredOtp, setEnteredOtp] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");

//   const handleSendOtp = (e) => {
//     e.preventDefault();

//     if (!email.includes("@")) {
//       setMessage("Please enter a valid email.");
//       setMessageType("error");
//       return;
//     }

//     const users = JSON.parse(localStorage.getItem("users")) || [];
//     const duplicate = users.find(
//       (user) => user.username === username || user.email === email
//     );

//     if (duplicate) {
//       setMessage("User with this username or email already exists.");
//       setMessageType("error");
//       setTimeout(() => {
//         navigate("/login");
//       }, 1000);
//       return;
//     }

//     const otp = generateOTP();
//     setGeneratedOtp(otp);

//     setTimeout(() => {
//       emailjs
//         .sendForm("service_a6grxsl", "template_gi7vneo", form.current, {
//           publicKey: "isAR5Sy8Y4PABFBmC",
//         })
//         .then(() => {
//           setOtpSent(true);
//           setMessage(`OTP sent to ${email}`);
//           setMessageType("success");
//         })
//         .catch(() => {
//           setMessage("Failed to send OTP. Try again.");
//           setMessageType("error");
//         });
//     }, 200);
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();

//     if (enteredOtp === generatedOtp) {
//       const users = JSON.parse(localStorage.getItem("users")) || [];
//       const newUser = {
//         username,
//         email,
//         password,
//         isAdmin: username === "admin",
//       };

//       localStorage.setItem("users", JSON.stringify([...users, newUser]));
//       setMessage("OTP verified! Registration successful.");
//       setMessageType("success");

//       setTimeout(() => navigate("/login"), 1000);
//     } else {
//       setMessage("Incorrect OTP.");
//       setMessageType("error");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white rounded shadow-lg p-6 w-full max-w-sm text-center">
//         <h2 className="text-2xl font-bold text-blue-500 mb-6">Register</h2>

//         <div>
//           <img src={registerimage} alt="" />
//         </div>

//         {message && (
//           <div
//             className={`mb-4 p-2 rounded text-sm ${
//               messageType === "error"
//                 ? "bg-red-100 text-red-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {message}
//           </div>
//         )}

//         <form
//           ref={form}
//           onSubmit={handleSendOtp}
//           className="flex flex-col gap-4"
//         >
            
//           <div>
           
//             <label className="block text-sm text-start font-medium text-gray-700 mb-1">User Name</label>    
//             <input
//             type="text"
//             name="user_name"
//             placeholder="User Name"
            
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             readOnly={otpSent}
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           </div>

//           <div>
//              <label className="block text-sm text-start font-medium text-gray-700 mb-1">Mail-ID</label> 
//           <input
//             type="email"
//             name="user_email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             readOnly={otpSent}
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           </div>

//           <div>
//              <label className="block text-sm text-start font-medium text-gray-700 mb-1">PassWord</label> 
//           <input
//             type="password"
//             name="user_password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             readOnly={otpSent}
//             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           </div>

//           <textarea
//             name="message"
//             value={`Your OTP is: ${generatedOtp}`}
//             readOnly
//             hidden
//           />

//           {!otpSent && (
//             <button
//               type="submit"
//               className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//             >
//               Send OTP to Email
//             </button>
//           )}
//         </form>

//         {otpSent && (
//           <form onSubmit={handleVerifyOtp} className="flex flex-col gap-4 mt-4">
//             <div>
//                  <label className="block text-sm text-start font-medium text-gray-700 mb-1">OTP</label>
//             <input
//               type="text"
//               placeholder="Enter OTP"
//               value={enteredOtp}
//               onChange={(e) => setEnteredOtp(e.target.value)}
//               required
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600"
//             >
//               Verify OTP & Register
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import registerimage from "../../assets/images/register.jpeg"; // left image
import logo from "D:/REACT PROJECT/2_eCOMMERCE/Ecommerce/src/assets/logo.png"; // top-right logo

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

const Register = () => {
  const form = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      setMessageType("error");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const duplicate = users.find(
      (user) => user.username === username || user.email === email
    );

    if (duplicate) {
      setMessage("User with this username or email already exists.");
      setMessageType("error");
      setTimeout(() => navigate("/login"), 1000);
      return;
    }

    const otp = generateOTP();
    setGeneratedOtp(otp);

  //   setTimeout(() => {
  //     emailjs
  //       .sendForm("service_a6grxsl", "template_gi7vneo", form.current, {
  //         publicKey: "isAR5Sy8Y4PABFBmC",
  //       })
  //       .then(() => {
  //         setOtpSent(true);
  //         setMessage(`OTP sent to ${email}`);
  //         setMessageType("success");
  //       })
  //       .catch(() => {
  //         setMessage("Failed to send OTP. Try again.");
  //         setMessageType("error");
  //       });
  //   }, 200);
  // };

   setTimeout(() => {
      emailjs
        .sendForm("service_a6grxsl", "template_gi7vneo", form.current, {
          publicKey: "isAR5Sy8Y4PABFBmC",
        })
        .then(() => {
          setOtpSent(true);
          setMessage(`OTP sent to ${email}`);
          setMessageType("success");
        })
        .catch(() => {
          setMessage("Failed to send OTP. Try again.");
          setMessageType("error");
        });
    }, 200);
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (enteredOtp === generatedOtp) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const newUser = {
        username,
        email,
        password,
        isAdmin: username === "admin",
      };

      localStorage.setItem("users", JSON.stringify([...users, newUser]));
      setMessage("OTP verified! Registration successful.");
      setMessageType("success");
      setTimeout(() => navigate("/login"), 1000);
    } else {
      setMessage("Incorrect OTP.");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img src={registerimage} alt="Register" className="h-full w-full object-cover" />
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex justify-start mb-2">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </div>

          <h2 className="text-2xl font-bold mb-1">Register</h2>
          <p className="text-sm text-gray-600 mb-4">
            Fill your information below or register with your social account.
          </p>

          {message && (
            <div
              className={`text-sm text-center py-2 px-4 rounded mb-4 ${
                messageType === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          <form ref={form} onSubmit={handleSendOtp} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Enter First name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                readOnly={otpSent}
                required
                className="border border-green-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Enter last name"
                required
                disabled
                className="border border-green-400 px-3 py-2 rounded-md bg-gray-100 text-gray-400"
              />
            </div>

            <input
              type="email"
              name="user_email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              readOnly={otpSent}
              required
              className="w-full border border-green-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <input
              type="password"
              name="user_password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              readOnly={otpSent}
              required
              className="w-full border border-green-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <textarea
              name="otp"
              value={`Your OTP is: ${generatedOtp}`}
              readOnly
              hidden
            />

            {/* Agreement and Submit */}
            {!otpSent && (
              <>
                <label className="text-sm flex items-center gap-2">
                  <input type="checkbox" required className="accent-green-600" />
                  Agree with{" "}
                  <span className="text-green-600 underline cursor-pointer">
                    Terms & Condition
                  </span>{" "}
                  and{" "}
                  <span className="text-green-600 underline cursor-pointer">
                    Privacy Policy
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  Register
                </button>
              </>
            )}
          </form>

          {otpSent && (
            <form onSubmit={handleVerifyOtp} className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Enter OTP"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                required
                className="w-full border border-green-400 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600"
              >
                Verify OTP & Register
              </button>
            </form>
          )}

          {/* Divider and Google */}
          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or Sign in with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
