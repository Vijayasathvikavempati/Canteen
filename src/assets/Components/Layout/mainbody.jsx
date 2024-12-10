// import React from 'react';


//     const MainBody = () => {
//         return (
//             <main className="main-body">


         
//             <section className="cta-section">
//                 <h2>Order Now!</h2>
//                 <p>
//                     Experience the convenience of ordering your favorite meals with just a few clicks.
//                 </p>
//                 <button className="btn-secondary">Start Ordering</button>
//             </section>
//         </main>
//     );
// };

// export default MainBody;




// import React, { useState } from 'react';

// const OrderSection = () => {
//   // State to manage the visibility of the form
//   const [isFormVisible, setIsFormVisible] = useState(false);
  
//   // State to manage the form data
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     meal: '',
//     quantity: 1,
//     notes: '',
//   });

//   // Handle visibility of the order form
//   const handleOrderButtonClick = () => {
//     setIsFormVisible(true);
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the form data to the console for now (you can replace this with API logic)
//     console.log('Form submitted:', formData);
    
//     // Optionally, you can reset the form or show a confirmation message
//     setFormData({
//       name: '',
//       address: '',
//       meal: '',
//       quantity: 1,
//       notes: '',
//     });

//     // Hide the form again or show a confirmation
//     setIsFormVisible(false);
//     alert('Order Submitted!');
//   };

//   return (
//     <div>
//       {/* CTA Section */}
//       {!isFormVisible && (
//         <section className="cta-section">
//           <h2>Order Now!</h2>
//           <p>Experience the convenience of ordering your favorite meals with just a few clicks.</p>
//           <button className="btn-secondary" onClick={handleOrderButtonClick}>Start Ordering</button>
//         </section>
//       )}

//       {/* Order Form Section */}
//       {isFormVisible && (
//         <section className="order-form-section">
//           <h2>Place Your Order</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="address">Delivery Address</label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="meal">Choose Your Meal</label>
//               <select
//                 id="meal"
//                 name="meal"
//                 value={formData.meal}
//                 onChange={handleInputChange}
//                 required
//               >
//                 <option value="">Select a Meal</option>
//                 <option value="breakfast">breakfast</option>
//                 <option value="lunch">lunch</option>
//                 <option value="dinner">dinner</option>
//               </select>
//             </div>

//             <div className="form-group">
//               <label htmlFor="quantity">Quantity</label>
//               <input
//                 type="number"
//                 id="quantity"
//                 name="quantity"
//                 min="1"
//                 value={formData.quantity}
//                 onChange={handleInputChange}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="notes">Special Instructions</label>
//               <textarea
//                 id="notes"
//                 name="notes"
//                 value={formData.notes}
//                 onChange={handleInputChange}
//               ></textarea>
//             </div>

//             <button type="submit" className="btn-primary">Submit Order</button>
//           </form>
//         </section>
//       )}
//     </div>
//   );
// };

// export default OrderSection;
