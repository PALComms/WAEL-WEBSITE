import NewsBody from "@/components/news/news-body";
import NewsHeader from "@/components/news/news-header";
import { client } from "@/sanity/client";
import React from "react";

const POSTS_QUERY = `*[_type == "news"] | order(publishedAt desc)[0...12]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  publishedAt,
  "imageUrl": mainImage.asset->url,
  "author": author->name,
  "category": category->title
}`;

const options = { next: { revalidate: 30 } };
export default async function page() {
  const news = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <div>
      <NewsHeader news={news} />
      <NewsBody />
    </div>
  );
}
