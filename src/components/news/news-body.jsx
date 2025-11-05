import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsBody({news}) {

  return (
    <div
      id="see-all"
      className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-8xl mx-auto">
      <div className="flex pl-10 md:items-center md:flex-row flex-col justify-between mb-6">
        <h2 className="text-2xl dark:text-black font-medium">Other News</h2>
        <Link
          href={"/resources/news/#see-all"}
          className="text-gray-600 dark:text-black cursor-pointer self-end hover:text-gray-900 flex items-center space-x-1"
        >
          <span>See all</span>
          <ArrowRight size={18} />
        </Link>
      </div>
        {/* News Grid */}
        <div className="grid md:px-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
          {news?.map((card) => (
            <Link
              key={card._id}
              href={`/resources/news/post/?slug=${card.slug.current}`}
              className=" rounded-xl  transition-all cursor-pointer duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <Image
                src={card.imageUrl}
                alt={card.title + "image"}
                width={500}
                height={500}
                className="w-full h-48 object-cover"
              />
              {/* Card Header */}
              <div className="border-b mt-2 border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
                  {card.title}
                </h3>
              </div>

              {/* Card Content */}
              <div className="mt-2">
                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                  {card.excerpt}
                </p>

                {/* Reading Time */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3 items-center text-sm text-gray-500">
                    <span className={`py-1 text-xs font-semibold`}>
                      {card?.category?.title}
                    </span>
                    <span> | </span>
                    Estimated reading time:
                    {card.readingTime}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
