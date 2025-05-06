import React from 'react';
import Link from "next/link";
import style from "../style/price.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

const Price = () => {
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>Choose your package
                        without risk</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Pricing & Plans</Link>
            </nav>


            <div className="d-flex justify-content-center mb-4">
                <button className="billing-toggle unselected-toggle">Monthly Billing</button>
                <button className="billing-toggle selected-toggle">Yearly Billing</button>
            </div>

            <p className="text-center">No Matter What You Select <span style={{color: "#6d28d9"}}>A Free 30-Day Trial</span> Is Included In Each Plan</p>


            <div className="col-lg-5 col-md-6 col-sm-12 position-relative mb-4">
                <div className="pricing-bo basic-plan">
                    <h3 style={{background: "#F56129"}}>Basic</h3>
                    <h2>$39 Month</h2>
                    <p>2 Day Trial Offer</p>
                    <hr className="section-line" />
                    <p>Minimum 20 Users Annual Commitment</p>
                    <p><strong>$1</strong> For The First 2 Days Then <strong>$39 Per Month</strong></p>
                    <ul className="features-list">
                        <li>Edit, fill, draw, print, save, or fax</li>
                        <hr className="section-line" />
                        <li>Convert PDFs to editable Word documents</li>
                        <hr className="section-line" />
                        <li>Erase, highlight & re-write PDFs</li>
                        <hr className="section-line" />
                        <li>Highlight & annotate documents</li>
                        <hr className="section-line" />
                    </ul>
                    <button className="plan-btn" style={{background: "#F56129"}}>Buy Basic Plan</button>
                    <div className="col-lg-5 col-md-6 col-sm-12 position-relative">
                        <div className="pricing-box premium-plan">
                            <div className="highlight-ribbon">The most popular!</div>
                            <h3>Premium</h3>
                            <h2>$7.5 Annual</h2>
                            <p>2 Day Trial Offer</p>
                            <hr className="section-line" />
                            <p>Minimum 20 Users Annual Commitment</p>
                            <p><strong>$1</strong> For The First 2 Days Then <strong>$90 Per Month</strong></p>
                            <ul className="features-list">
                                <li>Edit, fill, draw, print, save, or fax</li>
                                <hr className="section-line" />
                                <li>Convert PDFs to editable Word documents</li>
                                <hr className="section-line" />
                                <li>Erase, highlight & re-write PDFs</li>
                                <hr className="section-line" />
                                <li>Highlight & annotate documents</li>
                                <hr className="section-line" />
                            </ul>
                            <button className="plan-btn">Go For Premium</button>

                            <img src="assests/PriceCheck 1.png" alt="Tick Banner" className="tick-banner" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container text-center my-5">
                <h2 className="font-weight-bold">The Security Of Your Data Is Our Priority</h2>

                <p className="lead">
                    In addition to data encryption in transit and at rest, we operate in compliance <br/> with industry-accepted standards, regulations, and certifications.
                </p>

                <a href="#" className="text-primary">Learn more about security</a>

                <div className="row mt-4">
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="assests/ssl-encrypted-logo 1.png" alt="PDF Association" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="assests/secure-payment-logo 1.png" alt="ISO 27001" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="assests/iso-logo 1.png" alt="Secure Payment" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="assests/pdf-association-logo 1.png" alt="SSL Encryption" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container table-container">
                <div className="table-header">
                    <h2>Compare Plan Features</h2>
                    <p>Check out the video below to find out what pdffiller can do for your team or organization.</p>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <table className="table table-plans  " >
                            <thead>
                                <tr className="gup">
                                    <th className="service-column">Service</th>
                                    <th className="basic-plan" style={{background: "#6d28d9",  borderTopLeftRadius: "8px !important;", borderTopRightRadius:" 8px !important;"}}>Basic</th>
                                    <th className="premium-plan" >Premium</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr >
                                    <td className="service-column">Tools</td>
                                    <td >Included Tools</td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}>All Tools Included</td>
                                </tr>
                                <tr>
                                    <td className="service-column">Batch Processing</td>
                                    <td >Limited</td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}>Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="service-column">File Size Per Task</td>
                                    <td >Limited</td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}>Unlimited</td>
                                </tr>
                                <tr>
                                    <td className="service-column">Teams</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                                <tr>
                                    <td className="service-column">Volume Support</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="service-column">Devices</th>
                                    <th className="basic-plan" >Basic</th>
                                    <th className="premium-plan" style={{color: "aliceblue", background: "#F56129"}}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="service-column">Web</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                                <tr>
                                    <td className="service-column">Desktop</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                                <tr>
                                    <td className="service-column">Mobile</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                    <th className="service-column">Security</th>
                                    <th className="basic-plan" >Basic</th>
                                    <th className="premium-plan" style={{color: "aliceblue", background: "#F56129"}}>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="service-column">Secure Connection HTTPS</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                                <tr>
                                    <td className="service-column">ISO27001 Certified</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td style={{color: "aliceblue", background: "#F56129"}}><span className="checkmark">✔</span></td>
                                </tr>
                                <tr>
                                    <td className="service-column">Dedicated Hardware</td>
                                    <td ><span className="checkmark">✔</span></td>
                                    <td ><span className="checkmark">✔</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <button className="plan-btn btn-basic">Get Started Now</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <button className="plan-btn btn-premium">Contact Us Now</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-sm-12 image-container">
                        <img src="assests/Group 300.png" alt="Responsive Image" className="img-fluid"  />
                    </div>
                </div>
            </div>
            <section className="stats-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>$40+</h2>
                                <p>Hours saved per <br/> month</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2 >$30+</h2>
                                <p >Saved Per <br/> Document</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>$24x</h2>
                                <p>Fastest Contract Turnaround Times</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>$70+</h2>
                                <p>Fewer Errors  <br/>errors</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <div className="trial-offer">
                <div className="d-flex  align-items-center mx-auto justify-content-evenly">
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="fw-bold mb-3" >Enjoy Our <br/>Trial Offer</h1>
                        <p className="mb-4" >$1 for 2 days then $7.5/month in annual payment</p>
                    </div>
                    <div className="d-flex justify-content-center justify-content-md-end">
                        <div className="d-flex flex-column align-items-center align-items-md-end">
                            <a href="#" className="btn start-free-btn mb-3">Start Free Trial</a>
                            <a href="#" className="btn pricing-btn">Plans & Pricing</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="faq-section container my-5">
                <div className="row">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <h2 className="faq-heading fw-bold">Frequently Asked Questions</h2>
                        <p className="faq-description">
                            <strong>iLoveIMG</strong> is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks.
                        </p>
                    </div>

                    <div className="col-md-7">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Why can't I sign in?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        Please ensure that your email and password are correct. If the issue persists, try resetting your password.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        What are the entry requirements?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        There are no specific entry requirements to use our service. It is available for all users.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        How do I get a reference?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        You can contact our support team to request a reference for your work.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        How do I apply?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        You can apply by visiting our careers page and submitting your application.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};
export default Price;