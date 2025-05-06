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

const ScanPdf = () => {
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
        formData.append('type', "scan_pdf");
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
            link.setAttribute('download', 'scan_' + values.file[0]?.name); // You can customize name
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
                    <h1>Scan Pdf</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Scan Pdf</Link>
            </nav>
            <div className="container py-5">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <div className="pdf-thumbnail add-page">
                                        <div className="pdf-thumbnail selected">
                                            <img src="assests/Group 89.png" alt="PDF 1" />
                                            <div className="pdf-title">PDF 1</div>
                                            <input type="file" {...register("file")} id="file-upload" className="file-upload" accept="application/pdf" />
                                            <span className="text-danger">{errors.file?.message}</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            
                            <button className="btn btn-warning w-100 mt-3 " >Scan Pdf</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ScanPdf;