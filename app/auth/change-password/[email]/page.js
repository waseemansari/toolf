"use client";

import React from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useVerifyEmailMutation } from "../../../../Services/api";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import SiteNavbar from '../../../../components/SiteNavbar';
import Footer from '../../../../components/Footer';
import { useParams } from 'next/navigation';

export default function ChangePassword() {
    const params = useParams();
    const ecodedEmail = params.email;
    const decodedEmail = decodeURIComponent(ecodedEmail);

    console.log('emaial',decodedEmail);
    
    const validationSchema = Yup.object().shape({
        otp: Yup.string().required("OPT is required"),
        newPassword: Yup.string().required("New Password is required"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref('newPassword'), null], "Passwords must match"),

    });
    let defaultValues = { email: '' };
    const notify = () => '';
    const methods = useForm({
        mode: "onTouched",
        resolver: yupResolver(validationSchema),
        defaultValues,
    });
    const [verifyEmail, isLoading] = useVerifyEmailMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    const onSubmit = (values) => {
        values.email= decodedEmail;
        
        verifyEmail({ data: values })
            .unwrap()
            .then((payload) => {
                if (payload.statusCode == 200) {
                    
                    toast.success(payload.message)
                } else {
                    toast.error(payload.message)
                    console.log('error',error);
                }
            })
            .catch((error) => {
                console.log('error',error);
                
                toast.error(error.data?.message)
            });
        notify();

    };
    return (
        <>
            <SiteNavbar />
            <header className="custom-header">
                <div className="container text-center py-5">
                    <h1 style={{ padding: "35px", fontSize: "45px" }}>Forget Password</h1>
                </div>
                <div className="triangle"></div>
            </header>
            <nav className="text-center" style={{ padding: " 35px 0" }}>
                <Link href="#" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Login</Link>
            </nav>


            <div className="container my-5">
                <h3 className="text-center mb-4">Contact Us To Report A Problem, Clarify Any Doubts About ILovePDF.</h3>
                <div className="row justify-content-center align-items-start">
                    {/* <!-- Login Form --> */}
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="card p-4 shadow-sm mb-4">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="mb-3">

                                    <label htmlFor="firstName" className="form-label">OTP</label>
                                    <input type="text" className="form-control" {...register("otp")}  required="" />
                                    <span className="text-danger">{errors.otp?.message}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">New Password</label>
                                    <input type="password" className="form-control" {...register("newPassword")}  required="" />
                                    <span className="text-danger">{errors.newPassword?.message}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="firstName" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" {...register("confirmPassword")}  required="" />
                                    <span className="text-danger">{errors.confirmPassword?.message}</span>
                                </div>
                                
                                {isLoading.status != 'pending' ?
                                    <button className="btn btn-warning " type="submit">Send</button>
                                    :
                                    <button className="btn btn-warning " ><div className="spinner-border text-muted"></div></button>
                                }
                               
                            </form>
                            <div className="mt-3 text-center">
                                <Link href="#" className="text-muted"> <span className="text-primary">Login</span></Link>
                            </div>
                            <div className="mt-4 text-center">
                                <Link href="#" className="social-icon facebook"><i className="fab fa-facebook-f"></i></Link>
                                <Link href="#" className="social-icon instagram"><i className="fab fa-instagram"></i></Link>
                                <Link href="#" className="social-icon twitter"><i className="fab fa-twitter"></i></Link>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Create Account Section --> */}
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                        <div className="card text-center shadow-sm p-4 login-box">
                            <h4>Create Your New <br />Account</h4>
                            <p>If You Have Any Question Concerning <br /> Our Services Or Policy Hesitate <br /> To Contact Us.</p>
                            <Link href="#" className="btn btn-warning w-100">Create Account</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-5">
                {/* <!-- Title --> */}
                <h2 className="font-weight-bold">The Security Of Your Data Is Our Priority</h2>

                {/* <!-- Subtitle --> */}
                <p className="lead">
                    In addition to data encryption in transit and at rest, we operate in compliance <br /> with industry-accepted standards, regulations, and certifications.
                </p>


                <Link href="#" className="text-primary">Learn more about security</Link>

                <div className="row mt-4">
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../../assests/ssl-encrypted-logo 1.png" alt="PDF Association" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../../assests/secure-payment-logo 1.png" alt="ISO 27001" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../../assests/iso-logo 1.png" alt="Secure Payment" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../../assests/pdf-association-logo 1.png" alt="SSL Encryption" className="img-fluid" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

