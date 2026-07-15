import axios from "axios";
import React, { useState } from "react";

const AddCustomer = () => {

    const [input, changeInput] = useState(
        {
            customer_id: "",
            customer_name: "",
            gender: "",
            phone_number: "",
            email: "",
            address: "",
            city: "",
            state: "",
            membership_type: "",
            registration_date: "",
            total_purchase_amount: "",
            loyalty_points: ""
        }
    )

    const inputHandler = (event) => {
        changeInput(
            {
                ...input,
                [event.target.name]: event.target.value
            }
        )
    }

    const readValue = () => {

        axios.post("http://localhost:3000/add_customer", input).then(
            (response) => {

                if (response.data.status === "success") {
                    alert("Customer Added Successfully")
                } else {
                    alert("Error")
                }

            }
        ).catch()

    }

    return (
        <div
            className="container-fluid"
            style={{ backgroundColor: "#d6d6d6", minHeight: "100vh" }}
        >
            <div className="row">
                <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3 p-5">

                        <div className="col col-sm-12">
                            <h2 className="text-center text-dark">
                                ADD CUSTOMER
                            </h2>
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Customer ID</label>
                            <input type="text" className="form-control" name="customer_id" value={input.customer_id} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Customer Name</label>
                            <input type="text" className="form-control" name="customer_name" value={input.customer_name} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Gender</label>
                            <select className="form-control" name="gender" value={input.gender} onChange={inputHandler}>
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Phone Number</label>
                            <input type="text" className="form-control" name="phone_number" value={input.phone_number} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" name="email" value={input.email} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Address</label>
                            <input type="text" className="form-control" name="address" value={input.address} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">City</label>
                            <input type="text" className="form-control" name="city" value={input.city} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">State</label>
                            <input type="text" className="form-control" name="state" value={input.state} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Membership Type</label>
                            <select className="form-control" name="membership_type" value={input.membership_type} onChange={inputHandler}>
                                <option>Select</option>
                                <option>Silver</option>
                                <option>Gold</option>
                                <option>Platinum</option>
                            </select>
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Registration Date</label>
                            <input type="date" className="form-control" name="registration_date" value={input.registration_date} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Total Purchase Amount</label>
                            <input type="number" className="form-control" name="total_purchase_amount" value={input.total_purchase_amount} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 col-md-6">
                            <label className="form-label">Loyalty Points</label>
                            <input type="number" className="form-control" name="loyalty_points" value={input.loyalty_points} onChange={inputHandler} />
                        </div>

                        <div className="col col-sm-12 text-center">
                            <button className="btn btn-dark" onClick={readValue}>
                                ADD CUSTOMER
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddCustomer