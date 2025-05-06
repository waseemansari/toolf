import React from 'react';
import style from "../style/contactinof.module.css"

const ContactInfo = () => {
    return (
        <>
            <div className="container mt-4">
                <h3 className="fw-bold">Contacts</h3>

                <div className="contacts-container">
                    <div className="header-actions mb-3">
                        <input type="text" className="form-control" placeholder="Search Contact" />
                        <div className="d-flex align-items-center">
                            <div className="form-check me-3">
                                <input className="form-check-input" type="checkbox" value="" id="selectAll" />
                                <label className="form-check-label" for="selectAll">
                                    Select All
                                </label>
                            </div>
                            <button className="icon-btn me-2"><img src="assests/images/Group 56 (1).png" alt="Delete" className="action-icon" /></button>
                            <button className="icon-btn me-2"><img src="assests/images/Group 85 (2).png" alt="Download" className="action-icon" /></button>
                            <button className="icon-btn me-2"><img src="assests/images/download.jpg-removebg-preview.png" alt="Download" className="action-icon" /></button>
                            <span className="ms-3">|</span>
                            <button className="icon-btn ms-3"><img src="assests/images/download.jpg-removebg-preview.png" alt="Import" className="action-icon" /></button>
                            <a href="#" className="btn-link-custom ms-3">Import Contacts</a>
                        </div>
                        <a href="#" className="btn-link-custom ms-3">Add New Contacts <img src="assests/images/Group 89 (1).png" alt="Add" className="action-icon" /></a>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-hover mt-3">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Omer</td>
                                    <td>ArtWork wireframes.pdf</td>
                                    <td>+920313 5188796</td>
                                    <td>
                                        <button className="icon-btn me-2"><img src="assests/images/eye-removebg-preview.png" alt="Edit" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 85 (2).png" alt="Delete" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 98.png" alt="Delete" className="action-icon" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Omer</td>
                                    <td>ArtWork wireframes.pdf</td>
                                    <td>+920313 5188796</td>
                                    <td>
                                        <button className="icon-btn me-2"><img src="assests/images/eye-removebg-preview.png" alt="Edit" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 85 (2).png" alt="Delete" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 98.png" alt="Delete" className="action-icon" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Omer</td>
                                    <td>ArtWork wireframes.pdf</td>
                                    <td>+920313 5188796</td>
                                    <td>
                                        <button className="icon-btn me-2"><img src="assests/images/eye-removebg-preview.png" alt="Edit" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 85 (2).png" alt="Delete" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 98.png" alt="Delete" className="action-icon" /></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Omer</td>
                                    <td>ArtWork wireframes.pdf</td>
                                    <td>+920313 5188796</td>
                                    <td>
                                        <button className="icon-btn me-2"><img src="assests/images/eye-removebg-preview.png" alt="Edit" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 85 (2).png" alt="Delete" className="action-icon" /></button>
                                        <button className="icon-btn"><img src="assests/images/Group 98.png" alt="Delete" className="action-icon" /></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

export default ContactInfo;