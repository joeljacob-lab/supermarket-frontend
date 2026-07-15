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
        <h1 
          className="text-center" 
          style={{
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1), 4px 4px 8px rgba(0, 0, 0, 0.05)",
            fontWeight: "700"
          }}
        >
          Welcome to SuperMart
        </h1>
        <p 
          className="text-center text-muted" 
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.08)"
          }}
        >
          Your one-stop destination for groceries and daily essentials.
        </p>
      </div>

      {/* Features Section */}
      <div className="mt-5 pt-4 pb-4" style={{ backgroundColor: "#000000", borderRadius: "8px" }}>
      

        <div className="row px-3">
          <div className="col-md-4 mb-4">
            <div
              className="card border-0 h-100 shadow-sm"
              style={{
                transition: "all 0.3s ease",
                borderLeft: "4px solid #007bff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(0, 123, 255, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body text-center py-4">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  🛒
                </div>
                <h5 className="fw-bold" style={{ color: "#2c3e50" }}>
                  Quality Products
                </h5>
                <p className="text-muted small mb-0">
                  Fresh and trusted products sourced from certified suppliers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card border-0 h-100 shadow-sm"
              style={{
                transition: "all 0.3s ease",
                borderLeft: "4px solid #28a745",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(40, 167, 69, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body text-center py-4">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  💳
                </div>
                <h5 className="fw-bold" style={{ color: "#2c3e50" }}>
                  Easy Shopping
                </h5>
                <p className="text-muted small mb-0">
                  Simple checkout process with multiple secure payment options.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div
              className="card border-0 h-100 shadow-sm"
              style={{
                transition: "all 0.3s ease",
                borderLeft: "4px solid #ffc107",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 16px rgba(255, 193, 7, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body text-center py-4">
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                  🚚
                </div>
                <h5 className="fw-bold" style={{ color: "#2c3e50" }}>
                  Fast Delivery
                </h5>
                <p className="text-muted small mb-0">
                  Quick and reliable delivery to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;