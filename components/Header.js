// components/Navbar.js
import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <img src="/assests/images/ilovepdf 1.png" alt="PDFMy Account Logo" style={{ width: '120px' }} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Browse Tools
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Tool 1</Link></li>
                                <li><Link className="dropdown-item" href="#">Tool 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="#">How It Works</Link></li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                All Tools PDF
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" href="#">Tool 1</Link></li>
                                <li><Link className="dropdown-item" href="#">Tool 2</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item"><Link className="nav-link" href="/plan">Pricing Plan</Link></li>
                    </ul>
                    <div className="d-flex align-items-center ms-auto">
                        <button className="btn upgrade-btn ms-3" style={{ backgroundColor: '#F56129' }}>Upgrade Plan</button>
                        <div className="ms-3">
                            <img src="/assests/images/handsome-young-businessman-shirt-eyeglasses.png" alt="Profile Image" className="rounded-circle" style={{ width: '40px', height: '40px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;