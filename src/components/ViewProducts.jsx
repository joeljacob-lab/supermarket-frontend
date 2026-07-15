import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewProducts = () => {

    const [productData, changeProductData] = useState([]);

    const fetchData = () => {

        axios.post("http://localhost:3000/view_product", {}).then(
            (response) => {
                changeProductData(response.data);
            }
        ).catch((error) => {
            console.log(error);
        });

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
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    productData.map(
                                        (value, index) => {
                                            return (
                                                <tr key={index}>
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
                                                </tr>
                                            );
                                        }
                                    )
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewProducts;