import React, { useState, useEffect } from "react";
import axios from "axios";

const Log = () => {
  const API_URL = "http://localhost:3000/Users";
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

   

    try {
      const response = await axios.post(API_URL, newUsers);
      setUsers([...users, response.data]);
      setNewUsers({ name: "", email: "", password: "" });
      setValidationErrors({});
      console.log("User added", response.data);
    } catch (error) {
      console.error("Error in adding user", error);
    }
  };

  return (
    <div className="login-page-container" id="loginPageContainer">
      <div className="login-container">
        <h2 className="head">Sign Up</h2>

        <form className="login-form" onSubmit={addUser}>
          <div className="form-group">
            <input
              type="text"
              className="name"
              value={newUsers.name}
              placeholder="Name"
              onChange={(e) =>
                setNewUsers({ ...newUsers, name: e.target.value })
              }
            />
            {validationErrors.name && (
              <p className="error-message">{validationErrors.name}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              className="name"
              value={newUsers.email}
              placeholder="Enter your Email"
              onChange={(e) =>
                setNewUsers({ ...newUsers, email: e.target.value })
              }
            />
            {validationErrors.email && (
              <p className="error-message">{validationErrors.email}</p>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              className="password"
              value={newUsers.password}
              placeholder="Enter your password"
              onChange={(e) =>
                setNewUsers({ ...newUsers, password: e.target.value })
              }
            />
            {validationErrors.password && (
              <p className="error-message">{validationErrors.password}</p>
            )}
          </div>

          <button type="submit" className="btn-login">
            Sign-up
          </button>
          <p>Already have an account? Login</p>
        </form>
      </div>
    </div>
  );
};

export default Log;