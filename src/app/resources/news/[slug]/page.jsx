// app/blog/[slug]/page.js
import NewsDetail from "@/components/news/news-detail";
import { getAllNewsSlugs, getNewsPost } from "@/sanity/sanity-utils";
// import BlogPost from '@/components/BlogPost';
import { notFound } from "next/navigation";

// Generate metadata for SEO
export async function generateMetadata({ params: promise }) {
  const params = await promise;
  const { slug } = params;
  const post = await getNewsPost(slug);
  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Your Blog Name`,
    description:
      post.excerpt || (post.content && post.content.substring(0, 160) + "..."),
    keywords: post.keywords || ["technology", "workplace", "innovation"],
    authors: [{ name: post.author?.name || "Unknown Author" }],
    openGraph: {
      title: post.title,
      description:
        post.excerpt ||
        (post.content && post.content.substring(0, 160) + "..."),
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Unknown Author"],
      images: post.imageUrl
        ? [
            {
              url: post.imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description:
        post.excerpt ||
        (post.content && post.content.substring(0, 160) + "..."),
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Generate static params for SSG
export async function generateStaticParams() {
  const slugs = await getAllNewsSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Structured data for rich snippets
function addBlogPostStructuredData(post) {
  if (!post) return null;

  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "NewsPosting",
      headline: post.title,
      description: post.excerpt,
      image: post.imageUrl ? [post.imageUrl] : [],
      datePublished: post.publishedAt,
      dateModified: post.updatedAt || post.publishedAt,
      author: {
        "@type": "Person",
        name: post.author?.name || "Wael News",
      },
      publisher: {
        "@type": "Organization",
        name: "Wael News",
        logo: {
          "@type": "ImageObject",
          url: "https://yourblog.com/logo.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://yourblog.com/blog/${post.slug}`,
      },
    }),
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getNewsPost(params.slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={addBlogPostStructuredData(post)}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://yourblog.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://yourblog.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://yourblog.com/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />

      <section className="min-h-screen dark:bg-white">
        <NewsDetail
          title={post.title}
          author={post.author}
          date={post.publishedAt}
          content={post.content}
          mainImage={post.imageUrl}
          categories={post.category}
        />
      </section>
    </>
  );
}
