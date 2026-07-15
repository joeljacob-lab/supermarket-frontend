import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateCustomerModal = ({ customer, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (customer) {
      setFormData({
        customer_id: customer.customer_id,
        customer_name: customer.customer_name,
        gender: customer.gender,
        phone_number: customer.phone_number,
        email: customer.email,
        address: customer.address,
        city: customer.city,
        state: customer.state,
        membership_type: customer.membership_type,
        registration_date: customer.registration_date,
        total_purchase_amount: customer.total_purchase_amount,
        loyalty_points: customer.loyalty_points,
      });
    }
  }, [customer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.customer_name.trim() ||
      !formData.email.trim() ||
      !formData.phone_number.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/update_customer", formData);
      alert("Customer updated successfully!");
      onSuccess();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to update customer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!customer) return null;

  if (!formData) {
    return (
      <div
        className="modal show d-block"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Update Customer</h5>
            </div>
            <div className="modal-body text-center">
              <p>Loading...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Customer</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              disabled={loading}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ maxHeight: "70vh", overflowY: "auto" }}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Customer ID (Read-only)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.customer_id}
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Customer Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customer_name"
                    value={formData.customer_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Gender</label>
                  <input
                    type="text"
                    className="form-control"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Email *</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">State</label>
                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Membership Type</label>
                  <input
                    type="text"
                    className="form-control"
                    name="membership_type"
                    value={formData.membership_type}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Registration Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="registration_date"
                    value={formData.registration_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Total Purchase Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="total_purchase_amount"
                    value={formData.total_purchase_amount}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Loyalty Points</label>
                  <input
                    type="text"
                    className="form-control"
                    name="loyalty_points"
                    value={formData.loyalty_points}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Updating..." : "Update Customer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCustomerModal;
