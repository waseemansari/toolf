"use client"
import React,{useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
const SiteNavbar = () => {
     const router = useRouter();
        const dispatch = useDispatch();
        const {userDetail } = useSelector(
          (state) => state.auth
        )
          useEffect(()=>{
            if(userDetail){
                router.push('/dashboard');
            } ///
        },[userDetail,router])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container-fluid">
            <Link className="navbar-brand" href="/">
                <img src="../assests/ilovepdf 1.png" alt="PDF Tool Logo" className="logo" />
            </Link>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item"> 
                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="#">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/price">Pricing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="navbar-btns ml-auto">
                    <Link href="/auth/login" className="btn btn-create-account">Login</Link>
                    <Link href="/auth/register" className="btn btn-start-trial">Sign Up Free</Link>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default SiteNavbar;