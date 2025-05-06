import React from 'react';
import Link from "next/link";
import style from "../style/pdftoword.module.css"
import SiteNavbar from '../../components/SiteNavbar';
import Footer from '../../components/Footer';

const ComparePdf = () => {
    return (
        <>
            <SiteNavbar />
            <header className={style.customHeader}>
                <div className="container text-center py-5">
                    <h1>Compare Pdf</h1>
                </div>
                <div className={style.triangle}></div>
            </header>
            <nav className="text-center">
                <Link href="/" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Compare PDF</Link>
            </nav>
            <div className="container-fluid p-5">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div
              className="col shadow d-flex align-items-center border p-3 rounded-3"
              style={{background: "rgb(240, 240, 240)"}}
            >
              <i className="fa-solid fa-hand fs-5"></i>
              <i className="fa-solid fa-file ms-3 fs-5"></i>
              <p className="m-0 ms-3 fs-6">Scroll Syn</p>
            </div>
          </div>

          <div className="row">
            <div className="col border mt-4 p-3 bg-light me-4 rounded-3 shadow">
              <div
                className="icons__box d-flex align-items-center justify-content-center"
              >
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-trash-can ms-3"></i>
                <i className="fa-solid fa-rotate ms-3"></i>
              </div>

              <div
                className="pdf d-flex align-items-center justify-content-center my-5"
              >
                {/* <!-- Hidden file input --> */}
                <input type="file" id="file-upload"  />

                {/* <!-- Label that triggers the file input --> */}
                <label for="file-upload" className="custom-file-upload">
                  <i className="fa-regular fa-file-pdf"></i>
                </label>
              </div>
            </div>

            <div className="col border mt-4 bg-light rounded-3 shadow">
              <div
                className="pdf d-flex align-items-center justify-content-center my-5"
              >
                {/* <!-- Hidden file input --> */}
                <input type="file" id="file-upload" style={{display:" none"}} />

                {/* <!-- Label that triggers the file input --> */}
                <label for="file-upload" className="custom-file-upload text-center">
                  <i
                    className="fa-solid fa-plus p-3 fs-4"
                    style={{
                      background:" #5f20da",
                      color:" rgb(255, 255, 255)",
                      borderRadius:"50%",
                    }}
                  ></i>
                  <h5>Drag and Drop File</h5>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="row ms-4">
            <div className="col d-flex align-items-center p-2">
              <h4 className="fw-bold m-0">Compera PDF</h4>
            </div>
          </div>

          <div className=" ms-4">
            <div className="col border mt-4 bg-light rounded-3 shadow p-4">
              <div className="d-flex">
                <a className="btn btn-primary p-3 w-50 fs-4" href="#" role="button"
                  >Semantic Text
                </a>
                <a
                  className="btn btn-white border w-50 p-3 ms-3 fs-4"
                  href="#"
                  role="button"
                  >Current Overlay</a
                >
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Compare text change between two PDFs."
                  className="w-100 mt-4 p-3 fw-bold text-dark rounded-3"
                  style={{outline: "none; border: 0", background: "#ffe2cd"}}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Search Text"
                  className="w-100 mt-4 p-3 fw-bold text-dark bg-white border rounded-3"
                  style={{outline:" none", border: "0"}}
                />
              </div>
              <div className="mt-4">
                <h5>Change Report (0)</h5>
              </div>
            </div>
            <div className="mt-4">
              <a
                className="btn border w-100 p-3 ms-3 fs-4"
                href="#"
                role="button"
                
                >Download Report</a
              >
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <div className="row">
            <div
              className="col shadow d-flex align-items-center border p-3 rounded-3"
             
            >
              <i className="fa-solid fa-hand fs-5"></i>
              <i className="fa-solid fa-file ms-3 fs-5"></i>
              <p className="m-0 ms-3 fs-6">Scroll Syn</p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-4 border mt-4 p-3 bg-light me-4 rounded-3 shadow">
              <div
                className="icons__box d-flex align-items-center justify-content-center"
              >
                <i className="fa-solid fa-plus"></i>
                <i className="fa-solid fa-trash-can ms-3"></i>
                <i className="fa-solid fa-rotate ms-3"></i>
              </div>

              <div
                className="pdf d-flex align-items-center justify-content-center my-5"
              >
                {/* <!-- Hidden file input --> */}
                <input type="file" id="file-upload"/>

                {/* <!-- Label that triggers the file input --> */}
                <label for="file-upload" className="custom-file-upload">
                  <i className="fa-regular fa-file-pdf"></i>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col ms-4 p-3 rounded-3 shadow"
          
        >
          <div className="row ms-4">
            <div className="col d-flex align-items-center">
              <h4 className="fw-bold m-0">Compera PDF</h4>
            </div>
          </div>

          <div className="row p-3">
            <div className="col border mt-4 bg-light rounded-3 shadow p-4">
              <div className="d-flex">
                <a
                  className="btn btn-white border p-3 w-50 fs-4"
                  href="#"
                  role="button"
                  >Semantic Text
                </a>
                <a
                  className="btn text-white w-50 p-3 ms-3 fs-4"
                  href="#"
                  role="button"
                 
                  >Current Overlay</a
                >
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Compare text change between two PDFs."
                  className="w-100 mt-4 p-3 fw-bold text-dark rounded-3"
                 
                />
              </div>

              <div
                className="row mt-4 border align-items-center justify-content-between p-3"
              >
                <div className="col-2">
                  <i
                    className="fa-regular fa-file-pdf fs-1"
                    
                  ></i>
                </div>
                <div className="col w-100">
                  <p className="m-0 p-2">Document1.PDF</p>
                  <input
                    type="number"
                    placeholder="Search Text"
                    className="w-100 p-2 fw-bold text-dark bg-white border rounded-3"
                  
                  />
                </div>
                <div className="col-2 mt-4">
                  <i
                    className="fa-solid fa-upload fs-5"
                    
                  ></i>
                </div>
              </div>
              <div
                className="row mt-4 border align-items-center justify-content-between p-3"
              >
                <div className="col-2">
                  <i
                    className="fa-regular fa-file-pdf fs-1"
                    
                  ></i>
                </div>
                <div className="col w-100">
                  <p className="m-0 p-2" >
                    Document1.PDF
                  </p>
                  <input
                    type="number"
                    placeholder="Search Text"
                    className="w-100 p-2 fw-bold text-dark bg-white border rounded-3"
                   
                  />
                </div>
                <div className="col-2 mt-4">
                  <i
                    className="fa-solid fa-upload fs-5"
                    
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <div className="col-6 mt-4 d-flex">
              <a
                className="btn border w-100 p-3 ms-3 fs-4"
                href="#"
                role="button"
                
                >Download Report</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
        </>
    );
};

export default ComparePdf;