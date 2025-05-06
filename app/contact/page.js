import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

const Contact = () => {
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>Contact Our Team
                    </h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Contact Our Team
                </Link>
            </nav>
            <div className=" py-5">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-12">
                <h5 className="text-center mb-4">Contact Us To Report A Problem, Clarify Any Doubts About ILovePDF.</h5>
                <form className="conta">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="email" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <div className="input-group">
                            <span className="input-group-text"><img src="" alt="US Flag" /></span>
                            <input type="text" className="form-control" id="phone" placeholder="000-000-00" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="company" className="form-label">Company</label>
                        <input type="email" className="form-control" id="company" placeholder="Email Address" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select className="form-select" id="subject">
                            <option >Choose Subject</option>
                            <option value="1">Technical Support</option>
                            <option value="2">Billing</option>
                            <option value="3">General Inquiry</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows="4" placeholder="Enter your message here"></textarea>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" />
                        <label className="form-check-label" htmlFor="terms">I accept Terms & Conditions and Legal Privacy</label>
                    </div>
                    <button type="submit" className="btn btn-warning w-100" style={{backgroundColor:"#ff6f00"}}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    
        <div className="contain py-5">
            <div className="row g-4 justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card text-white bg-orange p-4 h-100">
                        <h3 style={{color:" white"}}>Request A Quote</h3>
                        <p>We’re Here To Help. Let’s Talk!</p>
                        <p>You can upload a PDF review or to simply <Link href="#" className="text-white text-decoration-underline">Request A Quote</Link>.</p>
                        <button className="btn btn-primary mt-3">Select From Device</button>
                    </div>
                </div>
    
             
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card text-white bg-purple p-4 h-100">
                        <h3 style={{color: "white"}}>Call Us Now</h3>
                        <p>If you have any question concerning our services or policy, don't hesitate to contact us.</p>
                        <h2>+111 26 26 000</h2>
                        <p>info@ilovepdf.com</p>
                    </div>
                </div>
            </div>
        </div>

      <div className="container text-center my-5">
        
        <h2 className="font-weight-bold">The Security Of Your Data Is Our Priority</h2>
        
        
        <p className="lead">
            In addition to data encryption in transit and at rest, we operate in compliance <br/> with industry-accepted standards, regulations, and certifications.
        </p>
        
        
        <Link href="#" className="text-primary">Learn more about security</Link>
        
        
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
            <Footer />
        </>
    );
};

export default Contact;