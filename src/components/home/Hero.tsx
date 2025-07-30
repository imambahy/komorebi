import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative min-h-screen flex items-center"
      style={{
        background: "linear-gradient(90deg, #001D3D 0%, #003566 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Building the Future with
            <span className="block" style={{ color: "#FFC300" }}>
              Innovation
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-3xl mx-auto">
            We are a leading technology company dedicated to creating innovative
            solutions that transform businesses and enhance people&apos;s lives.
            Our team of experts delivers cutting-edge products and services that
            drive success.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/services">
              <button
                className="px-8 py-3 rounded-md font-semibold text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
                style={{
                  backgroundColor: "#FFC300",
                  color: "#001D3D",
                  border: "2px solid #FFC300",
                }}
              >
                Our Services
              </button>
            </Link>
            <Link href="/about">
              <button
                className="border-2 px-8 py-3 rounded-md font-semibold text-lg transition-all duration-200 transform hover:scale-105"
                style={{
                  borderColor: "#FFC300",
                  color: "#FFC300",
                  backgroundColor: "transparent",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
