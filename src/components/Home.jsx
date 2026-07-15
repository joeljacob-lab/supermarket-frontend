import React from "react";

const Home = () => {
  return (
    <div className="container mt-4">

      {/* Top Header */}
      <div className="d-flex align-items-center justify-content-center mb-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="SuperMart Logo"
          width="45"
          height="45"
          className="me-2"
        />
        <h3 className="mb-0 fw-bold">SuperMart</h3>
      </div>

      {/* Welcome Section */}
      <div className="shadow rounded bg-white p-5">
        <h1 className="text-center">Welcome to SuperMart</h1>
        <p className="text-center text-muted">
          Your one-stop destination for groceries and daily essentials.
        </p>
      </div>

      {/* Features */}
      <div className="row mt-5 text-center">

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5>🛒 Quality Products</h5>
              <p className="text-muted mb-0">
                Fresh and trusted products every day.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5>💳 Easy Shopping</h5>
              <p className="text-muted mb-0">
                Simple and convenient shopping experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5>🚚 Fast Delivery</h5>
              <p className="text-muted mb-0">
                Get your essentials delivered on time.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Home;