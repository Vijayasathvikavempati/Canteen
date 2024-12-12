import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"; // Import styled-components

const API_URL = "http://localhost:3000/Users";

const Log = () => {
  const [users, setUsers] = useState([]);
  const [newUsers, setNewUsers] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (error) {
      console.error("Error in fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Fetch users on component mount
  }, []);

  // Add a new user
  const addUser = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!newUsers.name) errors.name = "Name is required.";
    if (!newUsers.email) errors.email = "Email is required.";
    else if (!/\S+@\S+/.test(newUsers.email)) errors.email = "Enter a valid email.";
    if (!newUsers.password) errors.password = "Password is required.";
    else if (newUsers.password.length < 3) errors.password = "Password must be at least 3 characters long.";

    setValidationErrors(errors);

    // If there are validation errors, don't submit the form
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await axios.post(API_URL, newUsers);
      setUsers([...users, response.data]);
      setNewUsers({ name: "", email: "", password: "" });
      setValidationErrors({});
      setSuccessMessage("User successfully signed up!"); // Set success message
      console.log("User added", response.data);
    } catch (error) {
      console.error("Error in adding user", error);
      setSuccessMessage(""); // Clear success message in case of an error
    }
  };

  return (
    <LoginPageContainer>
      <LoginContainer>
        <Heading>Sign Up</Heading>

        <form onSubmit={addUser}>
          <FormGroup>
            <Input
              type="text"
              value={newUsers.name}
              placeholder="Name"
              onChange={(e) =>
                setNewUsers({ ...newUsers, name: e.target.value })
              }
            />
            {validationErrors.name && (
              <ErrorMessage>{validationErrors.name}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Input
              type="email"
              value={newUsers.email}
              placeholder="Enter your Email"
              onChange={(e) =>
                setNewUsers({ ...newUsers, email: e.target.value })
              }
            />
            {validationErrors.email && (
              <ErrorMessage>{validationErrors.email}</ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Input
              type="password"
              value={newUsers.password}
              placeholder="Enter your password"
              onChange={(e) =>
                setNewUsers({ ...newUsers, password: e.target.value })
              }
            />
            {validationErrors.password && (
              <ErrorMessage>{validationErrors.password}</ErrorMessage>
            )}
          </FormGroup>

          <SubmitButton type="submit">Sign-up</SubmitButton>

          {/* Display success message if available */}
          {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}

        </form>
      </LoginContainer>
    </LoginPageContainer>
  );
};

// Styled components
const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #e3c7a2;
  background-image: url('https://www.kerry.com/content/dam/kerry/en/images/insights/kerrydigest/2023/halal-GettyImages-1175505781.jpg');  // Replace with your image path
  background-size: cover;  // Ensures the image covers the full container
  background-position: center;  // Centers the image
`;


const LoginContainer = styled.div`
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 5px;
  box-sizing: border-box;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin: 0;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #442902;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e3c7a2;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
`;

export default Log;
