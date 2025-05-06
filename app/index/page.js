// components/Navbar.js
import SiteNavbar from '../../components/SiteNavbar';
import React from 'react';
import Link from "next/link"
const Index = () => {
    return (
        <>
            <SiteNavbar  />
            <section className="section-in">
                <div className="curve">
                    <div className="container">
                        <h1 className="mb-3 " >Every Tool You Need to Work With PDFs In One Place</h1>
                        <p className="lead mb-4">Edit, collaborate, and eSign documents — all with one comprehensive solution.</p>
                        <div className="d-flex justify-content-center gap-3 mb-4">
                            <a href="#" className="btn  btn-lg" >Start Free Trial</a>
                            <a href="#" className="btn  btn-lg border ">Plans & Pricing</a>
                        </div>

                    </div>
                </div>
            </section>
            <div className="tablet-image ">
                <img src="assests/1.png" alt="PDF Tool Interface" className="img-fluid" />
            </div>

            <section id="responsive-image-section" className="py-5 text-center">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <img src="assests/web-hosting-banner 1.png" alt="Explore Tools" className="img-fluid" />
                        </div>
                    </div> 
                </div>
            </section>


            <div className="header-section">
                <h1 >Every Tool You Need To Work <br />With PDFs In One Place</h1>
                <p>Every tool you need to use PDFs, at your fingertips. All are <strong>100% FREE</strong> and easy to use!<br />
                    Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.</p>
            </div>

            <div className="tool-buttons text-center">
                <button className="btn btn-dark " >Compress PDF</button>
                <button className="btn btn-dark" >Convert PDF</button>
                <button className="btn btn-warning text-white" >All Tools PDF</button>
            </div>
            <div className="text-center mt-2">

                <button className="btn btn-dark mx-1 px-3 py-3" >Merge PDF</button>
                <button className="btn btn-dark mx-1 px-3 py-3" >Split PDF</button>
            </div>

            <div className="container my-5">
                <div className="row g-2">
                    <Link href="/merge-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title">Merge PDF </h5>
                                <p className="card-text">Combine PDFs in the order you want with the easiest PDF merger available.</p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link href="/split-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Split PDF</h5>
                                <p className="card-text">Separate one page or a whole set for easy conversion into independent PDF files.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/compress-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title">Compress PDF</h5>
                                <p className="card-text">Reduce file size while optimizing for maximal PDF quality.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/pdf-to-word" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">PDF to Word</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>




                    <Link href="/pdf-to-powerpoint" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title">Pdf to PowerPoint</h5>
                                <p className="card-text">Combine PDFs in the order you want with the easiest PDF merger available.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/pdf-to-excel" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Pdf to Excel</h5>
                                <p className="card-text">Separate one page or a whole set for easy conversion into independent PDF files.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/word-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title">Word To PDF</h5>
                                <p className="card-text">Reduce file size while optimizing for maximal PDF quality.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/powerpoint-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">PowerPoint To PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/excel-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title">Excel To PDF</h5>
                                <p className="card-text">Combine PDFs in the order you want with the easiest PDF merger available.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/edit-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Edit PDF</h5>
                                <p className="card-text">Separate one page or a whole set for easy conversion into independent PDF files.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/pdf-to-jpg" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card2.png" alt="Tool Icon" />
                                <h5 className="card-title"> PDF To JPG</h5>
                                <p className="card-text">Reduce file size while optimizing for maximal PDF quality.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/jpg-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">JPG To PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/sign-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Sign PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/watermark-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">WaterMark To PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/rotate-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Rotate PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/html-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">HTML To PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/unlock-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Unlock PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/protect-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Protect PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/organize-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Organize PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/pdf-to-pdfa" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">PDF To PDF/A</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                  
                    <Link href="/repaire-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Repaire PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/page-number-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Page Number PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/scan-to-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Scan To PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/ocr-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">OCR  PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/compare-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Compare PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/redact-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Redact PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/summerize-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Summerize PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/translate-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Translate PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>
                    <Link href="/flat-pdf" className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <img src="assests/card1.png" alt="Tool Icon" />
                                <h5 className="card-title">Flat PDF</h5>
                                <p className="card-text">Easily convert your PDFs into easy-to-edit DOC and DOCX documents.</p>
                            </div>
                        </div>
                    </Link>

                    {/* <!-- Add more cards here --> */}
                </div>
            </div>
            <div className="blue-button-section">
                <a href="#" className="btn" >Get powerful results with pdfFiller</a>
            </div>


            <div className="container my-5">
                <div className="row align-items-center text-center text-md-start">
                    {/* <!-- Text Section --> */}
                    <div className="col-md-12 text-center">
                        <h1 className="fw-bold">Expand your PDF capabilities <br /> with an all-in-one solution</h1>
                        <p >Check out the video below to find out what pdfFiller can do <br />for your team or organization.</p>
                    </div>
                    {/* <!-- Image Section --> */}

                </div>
                <div className="container my-1">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center position-relative">
                            <img src="assests/1.png" alt="PDF Tools" className="img-fluid mx-auto d-block" />
                            {/* <!-- Video Icon (centered on the image) --> */}
                            <a href="#" className="video-icon position-absolute top-50 start-50 translate-middle">
                                <i className="bi bi-play-circle-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Section Start --> */}
            <section id="services-section" className="py-2">
                <div className="container text-center position-relative">
                    <h1 className="mb-5" >Features Of Our Services</h1>
                    <div className="row justify-content-center">
                        {/* <!-- Phone Mockup --> */}
                        <div className="col-md-6 col-lg-4">
                            <img src="assests/en-mobile 1.png" className="img-fluid" alt="Phone mockup" />
                        </div>
                        {/* <!-- PDF to Excel Icons --> */}
                        <div className="service-icon purple-box">PDF to Excel</div>
                        <div className="service-icon orange-box">PDF to Excel</div>
                        <div className="service-icon green-box">PDF to Excel</div>
                        <div className="service-icon purple-box1">PDF to Excel</div>
                        <div className="service-icon purple-box2">PDF to Excel</div>
                    </div>
                </div>
            </section>




            <div className="container center-container">
                <div className="row justify-content-center align-items-center g-5">
                    {/* <!-- Add spacing between columns --> */}

                    {/* <!-- Left-side Buttons Section --> */}
                    <div className="col-md-4 mb-5">
                        <div className="btn-group-vertical w-100">
                            <button className="btn btn-outline-primary btn-lg rounded-pill mb-3 fw-bold my-2">Edit</button>
                            <button className="btn  btn-lg rounded-pill  fw-bold my-2">Fill</button>
                            <button className="btn btn-outline-primary btn-lg rounded-pill  my-2 fw-bold  my-2">Draw</button>
                            <button className="btn btn-outline-primary btn-lg rounded-pill  my-2 fw-bold mb-2">Highlight</button>
                            <button className="btn btn-outline-primary btn-lg rounded-pill  my-2 fw-bold mb-2">Digitalize</button>
                            <button className="btn btn-outline-primary btn-lg rounded-pill fw-bold  my-2">Workflow</button>
                        </div>
                    </div>

                    {/* <!-- Right-side Content Section (Text and Image) --> */}
                    <div className="col-md-8 text-center text-md-start">
                        {/* <!-- Adjusted column width for better spacing --> */}
                        <h1 className="fw-bold">iLovePDF Desktop</h1>
                        <p>
                            Download the <i>iLovePDF Desktop</i> App to work with your favorite PDF <br /> tools on your Mac or Windows PC.
                            Get a lightweight PDF app that helps <br /> you process heavy PDF tasks offline in seconds.
                        </p>
                        <div className="image-container">
                            <img src="assests/en-Desktop 1.png" alt="PDF Tools" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>




            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="image-container text-center">
                            <img src="assests/WN2024-ID-2024-_-Horizontal-Ads-1584-×-396-px-1 1.png" alt="Responsive Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="container d-flex justify-content-center align-items-center my-5" >
                <div className="row text-center">
                    <div className="col-12 mt-3 ">
                        <h1 >Looking for another solution?</h1>
                    </div>
                    {/* <!-- Left-side (Text Section) --> */}
                    <div className="col-md-6 d-flex align-items-center justify-content-center" >
                        <div>
                            <h1 className="fw-bold" >iLovePDF Desktop</h1>
                            <p>
                                Download the <i>iLovePDF Desktop</i> App to work with your favorite PDF
                                tools on your Mac or Windows PC. Get a lightweight PDF app that helps
                                you process heavy PDF tasks offline in seconds.
                            </p>
                        </div>
                    </div>

                    {/* <!-- Right-side (Image Section) --> */}
                    <div className="col-md-6 d-flex ">
                        <div className="image-container text-center p-3">
                            <img src="assests/en-Desktop 1.png" alt="PDF Tools" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="container">
                <h1 className="section-title text-center pt-5 pb-4" >
                    I Love PDF Scores Top Ratings in <br /> Multiple <span className="highlight">Categories</span> on G2
                </h1>
                {/* <!-- Purple Card --> */}
                <div className="custom-card green-card">
                    <div className="icon">
                        <img src="assests/Group 56.png" alt="Icon" />
                    </div>
                    <div className="content">
                        <h1>Quick</h1>

                    </div>
                    <div >
                        <p>Our service ensures you can access your PDFs anytime, from anywhere in the world.</p>
                    </div>
                </div>



                {/* <!-- Red Card --> */}
                <div className="custom-card yellow-card">

                    <div className="icon">
                        <img src="assests/Group 56.png" alt="Icon" />
                    </div>
                    <div className="content">
                        <h1>easy</h1>

                    </div>
                    <div >
                        <p>We guarantee that your data is protected using the latest encryption technologies.</p>
                    </div>
                </div>

                {/* <!-- Green Card --> */}
                <div className="custom-card green-card">
                    <div className="icon">
                        <img src="assests/Group 56.png" alt="Icon" />
                    </div>
                    <div className="content">
                        <h1>Safe</h1>

                    </div>
                    <div >
                        <p>Our service ensures you can access your PDFs anytime, from anywhere in the world.</p>
                    </div>
                </div>
            </div>



            <section className="my-5">
                <div className="container">
                    <h1 className="section-title text-center pt-5 pb-4" >
                        I Love PDF Scores Top Ratings in <br /> Multiple <span className="highlight">Categories</span> on G2
                    </h1>


                    <div className="badge-container">
                        {/* <!-- First Row (4 Badges) --> */}
                        <div className="badge">
                            <img src="assests/trust-badge-1 1.png" alt="High Performer Canada" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-2 1.png" alt="Best Support Mid-Market" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-3 1.png" alt="Leader Small Business" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-4 1.png" alt="Easiest to Use Mid-Market" />

                        </div>
                    </div>

                    <div className="badge-container mt-4">
                        {/* <!-- Second Row (4 Badges) --> */}
                        <div className="badge">
                            <img src="assests/trust-badge-5 1.png" alt="Easiest Setup Mid-Market" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-6 1.png" alt="Leader Mid-Market" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-7 1.png" alt="High Performer Mid-Market" />

                        </div>

                        <div className="badge">
                            <img src="assests/trust-badge-8 1.png" alt="Momentum Leader" />


                        </div>
                    </div>
                </div>
            </section>



            <section className="stats-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>40+</h2>
                                <p>Hours saved per month</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>$30+</h2>
                                <p>Saved Per Document</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>24x</h2>
                                <p>Fastest Contract Turnaround Times</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>70+</h2>
                                <p>Fewer Errors</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="trusted-companies">
                <div className="container">
                    <div className="row align-items-center">
                        {/* <!-- Left side with text --> */}
                        <div className="col-md-6">
                            <h1 className="fw-bold">Trusted by <br /> <span className="text-danger">2000+</span> <br /> companies <br /> across the <br /> globe</h1>
                        </div>
                        {/* <!-- Right side with images --> */}
                        <div className="col-md-6">
                            <div className="row logos">
                                <div className="col-6">
                                    <img src="assests/favpng_cortex-i-business-organization-technology-innovation 1.png" alt="Aeoon Logo" />
                                </div>
                                <div className="col-6">
                                    <img src="assests/favpng_logo-business-general-contractor-textile-direct-to-garment-printing 1.png" alt="Rhenus Logo" />
                                </div>
                                <div className="col-6">
                                    <img src="assests/favpng_logo-business-general-contractor-textile-direct-to-garment-printing 2.png" alt="CET Logo" />
                                </div>
                                <div className="col-6">
                                    <img src="assests/favpng_logo-rhenus-logistics-transport-freight-forwarding-agency 1.png" alt="Ontime Logistics Logo" />
                                </div>
                                <div className="col-6">
                                    <img src="assests/favpng_logo-rhenus-logistics-transport-freight-forwarding-agency 2.png" alt="Ontime Logistics Logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="video-section container">
                <div className="">
                    <h1 className="fw-bold pb-4"  >Get Started Quickly With These <br /> Best-Practice Templates</h1>
                    <div className="row">
                        {/* <!-- Video 1 --> */}
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="video-container ">
                                <a href="https://www.youtube.com/watch?v=example1" target="_blank">
                                    <img src="assests/Rectangle 149.png" alt="Video 1" className="video-thumb" />
                                    <span className="play-btn">&#9658;</span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Video 2 --> */}
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="video-container">
                                <a href="https://www.youtube.com/watch?v=example2" target="_blank">
                                    <img src="assests/Rectangle 153.png" alt="Video 2" className="video-thumb" />
                                    <span className="play-btn">&#9658;</span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Video 3 --> */}
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="video-container">
                                <a href="https://www.youtube.com/watch?v=example3" target="_blank">
                                    <img src="assests/Rectangle 154.png" alt="Video 3" className="video-thumb" />
                                    <span className="play-btn">&#9658;</span>
                                </a>
                            </div>
                        </div>
                        {/* <!-- Video 4 --> */}
                        <div className="col-lg-6 col-md-6 mb-4">
                            <div className="video-container">
                                <a href="https://www.youtube.com/watch?v=example4" target="_blank">
                                    <img src="assests/Rectangle 155.png" alt="Video 4" className="video-thumb" />
                                    <span className="play-btn">&#9658;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="testimonial-section">
                <div className="container">
                    <h1>Why People Love ILovePDF</h1>
                    <p>The World Most Innovative Companies Are Collaborating In ILovePDF</p>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="testimonial-container d-flex flex-column flex-md-row align-items-center">

                                <div>
                                    <h2 className="fw-bold">One Of The Best And  Great <br />  Experience!</h2>
                                    <p>Fringilla Sodales Condimentum <br /> Etiam Litora Quisque Dui Quisque <br /> Sem Aenean Mollis Velit Cubilia In <br /> Quisque Lacinia Aliquet Ad <br /> Sollicitudin Ornare Suscipit Augue Aliquam.</p>
                                    <span className="testimonial-author">Alex Williams</span>
                                </div>

                                <div className="me-md-4 mb-3 mb-md-0">
                                    <span className="testimonial-quote">“</span>
                                    <img src="assests/sc-profile-image1 1.png" alt="Alex Williams" className="testimonial-image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="trial-offer">
                        <div className="d-flex  align-items-center mx-auto justify-content-evenly">
                            {/* <!-- Left Side: Heading and Paragraph --> */}
                            <div className="col-md-6 text-center text-md-start">
                                <h1 className="fw-bold mb-3" >Enjoy Our <br />Trial Offer</h1>
                                <p className="mb-4" >$1 for 2 days then $7.5/month in annual payment</p>
                            </div>
                            {/* <!-- Right Side: Buttons in Column --> */}
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <div className="d-flex flex-column align-items-center align-items-md-end">
                                    <a href="#" className="btn start-free-btn mb-3">Start Free Trial</a>
                                    <a href="#" className="btn pricing-btn">Plans & Pricing</a>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>




            {/* <!-- FAQ Section --> */}
            <section className="faq-section container">
                <h2 className="faq-heading">Frequently Asked Questions</h2>
                <p className="faq-description">
                    <strong>iLoveIMG</strong> is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks.
                </p>

                {/* <!-- Accordion for FAQ --> */}
                <div className="accordion" id="faqAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Why cant I sign in?
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
            </section>

            {/* <!-- Join Section --> */}
            <section className="stats-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2>$40+</h2>
                                <p >Hours saved per <br /> month</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stat-box">
                                <h2 >$30+</h2>
                                <p >Saved Per <br /> Document</p>
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
                                <p>Fewer Errors  <br />errors</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <div className="trial-offer">
                <div className="d-flex  align-items-center mx-auto justify-content-evenly">
                    {/* <!-- Left Side: Heading and Paragraph --> */}
                    <div className="col-md-6 text-center text-md-start">
                        <h1 className="fw-bold mb-3"  >Enjoy Our <br />Trial Offer</h1>
                        <p className="mb-4" >$1 for 2 days then $7.5/month in annual payment</p>
                    </div>
                    {/* <!-- Right Side: Buttons in Column --> */}
                    <div className="d-flex justify-content-center justify-content-md-end">
                        <div className="d-flex flex-column align-items-center align-items-md-end">
                            <a href="#" className="btn start-free-btn mb-3">Start Free Trial</a>
                            <a href="#" className="btn pricing-btn">Plans & Pricing</a>
                        </div>
                    </div>
                </div>
            </div>








            {/* <!-- FAQ Section --> */}
            <section className="faq-section container my-5">
                <div className="row">
                    {/* <!-- Left side: FAQ description --> */}
                    <div className="col-md-5 mb-4 mb-md-0">
                        <h2 className="faq-heading fw-bold">Frequently Asked Questions</h2>
                        <p className="faq-description">
                            <strong>iLoveIMG</strong> is the web app that helps you modify images in bulk for free. Crop, resize, compress, convert, and more. All the tools you need to enhance your images in just a few clicks.
                        </p>
                    </div>

                    {/* <!-- Right side: Accordion for FAQ --> */}
                    <div className="col-md-7">
                        <div className="accordion" id="faqAccordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Why cant I sign in?
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

            {/* <!-- Join Section --> */}
            <section className="join-section">
                <h2>Join Our 70M+ Users Today</h2>
                <p><u>Join thousands of teams using iLovePDF to do their best work yet.</u></p>
                <div>
                    <a href="#" className="btn btn-start">Start Free Trial</a>
                    <a href="#" className="btn btn-pricing">Plans & Pricing</a>
                </div>
                <div className="join-links">
                    <ul>
                        <li><strong>Document</strong></li>
                        <li><a href="#">Modifying a pdf</a></li>
                        <li><a href="#">Sign a pdf</a></li>
                        <li><a href="#">Separate a pdf</a></li>
                    </ul>
                    <ul>
                        <li><strong>Image</strong></li>
                        <li><a href="#">Edit an image</a></li>
                        <li><a href="#">Sign an image</a></li>
                        <li><a href="#">Convert an image</a></li>
                    </ul>
                    <ul>
                        <li><strong>Sitemap</strong></li>
                        <li><a href="#">Prices</a></li>
                        <li><a href="#">Edit a PDF</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul>
                        <li><strong>Legal Notice</strong></li>
                        <li><a href="#">Legal Notice</a></li>
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* <!-- Social Icons --> */}
                <div className="social-icons">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                </div>
            </section>



            {/* <!-- Copyright Section --> */}
            <section className="copyright-section">

                <p>Copyright © 2024 iLove PDF. All rights reserved.</p>
            </section>


        </>
    );
};

export default Index;