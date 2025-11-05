"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";



function TopHeader({ remainingBlog = [], featuredBlog = {} }) {
  const { push } = useRouter();
  return (
    <section className=" text-white py-10 ">
      <div className="grid md:grid-cols-2 gap-6 max-w-8xl mx-auto">
        {/* Left: Featured Post */}
        <div
          onClick={() => push(`/resources/blog/post?slug=${featuredBlog.slug.current}`)}
          role="button"
          className="relative cursor-pointer rounded-md overflow-hidden"
        >
          <Image
            src={featuredBlog.imageUrl || '/blog-placeholder.jpg'}
            alt={featuredBlog.title}
            width={800}
            height={500}
            className="w-full h-[15rem] object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4">
            <h2 className="text-lg md:text-xl font-semibold mb-1">
              {featuredBlog.title}
            </h2>
            <p className="text-sm hidden md:block text-gray-200">{featuredBlog.excerpt}</p>
          </div>
        </div>

        {/* Right: Smaller Posts */}
        <div className="grid gap-4">
          {remainingBlog?.map((post) => (
            <div
              onClick={() => push(`/resources/blog/post?slug${post.slug.current}`)}
              key={post._id}
              className="grid md:grid-cols-2 gap-4 items-start"
            >
              <div className="relative rounded-md overflow-hidden">
                <Image
                  src={post.imageUrl || '/blog-placeholder.jpg'}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-[15rem] object-cover"
                />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold mb-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-300">{post.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BlogHeader({ blog = [] }) {
  const featuredBlog = blog?.find((post) => post.featured) || blog[0];
  const { push } = useRouter();

  // Get remaining posts (excluding featured)
  const remainingBlog = blog
    .filter((post) => post._id !== featuredBlog._id)
    .slice(0, 4);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen bg-[#113264] text-gray-900 px-6 md:px-24 py-12">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between mb-12">
        <div className="flex  flex-col   gap-10">
          <h1 className="md:text-6xl text-3xl text-white font-normal tracking-tight">
            Blog
          </h1>
          <p className="text-white max-w-xl">
            Insights on safety, compliance, data resilience, and industry trends
            from the experts at WAEL.
          </p>
        </div>
        <button
          onClick={() => push(`/resources/blog/#see-all`)}

         className="text-white self-end hover:text-gray-900 flex items-center space-x-1">
          <span>See all</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <TopHeader remainingBlog={remainingBlog} featuredBlog={featuredBlog} />
    </div>
  );
}
