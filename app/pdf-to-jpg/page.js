"use client"
import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import classNames from 'classnames'

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const PdfToJPG = () => {
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
                    formData.append('type', "pdf_to_docs");
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
                        const newName = originalName.replace(/\.pdf$/i, "") + ".zip";
                        
                        link.href = url;
                        link.setAttribute('download', newName);
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                        
                        window.URL.revokeObjectURL(url);
                    } catch (error) {
                        console.error('Download error:', error);
                        toast.error('Something went wrong while processing the file.');
                    }
                    try {
                        const response = await fetch(BASE_URL + 'image/download/'+"waseem(MernStack)_jpgs.zip", {
                          responseType: 'blob', // Important for file download
                        });
                  
                        // Create a link to trigger the file download
                        const link = document.createElement('a');
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        link.href = url;
                        link.setAttribute('download', filename); // The file name that will be downloaded
                        document.body.appendChild(link);
                        link.click();
                        link.remove();
                      } catch (error) {
                        console.error('Error downloading the file:', error);
                      }
                    notify();
                };
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>Pdf To JPG </h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Pdf To JPG</Link>
            </nav>
            <div className="container-fluid container-custom">
                <div className="row">
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <!-- Left Side - PDF Placeholder --> */}
                    <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                        <div className="pdf-placeholder">
                            <img src="assests/pdf2.png" alt="PDF Icon" />
                                {/* <!-- Add Button --> */}
                                <div className={style.addButton}>+</div>

                        </div>
                    </div>

                    {/* <!-- Right Side - Options --> */}
                    <div className="col-lg-6 col-md-12">
                        <h5><strong>PDF To JPG Options</strong></h5>
                        <div className="mb-3 p-3 border rounded">
                            <div className="checkbox-container">

                                <div>
                                    <strong>Page To JPG </strong> 
                                          <input type="checkbox" checked />
                                        <p className="mb-0"> <img className="" style={{height: "50px", width: "50px"}} src="assests/image- 2.png" alt="" /> To change the order of your PDFs, drag and drop the files as you want.</p>
                                    </div>
                                </div>
                            </div>

                            <h5><strong>Image Quality</strong></h5>
                            <div className="d-flex mb-3">
                                <button className="btn btn-primary btn-quality me-2">Normal</button>
                                <button className="btn btn-light btn-quality">High</button>
                            </div>
                       

                            <div className="mb-3 p-3 border rounded">
                           
                                <div className="checkbox-container">

                                    <div>
                                    <input type="file"  {...register("file")} className="form-control" id="watermark-text" accept="application/pdf" />
                                    <span className="text-danger">{errors.file?.message}</span>
                                        <strong>Extract Images</strong> <input type="checkbox" checked />
                                            <p className="mb-0"> <img className="" style={{height: "50px", width: "50px"}} src="assests/image- 2.png" alt="" /> All embedded images inside the PDF will be extracted as JPG images.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Convert Button --> */}
                                <div className="convert-section">
                                <button className={classNames(style.btn, style.btnConvert)}>Convert To JPG</button>
                                </div>
                              
                            </div>
                          </form>
                        </div>
                        
                    </div>
                    <Footer />
                </>
                );
};

export default PdfToJPG;