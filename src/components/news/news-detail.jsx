// components/BlogPost.jsx
"use client";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";

export default function NewsDetail({
  title,
  author,
  date,
  content,
  mainImage,
  categories,
}) {
  const components = {
    block: {
      normal: ({ children }) => (
        <p className="text-gray-700  my-6 first-letter:float-left">
          {children}
        </p>
      ),
    },
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen  py-8 px-2 sm:px-6 lg:px-18">
      <div className="max-w-8xl mx-auto">
        {/* Header Section */}
        <header className="text-left mb-12">
          <span className="font-medium bg-[#113264] rounded-lg px-4 py-2 text-white ">{categories}</span>

          <h1 className="text-4xl mt-6 md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h1>
          {/* Author and Date */}
          <div className="flex items-center  space-x-4 text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Image
                  src={author.imageUrl}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover h-full w-full"
                />{" "}
              </div>
              <span className="font-medium">{author?.name}</span>
            </div>
            <span>•</span>
            <time dateTime="2022-08-20" className="font-medium">
              {formatDate(date)}
            </time>
          </div>
        </header>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Main Content */}
        <article className=" rounded-2xl  p-2 md:p-12">
          <div className="relative mb-10 w-full md:h-[600px] h-60 overflow-hidden rounded-2xl">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                No image
              </div>
            )}
          </div>
          <PortableText value={content} components={components} />
        </article>

        {/* Footer */}
      </div>
    </div>
  );
}
