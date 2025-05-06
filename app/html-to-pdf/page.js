"use client"
import React, { useState } from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const HTMLTOPDF = () => {
    const validationSchema = Yup.object().shape({
        url: Yup.string().required("url is required"),
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
        formData.append('type', "html_to_pdf");
        formData.append('url', values.url);
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
            const originalName = `html-${Date.now()}.pdf` || "converted";
            const newName = originalName.replace(/\.html$/i, "") + ".pdf";
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
    const [url, setUrl] = useState('');

    const handleChange = (e) => {
      let value = e.target.value;
  
      // Add protocol if missing
      if (value && !/^https?:\/\//i.test(value)) {
        value = 'https://' + value;
      }
  
      setUrl(value);
    };
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>HTMLTo PDF</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">HTML To PDF</Link>
            </nav>

            <div className="container-fluid py-5">
                <div className="row">
                    {/* <!-- Image Preview Section --> */}
                    <div className="col-lg-7 col-md-12 mb-3 ">
                        <div className="image-preview">
                        {url && (
        <div className="mt-4">
          <iframe
            src={url}
            title="Website Preview"
            width="100%"
            height="600px"
            
          ></iframe>
        </div>
      )}
                        </div>
                    </div>
                    <div className="form-container p-4 border-custom col-lg-5 col-md-12">
                        <h5 className="mb-3 text-center fw-bold">HTML To PDF</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="websiteUrl" className="form-label">Website Url</label>
                                <input type="url" {...register("url")}    onChange={handleChange} className="form-control" id="websiteUrl" placeholder="www.url.com" />
                                <span className="text-danger">{errors.url?.message}</span>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="screenSize" className="form-label">Screen Size</label>
                                <select className="form-select" id="screenSize">
                                    <option value="A3">A3 (297x420 mm)</option>
                                    <option value="A4">A4 (210x297 mm)</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="pageSize" className="form-label">Page Size</label>
                                <select className="form-select" id="pageSize">
                                    <option value="A3">A3 (297x420 mm)</option>
                                    <option value="A4">A4 (210x297 mm)</option>
                                </select>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="onePageLong" />
                                <label className="form-check-label" htmlFor="onePageLong">One Page Long</label>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Orientation</label>
                                <div className="d-flex">
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="orientation" id="portrait"  />
                                        <label className="form-check-label" htmlFor="portrait">
                                            <img src="assests/Frame (12).png" alt="Portrait Icon" />
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="orientation" id="landscape" />
                                        <label className="form-check-label" htmlFor="landscape">
                                            <img src="assests/Frame (2).png" alt="Landscape Icon" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Page Margin</label>
                                <div className="d-flex">
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="margin" id="noMargin"  />
                                        <label className="form-check-label" htmlFor="noMargin">
                                            <img src="assests/Frame (3).png" alt="No Margin Icon" />
                                        </label>
                                    </div>
                                    <div className="form-check me-3">
                                        <input className="form-check-input" type="radio" name="margin" id="smallMargin" />
                                        <label className="form-check-label" htmlFor="smallMargin">
                                            <img src="assests/Frame (4).png" alt="Small Margin Icon" />
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="margin" id="largeMargin" />
                                        <label className="form-check-label" htmlFor="largeMargin">
                                            <img src="assests/Frame (5).png" alt="Large Margin Icon" />
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="blockAds" />
                                <label className="form-check-label" htmlFor="blockAds">Try to block ads</label>
                            </div>

                            <div className="mb-3 form-check position-relative">
                                <input type="checkbox" className="form-check-input" id="removePopups" />
                                <label className="form-check-label" htmlFor="removePopups">Remove overlay popups</label>
                                <span className="eye-icon">
                                    <img src="assests/Group 143.png" alt="eye icon" className="eye-img" />
                                </span>
                            </div>

                            <button type="submit" className="btn btn-primary w-100">Convert to PDF</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HTMLTOPDF;