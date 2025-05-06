"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import style from "../style/compress.module.css"
import Footer from '../../components/Footer';
import SiteNavbar from '../../components/SiteNavbar';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const CompressPdf = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
    }, []);
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
    /////////
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
        formData.append('type', "compress-pdf");

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
            const originalName = "compress_" + pdf?.file?.name || "converted";
            const newName = originalName.replace(/\.pdf$/i, "") + ".pdf";
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
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>compress PDF</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Compress</Link>
            </nav>
            <div className="container py-5">
                <div className="row">
                    {/* <!-- PDF Thumbnail Section --> */}
                    <div className="container py-5">
                        <div className="row">
                            {/* <!-- PDF Thumbnail Section --> */}
                            <div className="col-md-6 position-relative">
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

                            {/* <!-- Compression Options Section --> */}
                            <form onSubmit={handleSubmit(onSubmit)}>



                                <div className="col-md-6">

                                    <h3>Compress PDF</h3>
                                    <div className={style.compressionOptions}>
                                        <div className={`${style.compressionOption} ${style.active}`} >
                                            Extreme Compression <span>✔</span>
                                        </div>
                                        <div className={style.compressionOption} >
                                            Recommended Compression <span>✔</span>
                                        </div>
                                        <div className={style.compressionOptions} >
                                            Less Compression <span>✔</span>
                                        </div>

                                        <div className={style.optimizeSlider}>
                                            <label htmlFor="optimize-range" className="form-label">Optimize:</label>
                                            <input type="range" className="form-range slider" id="optimize-range" />
                                        </div>
                                    </div>

                                    <button className={style.compressButton}>Compress PDF</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CompressPdf;
