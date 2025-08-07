// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import loginlogo from "../../assets/images/login.jpeg"

// const Login = () => {
//     const [ username , setUsername ] = useState("");
//     const [ password , setPassword ] = useState("");
//     const [ message , setMessage ] = useState("");
//     const [ messgarType , setMessageType ] = useState("");
//     const navigate = useNavigate();

//     const handleLogin = (e) => {
//         e.preventDefault();

//         const users = JSON.parse(localStorage.getItem("users")) || [] ;

//         const foundUser = users.find((user) => user.username === username && user.password === password );
    

//     if(foundUser) {
//         localStorage.setItem("isAuthenticated" , "true");
//         localStorage.setItem("username" , username);



//         setMessage("Login SuccessFully Done!");
//     setMessageType("Success");

//     setTimeout(() => {
//         navigate('/')

//         window.location.reload();
//     } , 1000);
//     }else{
//         setMessage("InValid UserName Or Password.");
//         setMessageType ("Error");
//     }
//     };



//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login to Your Account</h2>

//         <div><img src={loginlogo} alt="" /></div>

//         <form onSubmit={handleLogin} className="flex flex-col gap-4">
//             {message && (
//           <div
//             className={`p-2 text-center text-sm rounded mb-4 ${
//               messgarType === "error"
//                 ? "bg-red-100 text-red-700"
//                 : "bg-green-100 text-green-700"
//             }`}
//           >
//             {message}
//           </div>
//         )}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">User Name</label>
//             <input
//               type="text"
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="User Name"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
//             <input
//             onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               placeholder="password"
//               className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="text-sm text-center text-gray-600 mt-4">
//           Don't have an account? <Link className="text-blue-600 cursor-pointer hover:underline" to={"/register"}>Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginImage from "../../assets/images/loginimg.jpeg"; // Left image like screenshot
import logo from "D:/REACT PROJECT/2_eCOMMERCE/Ecommerce/src/assets/logo.png"; // Replace with your logo path

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", username);
      setMessage("Login Successfully Done!");
      setMessageType("success");

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1000);
    } else {
      setMessage("Invalid Username or Password.");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left side image */}
        <div className="w-full md:w-1/2">
          <img src={loginImage} alt="Login Visual" className="h-full w-full object-cover" />
        </div>

        {/* Right side login form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex justify-start mb-4">
            <img src={logo} alt="Logo" className="h-12 w-12" />
          </div>

          <h2 className="text-2xl font-bold text-start text-gray-800 mb-2">LogIn</h2>
          <p className="text-sm text-start text-gray-600 mb-6">
            Please fill your detail to access your account.
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

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email Id *</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password *</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-green-500" />
                Remember me
              </label>
              <Link to="/forgot-password" className="text-green-600 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition duration-300"
            >
              Log in
            </button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or Sign in with</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            <span className="text-sm font-medium">Sign in with Google</span>
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <Link to="/register" className="text-green-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
