// components/Navbar.js
import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <>
         
            {/* <!-- Join Section --> */}
            <section className="join-section">
                <h1 className="fw-bold">Join Our 70M+ Users Today</h1>
                <p><u>Join thousands of teams using iLovePDF to do their best work yet.</u></p>

                <div>
                    <Link href="#" className="btn btn-start">Start Free Trial</Link>
                    <Link href="#" className="btn btn-pricing">Plans & Pricing</Link>
                </div>
                <div className="join-links">
                    <ul>
                        <li><strong>Document</strong></li>
                        <li><Link href="#">Modifying a pdf</Link></li>
                        <li><Link href="#">Sign a pdf</Link></li>
                        <li><Link href="#">Separate a pdf</Link></li>
                    </ul>
                    <ul>
                        <li><strong>Image</strong></li>
                        <li><Link href="#">Edit an image</Link></li>
                        <li><Link href="#">Sign an image</Link></li>
                        <li><Link href="#">Convert an image</Link></li>
                    </ul>
                    <ul>
                        <li><strong>Sitemap</strong></li>
                        <li><Link href="#">Prices</Link></li>
                        <li><Link href="#">Edit a PDF</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                    <ul>
                        <li><strong>Legal Notice</strong></li>
                        <li><Link href="#">Legal Notice</Link></li>
                        <li><Link href="#">Terms of use</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* <!-- Social Icons --> */}
                <div className="social-icons">
                    <Link href="#"><i className="bi bi-facebook"></i></Link>
                    <Link href="#"><i className="bi bi-instagram"></i></Link>
                    <Link href="#"><i className="bi bi-twitter"></i></Link>
                </div>
            </section>

            {/* <!-- Copyright Section --> */}
            <section className="copyright-section">
                <p>Copyright © 2025 iLove PDF. All rights reserved.</p>
            </section>
        </>
    );
};

export default Footer;