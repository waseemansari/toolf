// components/Sidebar.js
import React from 'react';
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="col-md-3 text-white sidebar" >
            <div className="p-4">
                <div className="profile text-center mb-4">
                    <img src="assests/images/handsome-young-businessman-shirt-eyeglasses.png" className="rounded-circle" alt="Profile Image" />
                    <h4 className="mt-2">Donald Wick</h4>
                    <i className="fas fa-bell"></i>
                    <hr className="header-divider" />
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                        <Link className="nav-link text-white" href="/profile" >Profile</Link>
                        <ul className="list-unstyled" >
                            <li><Link href="/profile" className="text-white">My Account</Link></li>
                            <li><Link href="/security" className="text-white">Security</Link></li>
                            <li><Link href="security" className="text-white">Team</Link></li>
                        </ul>
                        <hr className="header-divider" />
                    </li>
                    <li className="nav-item mb-2">
                        <Link className="nav-link text-white" href="#" >Signature</Link>
                        <ul className="list-unstyled">
                            <li><Link href="#" className="text-white">Overview</Link></li>
                            <li><Link href="#" className="text-white">Sent</Link></li>
                            <li><Link href="#" className="text-white">Business idea</Link></li>
                            <li><Link href="#" className="text-white">Inbox</Link></li>
                            <li><Link href="/signature" className="text-white">Signed</Link></li>
                            <li><Link href="#" className="text-white">Templates</Link></li>
                            <li><Link href="/contactinfo" className="text-white">Contacts</Link></li>
                            <li><Link href="#" className="text-white">Settings</Link></li>
                        </ul>
                        <hr className="header-divider" />
                    </li>
                    <li className="nav-item mb-2">
                        <Link className="nav-link text-white" href="#" >Billing</Link>
                        <ul className="list-unstyled" >
                            <li><Link href="/plan" className="text-white">Plan & Packages</Link></li>
                            <li><Link href="#" className="text-white">Business Details</Link></li>
                            <li><Link href="#" className="text-white">Invoices</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item mb-2">
                        <Link className="nav-link btn upgrad-btn" href="/plan">Upgrade to Premium</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;