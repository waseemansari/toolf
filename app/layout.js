
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ReduxProvider } from '../redux/providers';
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="row">
            {/* {children} */}
            <ReduxProvider >
              {children}
            </ReduxProvider >
            {/* <Header />
            <Sidebar />
            <div className="col-md-9 content">
              {children}
            </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
