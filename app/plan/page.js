// components/Navbar.js
import React from 'react';

const Plan = () => {
    return (
        <>
            <div className="col-md-9 content">
                <div className="row">
                    <div className="col-12 bg-white d-flex align-items-center justify-content-between p-3">
                        <p className="text-dark mb-0 promo-text" >Get 25% off of IlovePDF for unlimited access to thousands of online classes.    <a href="#" className="btn btn-link text-primary custom-left-shift">Click here to redeem</a></p>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <h2 className="fw-bold">Plans and packages</h2>
                            <p className="text-end fw-bold">Total Files: 5</p>
                        </div>
                    </div>
                    <div className="row">
                        <h5 className="fw-bold">My Account</h5>
                        <div className="col-lg-6 mb-4">
                            <div className="card shadow-sm p-4">
                                <p className=" fw-bold" style={{color: "black"}}>Subscription details</p>
                                <p>Get full access to all iLovePDF features. Enjoy simple and fast PDF tools to convert, edit, and e-sign your documents.</p>
                                <h2 className="fw-bold" style={{color: "#5A26EF"}}>$39 Month</h2>
                                <p className="text-success fw-bold">Active</p>
                                <button className="btn btn-warning text-white fw-bold">Go For Premium</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card shadow-sm p-4">
                                <h5 className="fw-bold">Packages</h5>
                                <p className="fw-bold">Signatures: 0</p>
                                <div className="d-flex justify-content-end mb-3">
                                    <button style={{border:" none; background: none"}} ><img src="assests/images/Group 89 (1).png" alt="" /></button>
                                </div>
                                <div className="list-group">
                                    <label className="list-group-item d-flex justify-content-between align-items-center active">
                                        5 Signatures - $6.00
                                        <input className="form-check-input" type="radio" name="signature" checked />
                                    </label>
                                    <label className="list-group-item d-flex justify-content-between align-items-center">
                                        10 Signatures - $10.00
                                        <input className="form-check-input" type="radio" name="signature" />
                                    </label>
                                    <label className="list-group-item d-flex justify-content-between align-items-center">
                                        30 Signatures - $40.00
                                        <input className="form-check-input" type="radio" name="signature" />
                                    </label>
                                    <label className="list-group-item d-flex justify-content-between align-items-center">
                                        50 Signatures - $60.00
                                        <input className="form-check-input" type="radio" name="signature" />
                                    </label>
                                </div>
                                <button className="btn btn-dark mt-4 w-100">Proceed to checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-group col-md-6 d-flex align-items-center" >
                <button className="btn save-btn">Save</button>
                <button className="btn cancel-btn">Cancel</button>
            </div>
        </>
    );
};

export default Plan;