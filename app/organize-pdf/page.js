import React from 'react';
import Link from "next/link";
import style from "../style/organize.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

const OrganizePDF = () => {
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>Organize PDF</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Organize PDF</Link>
            </nav>
            <div className="container py-5">
        <div className="row">
            <div className="col-lg-8">
                <div className="row g-3">
                    <div className="col-3">
                        <div className="pdf-page position-relative active" >
                            <img src="assests/pdf2.png" alt="PDF 1" className="img-fluid" />
                            <p className="text-center">PDF 1</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 2" className="img-fluid" />
                            <p className="text-center">PDF 2</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 d-none">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 3" className="img-fluid" />
                            <p className="text-center">PDF 3</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 3" className="img-fluid" />
                            <p className="text-center">PDF 3</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 3" className="img-fluid" />
                            <p className="text-center">PDF 3</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 3" className="img-fluid" />
                            <p className="text-center">PDF 3</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="pdf-page position-relative" >
                            <img src="assests/pdf2.png" alt="PDF 3" className="img-fluid" />
                            <p className="text-center">PDF 3</p>
                            <div className="page-icons position-absolute top-0 end-0 p-2 align-items-center">
                                <img style={{backgroundColor: "#F56129"}} src="assests/Group 90 (1).png" alt="Edit" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/sync 1.png" alt="Delete" className="icon" />
                                <img style={{backgroundColor: "#F56129"}} src="assests/delete 2.png" alt="Add" className="icon" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-3">
                        <div className="add-page">
                            <button className="btn btn-outline-primary"><img src="assests/Group 90 (1).png" alt="" /></button>
                        </div>
                    </div>
                </div>
            
                <div className="mt-4 text-left">
                    <button className="btn btn-primary">
                        <img src="assests/Group 89.png" alt="Add"  />
                    </button>
                </div>
            </div>
            
            <div className="col-lg-4">
                <div className="card p-3">
                    <h5 style={{color: "#5A26EF;"}}>Total Pages in PDF: 10</h5>
                    <hr className="section-line" />
                    <div className="mb-3">
                        <label className="fw-bold">Rotate Pages Range:</label>
                        <div className="d-flex gap-2">
                            <input type="number" className="form-control" placeholder="From" min="1" />
                            <input type="number" className="form-control" placeholder="To" min="1" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="fw-bold">Delete Pages Range:</label>
                        <div className="d-flex gap-2">
                            <input type="number" className="form-control" placeholder="From" min="1" />
                            <input type="number" className="form-control" placeholder="To" min="1" />
                        </div>
                    </div>
                </div>
                <div className="d-flex gap-2 mt-4">
                    <button className="btn btn-outline-secondary w-100">Reset All</button>
                    <button className="btn btn-warning w-100" style={{backgroundColor: "#F56129"}}>Organize PDF</button>
                </div>
            </div>
            
   
        </div>
    </div>
            <Footer />
        </>
    );
};

export default OrganizePDF;