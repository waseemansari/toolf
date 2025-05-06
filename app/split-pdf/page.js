"use client"
import React, { useRef, useState } from 'react';
import Link from "next/link";
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const SplitPdf = () => {
    const [pdf, setPdf] = useState(null);
    const fileInputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setPdf({ file, url: fileUrl }); // ✅ Save both file and URL
        }
    };
    pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [countPage, setCountPage] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(countPage);
    }
    const nextPag = async (page) => {
        setCountPage(countPage + page);
        setPageNumber(countPage);
    }
    const previousPage = async (page) => {
        setCountPage(countPage - page);

        setPageNumber(countPage);
    }
    ////////////
    const validationSchema = Yup.object().shape({
        // file: Yup
        //     .mixed()
        //     .required("File is required")
        //     .test("fileType", "Only PDF files are allowed", (value) => {
        //         return value && value.length > 0 && value[0].type === "application/pdf";
        //     }), 
    });
    let defaultValues = { name: "" };
    const notify = () => '';
    const methods = useForm({
        mode: "onTouched",
        resolver: yupResolver(validationSchema),
        defaultValues,
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    const onSubmit = async (values, e) => {
        if (pdf == "null" || pdf == 'undefined') {
            alert('file is required');
        }
        const formData = new FormData();
        formData.append('file', pdf?.file);

        formData.append('type', "split_pdf");

        const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL_LIVE;

        try {
            const response = await fetch(BASE_URL + 'image/tool', {
                method: 'POST',
                body: formData,
            });
            if (!response.ok) {
                throw new Error('Failed to process file');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            const originalName = pdf?.file?.name || "converted";
            const newName = originalName.replace(/\.pdf$/i, "") + ".zip";
            link.setAttribute('download', newName); // You can customize name
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

            toast.success('PDF protected and downloaded!');
        } catch (error) {
            console.error('Download error:', error);
            toast.error('Something went wrong while processing the file.');
        }
        notify();
    };


    return (
        <>
            <SiteNavbar />
            <header className="custom-header">
                <div className="container text-center py-5">
                    <h1 >Split PDF</h1>
                </div>
                <div className="triangle"></div>
            </header>
            <nav className="text-center" >
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Tools</Link>
            </nav>

            {/* <!-- Container for Split PDF Section --> */}
            <div className="container my-5 split-pdf-section">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <h2 className="text-center mb-5">Split PDF</h2>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 text-center pdf-preview">
                            <div className="row g-3">
                                <div className="col-4">
                                    <div className="pdf-page">
                                        <Document
                                            file={pdf?.url}
                                            onLoadSuccess={onDocumentLoadSuccess}
                                        >
                                            <Page pageNumber={pageNumber} />
                                            <button onClick={e => previousPage(1)} >Previous Page</button>/
                                            <button onClick={e => nextPag(1)} >Next Page</button>
                                        </Document>
                                        <p>
                                            Page {pageNumber} of {numPages}
                                        </p>
                                        <div>
                                            <input

                                                type="file"
                                                accept="application/pdf"
                                                ref={fileInputRef}
                                                style={{ display: 'none' }}
                                                onChange={handleFileChange}
                                            />
                                            <button className="btn btn-primary" onClick={handleClick}>
                                                <img src="assests/Group 89.png" alt="Add" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 range-section">

                            <div className="d-flex justify-content-between mb-3">
                                <button className="btn btn-primary">Split by Range</button>
                                <button className="btn btn-outline-secondary">Extract Page</button>
                            </div>

                            {/* <!-- Range Mode Options --> */}
                            <h5>Range Mode:</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rangeMode" id="customRange" />
                                <label className="form-check-label" htmlFor="customRange">Custom Range</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="rangeMode" id="fixedRange" />
                                <label className="form-check-label" htmlFor="fixedRange">Fixed Range</label>
                            </div>

                            {/* <!-- Range Input --> */}
                            <div className="mt-3">
                                <label htmlFor="splitRange" className="form-label">Split Into Range Of:</label>
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary">-</button>
                                    <input type="text" className="form-control text-center" id="splitRange" />
                                    <button className="btn btn-outline-secondary">+</button>
                                </div>
                            </div>

                            {/* <!-- Info Text --> */}
                            <div className="range-text bg-light p-2 mt-2 text-center">This PDF will be split into files of 2 pages.</div>

                            {/* <!-- Split Button --> */}
                            <button className="btn btn-warning w-100 mt-3 " >Split PDF</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default SplitPdf;