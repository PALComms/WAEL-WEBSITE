import { client } from "./client";

export async function getBlogPost(slug) {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    content,
    featured,
  "slug": slug.current,
    author->{
      name,
  "imageUrl": image.asset->url,
    },
  "imageUrl": coverImage.asset->url,
    publishedAt,
    tags,
    excerpt,
      "category": category->title

  }`;

    return await client.fetch(query, { slug });
}
export async function getNewsPost(slug) {
    const query = `*[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    content,
  "slug": slug.current,
    author->{
      name,
  "imageUrl": image.asset->url,
    },
  "imageUrl": mainImage.asset->url,
    publishedAt,
    excerpt,
      "category": category->title

  }`;

    return await client.fetch(query, { slug });
}

export async function getAllBlogSlugs() {
    const query = `*[_type == "blog"]{
    "slug": slug.current
  }`;

    const posts = await client.fetch(query);
    return posts.map((post) => post.slug);
}
export async function getAllNewsSlugs() {
    const query = `*[_type == "news"]{
    "slug": slug.current
  }`;

    const posts = await client.fetch(query);
    return posts.map((post) => post.slug);
}