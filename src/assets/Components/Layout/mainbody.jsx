import React from 'react';


    const MainBody = () => {
        return (
            <main className="main-body">

                <section className="welcome-section">
                    <h1>Welcome to the Canteen Management System</h1>
                    <p>
                        Your go-to platform for a seamless and efficient canteen experience. Explore our menu, place orders, and enjoy fast service.
                    </p>
                    <button className="btn-primary">Explore Menu</button>
                </section>

            <section className="menu-highlights">
                <h2>Menu Highlights</h2>
                <div className="menu-cards">
                    <div className="menu-card">
                        <img src="https://media.istockphoto.com/id/1752620387/photo/healthy-breakfast-of-scrambled-eggs-cheese-ham-coffee-croissants-and-fruit-juice.webp?a=1&b=1&s=612x612&w=0&k=20&c=wc8TYmFkvSC3s5oOtAy4kSqKNUf6iqKX-UTs45Nslq0=" alt="Dish 1"
                                style={{ width: '150px', height: '150px' }}  />
                        <h3>Delicious Breakfast</h3>
                        <p>Fuel your morning with wholesome, freshly-prepared breakfasts crafted to energize your day.</p>
                    </div>

                    <div className="menu-card">
                        <img src="https://media.istockphoto.com/id/657334362/photo/creative-business-team-working-together-on-desktop-pc.webp?a=1&b=1&s=612x612&w=0&k=20&c=nZJnDu9XBjIumsuQhmsdAb9aAFUG0hL9oyqhXK5Mr-A=" alt="Dish 2" 
                         style={{ width: '150px', height: '150px' }} />
                        <h3>Lunch</h3>
                        <p>Savor Every Bite: Your Perfect Lunch Awaits!</p>
                        </div>


                        <div className="menu-card">
                        <img src="https://plus.unsplash.com/premium_photo-1679591002405-13fec066bd53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U25hY2tzfGVufDB8fDB8fHww" alt="Dish 5"
                         style={{ width: '150px', height: '150px' }}  />
                        <h3>Snacks</h3>
                        <p>Bite Into Happiness – Fresh Snacks Ready for You!</p>
                    </div>
            
            {/* </section> */}

            <div className="menu-card">
                        <img src="https://media.istockphoto.com/id/1145232019/photo/colleagues-on-lunch-break-in-office-eating-pizza.webp?a=1&b=1&s=612x612&w=0&k=20&c=PE3DWHLVMBpcDqmjKXVSGb_O0yMygOMnDyimmmT1nVM=" alt="Dish 3"
                         style={{ width: '150px', height: '150px' }}  />
                        <h3>Dinner</h3>
                        <p>Savor the Flavors of the Night - Your Perfect Dinner Awaits!</p>
                    </div>
                    </div>

                    </section>











               

                    {/* <div className="menu-card">
                        <img src="https://images.unsplash.com/photo-1724875298596-df744cbc842e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFJlZnJlc2hpbmclMjBEcmlua3N8ZW58MHx8MHx8fDA%3D" alt="Dish 4" 
                         style={{ width: '150px', height: '150px' }} />
                        <h3>Refreshing Drinks</h3>
                        <p>Sip, Savor, Refresh – Drinks That Delight Every Moment!"</p>
                    </div> */}
                    {/* <div className="menu-card">
                        <img src="https://plus.unsplash.com/premium_photo-1679591002405-13fec066bd53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U25hY2tzfGVufDB8fDB8fHww" alt="Dish 5"
                         style={{ width: '150px', height: '150px' }}  />
                        <h3>Snacks</h3>
                        <p>Bite Into Happiness – Fresh Snacks Ready for You!</p>
                    </div>
                </div>
            </section> */}

         
            <section className="cta-section">
                <h2>Order Now!</h2>
                <p>
                    Experience the convenience of ordering your favorite meals with just a few clicks.
                </p>
                <button className="btn-secondary">Start Ordering</button>
            </section>
        </main>
    );
};

export default MainBody;

// import React, { useState } from 'react';


// const initialOrders = [

// ];

// function App() {
//   const [orders, setOrders] = useState(initialOrders);
//   const [foodName, setFoodName] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [editingOrderId, setEditingOrderId] = useState(null);

//   const handleAddOrder = () => {
//     if (foodName && quantity) {
//       if (editingOrderId) {
   
//         const updatedOrders = orders.map(order =>
//           order.id === editingOrderId
//             ? { ...order, foodName, quantity: parseInt(quantity) }
//             : order
//         );
//         setOrders(updatedOrders);
//         setEditingOrderId(null);
//       } else {
//         const newOrder = {
//           id: Date.now(),
//           foodName,
//           quantity: parseInt(quantity),
        
//         };
//         setOrders([...orders, newOrder]);
//       }
//       setFoodName("");
//       setQuantity("");
//     }
//   };


//   const handleDeleteOrder = id => {
//     setOrders(orders.filter(order => order.id !== id));
//   };


//   const handleEditOrder = order => {
//     setFoodName(order.foodName);
//     setQuantity(order.quantity);
//     setEditingOrderId(order.id);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Food Canteen Ordering System</h1>

//         {}
//         <input
//           type="text"
//           placeholder="Food Name"
//           value={foodName}
//           onChange={e => setFoodName(e.target.value)}
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           value={quantity}
//           onChange={e => setQuantity(e.target.value)}
//         />
//         <button onClick={handleAddOrder}>
//           {editingOrderId ? "Update" : "Add Order"}
//         </button>

//         {}
//         <div>
//           <h2>Orders</h2>
//           {orders.length > 0 ? (
//             orders.map(order => (
//               <div key={order.id}>
//                 <span>{order.foodName} - Qty: {order.quantity} </span>
//                 <button onClick={() => handleEditOrder(order)}>Edit</button>
//                 <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
//               </div>
//             ))
//           ) : (
//             <p>No orders available.</p>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

