"use client";

import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Testimonial } from "@/types";
import { getTestimonials } from "@/lib/services";
import Image from "next/image";
import { AnimatedDiv } from "@/lib/animations";

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        console.log("Fetched testimonials:", data);
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to load testimonials");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="text-lg font-semibold leading-8 tracking-tight"
              style={{ color: "#FFC300" }}
            >
              Testimonials
            </h2>
            <p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#003566" }}
            >
              What our clients say
            </p>
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
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="text-lg font-semibold leading-8 tracking-tight"
              style={{ color: "#FFC300" }}
            >
              Testimonials
            </h2>
            <p
              className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "#003566" }}
            >
              What our clients say
            </p>
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
          className="mx-auto max-w-xl text-center"
          animation="fadeIn"
          delay={0.2}
        >
          <h2
            className="text-lg font-semibold leading-8 tracking-tight"
            style={{ color: "#FFC300" }}
          >
            Testimonials
          </h2>
          <p
            className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "#003566" }}
          >
            What our clients say
          </p>
        </AnimatedDiv>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          {testimonials.length > 0 ? (
            <div className="-mt-6 grid grid-cols-1 gap-8 sm:-mt-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedDiv
                  key={testimonial.objectId}
                  className="pt-8 sm:inline-block sm:w-full sm:px-4"
                  animation="fadeIn"
                  delay={0.1 * index}
                >
                  <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900">
                      <p className="text-base">{`"${testimonial.content}"`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      {testimonial.image ? (
                        <Image
                          className="h-10 w-10 rounded-full bg-gray-50 object-cover"
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          onError={(e) => {
                            console.log(
                              "Image failed to load:",
                              testimonial.image
                            );
                            e.currentTarget.src =
                              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80";
                          }}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-600 text-sm font-medium">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <div
                          className="font-semibold"
                          style={{ color: "#003566" }}
                        >
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.position} at {testimonial.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className="h-4 w-4"
                            style={{ fill: "#FFC300" }}
                          />
                        ))}
                      </div>
                    </figcaption>
                  </figure>
                </AnimatedDiv>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No testimonials available at the moment.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Debug: {testimonials.length} testimonials found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
