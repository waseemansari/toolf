import Footer from '../../components/Footer';
import React from 'react';

const Security = () => {
    return (
        <>
             <div className="row">
                    <div className="col-12 bg-white d-flex align-items-center justify-content-between p-3">
                        <p className="text-dark mb-0 promo-text" >Get 25% off of IlovePDF for unlimited access to thousands of online classes.    <a href="#" className="btn btn-link text-primary custom-left-shift">Click here to redeem</a></p>
                     
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <h1 >Security</h1>
                    </div>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card p-4 shadow-sm custom-card">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <ul className="nav nav-pills">
                                            <h5 className="mx-2">Password</h5>
                                        </ul>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" value="New Password" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input type="text" className="form-control" value="Repeat New Password" />
                                    </div>
                                   
                                </div>
                            </div>
                    
                            <div className="container d-flex col-md-6" >
                              
                                    <div className="card shadow-sm p-4 rounded custom-card">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-3">Two factor authentication</h5>
                                            <span  >Disabled</span>
                                        </div>
                                        <p>Two Factor Authentication improves your account security.</p>
                            
                                        <div className="form-group mb-3">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                            
                                       
                                        <div className="d-flex align-items-center">
                                            
                                            <div className="me-3">
                                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example" alt="QR Code" className="img-fluid" />
                                            </div>
                                        
                                           
                                            <div>
                                                <p className="text-muted mb-0">Download Google Authenticator on the 
                                                    <strong>App Store</strong> or <strong>Google Play</strong>, 
                                                    scan the QR image and insert the generated code
                                                </p>
                                            </div>
                                        </div>
                                        
                            
                                        <label htmlFor="authCode" className="form-label" >Google Authenticator Code</label>
                                        <div className="form-group mb-3">
                                            <input type="text" className="form-control" id="authCode" placeholder="Code" />
                                        </div>
                                    </div>
                                
                            </div>
                            
                            </div>
                        </div>
                    </div>
              <Footer />  
    
        </>
    );
};

export default Security;