"use client"
import React, { useRef, useState } from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const PageNumberPdf = () => {
    const [pdf,setPdf]=useState(null);
    const fileInputRef = useRef(null);
    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPdf(file)
        }
    };
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
        if(pdf =="null" || pdf=='undefined'){
            alert('file is required');
        }
        const formData = new FormData();
        formData.append('type', "add_page_number");
        formData.append('from', values.from);
        formData.append('to', values.to);
        formData.append('start', values.start);
        formData.append('file', pdf);
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
            const originalName = pdf?.name || "converted";
            const newName = originalName.replace(/\.pdf$/i, "") + ".pdf";
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
                    <h1>Page Number Pdf</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Page NumberPdf</Link>
            </nav>
            <div className="container py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row g-3">
                                <div className="col-3">
                                    <div className="pdf-page position-relative active" >
                                        <img src="assests/pdf2.png" alt="PDF 1" className="img-fluid" />
                                        <p className="text-center">PDF 1</p>

                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 text-left">
                                <div>
                                    <input
                                        type="file"
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
                        <div className="col-lg-4">
                            <div className="card p-3">
                                <h5 style={{ color: "#5A26EF" }}>Total Pages in PDF: 10</h5>
                                <hr className="section-line" />
                                <div className="mb-3">
                                    <label className="fw-bold">Pages Range:</label>
                                    <div className="d-flex gap-2">
                                        <input type="number" {...register("from")} className="form-control" placeholder="From" min="1" />
                                        
                                        <input type="number" {...register("to")} className="form-control" placeholder="To" min="1" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="fw-bold">Pages Start:</label>
                                    <div className="d-flex gap-2">
                                        <input type="number" {...register("start")} className="form-control" placeholder="From" min="1" />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex gap-2 mt-4">
                                <button className="btn btn-outline-secondary w-100">Reset All</button>
                                <button className="btn btn-warning w-100" style={{ backgroundColor: "#F56129" }}>Add Number PDF</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default PageNumberPdf;