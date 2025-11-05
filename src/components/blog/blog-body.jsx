"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import NewsDetail from "@/components/news/news-detail";

const API_URL = "https://wael-server-1.onrender.com";
// const API_URL = 'http://localhost:6600'; // 💡 use env

export default function BlogPostPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchPost() {
      try {
        const res = await fetch(`${API_URL}/api/blog/${slug}`);
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (!slug) return <div className="p-10 text-center">No post selected.</div>;

  if (loading)
    return <div className="p-10 text-center text-gray-500">Loading post...</div>;

  if (post.error)
    return <div className="p-10 text-center text-red-600">Post not found.</div>;
  return (
    <section className="min-h-screen dark:bg-white">
      <NewsDetail
        title={post?.title}
        author={post?.author}
        date={post?.publishedAt}
        content={post?.content}
        mainImage={post?.imageUrl}
        categories={post?.category?.title}
      />
    </section>
  );
}
