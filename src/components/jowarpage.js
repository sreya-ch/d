import React from 'react';
import Nav from '../components/Navbar';

const jowarpage = () => {
  return (
    <div>
      <Nav />
      <div className="offer">
        <div className="scrolling-text">
          <span>The more you get the more you save</span>
        </div>
      </div>
      
      <h2 className="text-center mb-4">Our Products</h2>
      <h3>Jowar</h3>
      <div className="row">
        {/* Product 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/Maldandi jowar.png" className="card-img-top" alt="Malnandi Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Malnandi Jowar</h5>
              <p className="card-text">RS110 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/Mangalweda Jowar.jpg" className="card-img-top" alt="Mangalweda Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Mangalweda Jowar</h5>
              <p className="card-text">RS90 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/yellow jowar.jpeg" className="card-img-top" alt="Yellow Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Yellow Jowar</h5>
              <p className="card-text">RS110 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
        {/* Product 1 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/jowar-white.jpg" className="card-img-top" alt="White Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">White Jowar</h5>
              <p className="card-text">RS90 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
        {/* Product 2 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/sweet jowar.jpeg" className="card-img-top" alt="Sweet Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Sweet Jowar</h5>
              <p className="card-text">RS130 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
        {/* Product 3 */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="../assets/jowar.jpg" className="card-img-top" alt="Red Jowar" style={{ maxHeight: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">Red Jowar</h5>
              <p className="card-text">RS110 per 1kg</p>
              <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default jowarpage;
