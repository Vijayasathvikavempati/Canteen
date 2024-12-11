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
import styled from 'styled-components';

let API_URL = "http://localhost:3000/Users";

// Styled Components
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.2rem;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SuccessMessage = styled.div`
  color: #2ecc71;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

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
          lastLogin: new Date().toISOString() // Store the last login time
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
    <SignInContainer>
      <Title>LogIn</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    </SignInContainer>
  );
};

export default SignIn;
