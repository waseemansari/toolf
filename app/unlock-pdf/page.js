"use client"
import React from "react";
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const UnlockPDF = () => {
   const validationSchema = Yup.object().shape({
          file: Yup
          .mixed()
          .required("File is required")
          .test("fileType", "Only PDF files are allowed", (value) => {
            return value && value.length > 0 && value[0].type === "application/pdf";
          }),
          password: Yup.string().required("Password is required"),
          confirmPassword: Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
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
      const onSubmit = async  (values, e) => {
          const formData = new FormData();
          formData.append('type', "unprotect-pdf");
          formData.append('password', values.password);
          formData.append('file', values.file[0]);
          const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL_LIVE;
          try {
              const response = await fetch(BASE_URL+'image/tool', {
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
              link.setAttribute('download', 'unlock_'+values.file[0]?.name); // You can customize name
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
          <h1>Unlock PDF</h1>
        </div>
        <div className={style.triangle}></div>
      </header>
      <nav className="text-center">
        <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Unlock PDF</Link>
      </nav>
      <div className="container py-5">
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="file-list">
                <div className="file-item" >
                  <div className="file-icon">
                    <img src="assests/pdf2.png" alt="PDF 1" />
                    <span className="check-icon">&#10004;</span>
                  </div>
                  <p className="file-name">PDF 1</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="password-protect-section">
                <h3>Unlock PDF</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <img src="assests/Group 89.png" alt="Upload Image" />
                  <input type="file" {...register("file")} id="file-upload" className="file-upload" accept="application/pdf" />
                  <span className="text-danger">{errors.file?.message}</span>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Type Password</label>
                    <input type="password" {...register("password")} className="form-control" id="password" placeholder="Type Password" />

                    <span className="text-danger">{errors.password?.message}</span>

                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
                    <input type="password" {...register("confirmPassword")} className="form-control" id="confirmPassword" placeholder="Repeat Password" />
                    <span className="text-danger">{errors.confirmPassword?.message}</span>
                  </div>
                  <p className="form-text">Set a password to unlock  your PDF file</p>
                  <button type="submit" className="btn btn-primary btn-block">Unlock PDF</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnlockPDF;