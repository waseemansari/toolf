"use client"
import React, { useEffect } from "react";
import * as Yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterUserMutation  } from "../../../Services/api";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';
import SiteNavbar from '../../../components/SiteNavbar';
import Footer from '../../../components/Footer';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const Register = () => {
    const router = useRouter();
    const {userDetail } = useSelector(
      (state) => state.auth
    )
      useEffect(()=>{
        if(userDetail){
            router.push('/dashboard');
        } ///
    },[userDetail,router])
    const validationSchema = Yup.object().shape({
        first_name: Yup.string().required("First Name is required"),
        last_name: Yup.string().required("Last Name is required"),
        phone_number: Yup.string().required("Phone number is required"),
        
        email: Yup.string().required("Email is required").email("Email is invalid"),
        password: Yup.string().required("Password is required").min(3, "Password must be at least 8 characters")
            .required("Password is required"),
        confirm_password: Yup.string()
            .required("Confirm Password is required")
            .oneOf([Yup.ref('password'), null], "Passwords must match"),
    });

    let defaultValues = { email: "", password: "" };
    const notify = () => '';
    const methods = useForm({
        mode: "onTouched",
        resolver: yupResolver(validationSchema),
        defaultValues,
    });
    const [RegisterUser, isLoading] = useRegisterUserMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = methods;
    const onSubmit = (values) => {
        RegisterUser({ data: values })
            .unwrap()
            .then((payload) => {                
                if (payload.statusCode==200) {
                    router.push('/auth/login');
                        toast.success(payload.message)
                } else {
                    toast.error(payload.message)
                }
            })
            .catch((error) => {
                toast.error(error.data?.message)
            });
        notify();
    };
    return (
        <>
          <SiteNavbar />
            <header className="custom-header" >
                <div className="container text-center py-5">
                    <h1 style={{padding: "35px", fontSize: "45px"}}>Register to Account</h1>
                </div>
                <div className="triangle"></div>
            </header>
            <nav className="text-center" style={{padding:" 35px 0"}}>
                <Link href="#" className="mx-2">Home</Link> | <Link href="#" className="mx-2">Register</Link>
            </nav>


            <div className="container my-5">
                <h5 className="text-center mb-4">Contact Us To Report A Problem, Clarify Any Doubts About ILovePDF.</h5>
                <div className="row justify-content-center align-items-start">
                    {/* <!-- Sign Up Form --> */}
                    <div className="col-lg-6 col-md-8 col-sm-12">
                        <div className="card p-4 signup-card shadow-sm mb-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="firstName"  className="form-label">First Name</label>
                                    <input type="text" {...register("first_name")} className="form-control" id="firstName" placeholder="First Name" />
                                    <span className="text-danger">{errors.first_name?.message}</span>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastName"   className="form-label">Last Name</label>
                                    <input type="text" {...register("last_name")} className="form-control" id="lastName" placeholder="Last Name" />
                                    <span className="text-danger">{errors.last_name?.message}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" {...register("email")} className="form-control" id="email" placeholder="Email Address" />
                                    <span className="text-danger">{errors.email?.message}</span>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <img src="../assests/united-states 1.png" alt="US Flag" width="20" />
                                        </span>
                                        <input type="text" {...register("phone_number")} className="form-control" id="phone" placeholder="000-000-00" />
                                        <span className="text-danger">{errors.phone_number?.message}</span>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" {...register("password")} className="form-control" id="password" placeholder="Password" />
                                    <span className="text-danger">{errors.password?.message}</span>
                  
                                </div>
                                 <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Confirm Password</label>
                                    <input type="password" {...register("confirm_password")} className="form-control" id="password" placeholder="Password" />
                                    <span className="text-danger">{errors.confirm_password?.message}</span>
                  
                                </div>
                                {isLoading.status != 'pending' ?
                                    <button className="btn btn-warning w-100" type="submit">Create Your Account</button>
                                    :
                                    <button className="btn btn-warning w-100" ><div className="spinner-border text-muted"></div></button>
                                }
                               
                            </form>
                        </div>
                    </div>

                    {/* <!-- Login Box --> */}
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
                        <div className="card text-center shadow-sm p-4 login-box">
                            <h4>Login Into Your <br/> Account</h4>
                            <p>If You Have Any Question Concerning Our Services Or  Hesitate To Contact Us.</p>
                            <Link href="#" className="btn btn-warning w-100">Login</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-5">
                {/* <!-- Title --> */}
                <h2 className="font-weight-bold">The Security Of Your Data Is Our Priority</h2>

                {/* <!-- Subtitle --> */}
                <p className="lead">
                    In addition to data encryption in transit and at rest, we operate in compliance <br/> with industry-accepted standards, regulations, and certifications.
                </p>

                {/* <!-- Link --> */}
                <Link href="#" className="text-primary">Learn more about security</Link>

                {/* <!-- Security Logos --> */}
                <div className="row mt-4">
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../assests/ssl-encrypted-logo 1.png" alt="PDF Association" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../assests/secure-payment-logo 1.png" alt="ISO 27001" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../assests/iso-logo 1.png" alt="Secure Payment" className="img-fluid" />
                    </div>
                    <div className="col-md-3 col-sm-6 col-6 mb-3">
                        <img src="../assests/pdf-association-logo 1.png" alt="SSL Encryption" className="img-fluid" />
                    </div>
                </div>
            </div>
         <Footer />
        </>
    );
};

export default Register;