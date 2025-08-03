"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Service } from "@/types";
import { getServices } from "@/lib/services";
import Image from "next/image";
import { AnimatedDiv } from "@/lib/animations";

const ServicesSection = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        console.log("Fetched services:", data);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services:", error);
        setError("Failed to load services");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#003566" }}
            >
              Our Services
            </h2>
            <div className="mt-8 flex justify-center">
              <div
                className="animate-spin rounded-full h-8 w-8 border-b-2"
                style={{ borderColor: "#FFC300" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#003566" }}
            >
              Our Services
            </h2>
            <p className="mt-4 text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedDiv 
          className="mx-auto max-w-2xl text-center"
          animation="fadeIn"
          delay={0.2}
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#003566" }}
          >
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive technology solutions to help your business
            grow and succeed in the digital age.
          </p>
        </AnimatedDiv>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          {services.length > 0 ? (
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service, index) => (
                <AnimatedDiv
                  key={service.objectId}
                  className="flex flex-col bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                  animation="fadeIn"
                  delay={0.1 * index}
                >
                  {/* Service Image */}
                  {service.image && (
                    <div className="mb-4">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={400}
                        height={200}
                        className="w-full h-32 object-cover rounded-lg"
                        onError={(e) => {
                          console.log("Image failed to load:", service.image);
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  )}

                  <dt
                    className="text-lg font-semibold leading-7 mb-4"
                    style={{ color: "#003566" }}
                  >
                    {service.name}
                  </dt>
                  <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto mb-4">{service.description}</p>
                    {service.price && (
                      <p
                        className="text-sm font-semibold mb-4"
                        style={{ color: "#FFC300" }}
                      >
                        Starting from ${service.price}
                      </p>
                    )}
                    {service.features && service.features.length > 0 && (
                      <ul className="text-sm text-gray-500 mb-4">
                        {service.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="mb-1">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-auto">
                      <Link
                        href="/services"
                        className="text-sm font-semibold leading-6"
                        style={{ color: "#FFC300" }}
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </AnimatedDiv>
              ))}
            </dl>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No services available at the moment.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Debug: {services.length} services found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
