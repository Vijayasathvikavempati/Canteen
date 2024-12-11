// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Log = () => {
//   const API_URL = "http://localhost:3000/Users";
//   const [users, setUsers] = useState([]);
//   const [newUsers, setNewUsers] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error in fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Fetch users on component mount
//   }, []);

//   // Add a new user
//   const addUser = async (e) => {
//     e.preventDefault();

//     // Validation logic
//     const errors = {};
//     if (!newUsers.name) errors.name = "Name is required.";
//     if (!newUsers.email) errors.email = "Email is required.";
//     else if (!/\S+@\S+/.test(newUsers.email)) errors.email = "Enter a valid email.";
//     if (!newUsers.password) errors.password = "Password is required.";
//     else if (newUsers.password.length < 3) errors.password = "Password must be at least 3 characters long.";

//     setValidationErrors(errors);

   

//     try {
//       const response = await axios.post(API_URL, newUsers);
//       setUsers([...users, response.data]);
//       setNewUsers({ name: "", email: "", password: "" });
//       setValidationErrors({});
//       console.log("User added", response.data);
//     } catch (error) {
//       console.error("Error in adding user", error);
//     }
//   };

//   return (
//     <div className="login-page-container" id="loginPageContainer">
//       <div className="login-container">
//         <h2 className="head">Sign Up</h2>

//         <form className="login-form" onSubmit={addUser}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="name"
//               value={newUsers.name}
//               placeholder="Name"
//               onChange={(e) =>
//                 setNewUsers({ ...newUsers, name: e.target.value })
//               }
//             />
//             {validationErrors.name && (
//               <p className="error-message">{validationErrors.name}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <input
//               type="email"
//               className="name"
//               value={newUsers.email}
//               placeholder="Enter your Email"
//               onChange={(e) =>
//                 setNewUsers({ ...newUsers, email: e.target.value })
//               }
//             />
//             {validationErrors.email && (
//               <p className="error-message">{validationErrors.email}</p>
//             )}
//           </div>

//           <div className="form-group">
//             <input
//               type="password"
//               className="password"
//               value={newUsers.password}
//               placeholder="Enter your password"
//               onChange={(e) =>
//                 setNewUsers({ ...newUsers, password: e.target.value })
//               }
//             />
//             {validationErrors.password && (
//               <p className="error-message">{validationErrors.password}</p>
//             )}
//           </div>

//           <button type="submit" className="btn-login">
//             Sign-up
//           </button>
//           <p>Already have an account? Login</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;









// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Log = () => {
//   const API_URL = "http://localhost:3000/Users";
//   const [users, setUsers] = useState([]);
//   const [newUsers, setNewUsers] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isLogin, setIsLogin] = useState(false); // New state to toggle forms

//   // Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error in fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Fetch users on component mount
//   }, []);

//   // Add a new user (Sign Up)
//   const addUser = async (e) => {
//     e.preventDefault();

//     // Validation logic for Sign-Up
//     const errors = {};
//     if (!newUsers.name) errors.name = "Name is required.";
//     if (!newUsers.email) errors.email = "Email is required.";
//     else if (!/\S+@\S+/.test(newUsers.email)) errors.email = "Enter a valid email.";
//     if (!newUsers.password) errors.password = "Password is required.";
//     else if (newUsers.password.length < 3) errors.password = "Password must be at least 3 characters long.";

//     setValidationErrors(errors);

//     if (Object.keys(errors).length > 0) return; // Don't proceed if there are errors

//     try {
//       const response = await axios.post(API_URL, newUsers);
//       setUsers([...users, response.data]);
//       setNewUsers({ name: "", email: "", password: "" });
//       setValidationErrors({});
//       console.log("User added", response.data);
//       setIsLogin(true); // After sign-up, switch to Login form
//     } catch (error) {
//       console.error("Error in adding user", error);
//     }
//   };

//   // Handle login form submission
//   const handleLogin = (e) => {
//     e.preventDefault();

//     const foundUser = users.find(
//       (user) => user.email === loginData.email && user.password === loginData.password
//     );

//     if (foundUser) {
//       alert("Login successful");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login-page-container" id="loginPageContainer">
//       <div className="login-container">
//         <h2 className="head">{isLogin ? "Login" : "Sign Up"}</h2>

//         {/* Toggle between Sign Up and Login form */}
//         {!isLogin ? (
//           <form className="login-form" onSubmit={addUser}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="name"
//                 value={newUsers.name}
//                 placeholder="Name"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, name: e.target.value })
//                 }
//               />
//               {validationErrors.name && (
//                 <p className="error-message">{validationErrors.name}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 className="name"
//                 value={newUsers.email}
//                 placeholder="Enter your Email"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, email: e.target.value })
//                 }
//               />
//               {validationErrors.email && (
//                 <p className="error-message">{validationErrors.email}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 className="password"
//                 value={newUsers.password}
//                 placeholder="Enter your password"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, password: e.target.value })
//                 }
//               />
//               {validationErrors.password && (
//                 <p className="error-message">{validationErrors.password}</p>
//               )}
//             </div>

//             <button type="submit" className="btn-login">
//               Sign-up
//             </button>
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer" }}>
//                 Login
//               </span>
//             </p>
//           </form>
//         ) : (
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="name"
//                 value={loginData.email}
//                 placeholder="Enter your Email"
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 className="password"
//                 value={loginData.password}
//                 placeholder="Enter your password"
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, password: e.target.value })
//                 }
//               />
//             </div>

//             <button type="submit" className="btn-login">
//               Login
//             </button>
//             <p>
//               Don't have an account?{" "}
//               <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer" }}>
//                 Sign Up
//               </span>
//             </p>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Log;









// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Log = () => {
//   const API_URL = "http://localhost:3000/Users";
//   const [users, setUsers] = useState([]);
//   const [newUsers, setNewUsers] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [isLogin, setIsLogin] = useState(false); // Toggle between forms
//   const [loginStatus, setLoginStatus] = useState(""); // Track login status

//   // Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       setUsers(response.data);
//     } catch (error) {
//       console.error("Error in fetching users", error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Fetch users on component mount
//   }, []);

//   // Add a new user (Sign Up)
//   const addUser = async (e) => {
//     e.preventDefault();

//     // Validation logic for Sign-Up
//     const errors = {};
//     if (!newUsers.name) errors.name = "Name is required.";
//     if (!newUsers.email) errors.email = "Email is required.";
//     else if (!/\S+@\S+/.test(newUsers.email)) errors.email = "Enter a valid email.";
//     if (!newUsers.password) errors.password = "Password is required.";
//     else if (newUsers.password.length < 3) errors.password = "Password must be at least 3 characters long.";

//     setValidationErrors(errors);

//     if (Object.keys(errors).length > 0) return; // Don't proceed if there are errors

//     try {
//       const response = await axios.post(API_URL, newUsers);
//       setUsers([...users, response.data]);
//       setNewUsers({ name: "", email: "", password: "" });
//       setValidationErrors({});
//       console.log("User added", response.data);
//       setIsLogin(true); // After sign-up, switch to Login form
//     } catch (error) {
//       console.error("Error in adding user", error);
//     }
//   };

//   // Handle login form submission
//   const handleLogin = (e) => {
//     e.preventDefault();

//     const foundUser = users.find(
//       (user) => user.email === loginData.email && user.password === loginData.password
//     );

//     if (foundUser) {
//       setLoginStatus("Login successful");
//       setLoginData({ email: "", password: "" }); // Clear login form fields
//     } else {
//       setLoginStatus("Invalid credentials, please try again.");
//     }
//   };

//   return (
//     <div className="login-page-container" id="loginPageContainer">
//       <div className="login-container">
//         <h2 className="head">{isLogin ? "Login" : "Sign Up"}</h2>

//         {/* Toggle between Sign Up and Login form */}
//         {!isLogin ? (
//           <form className="login-form" onSubmit={addUser}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="name"
//                 value={newUsers.name}
//                 placeholder="Name"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, name: e.target.value })
//                 }
//               />
//               {validationErrors.name && (
//                 <p className="error-message">{validationErrors.name}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <input
//                 type="email"
//                 className="name"
//                 value={newUsers.email}
//                 placeholder="Enter your Email"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, email: e.target.value })
//                 }
//               />
//               {validationErrors.email && (
//                 <p className="error-message">{validationErrors.email}</p>
//               )}
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 className="password"
//                 value={newUsers.password}
//                 placeholder="Enter your password"
//                 onChange={(e) =>
//                   setNewUsers({ ...newUsers, password: e.target.value })
//                 }
//               />
//               {validationErrors.password && (
//                 <p className="error-message">{validationErrors.password}</p>
//               )}
//             </div>

//             <button type="submit" className="btn-login">
//               Sign-up
//             </button>
//             <p>
//               Already have an account?{" "}
//               <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer" }}>
//                 Login
//               </span>
//             </p>
//           </form>
//         ) : (
//           <form className="login-form" onSubmit={handleLogin}>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="name"
//                 value={loginData.email}
//                 placeholder="Enter your Email"
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, email: e.target.value })
//                 }
//               />
//             </div>

//             <div className="form-group">
//               <input
//                 type="password"
//                 className="password"
//                 value={loginData.password}
//                 placeholder="Enter your password"
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, password: e.target.value })
//                 }
//               />
//             </div>

//             <button type="submit" className="btn-login">
//               Login
//             </button>
//             <p>
//               Don't have an account?{" "}
//               <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer" }}>
//                 Sign Up
//               </span>
//             </p>
//           </form>
//         )}

//         {/* Display login status */}
//         {loginStatus && (
//           <p className={`login-status ${loginStatus === "Login successful" ? "success" : "error"}`}>
//             {loginStatus}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Log;
















// import React, { useState } from "react";
// import axios from "axios";

// const SignUpForm = ({ setIsLogin, users }) => {
//   const [newUser, setNewUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [validationErrors, setValidationErrors] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const API_URL = "http://localhost:3000/Users";

//   // Handle sign-up form submission
//   const addUser = async (e) => {
//     e.preventDefault();

//     // Validation logic for Sign-Up
//     const errors = {};
//     if (!newUser.name) errors.name = "Name is required.";
//     if (!newUser.email) errors.email = "Email is required.";
//     else if (!/\S+@\S+/.test(newUser.email)) errors.email = "Enter a valid email.";
//     if (!newUser.password) errors.password = "Password is required.";
//     else if (newUser.password.length < 3) errors.password = "Password must be at least 3 characters long.";

//     setValidationErrors(errors);

//     if (Object.keys(errors).length > 0) return; // Don't proceed if there are errors

//     try {
//       const response = await axios.post(API_URL, newUser);
//       users.push(response.data);
//       setNewUser({ name: "", email: "", password: "" });
//       setValidationErrors({});
//       console.log("User added", response.data);
//       setIsLogin(true); // After sign-up, switch to Login form
//     } catch (error) {
//       console.error("Error in adding user", error);
//     }
//   };

//   return (
//     <form className="login-form" onSubmit={addUser}>
//       <div className="form-group">
//         <input
//           type="text"
//           className="name"
//           value={newUser.name}
//           placeholder="Name"
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//         />
//         {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
//       </div>

//       <div className="form-group">
//         <input
//           type="email"
//           className="name"
//           value={newUser.email}
//           placeholder="Enter your Email"
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//         />
//         {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
//       </div>

//       <div className="form-group">
//         <input
//           type="password"
//           className="password"
//           value={newUser.password}
//           placeholder="Enter your password"
//           onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
//         />
//         {validationErrors.password && <p className="error-message">{validationErrors.password}</p>}
//       </div>

//       <button type="submit" className="btn-login">
//         Sign-up
//       </button>
//       <p>
//         Already have an account?{" "}
//         <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer" }}>
//           Login
//         </span>
//       </p>
//     </form>
//   );
// };

// export default SignUpForm;



















import React, { useState } from "react";
import axios from "axios";

const SignUpForm = ({ setIsLogin, users, setUsers }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const API_URL = "http://localhost:3000/Users";

  // Handle sign-up form submission
  const addUser = async (e) => {
    e.preventDefault();

    // Validation logic for Sign-Up
    const errors = {};
    if (!newUser.name) errors.name = "Name is required.";
    if (!newUser.email) errors.email = "Email is required.";
    else if (!/\S+@\S+/.test(newUser.email)) errors.email = "Enter a valid email.";
    if (!newUser.password) errors.password = "Password is required.";
    else if (newUser.password.length < 3) errors.password = "Password must be at least 3 characters long.";

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) return; // Don't proceed if there are errors

    try {
      const response = await axios.post(API_URL, newUser);
      // Add the new user to the users state
      setUsers([...users, response.data]);
      setNewUser({ name: "", email: "", password: "" });
      setValidationErrors({});
      console.log("User added", response.data);
      setIsLogin(true); // After sign-up, switch to Login form
    } catch (error) {
      console.error("Error in adding user", error);
    }
  };

  return (
    <form className="login-form" onSubmit={addUser}>
      <div className="form-group">
        <input
          type="text"
          className="name"
          value={newUser.name}
          placeholder="Name"
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        {validationErrors.name && <p className="error-message">{validationErrors.name}</p>}
      </div>

      <div className="form-group">
        <input
          type="email"
          className="name"
          value={newUser.email}
          placeholder="Enter your Email"
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        {validationErrors.email && <p className="error-message">{validationErrors.email}</p>}
      </div>

      <div className="form-group">
        <input
          type="password"
          className="password"
          value={newUser.password}
          placeholder="Enter your password"
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
        {validationErrors.password && <p className="error-message">{validationErrors.password}</p>}
      </div>

      <button type="submit" className="btn-login">
        Sign-up
      </button>
      <p>
        Already have an account?{" "}
        <span onClick={() => setIsLogin(true)} style={{ cursor: "pointer" }}>
          Login
        </span>
      </p>
    </form>
  );
};

export default SignUpForm;

