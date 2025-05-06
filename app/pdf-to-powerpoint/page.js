"use client"
import React, { useRef, useState } from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import classNames from 'classnames'
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

const PdfToPowerPoint = () => {
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
        formData.append('type', "doc_to_pptx");

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
            const originalName = pdf?.file?.name || "converted";
            const newName = originalName.replace(/\.pdf$/i, "") + ".pptx";
            link.href = url;
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
                    <h1>Pdf To PowerPoint </h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Pdf To PowerPoint</Link>
            </nav>
            <div className="container-fluid container-custom">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {/* <!-- Left Side - PDF Placeholder --> */}
                   
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                            <div className={style.pdfPlaceholder}>
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

                        {/* <!-- Right Side - Options --> */}
                        <div className="col-lg-6 col-md-12">
                            <h5><strong>PDF To PowerPoint</strong></h5>

                            {/* <!-- Option 1: No OCR --> */}
                            <div className={style.optionBox}>
                                <div className={style.optionContent}>
                                    <div>
                                        <strong>No OCR</strong>
                                    </div>
                                    <p>Convert PDFs with selectable text into editable PowerPoint files.</p>
                                </div>
                                <input type="checkbox" />
                            </div>
                            <button className={classNames(style.btn, style.btnConvert)} >Convert To PowerPoint</button>
                        </div>
                  
                </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default PdfToPowerPoint;