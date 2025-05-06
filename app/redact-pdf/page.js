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

const RedactPdf = () => {
  
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
    formData.append('type', "redact_pdf");
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

      // Generate a download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'redact_' + values.file[0]?.name); // You can customize name
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
                    <h1>Redact Pdf</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Redact Pdf</Link>
            </nav>
            <div className="container-fluid px-5">
                <div className="row mt-5">
                    <div className="col " >
                        <div className="row  justify-content-between shadow border p-3 rounded-3" style={{ background: " rgb(240, 240, 240) " }}>

                            <div className="col-4  d-flex align-items-center justify-content-between   " style={{ color: "rgb(96, 95, 95)" }} >
                                <i className="fa-solid fa-hand  fs-5"></i>

                                <i className="fa-regular fa-file"></i>
                                <i className="fa-solid fa-image"></i>
                                <i className="fa-regular fa-file-lines"></i>
                                <i className="fa-solid fa-eraser"></i>
                            </div>
                        </div>

                        <div className="row justify-content-center ">
                            <div className="col-2 p-3 d-flex align-items-center" >
                                <i className="fa-regular fa-file fs-1 p-3 border border-2 rounded-3 shadow bg-light "></i>
                                <i className="fa-regular fa-file fs-1 p-3 border border-2 rounded-3 shadow bg-light mt-2"></i>
                                <i className="fa-regular fa-file fs-1 p-3 border border-2 rounded-3 shadow bg-light mt-2"></i>
                                <i className="fa-regular fa-file fs-1 p-3 border border-2 rounded-3 shadow bg-light mt-2"></i>
                            </div>
                            <div className="col  border mt-4 p-3 bg-light me-4 rounded-3 shadow">


                                <div className=" pdf d-flex align-items-center justify-content-center my-5">
                                    <input type="file" id="file-upload" style={{ display: "none" }} />

                                    <label for="file-upload" className="custom-file-upload">
                                        <i className="fa-regular fa-file-pdf" style={{ fontSize: "150px" }}></i>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="col  ms-4  p-3 rounded-3 shadow"  >
                        <div className="row ms-4"  >
                            <div className="col  d-flex   align-items-center"  >
                                <h4 className="fw-bold m-0">Redact PDF</h4>
                            </div>
                        </div>

                        <div className="row p-3">


                            <div className="col  mt-4  rounded-3 p-5 ">

                                <h2 className="fst-bold">Page 1</h2>

                                <div className="row  border align-items-center rounded-3 bg-light justify-content-between p-3">

                                    <div className="col-1 text-center  " style={{ color: "rgb(187, 187, 187)" }}>
                                    </div>
                                    <div className="col-9 fs-2  " style={{ color: "rgb(187, 187, 187)" }}>
                                        <p className="m-0">Search Text</p>
                                    </div>
                                    <div className="col-1 text-center ">

                                    </div>
                                </div>


                                <div className="row  border align-items-center rounded-3 bg-light justify-content-between p-3 mt-4">
                                    <div className="col-1 d-flex align-items-center justify-content-center "  >
                                        <i className="fa-solid fa-t"></i>
                                    </div>
                                    <div className="col-1 text-center  " style={{ color: "rgb(187, 187, 187)" }}>
                                    </div>
                                    <div className="col-9 fs-2  " style={{ color: "rgb(187, 187, 187)" }}>
                                        <p className="m-0">Text</p>
                                    </div>
                                    <div className="col-1 text-center ">

                                    </div>
                                </div>



                                <div className="row  border align-items-center rounded-3 bg-light justify-content-between p-3 mt-4">
                                    <div className="col-1 d-flex align-items-center justify-content-center "  >
                                        <i className="fa-solid fa-credit-card"></i>
                                    </div>
                                    <div className="col-1 text-center  " style={{ color: "rgb(187, 187, 187)" }}>

                                    </div>
                                    <div className="col-9 fs-2  " style={{ color: "rgb(187, 187, 187)" }}>
                                        <p className="m-0">Credit Card</p>
                                    </div>
                                    <div className="col-1 text-center ">

                                    </div>
                                </div>



                                <div className="row  border align-items-center bg-light rounded-3 justify-content-between p-3 mt-4">
                                    <div className="col-1 d-flex align-items-center justify-content-center " style={{ flexDirection: "column" }} >

                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                    <div className="col-1 text-center  " style={{ color: "rgb(187, 187, 187)" }}>
                                    </div>
                                    <div className="col-9 fs-2  " style={{ color: "rgb(187, 187, 187)" }}>
                                        <p className="m-0">Phone Number</p>
                                    </div>
                                    <div className="col-1 text-center ">

                                    </div>
                                </div>


                                <div className="row  border align-items-center bg-light rounded-3 justify-content-between p-3 mt-4">
                                    <div className="col-1 d-flex align-items-center justify-content-center " style={{ flexDirection: "column" }} >

                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="col-1 text-center  " style={{ color: "rgb(187, 187, 187)" }}>
                                    </div>
                                    <div className="col-9 fs-2  " style={{ color: "rgb(187, 187, 187)" }}>
                                        <p className="m-0">Email</p>
                                    </div>
                                    <div className="col-1 text-center ">

                                    </div>

                                </div>
                            </div>
                            <div className="d-flex">
                                <a className=" btn btn-white border w-50 p-3 ms-3 fs-4 rounded-pill" href="#" role="button"
                                >Cancle
                                </a>
                                <a
                                    className="btn btn-primary p-3 w-50 fs-4 rounded-pill"
                                    href="#"
                                    role="button"
                                >Accept</a
                                >
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input type="file" {...register("file")} id="file-upload" className="file-upload" accept="application/pdf" />
                            <span className="text-danger">{errors.file?.message}</span>
                            <div className="col-12 d-flex justify-content-end">
                                <div className="col-6  mt-4  d-flex " >
                                  <button className="btn  border w-100 p-3 ms-3 fs-4 "                                     style={{ background: "#F56129", borderRadius: " 30px ", color: "aliceblue" }}
                                  >Download Report</button>

                                   
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
};

export default RedactPdf;