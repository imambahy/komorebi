import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const AboutSection = () => {
  const features = [
    "10+ Years of Experience",
    "500+ Projects Completed",
    "50+ Team Members",
    "24/7 Customer Support",
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:gap-y-20">
            {/* Text Content */}
            <div>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "#003566" }}
              >
                About Our Company
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2014, we have been at the forefront of technological
                innovation, helping businesses transform their digital presence
                and achieve remarkable growth. Our mission is to deliver
                exceptional value through innovative solutions.
              </p>
              <div className="mt-10 max-w-max space-y-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-x-3">
                    <CheckCircleIcon
                      className="h-6 w-6 flex-none"
                      style={{ color: "#FFC300" }}
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium text-gray-900">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/about">
                  <button
                    className="rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105"
                    style={{
                      backgroundColor: "#FFC300",
                      color: "#001D3D",
                      border: "2px solid #FFC300",
                    }}
                  >
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="Our team working together"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
