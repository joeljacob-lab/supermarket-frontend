import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        Supermarket Management System
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Product
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/addproduct">
                                            Add Product
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/viewproducts">
                                            View Products
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Customer
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/addcustomer">
                                            Add Customer
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/viewcustomer">
                                            View Customer
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Offer
                                </a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/addoffer">
                                            Add Offer
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item" to="/viewoffer">
                                            View Offer
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
        </div>
    );
};

export default NavBar;