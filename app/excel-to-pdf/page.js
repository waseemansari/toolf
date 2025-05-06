"use client"
import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import classNames from 'classnames'
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const ExcelToPdf = () => {
    const validationSchema = Yup.object().shape({
        file: Yup
        .mixed()
        .required("File is required")
        .test("fileType", "Only Excel files are allowed", (value) => {
          return (
            value &&
            value.length > 0 &&
            (
              value[0].type === "application/vnd.ms-excel" || // .xls
              value[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" // .xlsx
            )
          );
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
        formData.append('type', "ppt-to-pdf");
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
            const originalName = values.file[0]?.name || "converted";
            const newName = originalName.replace(/\.(xlsx?|XLSX?)$/, "") + ".pdf";            link.href = url;
            link.setAttribute('download', newName); // You can customize name
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);
            toast.success('PDF  downloaded!');
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
                    <h1>Excel To PDF </h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Excel To PDF</Link>
            </nav>
            <div className="container-fluid container-custom">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* <!-- Left Side - PDF Placeholder --> */}
                        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                            <div className={style.pdfPlaceholder}>
                                <img src="assests/pdf2.png" alt="PDF Icon" />
                                {/* <!-- Add Button --> */}
                                <button className="btn btn-primary">
                                    <input type="file"  {...register("file")} className="form-control" id="watermark-text"
                                    accept=".xls,.xlsx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                                    />
                                    <span className="text-danger">{errors.file?.message}</span>

                                    <img src="assests/Group 89.png" alt="Add" />
                                </button>
                            </div>
                        </div>

                        {/* <!-- Right Side - Options --> */}
                        <div className="col-lg-6 col-md-12">
                            <h5>Convert Excel To PDF</h5>
                            <div className={style.descriptionBox}>
                                <p>Make PPT and PPTX slideshows easy to view by converting them to PDF.</p>
                            </div>
                            <button className={classNames(style.btn, style.btnConvert)}>Convert To PDF</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ExcelToPdf;