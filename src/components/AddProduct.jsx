import React, { useState } from "react";
import axios from "axios";


const AddProduct = () => {

  const [input, changeInput] = useState({
    product_id: "",
    product_name: "",
    category: "",
    brand: "",
    quantity: "",
    unit_price: "",
    manufacturing_date: "",
    expiry_date: "",
    supplier_name: "",
    product_image_url: "",
    stock_status: "",
    product_description: ""
  });

  const inputHandler = (event) => {
    changeInput({
      ...input,
      [event.target.name]: event.target.value
    });
  };

  const readValues = () => {
    console.log(input);

    axios
      .post("http://localhost:3000/add_product", input)
      .then((response) => {
        if (response.data.status === "success") {
          alert("Product Added Successfully");
          changeInput({
            product_id: "",
            product_name: "",
            category: "",
            brand: "",
            quantity: "",
            unit_price: "",
            manufacturing_date: "",
            expiry_date: "",
            supplier_name: "",
            product_image_url: "",
            stock_status: "",
            product_description: ""
          });
        } else {
          alert("Failed to Add Product");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col col-12">

            <div className="row">

              <div className="col col-12 col-sm-6">
                <label className="form-label">Product ID</label>
                <input
                  type="text"
                  className="form-control"
                  name="product_id"
                  value={input.product_id}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="product_name"
                  value={input.product_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={input.category}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  value={input.brand}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  name="quantity"
                  value={input.quantity}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Unit Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="unit_price"
                  value={input.unit_price}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Manufacturing Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="manufacturing_date"
                  value={input.manufacturing_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Expiry Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="expiry_date"
                  value={input.expiry_date}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Supplier Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="supplier_name"
                  value={input.supplier_name}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Product Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="product_image_url"
                  value={input.product_image_url}
                  onChange={inputHandler}
                />
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Stock Status</label>

                <select
                  className="form-control"
                  name="stock_status"
                  value={input.stock_status}
                  onChange={inputHandler}
                >
                  <option value="">--Select Status--</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Low Stock">Low Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>

              <div className="col col-12 col-sm-6">
                <label className="form-label">Product Description</label>

                <textarea
                  className="form-control"
                  name="product_description"
                  value={input.product_description}
                  onChange={inputHandler}
                ></textarea>
              </div>

              <div className="col col-12 mt-3">
                <button
                  className="btn btn-primary"
                  onClick={readValues}
                >
                  Add Product
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;