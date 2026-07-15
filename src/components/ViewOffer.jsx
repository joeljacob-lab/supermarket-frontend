import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewOffer = () => {

    const [data, changeData] = useState([]);

    const fetchData = () => {

        axios.post("http://localhost:3000/view_offer", {})
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
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
                        <b>VIEW OFFERS</b>
                    </h2>

                    <div className="table-responsive">

                        <table className="table table-bordered table-striped table-hover">

                            <thead className="table-dark">
                                <tr>
                                    <th>Offer ID</th>
                                    <th>Offer Name</th>
                                    <th>Offer Type</th>
                                    <th>Product Category</th>
                                    <th>Discount %</th>
                                    <th>Minimum Purchase</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Applicable Products</th>
                                    <th>Coupon Code</th>
                                    <th>Status</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{value.offer_id}</td>
                                                <td>{value.offer_name}</td>
                                                <td>{value.offer_type}</td>
                                                <td>{value.product_category}</td>
                                                <td>{value.discount_percentage}</td>
                                                <td>{value.minimum_purchase_amount}</td>
                                                <td>{value.start_date}</td>
                                                <td>{value.end_date}</td>
                                                <td>{value.applicable_products}</td>
                                                <td>{value.coupon_code}</td>
                                                <td>{value.status}</td>
                                                <td>{value.offer_description}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewOffer;