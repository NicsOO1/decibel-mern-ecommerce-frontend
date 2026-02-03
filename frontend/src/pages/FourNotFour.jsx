import React from "react";
import { Link } from "react-router-dom";
import { IoBalloonOutline } from "react-icons/io5";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHead from "../components/SubHead";

const FourNotFour = () => {
  return (
    <div className="relative min-h-screen w-full lg:pt-24 pb-12 lg:pb-24 bg-gray-50">
      {/* <Header /> */}
      <div className="w-11/12 mx-auto pt-6 lg:pt-12">
        {/* <div className="w-full flex justify-between items-center mb-8">
          <div className="w-fit">
            <SubHead head="Page Not Found" />
            <div className="bg-brand h-[1.5px]" />
          </div>
        </div> */}

        <div className="flex flex-col lg:flex-row items-center gap-8 py-12">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-md text-center">
              <IoBalloonOutline className="text-7xl text-gray-500" />
              <h1 className="text-7xl font-extrabold text-gray-800 hh1">404</h1>
              <h2 className="lg:mt-8 text-2xl lg:text-3xl font-semibold">
                Oops We can't find that page
              </h2>
              <p className="mt-3 text-gray-600">
                The page you're looking for doesn't exist or has been moved.
                Check the URL or go back to the homepage.
              </p>

              <div className="lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/"
                  className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-900"
                >
                  Go Home
                </Link>
                {/* <Link to="/products" className="px-6 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-100">Browse Products</Link> */}
              </div>
            </div>
          </div>

          {/* <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-lg">
              <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg" fill="none">
                <rect width="600" height="400" rx="24" fill="#F8FAFC" />
                <g transform="translate(60,40)" fill="#E6EEF7">
                  <circle cx="120" cy="120" r="80" />
                  <rect x="220" y="40" width="160" height="160" rx="20" />
                </g>
                <g transform="translate(60,40)" fill="#BFDBFE">
                  <path d="M40 260h420v24H40z" />
                </g>
                <g transform="translate(60,40)" fill="#93C5FD">
                  <circle cx="360" cy="260" r="24" />
                </g>
              </svg>
            </div>
          </div> */}
        </div>

        {/* <div className="w-full mx-auto pt-12 lg:pt-20">
          <Footer />
        </div> */}
      </div>
    </div>
  );
};

export default FourNotFour;
