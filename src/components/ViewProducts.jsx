import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateProductModal from "./UpdateProductModal";

const ViewProducts = () => {

    const [productData, changeProductData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchData = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/view_product", {}).then(
            (response) => {
                changeProductData(response.data);
            }
        ).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const searchProducts = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/search_product", { search: searchText }).then(
            (response) => {
                changeProductData(response.data);
            }
        ).catch((error) => {
            console.log(error);
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const deleteProduct = (productId) => {
        if (!window.confirm("Delete this product?")) {
            return;
        }

        axios.post("http://localhost:3000/delete_product", { product_id: productId }).then(
            (response) => {
                alert("Product deleted successfully!");
                fetchData();
            }
        ).catch((error) => {
            console.log(error);
            alert("Failed to delete product. Please try again.");
        });
    };

    const updateProduct = (product) => {
        setSelectedProduct(product);
        setShowUpdateModal(true);
    };

    const handleUpdateSuccess = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div
            className="container-fluid"
            style={{ backgroundColor: "#d6d6d6", minHeight: "100vh" }}
        >
            <div className="row">
                <div className="col col-sm-12">

                    <h2 className="text-center mt-4 mb-4">
                        VIEW PRODUCTS
                    </h2>

                    <div className="mb-3 d-flex gap-2 align-items-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, category or brand"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={searchProducts}>
                            Search
                        </button>
                        <button className="btn btn-secondary" onClick={fetchData}>
                            Reset
                        </button>
                        {isLoading && <span className="text-muted">Loading...</span>}
                    </div>

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Category</th>
                                    <th>Brand</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Manufacturing Date</th>
                                    <th>Expiry Date</th>
                                    <th>Supplier Name</th>
                                    <th>Product Image</th>
                                    <th>Stock Status</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {productData.map((value) => (
                                    <tr key={value.product_id || value._id}>
                                        <td>{value.product_id}</td>
                                        <td>{value.product_name}</td>
                                        <td>{value.category}</td>
                                        <td>{value.brand}</td>
                                        <td>{value.quantity}</td>
                                        <td>₹ {value.unit_price}</td>
                                        <td>{value.manufacturing_date}</td>
                                        <td>{value.expiry_date}</td>
                                        <td>{value.supplier_name}</td>
                                        <td>
                                            <img
                                                src={value.product_image_url}
                                                alt={value.product_name}
                                                width="80"
                                                height="80"
                                                style={{ objectFit: "cover" }}
                                            />
                                        </td>
                                        <td>{value.stock_status}</td>
                                        <td>{value.product_description}</td>
                                        <td>
                                            <button
                                                className="btn btn-sm btn-danger me-2"
                                                onClick={() => deleteProduct(value.product_id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="btn btn-sm btn-warning"
                                                onClick={() => updateProduct(value)}
                                            >
                                                Update
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

            {showUpdateModal && (
                <UpdateProductModal
                    product={selectedProduct}
                    onClose={() => setShowUpdateModal(false)}
                    onSuccess={handleUpdateSuccess}
                />
            )}
        </div>
    );
};

export default ViewProducts;