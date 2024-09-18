import React from 'react';

const Products = () => {
  return (
    <div>
      <div className="heading1">
        <h1 style={{ fontSize: '45px' }}>Buy our products online</h1>
      </div>
      
      <section id="products" className="py-5">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <a href="project/product.html">
                  <img
                    src="assets/sona-masoori-rice.jpg"
                    className="card-img-top"
                    alt="Rice"
                    style={{ maxHeight: '200px' }}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Rice</h5>
                  <a
                    href="../quick_grain_mini-main/project/product.html"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <a href="project/wheat.html">
                  <img
                    src="assets/soft-white-wheat-grain.jpg"
                    className="card-img-top"
                    alt="Wheat"
                    style={{ maxHeight: '200px' }}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Wheat</h5>
                  <a
                    href="../quick_grain_mini-main/project/wheat.html"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <a href="project/jowar.html">
                  <img
                    src="assets/jowar-white.jpg"
                    className="card-img-top"
                    alt="Jowar"
                    style={{ maxHeight: '200px' }}
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">Jowar</h5>
                  <a
                    href="../quick_grain_mini-main/project/jowar.html"
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
