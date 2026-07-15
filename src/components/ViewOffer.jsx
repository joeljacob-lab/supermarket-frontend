import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateOfferModal from "./UpdateOfferModal";

const ViewOffer = () => {

    const [data, changeData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedOffer, setSelectedOffer] = useState(null);

    const fetchData = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/view_offer", {})
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to load offers");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const searchOffers = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/search_offer", { search: searchText })
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to search offers");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const deleteOffer = (offerId) => {
        if (!window.confirm("Delete this offer?")) {
            return;
        }

        axios.post("http://localhost:3000/delete_offer", { offer_id: offerId })
            .then((response) => {
                alert("Offer deleted successfully!");
                fetchData();
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to delete offer. Please try again.");
            });
    };

    const updateOffer = (offer) => {
        setSelectedOffer(offer);
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
                        <b>VIEW OFFERS</b>
                    </h2>

                    <div className="mb-3 d-flex gap-2 align-items-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by offer name, type or coupon code"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={searchOffers}>
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
                                    <th>Actions</th>
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
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-danger me-2"
                                                        onClick={() => deleteOffer(value.offer_id)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-warning"
                                                        onClick={() => updateOffer(value)}
                                                    >
                                                        Update
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

            {showUpdateModal && (
                <UpdateOfferModal
                    offer={selectedOffer}
                    onClose={() => setShowUpdateModal(false)}
                    onSuccess={handleUpdateSuccess}
                />
            )}
        </div>
    );
};

export default ViewOffer;