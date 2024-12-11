// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // hook to navigate after login

//   // Simulated login function
//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Replace this with your actual login logic
//     if (email === 'user@example.com' && password === 'password123') {
//       // After successful login, navigate to the user homepage
//       navigate('/user-home'); // Navigate to user homepage
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;













// import React, { useState } from "react";

// const LoginForm = ({ setIsLogin, users }) => {
//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });
//   const [loginStatus, setLoginStatus] = useState(""); // Track login status

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
//     <form className="login-form" onSubmit={handleLogin}>
//       <div className="form-group">
//         <input
//           type="email"
//           className="name"
//           value={loginData.email}
//           placeholder="Enter your Email"
//           onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//         />
//       </div>

//       <div className="form-group">
//         <input
//           type="password"
//           className="password"
//           value={loginData.password}
//           placeholder="Enter your password"
//           onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//         />
//       </div>

//       <button type="submit" className="btn-login">
//         Login
//       </button>
//       <p>
//         Don't have an account?{" "}
//         <span onClick={() => setIsLogin(false)} style={{ cursor: "pointer" }}>
//           Sign Up
//         </span>
//       </p>

//       {/* Display login status */}
//       {loginStatus && (
//         <p className={`login-status ${loginStatus === "Login successful" ? "success" : "error"}`}>
//           {loginStatus}
//         </p>
//       )}
//     </form>
//   );
// };

// export default LoginForm;










import React, { useState } from 'react';
import axios from 'axios';

let API_URL = "http://localhost:3000/Users";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.get(API_URL);
      const users = response.data;

      
      const user = users.find(
        (user) => user.email === loginData.email && user.password === loginData.password
      );

      if (user) {
        
        const updatedUser = {
          ...user,
          lastLogin: new Date().toISOString().name// Store the last login time
        };

        
        await axios.put(`${API_URL}/${user.id}`, updatedUser);

        setSuccess('Login successful!');
        setError('');
      } else {
        setError('Invalid email or password');
        setSuccess('');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('An error occurred. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <button type="submit" className="signin-btn">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;