"use client"
import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const OcrPdf = () => {
    const validationSchema = Yup.object().shape({
        file: Yup
            .mixed()
            .required("File is required")
            .test("fileType", "Only PDF files are allowed", (value) => {
                return value && value.length > 0 && value[0].type === "application/pdf";
            }),

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
        
        const formData = new FormData();
        formData.append('type', "pdf_to_ocr");
        formData.append('file', values.file[0]);
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
            const originalName = values.file[0]?.name || "converted";
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
                    <h1>OCR PDF</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">OCR PDF</Link>
            </nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div className="pdf-container border p-4 rounded">
                            <img src="assests/pdf2.png" alt="PDF Icon" />
                        </div>
                        <button className="btn btn-purple rounded-circle add-btn">
                            <img src="https://img.icons8.com/ios-glyphs/24/ffffff/plus-math.png" alt="Add Icon" />
                        </button>
                    </div>

                    <div className="col-md-6">
                        <div className="p-4">
                            <h5>OCR PDF</h5>
                            <div className="alert alert-info text-center">
                                The Accuracy Of Detection Is Increased By Correctly Selecting The Document's Languages.
                            </div>

                            <h5 className="mb-3">Document Languages</h5>
                            <div className="selected-languages mb-2">
                                <span className="badge " style={{background: "#F56129",color: "white"}}>Albanian</span>
                                <span className="badge  " style={{background: "#F56129",color: "white"}}>Arabic</span>
                                <span className="badge " style={{background: "#F56129",color: "white"}}>Armenia</span>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="dropdown mb-3">
                                <button className="btn btn-outline-secondary dropdown-toggle w-100" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search Language
                                </button>
                                <ul className="dropdown-menu w-100 p-3" aria-labelledby="languageDropdown">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langAfrikaans" checked />
                                        <label className="form-check-label" for="langAfrikaans">
                                            Afrikaans
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langAlbanian" checked />
                                        <label className="form-check-label" for="langAlbanian">
                                            Albanian
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langAmharic" checked />
                                        <label className="form-check-label" for="langAmharic">
                                            Amharic
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langArabic" checked />
                                        <label className="form-check-label" for="langArabic">
                                            Arabic
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langArmenia" checked />
                                        <label className="form-check-label" for="langArmenia">
                                            Armenia
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="langAlaskan" checked />
                                        <label className="form-check-label" for="langAlaskan">
                                            Alaskan
                                        </label>
                                    </div>
                                </ul>
                            </div>
                            <input type="file" {...register("file")} id="file-upload" className="file-upload" accept="application/pdf" />
                            <span className="text-danger">{errors.file?.message}</span>
                            <div className="d-grid">
                                <button className="btn  btn-lg" style={{background: "#F56129",color: "white"}}>Apply OCR</button>
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

export default OcrPdf;