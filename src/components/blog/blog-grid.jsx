"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CompactBlogGrid = ({ blog }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  // Find featured post
  const featuredPost = blog.find((post) => post.featured) || blog[0];

  // Get remaining posts (excluding featured)
  const remainingPosts = blog.filter((post) => post._id !== featuredPost._id);

  // Calculate pagination
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = remainingPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top of grid when page changes
    document
      .getElementById("blog-grid")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const renderPaginationNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded-md transition-colors duration-200 ${
            currentPage === i
              ? "bg-[#113264] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className="w-full bg-white py-12 md:px-24 px-3 space-y-10">
      {/* Featured Blog Post */}
      <div className="w-full h-96 relative rounded-lg overflow-hidden group">
        <Image
          src={featuredPost.imageUrl || "/blog-bg.jpg"}
          alt={featuredPost.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="mb-3">
            <span className="inline-block bg-white bg-opacity-90 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
              {featuredPost.category || "Technology"}
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-4 leading-tight">
            {featuredPost.title}
          </h2>
          <div className="flex items-center text-white text-sm">
            <span className="font-semibold">{featuredPost.author}</span>
            <span className="mx-2">•</span>
            <span>{formatDate(featuredPost.publishedAt)}</span>
          </div>
        </div>
      </div>

      {/* Grid of remaining blog posts */}
      <div id="blog-grid" className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentPosts?.map((post) => (
            <div
              key={post._id}
              onClick={() => window.open(`/resources/blog/${post.slug}`, "_blank")}
              className="bg-white cursor-pointer border border-gray-200 p-3 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={post.imageUrl || "/blog-placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="mt-6">
                <span className="inline-block bg-[#4B6BFB0D] text-[#4B6BFB] text-xs font-medium px-2.5 py-0.5 rounded mb-2">
                  {post.category}
                </span>
                <h3 className="font-semibold text-gray-900 text-xl md:text-2xl mb-2 line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                <div className="flex items-center mt-10 gap-2 text-gray-600 text-xs">
                  <div className="relative h-10 w-10">
                    <Image
                      src={post.imageUrl || "/blog-placeholder.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-1">•</span>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col items-center space-y-4" id="see-all">
          {/* Pagination Info */}
          <div className="text-gray-600 text-sm">
            Showing {indexOfFirstPost + 1}-
            {Math.min(indexOfLastPost, remainingPosts.length)} of{" "}
            {remainingPosts.length} posts
          </div>

          {/* Pagination Buttons */}
          <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Page Numbers */}
            {renderPaginationNumbers()}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompactBlogGrid;
