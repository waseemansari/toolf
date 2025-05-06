"use client";

import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const WaterMarkPDF = () => {
    const validationSchema = Yup.object().shape({
        file: Yup
            .mixed()
            .required("File is required")
            .test("fileType", "Only PDF files are allowed", (value) => {
                return value && value.length > 0 && value[0].type === "application/pdf";
            }),
        text: Yup.string().required("Text is required"),

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
        formData.append('type', "add-watermark");
        formData.append('position', values.position);
        formData.append('rotation', values.rotation);
        formData.append('text', values.text);
        formData.append('text_type', values.text_type);
        formData.append('transparency', values.transparency);
        formData.append('watermark_type', values.watermark_type);
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
            link.setAttribute('download', 'watermark_' + values.file[0]?.name); // You can customize name
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
                    <h1>WaterMark PDF</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">WaterMark PDF</Link>
            </nav>
            <div className="container py-5">
                <div className="row">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-lg-8">
                            <div className="row g-3">

                                <div className="col-3">
                                    <div className="pdf-page position-relative" >
                                        <img src="assests/pdf2.png" alt="PDF 2" className="img-fluid" />
                                        <p className="text-center">PDF 2</p>
                                        <div className="page-icons position-absolute top-0 end-0 p-2 d-none">
                                            <img src="assests/Group 90 (1).png" alt="Add" className="icon" />
                                            <img src="assests/sync 1.png" style={{ backgroundColor: "#F56129" }} alt="Edit" className="icon" />
                                            <img src="assests/delete 2.png" style={{ backgroundColor: "#F56129" }} alt="Delete" className="icon" />
                                        </div>
                                    </div>
                                </div>


                                <div className="col-3">
                                    <button className="btn btn-primary">
                                        <input type="file"  {...register("file")} className="form-control" id="watermark-text" accept="application/pdf"/>
                                        <span className="text-danger">{errors.file?.message}</span>

                                        <img src="assests/Group 89.png" alt="Add" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card p-4">
                                <h5 className="mb-3 fw-bold">Watermark Options</h5>
                                <div className="mb-3 d-flex justify-content-between">
                                    <input type='radio' checked value="text" className="btn btn-primary w-50 me-2" {...register("watermark_type")} />Place Text
                                    <input type='radio' value="img" className="btn btn-outline-secondary w-50" {...register("watermark_type")} />Place Image
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="watermark-text" className="form-label">Text:</label>
                                    <input type="text" {...register("text")} className="form-control" id="watermark-text" placeholder="ILovePDF" />
                                    <span className="text-danger">{errors.text?.message}</span>

                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Text Format:</label>
                                    <div className="d-flex gap-2">
                                        <select className="form-select w-50" {...register("text_type")} >
                                            <option selected>Arial</option>
                                            <option value="1">Times New Roman</option>
                                            <option value="2">Courier New</option>
                                        </select>
                                        {/* <div className="btn-group w-50" role="group">
                                        <button className="btn btn-outline-secondary" >B</button>
                                        <button className="btn btn-outline-secondary">I</button>
                                        <button className="btn btn-outline-secondary">U</button>
                                        <button className="btn btn-outline-secondary">A</button>
                                    </div> */}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Positions:</label>
                                    <div className="d-flex">
                                        <input type="checkbox" className="form-check-input me-2" {...register("position")} /> Mosaic
                                    </div>
                                    <div className="position-grid">
                                        <div className="grid-container">
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                            <div className="grid-item"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex mb-3 gap-2">
                                    <div className="w-50">
                                        <label className="form-label">Transparency:</label>
                                        <select className="form-select" {...register("transparency")}>
                                            <option value={25}>25%</option>
                                            <option value={50}>50%</option>
                                            <option value={75}>75%</option>
                                        </select>
                                    </div>
                                    <div className="w-50">
                                        <label className="form-label">Rotation:</label>
                                        <select className="form-select" {...register("rotation")}>
                                            <option> Dont Rotate</option>
                                            <option>90°</option>
                                            <option>180°</option>
                                            <option>270°</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Pages:</label>
                                    <div className="d-flex gap-2">
                                        <input type="number" className="form-control" placeholder="1" />
                                        <input type="number" className="form-control" placeholder="5" />
                                    </div>
                                </div>

                                {/* <div className="mb-3">
                                <label className="form-label">Layer:</label>
                                <div className="d-flex gap-3">
                                    <div className="layer-option">
                                        <input type="radio" name="layer" id="below" checked />
                                        <label htmlFor="below" className="d-block">Below</label>
                                    </div>
                                    <div className="layer-option">
                                        <input type="radio" name="layer" id="above" />
                                        <label htmlFor="above" className="d-block">Above</label>
                                    </div>
                                </div>
                            </div> */}

                                <div className="d-grid mt-4">
                                    <button className="btn btn-warning" >Add Watermark</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WaterMarkPDF;