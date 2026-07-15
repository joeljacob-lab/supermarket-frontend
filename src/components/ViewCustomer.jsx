import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewCustomer = () => {

    const [customerData, changeCustomerData] = useState(
        []
    )

    const fetchData = () => {

        axios.post("http://localhost:3000/view_customer", {}).then(
            (response) => {
                changeCustomerData(response.data)
            }
        ).catch()

    }

    useEffect(() => {
        fetchData()
    }, [])

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
        </div>
    )
}

export default ViewCustomer;