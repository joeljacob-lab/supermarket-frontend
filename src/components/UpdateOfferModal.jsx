import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateOfferModal = ({ offer, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (offer) {
      setFormData({
        offer_id: offer.offer_id,
        offer_name: offer.offer_name,
        offer_type: offer.offer_type,
        product_category: offer.product_category,
        discount_percentage: offer.discount_percentage,
        minimum_purchase_amount: offer.minimum_purchase_amount,
        start_date: offer.start_date,
        end_date: offer.end_date,
        applicable_products: offer.applicable_products,
        coupon_code: offer.coupon_code,
        status: offer.status,
        offer_description: offer.offer_description,
      });
    }
  }, [offer]);

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
      !formData.offer_name.trim() ||
      !formData.offer_type.trim() ||
      !formData.coupon_code.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/update_offer", formData);
      alert("Offer updated successfully!");
      onSuccess();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to update offer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!offer) return null;

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
              <h5 className="modal-title">Update Offer</h5>
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
            <h5 className="modal-title">Update Offer</h5>
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
                  <label className="form-label">Offer ID (Read-only)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.offer_id}
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Offer Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="offer_name"
                    value={formData.offer_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Offer Type *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="offer_type"
                    value={formData.offer_type}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Product Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_category"
                    value={formData.product_category}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Discount %</label>
                  <input
                    type="text"
                    className="form-control"
                    name="discount_percentage"
                    value={formData.discount_percentage}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Minimum Purchase Amount</label>
                  <input
                    type="text"
                    className="form-control"
                    name="minimum_purchase_amount"
                    value={formData.minimum_purchase_amount}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Start Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">End Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Applicable Products</label>
                  <input
                    type="text"
                    className="form-control"
                    name="applicable_products"
                    value={formData.applicable_products}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Coupon Code *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="coupon_code"
                    value={formData.coupon_code}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="offer_description"
                    value={formData.offer_description}
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
                {loading ? "Updating..." : "Update Offer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateOfferModal;
