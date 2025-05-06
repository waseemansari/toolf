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

const PDFToPDFA = () => {
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
        formData.append('type', "pdf_to_pdfa");
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
                    <h1>PDF To PDF/A</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">PDF To PDF/A</Link>
            </nav>
            <div className="container-fluid container-custom">
                <div className="row">
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <div className="pdf-placeholder">
                            <img src="assests/pdf2.png" alt="PDF Icon" />
                            <div className={style.addButton}>+</div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="container mt-5">
                            <div className="badge text-center text-uppercase mb-3" >Premium</div>
                            <div className="card shadow-sm">
                                <div className="card-body p-4">

                                    <h5 className="card-title">PDF/A is an ISO-standardized version of the Portable Document Format (PDF) specialized for use in the archiving and long-term preservation of electronic documents.</h5>
                                    <p className="card-text">Choose with what conformance level you want to convert your document:</p>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card shadow-sm mt-4">
                                    <div className="card-body p-4">
                                        <h5 className="card-title">Set The PDF/A Conformance Level</h5>
                                        <select className="form-select mb-3" aria-label="PDF/A Level" disabled>
                                            <option >PDF/A-2b</option>
                                        </select>
                                        <p>Based on a PDF 1.7 (ISO 32000-1). Level B (basic) conformance requirements plus new features:</p>
                                        <ul>
                                            <li>JPEG 2000 image compression</li>
                                            <li>Support for transparency effects and layers</li>
                                            <li>Embedding of OpenType fonts</li>
                                            <li>Provisions for digital signatures in accordance with the PDF Advanced Electronic Signatures</li>
                                            <li>The option of embedding PDF/A files to facilitate archiving of sets of documents with a single file</li>
                                        </ul>

                                        <div className="form-check mt-4">
                                            <input className="form-check-input" type="checkbox" id="downgradeOption" />
                                            <label className="form-check-label" htmlFor="downgradeOption">
                                                Allow Downgrade of PDF/A Compliance Level
                                            </label>
                                            <p className="text-muted small">In order to convert to PDF/A, when certain elements are found in the original PDF, it's possible that a conformance downgrade is needed to be able to perform the conversion.</p>
                                        </div>
                                        <div className=" add-button mt-4">
                                            <input type="file" {...register("file")} id="file-upload" className="file-upload" accept="application/pdf" />
                                            <span className="text-danger">{errors.file?.message}</span>
                                        </div>
                                        <div className="d-grid mt-4">
                                            <button className="btn btn-warning w-100 mt-3" type="submit" >Convert To PDF/A</button>
                                        </div>
                                    </div>
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

export default PDFToPDFA;