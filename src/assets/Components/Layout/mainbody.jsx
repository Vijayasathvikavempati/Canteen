
import React from 'react';

function Main() {
  return (
    <main>
      <div>
        <img className="image" src="https://static.vecteezy.com/system/resources/previews/000/166/296/original/canteen-illustration-free-vector.jpg" />
      </div>

      <section className="features">
        <h2>Why Choose Smart Canteen?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Online Pre-ordering</h3>
            <p>Order your meals ahead of time and enjoy hassle-free dining.</p>
          </div>
          <div className="feature-card">
            <h3>Predictive Analytics</h3>
            <p>Using AI to predict food demand and reduce food waste.</p>
          </div>
          <div className="feature-card">
            <h3>Customization</h3>
            <p>Customize your meals based on dietary preferences and nutritional needs.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
