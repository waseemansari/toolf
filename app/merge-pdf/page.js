"use client"
import React, { useRef, useState } from 'react';
import Link from "next/link";
import style from "../style/mergePdf.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import "react-pdf/dist/esm/Page/TextLayer.css";
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";         // <-- You already have this
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const MergePdf = () => {
  pdfjs.GlobalWorkerOptions.workerSrc =
    `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState({});
  const [pageNumber, setPageNumber] = useState({});
  const [countPage, setCountPage] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(countPage);
  }

  const nextPag = (index) => {
    setPageNumber(prev => ({
      ...prev,
      [index]: (prev[index] || 1) + 1
    }));
  };

  const previousPage = (index) => {
    setPageNumber(prev => ({
      ...prev,
      [index]: (prev[index] || 1) - 1
    }));
  };

  const [pdfs, setPdfs] = useState([]);
  const fileInputRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const fileData = files.map(file => ({
      name: file.name,
      url: URL.createObjectURL(file),
      file: file,    // <-- Save real File object here
    }));
    setPdfs(fileData);
  };

  const validationSchema = Yup.object().shape({
    // files: Yup
    //   .mixed()
    //   .required("File is required")
    //   .test("fileType", "Only PDF files are allowed", (value) => {
    //     return value && value.length > 0 && value[0].type === "application/pdf";
    //   }),
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

    if (pdfs.length < 2) {
      alert('Please Upload files');
      return
    }
    const formData = new FormData();
    for (let pdf of pdfs) {
      formData.append('files', pdf.file); // ✅ Correct
    }
 
    const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL_LIVE;
    try {
      const response = await fetch(BASE_URL + 'image/merge-pdf', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to process file');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      const timestamp = new Date().getTime();
      link.href = url;
      link.setAttribute("download", `merged_${timestamp}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      toast.success("PDF merged and downloaded!");
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Something went wrong while processing the file.');
    }
    notify();
  };
  return (
    <>
      <SiteNavbar />
      <header className="custom-header">
        <div className="container text-center py-5">
          <h1 style={{ padding: " 35px" }}>Merga PDF</h1>
        </div>
        <div className="triangle"></div>
      </header>
      <nav className="text-center" style={{ padding: "35px 0" }}>
        <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Merga PDF</Link>
      </nav>
      <div className="container py-5">
        <div className="row">
          {pdfs.length > 0 && pdfs.map((pdf, index) => (
            <div key={index} className="col-6 col-sm-6 col-md-6 col-lg-6 mb-4">
              <div className={style.pdfCard}>
                <Document
                  file={pdf.url}
                  onLoadSuccess={({ numPages }) => {
                    setNumPages(prev => ({ ...prev, [index]: numPages }));
                    setPageNumber(prev => ({ ...prev, [index]: 1 }));
                  }}
                >
                  <Page pageNumber={pageNumber[index] || 1} />
                  <div className="text-center mt-2">
                    <button type="button" onClick={() => previousPage(index)} disabled={(pageNumber[index] || 1) <= 1}>
                      Previous
                    </button>
                    <span> Page {pageNumber[index] || 1} of {numPages[index] || 1} </span>
                    <button type="button" onClick={() => nextPag(index)} disabled={(pageNumber[index] || 1) >= (numPages[index] || 1)}>
                      Next
                    </button>
                  </div>
                </Document>
              </div>
            </div>
          ))}


        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">

              <div>
                <input
                  multiple
                  type="file"
                  accept="application/pdf"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <button className="btn btn-primary" onClick={handleClick}>
                  <img src="assests/Group 89.png" alt="Add" />
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Merge PDF</h3>
              <div className="alert alert-primary">
                <strong style={{ color: " #5A26EF" }}>Total Selected PDF: <span id="selected-count">0</span></strong>
                <hr className="section-line" />ni
                <p>To change the order of your PDFs, drag and drop the files as you want.</p>
              </div>
              <button className="btn btn-warning w-100 mt-3 " style={{ backgroundColor: "#F56129" }}>Merga PDF</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default MergePdf;