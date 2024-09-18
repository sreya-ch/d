import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';
import Nav from '../components/Navbar';

const ricepage = () => {
  return (
  
    <div>
      <Nav />
     <div className="offer">
        <div className="scrolling-text">
          <span>The more you get the more you save</span>
        </div>
      </div>
      
      {/* Main Content */}
      <main className="container my-5">
        <h2 className="text-center mb-4">Our Products</h2>
        <h3>Rice</h3>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/basmati rice.jpg" className="card-img-top" alt="Basmati Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Basmati Rice</h5>
                <p className="card-text">RS120 per 1kg</p>
                
              </div>
            </div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/jasmine-rice.jpg" className="card-img-top" alt="Jasmine Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Jasmine Rice</h5>
                <p className="card-text">RS189 per 1kg</p>
               
              </div>
            </div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/brown-rice-bag.jpg" className="card-img-top" alt="Brown Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Brown Rice</h5>
                <p className="card-text">RS110 per 1kg</p>
                
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          {/* Product 4 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/sona-masoori-rice.jpg" className="card-img-top" alt="Sona Masoori Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Sona Masoori Rice</h5>
                <p className="card-text">RS70 per 1kg</p>
                
              </div>
            </div>
          </div>
          {/* Product 5 */}
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="../assets/kolam_rice.jpg" className="card-img-top" alt="Kolam Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Kolam Rice</h5>
                <p className="card-text">RS90 per 1kg</p>
                
              </div>
            </div>
          </div>
          {/* Product 6 */}
          <div className="col-md-4 mb-4">
            <div className="card">
            <img src="../assets/longgrain.png" className="card-img-top" alt="long Rice" style={{ maxHeight: '200px' }} />
              <div className="card-body">
                <h5 className="card-title">Long Grain Rice</h5>
                <p className="card-text">RS90 per 1kg</p>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ricepage;
