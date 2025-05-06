import Footer from '../../components/Footer';
import React from 'react';

const Profile = () => {
    return (
        <>
            <div className="col-md-9 content">
                <div className="row">
                    <div className="col-12 bg-white d-flex align-items-center justify-content-between p-3">
                        <p className="text-dark mb-0 promo-text" >Get 25% off of IlovePDF for unlimited access to thousands of online classes.    <a href="#" className="btn btn-link text-primary custom-left-shift">Click here to redeem</a></p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-4">
                        <h1 >My Account </h1>
                    </div>

                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm custom-card">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <ul className="nav nav-pills">
                                    <a href="dashbord1.html" className="mx-2 edit-link">Personal</a> | <a href="dashbord2.html" className="mx-2">Business</a>
                                </ul>
                                <a href="#" className="edit-link">Edit</a>
                            </div>

                            <div className="form-group mb-3">
                                <input type="text" className="form-control" value="Omer Riaz" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" value="Riaz" />
                            </div>
                            <div className="form-group mb-3 position-relative">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="US Flag" className="flag-img" />
                                <input type="tel" className="form-control pl-5" value="102 58846464" />
                            </div>

                            <div className="form-group mb-3">
                                <select className="form-select form-control" id="country">
                                    <option selected>Pakistan</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm">
                            <h5 className="mb-3">Social Links</h5>
                            <p>Connect your social accounts to log in through Facebook or Google.</p>
                            <div className="for-group mb-3">
                                <input type="email" className="for-control" value="oriaz07@gmail.com" />
                            </div>

                            <h6 className="mt-4 mb-3" >Link more social network accounts</h6>
                            <div className="d-flex social-links">
                                <a href="#" className="btn btn-outline-secondary mr-2">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="btn btn-outline-secondary mr-2">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#" className="btn btn-outline-secondary">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-md-6">
                        <div className="card p-4 shadow-sm">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="mb-0">Email</h5>
                                <a href="#" className="edit-link">Edit</a>
                            </div>

                            <div className="form-group mb-3">
                                <input type="email" className="form-control" value="oriaz07@gmail.com" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="button-group col-md-6 d-flex align-items-center" >
                <button className="btn save-btn">Save</button>
                <button className="btn cancel-btn">Cancel</button>
            </div>

            <Footer />
        </>
    );
};

export default Profile;