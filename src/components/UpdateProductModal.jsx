import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProductModal = ({ product, onClose, onSuccess }) => {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setFormData({
        product_id: product.product_id,
        product_name: product.product_name,
        category: product.category,
        brand: product.brand,
        quantity: product.quantity,
        unit_price: product.unit_price,
        manufacturing_date: product.manufacturing_date,
        expiry_date: product.expiry_date,
        supplier_name: product.supplier_name,
        product_image_url: product.product_image_url,
        stock_status: product.stock_status,
        product_description: product.product_description,
      });
    }
  }, [product]);

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
      !formData.product_name.trim() ||
      !formData.category.trim() ||
      !formData.brand.trim() ||
      !formData.quantity.trim() ||
      !formData.unit_price.trim()
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/update_product", formData);
      alert("Product updated successfully!");
      onSuccess();
      onClose();
    } catch (error) {
      console.log(error);
      alert("Failed to update product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!product || !formData) return null;

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Product</h5>
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
                  <label className="form-label">Product ID (Read-only)</label>
                  <input
                    type="text"
                    className="form-control"
                    value={formData.product_id}
                    disabled
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Product Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_name"
                    value={formData.product_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Category *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Brand *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Quantity *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Unit Price *</label>
                  <input
                    type="text"
                    className="form-control"
                    name="unit_price"
                    value={formData.unit_price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Manufacturing Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="manufacturing_date"
                    value={formData.manufacturing_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    className="form-control"
                    name="expiry_date"
                    value={formData.expiry_date}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Supplier Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="supplier_name"
                    value={formData.supplier_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Product Image URL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_image_url"
                    value={formData.product_image_url}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Stock Status</label>
                  <input
                    type="text"
                    className="form-control"
                    name="stock_status"
                    value={formData.stock_status}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Product Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="product_description"
                    value={formData.product_description}
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
                {loading ? "Updating..." : "Update Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProductModal;
