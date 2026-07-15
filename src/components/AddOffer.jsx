
import axios from 'axios'
import React, { useState } from 'react'

const AddOffer = () => {

    const [input, changeInput] = useState({
        OfferID: "",
        OfferName: "",
        OfferType: "",
        ProductCategory: "",
        DiscountPercentage: "",
        MinimumPurchaseAmount: "",
        StartDate: "",
        EndDate: "",
        ApplicableProducts: "",
        CouponCode: "",
        Status: "",
        OfferDescription: ""
    })

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add_offer", input)
            .then((response) => {
                console.log(response.data)
                alert("Offer Added Successfully")

                changeInput({
                    OfferID: "",
                    OfferName: "",
                    OfferType: "",
                    ProductCategory: "",
                    DiscountPercentage: "",
                    MinimumPurchaseAmount: "",
                    StartDate: "",
                    EndDate: "",
                    ApplicableProducts: "",
                    CouponCode: "",
                    Status: "",
                    OfferDescription: ""
                })
            })
            .catch((error) => {
                console.log(error)
                alert("Error while adding offer")
            })
    }

    return (
        <div>



            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">

                        <h2 className="text-center mb-4">
                            <b>ADD OFFER</b>
                        </h2>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Offer ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="OfferID"
                                    value={input.OfferID}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="OfferName"
                                    value={input.OfferName}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Type</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="OfferType"
                                    value={input.OfferType}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Product Category</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ProductCategory"
                                    value={input.ProductCategory}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Discount Percentage</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="DiscountPercentage"
                                    value={input.DiscountPercentage}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Minimum Purchase Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="MinimumPurchaseAmount"
                                    value={input.MinimumPurchaseAmount}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="StartDate"
                                    value={input.StartDate}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="EndDate"
                                    value={input.EndDate}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Applicable Products</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="ApplicableProducts"
                                    value={input.ApplicableProducts}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Coupon Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="CouponCode"
                                    value={input.CouponCode}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Status"
                                    value={input.Status}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Offer Description</label>
                                <textarea
                                    className="form-control"
                                    name="OfferDescription"
                                    rows="3"
                                    value={input.OfferDescription}
                                    onChange={inputHandler}
                                ></textarea>
                            </div>

                            <div className="col-12">
                                <button
                                    className="btn btn-success"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddOffer