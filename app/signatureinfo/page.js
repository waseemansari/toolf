
import React from 'react';

const SignatureInfo = () => {
    return (
        <>
 <div className="container d-flex justify-content-center align-items-center min-vh-100">
                        <div className="card p-4 shadow-lg" >
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">Set your signature details</h5>
                                
                                <button type="button" className="btn-close" aria-label="Close"></button>
                            </div>
                       
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <img src="assests/images/handsome-young-businessman-shirt-eyeglasses.png" alt="User" className="rounded-circle" id="profile-picture" />
                                        </span>
                                        <input type="text" className="form-control" id="name" placeholder="Name" />
                                    </div>
                                </div>
                           
                                <div className="col-md-6 mb-3">
                                    <input type="text" className="form-control" id="initials" placeholder="Initials" />
                                </div>
                            </div>
                            
                
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-signature-tab" data-bs-toggle="pill" data-bs-target="#pills-signature" type="button" role="tab" aria-controls="pills-signature" aria-selected="true" >Signatures</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-initials-tab" data-bs-toggle="pill" data-bs-target="#pills-initials" type="button" role="tab" aria-controls="pills-initials" aria-selected="false">Initials</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-stamp-tab" data-bs-toggle="pill" data-bs-target="#pills-stamp" type="button" role="tab" aria-controls="pills-stamp" aria-selected="false">Company Stamp</button>
                                </li>
                            </ul>

                            <div className="my-3 d-flex justify-content-between align-items-center" >
                                <button className="btn btn-light d-flex align-items-center" id="upload-signature">
                                    <img src="assests/images/Vector (1).png" alt="Upload Signature" className="upload-icon" /> 
                                </button>
                            
                                <button className="btn btn-light d-flex align-items-center" id="upload-initials">
                                    <img src="assests/images/Vector11.png" alt="Upload Initials" className="upload-icon" /> 
                                </button>
                            
                                <button className="btn btn-light d-flex align-items-center" id="upload-text">
                                    <img src="assests/images/Frame (12).png" alt="Upload Text" className="upload-icon" /> 
                                </button>
                            </div>
                            
                
                            <div className="container my-5">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-8 col-sm-10">
                                        <div className="upload-box text-center">
                                            <p>Upload Signature or drop your file here</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <h6>Colors:</h6>
                                <div className="d-flex justify-content-start color-options">
                                    <div className="color-circle bg-primary"></div>
                                    <div className="color-circle bg-warning"></div>
                                    <div className="color-circle bg-dark"></div>
                                    <div className="color-circle bg-info"></div>
                                </div>
                            </div>
                
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-primary me-2" style={{backgroundColor: "#F56129"}}>Save</button>
                                <button className="btn btn-secondary" style={{backgroundColor:" black"}}>Cancel</button>
                            </div>
                        </div>
                    </div>
                
        </>
    );
};

export default SignatureInfo;