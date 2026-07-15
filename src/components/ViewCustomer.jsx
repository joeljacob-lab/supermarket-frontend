import axios from "axios";
import React, { useEffect, useState } from "react";
import UpdateCustomerModal from "./UpdateCustomerModal";

const ViewCustomer = () => {

    const [customerData, changeCustomerData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const fetchData = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/view_customer", {}).then(
            (response) => {
                changeCustomerData(response.data);
            }
        ).catch((error) => {
            console.log(error);
            alert("Failed to load customers");
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const searchCustomers = () => {
        setIsLoading(true);

        axios.post("http://localhost:3000/search_customer", { search: searchText }).then(
            (response) => {
                changeCustomerData(response.data);
            }
        ).catch((error) => {
            console.log(error);
            alert("Failed to search customers");
        }).finally(() => {
            setIsLoading(false);
        });
    };

    const deleteCustomer = (customerId) => {
        if (!window.confirm("Delete this customer?")) {
            return;
        }

        axios.post("http://localhost:3000/delete_customer", { customer_id: customerId }).then(
            (response) => {
                alert("Customer deleted successfully!");
                fetchData();
            }
        ).catch((error) => {
            console.log(error);
            alert("Failed to delete customer. Please try again.");
        });
    };

    const updateCustomer = (customer) => {
        setSelectedCustomer(customer);
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
                        VIEW CUSTOMERS
                    </h2>

                    <div className="mb-3 d-flex gap-2 align-items-center">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by name, email or phone"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button className="btn btn-primary" onClick={searchCustomers}>
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
                                    <th>Customer ID</th>
                                    <th>Customer Name</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Membership</th>
                                    <th>Registration Date</th>
                                    <th>Total Purchase</th>
                                    <th>Loyalty Points</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    customerData.map(
                                        (value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.customer_id}</td>
                                                    <td>{value.customer_name}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.phone_number}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.address}</td>
                                                    <td>{value.city}</td>
                                                    <td>{value.state}</td>
                                                    <td>{value.membership_type}</td>
                                                    <td>{value.registration_date}</td>
                                                    <td>₹ {value.total_purchase_amount}</td>
                                                    <td>{value.loyalty_points}</td>
                                                    <td>
                                                        <button
                                                            className="btn btn-sm btn-danger me-2"
                                                            onClick={() => deleteCustomer(value.customer_id)}
                                                        >
                                                            Delete
                                                        </button>
                                                        <button
                                                            className="btn btn-sm btn-warning"
                                                            onClick={() => updateCustomer(value)}
                                                        >
                                                            Update
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )
                                }

                            </tbody>

                        </table>

                    </div>

                </div>
            </div>

            {showUpdateModal && (
                <UpdateCustomerModal
                    customer={selectedCustomer}
                    onClose={() => setShowUpdateModal(false)}
                    onSuccess={handleUpdateSuccess}
                />
            )}
        </div>
    )
}

export default ViewCustomer;