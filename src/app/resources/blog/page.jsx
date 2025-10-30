import CompactBlogGrid from "@/components/blog/blog-grid";
import BlogHeader from "@/components/blog/blog-header";
import { client } from "@/sanity/client";
import React from "react";
const BLOG_QUERY = `*[_type == "blog"] | order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  featured,
  "imageUrl": coverImage.asset->url,
  "author": author->name,
  "category": category->title
}`;
const options = { next: { revalidate: 30 } };

export default async function Page() {
  const blogPosts = await client.fetch(BLOG_QUERY, {}, options);

  return (
    <div>
      <BlogHeader blog={blogPosts} />
      <CompactBlogGrid blog={blogPosts} />
    </div>
  );
}
