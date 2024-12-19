// import React, { useState } from 'react';
// //import { useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   // Initial user data
//   const initialUser = {
//     name: 'Sathvika',
//     role: 'Student',
//     email: 'sathvikavijju@gmail.com',
//     phone: '9826345722',
//     profilePicture: 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7', // Sample profile picture
//     canteenName: 'Canteen',
//   };

//   useLocation()

//   // Set up state for user data
//   const [user, setUser] = useState(initialUser);
//   const [isEditMode, setIsEditMode] = useState(false); // State to toggle between view and edit mode
//   const [formData, setFormData] = useState(user);
//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle input change for updating user data
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle the "Save" operation (update user profile)
//   const handleSave = () => {
//     setUser(formData);
//     setIsEditMode(false); // Exit edit mode
//   };

//   // Handle the "Delete" operation (clear profile data)
//   const handleDelete = () => {
//     setUser(null); // This will clear all profile data
//     setIsEditMode(false);
//   };

//   // Toggle edit mode on and off
//   const toggleEditMode = () => {
//     setIsEditMode(!isEditMode);
//     setFormData(user); // Reset the form data to the current user state when toggling
//   };


//   // Render the profile or a message if user is null (deleted)
//   if (!user) {
//     Navigate('/Login')
//     return (
//       <ProfileContainer>
//         <ProfileHeader>
//           <h1>Profile Deleted</h1>
//         </ProfileHeader>
//         <p>The profile data has been deleted.</p>
//       </ProfileContainer>
//     );
//   }

//   return (
//     <ProfileContainer>
//       <ProfileHeader>
//         <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
//       </ProfileHeader>
//       <ProfileDetails>
//         <ProfilePicture>
//           <img src={user.profilePicture} alt="Profile" />
//         </ProfilePicture>
//         <ProfileInfo>
//           {isEditMode ? (
//             <ProfileEdit>
//               <label>
//                 Name:
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Role:
//                 <input
//                   type="text"
//                   name="role"
//                   value={formData.role}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Email:
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Phone:
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <label>
//                 Canteen Name:
//                 <input
//                   type="text"
//                   name="canteenName"
//                   value={formData.canteenName}
//                   onChange={handleInputChange}
//                 />
//               </label>
//               <SaveButton onClick={handleSave}>Save</SaveButton>
//             </ProfileEdit>
//           ) : (
//             <>
//               <h2>{user.name}</h2>
//               <p><strong>Role:</strong> {user.role}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone}</p>
//               <p><strong>Canteen Name:</strong> {user.canteenName}</p>
//               <ProfileActions>
//                 <ActionButton onClick={toggleEditMode}>Edit</ActionButton>
//                 <ActionButton onClick={handleDelete}>Delete</ActionButton>
//               </ProfileActions>
//             </>
//           )}
//         </ProfileInfo>
//       </ProfileDetails>
//     </ProfileContainer>
//   );
// };

// // Styled Components
// const ProfileContainer = styled.div`
//   width: 100%;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background-color:rgb(255, 255, 255); /* Background color */
// `;

// const ProfileHeader = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   h1 {
//     color: #442902; /* Header color */
//   }
// `;

// const ProfileDetails = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 20px;
// `;

// const ProfilePicture = styled.div`
//   img {
//     border-radius: 50%;
//     width: 150px;
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// const ProfileInfo = styled.div`
//   max-width: 400px;
//   h2 {
//     margin: 0;
//     font-size: 24px;
//     font-weight: bold;
//     color: #442902; /* Text color */
//   }
//   p {
//     margin: 8px 0;
//     font-size: 16px;
//   }
//   strong {
//     font-weight: bold;
//   }
// `;

// const ProfileActions = styled.div`
//   margin-top: 20px;
// `;

// const ActionButton = styled.button`
//   margin: 5px;
//   padding: 8px 15px;
//   background-color: #442902; /* Action button color */
//   color: white;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #3b240f;
//   }
// `;

// const ProfileEdit = styled.div`
//   label {
//     display: block;
//     margin: 10px 0 5px;
//   }
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

// const SaveButton = styled.button`
//   padding: 10px 15px;
//   background-color: #442902; /* Save button color */
//   color: white;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     background-color: #3b240f;
//   }
// `;

// export default Profile;



//------Add LogOut Profile-----------//

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   // Initial user data
//   const initialUser = {
//     name: 'Sathvika',
//     role: 'Student',
//     email: 'sathvikavijju@gmail.com',
//     phone: '9826345722',
//     profilePicture: 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
//     canteenName: 'Canteen',
//   };

//   const [user, setUser] = useState(initialUser);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Handle input changes for updating user data
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     setUser(formData);
//     setIsEditMode(false);
//   };

//   const handleDelete = () => {
//     setUser(null);
//     setIsEditMode(false);
//   };

//   const toggleEditMode = () => {
//     setIsEditMode(!isEditMode);
//     setFormData(user);
//   };

//   // Handle logout functionality
//   const handleLogout = () => {
//     setUser(null);
//     navigate('/Login'); // Redirect to Login page
//   };

//   // Render if user profile data is deleted
//   if (!user) {
//     navigate('/Login');
//     return (
//       <ProfileContainer>
//         <ProfileHeader>
//           <h1>Profile Deleted</h1>
//         </ProfileHeader>
//         <p>The profile data has been deleted.</p>
//       </ProfileContainer>
//     );
//   }

//   return (
//     <ProfileContainer>
//       <ProfileHeader>
//         <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
//       </ProfileHeader>

//       <ProfileDetails>
//         <ProfilePicture>
//           <img src={user.profilePicture} alt="Profile" />
//         </ProfilePicture>

//         <ProfileInfo>
//           {isEditMode ? (
//             <ProfileEdit>
//               <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
//               <label>Role: <input type="text" name="role" value={formData.role} onChange={handleInputChange} /></label>
//               <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
//               <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></label>
//               <label>Canteen Name: <input type="text" name="canteenName" value={formData.canteenName} onChange={handleInputChange} /></label>
//               <SaveButton onClick={handleSave}>Save</SaveButton>
//             </ProfileEdit>
//           ) : (
//             <>
//               <h2>{user.name}</h2>
//               <p><strong>Role:</strong> {user.role}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone}</p>
//               <p><strong>Canteen Name:</strong> {user.canteenName}</p>

//               <ProfileActions>
//                 <ActionButton onClick={toggleEditMode}>Edit</ActionButton>
//                 <ActionButton onClick={handleDelete}>Delete</ActionButton>
//                 <ActionButton onClick={handleLogout}>Logout</ActionButton>
//               </ProfileActions>
//             </>
//           )}
//         </ProfileInfo>
//       </ProfileDetails>
//     </ProfileContainer>
//   );
// };

// // Styled Components
// const ProfileContainer = styled.div`
//   width: 100%;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background-color: rgb(255, 255, 255);
// `;

// const ProfileHeader = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   h1 {
//     color: #442902;
//   }
// `;

// const ProfileDetails = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 20px;
// `;

// const ProfilePicture = styled.div`
//   img {
//     border-radius: 50%;
//     width: 150px;
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// const ProfileInfo = styled.div`
//   max-width: 400px;
//   h2 {
//     font-size: 24px;
//     color: #442902;
//   }
//   p {
//     font-size: 16px;
//   }
// `;

// const ProfileActions = styled.div`
//   margin-top: 20px;
// `;

// const ActionButton = styled.button`
//   margin: 5px;
//   padding: 8px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #3b240f;
//   }
// `;

// const SaveButton = styled.button`
//   padding: 10px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
// `;

// const ProfileEdit = styled.div`
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

// export default Profile;


//--------Delete Profile ti will goto Home Page---------//

// const handleDelete = () => {
//   setUser(null); // Clear user data
//   setIsEditMode(false); // Exit edit mode
//   navigate('/'); // Redirect to Home page
// };

// // Render if user profile data is deleted
// if (!user) {
//   navigate('/'); // Redirect to Home page
//   return null; // Prevent rendering further
// }






// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const initialUser = {
//     name: 'Sathvika',
//     role: 'Student',
//     email: 'sathvikavijju@gmail.com',
//     phone: '9826345722',
//     profilePicture: 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
//     canteenName: 'Canteen',
//   };

//   const [user, setUser] = useState(initialUser);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState(user);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = () => {
//     setUser(formData);
//     setIsEditMode(false);
//   };

//   const handleDelete = () => {
//     setUser(null); // Clear user data
//     setIsEditMode(false); // Exit edit mode
//     navigate('/'); // Redirect to Home page
//   };

//   const toggleEditMode = () => {
//     setIsEditMode(!isEditMode);
//     setFormData(user);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     navigate('/Login'); // Redirect to Login page
//   };

//   if (!user) {
//     navigate('/'); // Redirect to Home page
//     return null; // Prevent rendering further
//   }

//   return (
//     <ProfileContainer>
//       <ProfileHeader>
//         <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
//       </ProfileHeader>

//       <ProfileDetails>
//         <ProfilePicture>
//           <img src={user.profilePicture} alt="Profile" />
//         </ProfilePicture>

//         <ProfileInfo>
//           {isEditMode ? (
//             <ProfileEdit>
//               <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
//               <label>Role: <input type="text" name="role" value={formData.role} onChange={handleInputChange} /></label>
//               <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
//               <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></label>
//               <label>Canteen Name: <input type="text" name="canteenName" value={formData.canteenName} onChange={handleInputChange} /></label>
//               <SaveButton onClick={handleSave}>Save</SaveButton>
//             </ProfileEdit>
//           ) : (
//             <>
//               <h2>{user.name}</h2>
//               <p><strong>Role:</strong> {user.role}</p>
//               <p><strong>Email:</strong> {user.email}</p>
//               <p><strong>Phone:</strong> {user.phone}</p>
//               <p><strong>Canteen Name:</strong> {user.canteenName}</p>

//               <ProfileActions>
//                 <ActionButton onClick={toggleEditMode}>Edit</ActionButton>
//                 <ActionButton onClick={handleDelete}>Delete</ActionButton>
//                 <ActionButton onClick={handleLogout}>Logout</ActionButton>
//               </ProfileActions>
//             </>
//           )}
//         </ProfileInfo>
//       </ProfileDetails>
//     </ProfileContainer>
//   );
// };

// // Styled Components
// const ProfileContainer = styled.div`
//   width: 100%;
//   padding: 20px;
//   font-family: Arial, sans-serif;
//   background-color: rgb(255, 255, 255);
// `;

// const ProfileHeader = styled.div`
//   text-align: center;
//   margin-bottom: 20px;
//   h1 {
//     color: #442902;
//   }
// `;

// const ProfileDetails = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 20px;
// `;

// const ProfilePicture = styled.div`
//   img {
//     border-radius: 50%;
//     width: 150px;
//     height: 150px;
//     object-fit: cover;
//   }
// `;

// const ProfileInfo = styled.div`
//   max-width: 400px;
//   h2 {
//     font-size: 24px;
//     color: #442902;
//   }
//   p {
//     font-size: 16px;
//   }
// `;

// const ProfileActions = styled.div`
//   margin-top: 20px;
// `;

// const ActionButton = styled.button`
//   margin: 5px;
//   padding: 8px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
//   cursor: pointer;

//   &:hover {
//     background-color: #3b240f;
//   }
// `;

// const SaveButton = styled.button`
//   padding: 10px 15px;
//   background-color: #442902;
//   color: white;
//   border: none;
// `;

// const ProfileEdit = styled.div`
//   input {
//     width: 100%;
//     padding: 8px;
//     margin-bottom: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//   }
// `;

// export default Profile;



//--------Delete and logout Profile it will goto Home Page---------//


import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  // Initial user data
  const initialUser = {
    name: 'Sathvika',
    role: 'Student',
    email: 'sathvikavijju@gmail.com',
    phone: '9826345722',
    profilePicture: 'https://th.bing.com/th/id/OIP.uxb1jLLnY2-zok-gTXlZlQHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    canteenName: 'Canteen',
  };

  const [user, setUser] = useState(initialUser);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const location = useLocation();
  const navigate = useNavigate();

  // Handle input changes for updating user data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Save changes to user data
  const handleSave = () => {
    setUser(formData);
    setIsEditMode(false);
  };

  // Delete user profile and navigate to home
  const handleDelete = () => {
    setUser(null); // Clear user data
    navigate('/'); // Redirect to Home page
  };

  // Toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setFormData(user); // Reset form data to current user state
  };

  // Logout the user and navigate to login page
  const handleLogout = () => {
    setUser(null); // Clear user data
    navigate('/Login'); // Redirect to Login page
  };

  // Redirect to appropriate page if user is null
  if (!user) {
    if (location.pathname !== '/Login') {
      navigate('/'); // Redirect to Home page
    }
    return null; // Prevent further rendering
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <h1>{isEditMode ? 'Edit Profile' : 'Profile'}</h1>
      </ProfileHeader>

      <ProfileDetails>
        <ProfilePicture>
          <img src={user.profilePicture} alt="Profile" />
        </ProfilePicture>

        <ProfileInfo>
          {isEditMode ? (
            <ProfileEdit>
              <label>Name: <input type="text" name="name" value={formData.name} onChange={handleInputChange} /></label>
              <label>Role: <input type="text" name="role" value={formData.role} onChange={handleInputChange} /></label>
              <label>Email: <input type="email" name="email" value={formData.email} onChange={handleInputChange} /></label>
              <label>Phone: <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} /></label>
              <label>Canteen Name: <input type="text" name="canteenName" value={formData.canteenName} onChange={handleInputChange} /></label>
              <SaveButton onClick={handleSave}>Save</SaveButton>
            </ProfileEdit>
          ) : (
            <>
              <h2>{user.name}</h2>
              <p><strong>Role:</strong> {user.role}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Canteen Name:</strong> {user.canteenName}</p>

              <ProfileActions>
                <ActionButton onClick={toggleEditMode}>Edit</ActionButton>
                <ActionButton onClick={handleDelete}>Delete</ActionButton>
                <ActionButton onClick={handleLogout}>Logout</ActionButton>
              </ProfileActions>
            </>
          )}
        </ProfileInfo>
      </ProfileDetails>
    </ProfileContainer>
  );
};

// Styled Components
const ProfileContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: rgb(255, 255, 255);
`;

const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h1 {
    color: #442902;
  }
`;

const ProfileDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
`;

const ProfilePicture = styled.div`
  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  max-width: 400px;
  h2 {
    font-size: 24px;
    color: #442902;
  }
  p {
    font-size: 16px;
  }
`;

const ProfileActions = styled.div`
  margin-top: 20px;
`;

const ActionButton = styled.button`
  margin: 5px;
  padding: 8px 15px;
  background-color: #442902;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #3b240f;
  }
`;

const SaveButton = styled.button`
  padding: 10px 15px;
  background-color: #442902;
  color: white;
  border: none;
`;

const ProfileEdit = styled.div`
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export default Profile;

