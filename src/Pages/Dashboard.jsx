import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const HamburgerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 25px;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: #333;
  border-radius: 2px;
`;

const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 100%;
  background-color: #333;
  color: white;
  display: ${(props) => (props.show ? 'block' : 'none')};
  padding: 20px;
  transition: 0.3s;
`;

const SidebarItem = styled.div`
  margin: 15px 0;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

const Header = styled.h1`
  color: #333;
`;

const Content = styled.div`
  margin-top: 30px;
`;

const MealCategory = styled.div`
  background-color: #f8f8f8;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ProfileLogout = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function FoodDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [foodCategories] = useState(['Breakfast', 'Lunch', 'Dinner', 'Snacks']);
  const [dailyMeals, setDailyMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });
  const [calories, setCalories] = useState(0);

  const addFoodItem = (mealType, foodItem, calories) => {
    const updatedMeals = { ...dailyMeals };
    updatedMeals[mealType].push({ foodItem, calories });
    setDailyMeals(updatedMeals);
    setCalories(calories + calories);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = () => {
    console.log('Logging out...');
    // Implement logout logic here, e.g., clearing authentication token
  };

  return (
    <Container>
      {/* Hamburger Icon */}
      <HamburgerIcon onClick={toggleSidebar}>
        <Bar />
        <Bar />
        <Bar />
      </HamburgerIcon>

      {/* Sidebar for Profile and Logout */}
      <Sidebar show={showSidebar}>
        <SidebarItem>Profile</SidebarItem>
        <SidebarItem onClick={logout}>Logout</SidebarItem>
      </Sidebar>

      {/* Main Content */}
      <Header>Food Dashboard</Header>

      <Content>
        <div className="meal-section">
          <h2>Meal Categories</h2>
          <ul>
            {foodCategories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        <div className="daily-meals">
          <h2>Today's Meals</h2>
          {foodCategories.map((category, index) => (
            <MealCategory key={index}>
              <h3>{category}</h3>
              <ul>
                {dailyMeals[category.toLowerCase()].map((meal, idx) => (
                  <li key={idx}>
                    {meal.foodItem} - {meal.calories} Calories
                  </li>
                ))}
              </ul>
              <Button onClick={() => addFoodItem(category.toLowerCase(), 'Sample Food', 250)}>
                Add Food Item
              </Button>
            </MealCategory>
          ))}
        </div>

        <div className="calories-section">
          <h2>Total Calories: {calories}</h2>
        </div>
      </Content>

      <ProfileLogout>
        <div>Profile Section</div>
        <div>Total Calories: {calories}</div>
      </ProfileLogout>
    </Container>
  );
}

export default FoodDashboard;