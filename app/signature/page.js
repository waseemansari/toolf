
import React from 'react';

const Signature = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 content">
                        <div className="row">
                            <div className="col-12 bg-white d-flex align-items-center justify-content-between p-3">
                                <p className="text-dark mb-0 promo-text" >Get 25% off of IlovePDF for unlimited access to thousands of online classes.    <a href="#" className="btn btn-link text-primary custom-left-shift">Click here to redeem</a></p>

                            </div>
                        </div>
                        <div className="container mt-4">
                            <h3 className="fw-bold">Signatures</h3>
                            <div className="row g-4 mt-3">
                                <div className="col-md-6">
                                    <div className="card signature-card">
                                        <div>
                                            <h5 className="card-title">Your Signatures</h5>
                                            <img src="assests/images/omer riaz.png" alt="Signature" className="signature-img" />
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <button className="icon-btn me-2" style={{border: "none" ,background:" local"}}><img src="assests/images/Group 98.png" alt="Edit" className="action-icon" /></button>
                                            <button className="icon-btn" style={{border: "none" ,background:" local"}}><img src="assests/images/Group 89 (1).png" alt="Add" className="action-icon" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card signature-card">
                                        <div>
                                            <h5 className="card-title">Digital Signatures</h5>
                                            <p>Certificate-based-signatures are necessary to legally validate the signature’s authenticity. You can acquire certified signatures by subscribing to iLovePDF Premium or purchasing a prepaid package.</p>
                                            <button className="btn btn-custom" style={{backgroundColor: "#F56129"}}>Upgrade to Premium</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h5 className="fw-bold mt-5">Last activity</h5>
                            <div className="tabs-container-wrapper">
                                <div className="tabs-container">
                                    <button className="btn btn-active" style={{backgroundColor: "#F56129", color: "white"}}>Sent</button>
                                    <button className="btn">Inbox</button>
                                    <button className="btn">Signed</button>
                                </div>

                                <div className="no-signature-container mt-3">
                                    <img src="assests/images/pdf 2.png" alt="PDF Icon" />
                                    <p>You have not sent any signature requests yet</p>
                                    <a href="#" className="link-primary-custom">Send Your First Signature Request</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="button-group col-md-6 d-flex align-items-center" >
                    <button className="btn save-btn">Save</button>
                    <button className="btn cancel-btn">Cancel</button>
                </div>

            </div>

        </>
    );
};

export default Signature;