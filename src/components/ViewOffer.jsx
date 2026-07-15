import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ViewOffer = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view_offer")
            .then((response) => {
                changeData(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>



            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    <b>VIEW OFFERS</b>
                </h2>

                <div className="table-responsive">
                    <table className="table table-bordered table-hover table-striped">
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
                                <th>Offer Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.OfferID}</td>
                                    <td>{value.OfferName}</td>
                                    <td>{value.OfferType}</td>
                                    <td>{value.ProductCategory}</td>
                                    <td>{value.DiscountPercentage}</td>
                                    <td>{value.MinimumPurchaseAmount}</td>
                                    <td>{value.StartDate}</td>
                                    <td>{value.EndDate}</td>
                                    <td>{value.ApplicableProducts}</td>
                                    <td>{value.CouponCode}</td>
                                    <td>{value.Status}</td>
                                    <td>{value.OfferDescription}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    )
}

export default ViewOffer