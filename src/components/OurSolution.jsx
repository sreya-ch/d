// src/components/OurSolution.js
import React from 'react';
import '../../src/App.css'; // Import the CSS file

const OurSolution = () => {
  return (
    <div>
      <div className="heading1">
        <h1>Our Solution</h1>
      </div>
      <div className="row">
        <div className="col-7">
          <p className="solution-text">
            QuickGrain presents an innovative solution designed to revolutionize the procurement and delivery of essential grains and groceries. Our platform integrates a user-friendly website where customers can effortlessly place orders for items such as rice, wheat, and dal. By entering their name, location, item details, and quantity, and selecting a preferred local shop, customers initiate a streamlined ordering process. Once an order is placed, local retail shop owners receive comprehensive order details through our efficient notification system, enabling them to manage and fulfill orders with precision. Retailers benefit from a dedicated dashboard for tracking orders, managing inventory, and coordinating deliveries. They can update order statuses and communicate directly with customers to ensure timely and accurate deliveries. QuickGrain also includes secure payment integration, allowing customers to complete transactions seamlessly online. Additionally, our platform supports ongoing customer engagement through feedback mechanisms and robust support channels. By enhancing the convenience of grocery shopping and fostering strong connections between customers and local shops, QuickGrain not only simplifies the buying process but also strengthens community ties and supports local economies.
          </p>
        </div>
        <div className="col-5">
          <img
            src="assets/solution.jpg" // Update path as needed
            alt="Solution"
            className="solution-img"
            id="img2"
          />
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
