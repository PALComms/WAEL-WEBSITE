"use client";

import { useEffect, useState } from "react";
import CompactBlogGrid from "@/components/blog/blog-grid";
import BlogHeader from "@/components/blog/blog-header";

const API_URL = "https://wael-server-1.onrender.com";

export default function Page() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(`${API_URL}/api/blog`);
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Blog fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    getBlogs();
  }, []);

  if (loading)
    return <div className="p-10 text-center">Loading blog posts...</div>;

  if (!blogPosts || blogPosts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-12 h-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            No Blog Posts Yet
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            We're working on creating some amazing content for you. Check back
            soon for the latest blog posts and updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BlogHeader blog={blogPosts} />
      <CompactBlogGrid blog={blogPosts} />
    </div>
  );
}
