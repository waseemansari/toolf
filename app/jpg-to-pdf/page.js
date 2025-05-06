
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
const JPGToPDF = () => {
    const validationSchema = Yup.object().shape({
        file: Yup.mixed()
            .required("File is required")
            .test("fileType", "Only JPG files are allowed", (value) => {
                return (
                    value &&
                    value.length > 0 &&
                    ["image/jpeg", "image/jpg"].includes(value[0].type)
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
        formData.append('type', "jpgs_to_pdf");
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
            const newName = originalName.replace(/\.jpg$/i, "") + ".pdf";
            link.href = url;
            link.setAttribute('download',  newName); // You can customize name
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
                    <h1>JPG To JPG</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">JPG To JPG</Link>
            </nav>
            <div className="container my-5"></div>
            <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* <!-- Left Side - Image Upload Section --> */}
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="image-grid">
                            <div className="image-container">
                                <div className="left-images">
                                    <img src="assests/close-up-injured-man-with-dark-bruise-eyes-brain-concussion-wears-bandage 2.png" alt="Left Image 1" className="img-fluid" />
                                    <img src="assests/close-up-shot-happy-attractive-young-european-man-with-beard-wearing-glasses-green-sportswear-looking-away-during-evening-ride-park-weekend.png" alt="Left Image 2" className="img-fluid" />
                                </div>
                                <div className="right-images">
                                    <img src="assests/concept-work-from-home-freelance-remote-girl-sitting-bed-with-laptop-talking-phone.png" alt="Right Image 1" className="img-fluid" />
                                    <img src="assests/groceries-packages-delivery-covid-19-quarantine-shopping-concept-serious-courier-red-uniform-gloves-protective-face-mask-deliver-package-box-client-house-during-coronavirus.png" alt="Right Image 2" className="img-fluid" />
                                </div>
                            </div>

                            <div className="add-image mt-3 text-center">
                                <button className="btn btn-primary">
                                    <input type="file"  {...register("file")} className="form-control" id="watermark-text"  accept="image/jpeg" multiple />
                                    <span className="text-danger">{errors.file?.message}</span>

                                    <img src="assests/Group 89.png" alt="Add" />
                                </button>                            </div>
                        </div>
                    </div>

                    {/* <!-- Right Side - PDF Options --> */}
                    <div className="col-lg-6 col-md-12">
                        <div className="pdf-options">
                            <h4>Image To PDF Options</h4>

                            {/* <!-- Page Orientation --> */}
                            <div className="option my-3">
                                <label>Page Orientation</label>
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary me-2">Portrait</button>
                                    <button className="btn btn-outline-secondary">Landscape</button>
                                </div>
                            </div>

                            {/* <!-- Page Size --> */}
                            <div className="option my-3">
                                <label for="page-size">Page Size</label>
                                <select id="page-size" className="form-select">
                                    <option selected>Fit (Same page size as image)</option>
                                    <option>A4</option>
                                    <option>Letter</option>
                                </select>
                            </div>

                            {/* <!-- Margins --> */}
                            <div className="option my-3">
                                <label>Margins</label>
                                <div className="d-flex justify-content-start">
                                    <button className="btn btn-primary me-2">No</button>
                                    <button className="btn btn-outline-secondary me-2">Small</button>
                                    <button className="btn btn-outline-secondary">Big</button>
                                </div>
                            </div>

                            {/* <!-- Merge Option --> */}
                            <div className="form-check mt-4">
                                <input className="form-check-input" type="checkbox" id="merge-images" />
                                <label className="form-check-label" for="merge-images">Merge all images in one PDF file</label>
                            </div>
 
                            {/* <!-- Convert Button --> */}
                            <div className="mt-4">
                                <button className="btn btn-lg btn-warning w-100">Convert To PDF</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default JPGToPDF;