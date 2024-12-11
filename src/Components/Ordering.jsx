import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Initial orders state
const initialOrders = [];

const MainBody = () => {
  const [isOrderFormVisible, setIsOrderFormVisible] = useState(false);
  const [orders, setOrders] = useState(initialOrders);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [editingOrderId, setEditingOrderId] = useState(null);
  const [menuItems, setMenuItems] = useState([]); // State to store fetched menu items

  // Modify these URLs as per your backend setup
  const apiUrl = "http://localhost:4000/orders"; // Replace with your backend URL for orders
  const menuApiUrl = "http://localhost:4000/menuItems"; // Replace with your backend URL for menu items

  // Fetch orders and menu items from the API when the component loads
  useEffect(() => {
    // Fetch orders from the backend
    axios.get(apiUrl)
      .then(response => {
        setOrders(response.data); // Assuming response contains an array of orders
      })
      .catch(error => {
        console.error("There was an error fetching orders:", error);
      });

    // Fetch menu items from the backend
    axios.get(menuApiUrl)
      .then(response => {
        setMenuItems(response.data.menuItems); // Assuming the response contains an object with menuItems array
      })
      .catch(error => {
        console.error("There was an error fetching menu items:", error);
      });
  }, []);

  // Create or Update Order
  const handleAddOrder = () => {
    if (foodName && quantity) {
      const orderData = { foodName, quantity: parseInt(quantity) };

      if (editingOrderId) {
        // Update Order
        axios.put(`${apiUrl}/${editingOrderId}`, orderData)
          .then(response => {
            // Update orders state with updated order
            setOrders(orders.map(order => order.id === editingOrderId ? response.data : order));
            setEditingOrderId(null);
            setFoodName("");
            setQuantity("");
          })
          .catch(error => console.error("Error updating order:", error));
      } else {
        // Create New Order
        axios.post(apiUrl, orderData)
          .then(response => {
            setOrders([...orders, response.data]); // Add new order to state
            setFoodName("");
            setQuantity("");
          })
          .catch(error => console.error("Error adding new order:", error));
      }
    }
  };

  // Delete Order
  const handleDeleteOrder = id => {
    axios.delete(`${apiUrl}/${id}`)
      .then(() => {
        // Remove deleted order from state
        setOrders(orders.filter(order => order.id !== id));
      })
      .catch(error => console.error("Error deleting order:", error));
  };

  // Edit Order
  const handleEditOrder = order => {
    setFoodName(order.foodName);
    setQuantity(order.quantity);
    setEditingOrderId(order.id); // Set the ID of the order to edit
  };

  const handleStartOrderClick = () => { // -----------------------start ordering button
    setIsOrderFormVisible(true); // Show the order form
  };

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
          {/* Render menu items if available */}
          {menuItems && menuItems.length > 0 ? (
            menuItems.map(item => (
              <div className="menu-card" key={item.id}>
                <img src={item.imageUrl || "https://via.placeholder.com/150"} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>Loading menu items...</p>
          )}
        </div>
      </section>

      <section className="cta-section">
        <h2>Order Now!</h2>
        <p>
          Experience the convenience of ordering your favorite meals with just a few clicks.
        </p>
        <button className="btn-secondary" onClick={handleStartOrderClick}>
          Start Ordering
        </button>
      </section>

      {/* Order Form Section */}
      {isOrderFormVisible && (
        <div className="App">
          <header className="App-header">
            <h1>Food Canteen Ordering System</h1>

            {/* Order Input Form */}
            {/* <input
              type="text"
              placeholder="Food Name"
              value={foodName}
              onChange={e => setFoodName(e.target.value)}
            /> */}

<select
  value={foodName}
  onChange={e => setFoodName(e.target.value)}
>
  <option value="">Select Food</option>
  <option value="Breakfast">Breakfast</option>
  <option value="Lunch">Lunch</option>
  <option value="Snacks">Snacks</option>
  <option value="Dinner">Dinner</option>
</select>

            <input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <button onClick={handleAddOrder}>
              {editingOrderId ? "Update" : "Add Order"}
            </button>

            {/* Display Orders */}
            <div>
              <h2>Orders</h2>
              {orders.length > 0 ? (
                orders.map(order => (
                  <div key={order.id}>
                    <span>{order.foodName} - Qty: {order.quantity} </span>
                    <button onClick={() => handleEditOrder(order)}>Edit</button>
                    <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                  </div>
                ))
              ) : (
                <p>No orders available.</p>
              )}
            </div>
          </header>
        </div>
      )}
    </main>
  );
};

export default MainBody;



