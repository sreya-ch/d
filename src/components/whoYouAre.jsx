
import React from 'react';
import '../../src/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const WhoYouAre = () => {
  return (
    <div>
      <div className="heading1">
        <h1>Who we are?</h1>
      </div>
      <div className="card">
        <div className="row">
          <div className="col-md-6 matter">
            <h2>Welcome to QuickGrain</h2>
            <h3>Effortless Grain Shopping</h3>
            <p>
              QuickGrain is a groundbreaking platform designed to simplify the process of purchasing and receiving essential grains. With our intuitive website, you can easily order staples like rice, wheat, and jowar. Simply provide your name, location, item details, quantity, and select a local shop.
            </p>
            <p>
              Retail shop owners then receive your order details and ensure swift delivery to your doorstep through their staff. Enjoy the convenience of direct local service without the need for a dedicated app.
            </p>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row">
                <div className="col">
                  <ul>
                    <li><i className="fas fa-shopping-cart icon"></i> <strong>Seamless Ordering:</strong> Effortlessly place orders for essential grains.</li>
                    <li><i className="fas fa-store icon"></i> <strong>Local Shop Network:</strong> Choose from nearby shops for quicker delivery.</li>
                    <li><i className="fas fa-truck icon"></i> <strong>Direct Fulfillment:</strong> Retailers handle delivery to ensure fresh and timely service.</li>
                    {/* <li><i className="fas fa-mobile-alt icon"></i> <strong>No App Required:</strong> Access our services directly through our easy-to-navigate website.</li>--!> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoYouAre;


