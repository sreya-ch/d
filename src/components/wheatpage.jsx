import React from 'react';
import Nav from '../components/Navbar';
// import Counter from '../components/Counter';

const Wheatpage = () => {
  return (
    <div>
      <Nav />
      <div className="offer">
        <div className="scrolling-text">
          <span>The more you get the more you save</span>
        </div>
      </div>
      <main className="container my-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <h3>Wheat</h3>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/red-winter-wheat.jpeg" className="card-img-top" alt="Hard Red Winter Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Hard Red Winter Wheat</h5>
                <p className="card-text">RS60 per 1kg</p>
                {/* <Counter /> */}
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/hard-red-spring-wheat.png" className="card-img-top" alt="Hard Red Spring Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Hard Red Spring Wheat</h5>
                <p className="card-text">RS70 per 1kg</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/durum.jpeg" className="card-img-top" alt="Durum Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Durum Wheat</h5>
                <p className="card-text">RS80 per 1kg</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/soft-white-wheat-grain.jpg" className="card-img-top" alt="Soft White Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Soft White Wheat</h5>
                <p className="card-text">RS80 per 1kg</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/hard-white-wheat.jpg" className="card-img-top" alt="Hard White Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Hard White Wheat</h5>
                <p className="card-text">RS70 per 1kg</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/Organic-Spelt-Bulk__53248.jpg" className="card-img-top" alt="Organic Spelt Wheat" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Organic Spelt Wheat</h5>
                <p className="card-text">RS50 per 1kg</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wheatpage;
