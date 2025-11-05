"use client";
import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      category: "Technology",
      image: "/blog-placeholder-1.jpg" // Replace with your actual image path
    },
    {
      id: 2,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Tracey Wilson",
      date: "August 20, 2022",
      category: "Technology",
      image: "/blog-placeholder-2.jpg" // Replace with your actual image path
    },
    {
      id: 3,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Jason Francisco",
      date: "August 20, 2022",
      category: "Local More",
      image: "/blog-placeholder-3.jpg" // Replace with your actual image path
    },
    {
      id: 4,
      title: "The Impact of Technology on the Workplace: How Technology is Changing",
      author: "Elizabeth Slavin",
      date: "August 20, 2022",
      category: "Technology",
      image: "/blog-placeholder-4.jpg" // Replace with your actual image path
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights and trends in technology and workplace innovation
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-tight">
                  {post.title}
                </h3>

                {/* Meta Information */}
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <span className="font-medium text-blue-600">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>

                {/* Read More Link */}
                <Link
                  href={`/resources/blog/post?slug=${post.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            View All Posts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;