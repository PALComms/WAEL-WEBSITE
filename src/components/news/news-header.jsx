"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { useRouter } from "next/navigation";

export default function NewsHeader({ news = [] }) {
  // Filter for trending news category
  const { push } = useRouter();
console.log(news)
  const trendingNews = news
    ?.filter((item) => item?.category?.title?.toLowerCase() === "trending")
    ?.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  const recentTrending = trendingNews?.[0]; // Get the most recent trending news

  const components = {
    block: {
      normal: ({ children }) => (
        <p className="text-gray-700 first-letter:text-6xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
          {children}
        </p>
      ),
    },
  };
  const getTrimmedContent = (content, limit = 250) => {
    if (!content || !Array.isArray(content)) return [];

    let charCount = 0;
    const trimmedBlocks = [];

    for (const block of content) {
      if (block._type !== "block" || !block.children) continue;

      const trimmedChildren = [];
      for (const child of block.children) {
        if (!child.text) continue;

        const remaining = limit - charCount;
        if (remaining <= 0) break;

        if (child.text.length > remaining) {
          trimmedChildren.push({
            ...child,
            text: child.text.slice(0, remaining),
          });
          charCount += remaining;
          break;
        } else {
          trimmedChildren.push(child);
          charCount += child.text.length;
        }
      }

      if (trimmedChildren.length > 0) {
        trimmedBlocks.push({ ...block, children: trimmedChildren });
      }

      if (charCount >= limit) break;
    }

    return trimmedBlocks;
  };
  const limitedContent = getTrimmedContent(recentTrending?.content, 850);

  if (!recentTrending)
    return (
      <div className="min-h-[40vh] flex items-center justify-center text-gray-500">
        No trending news available.
      </div>
    );
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 md:px-16 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center mb-12">
        <div className="flex md:flex-row flex-col md:items-center  gap-10">
          <h1 className="md:text-6xl text-3xl font-normal tracking-tight">
            NEWS
          </h1>
          <p className="text-gray-600 max-w-xl">
            Insights on safety, compliance, data resilience, and industry trends
            from the experts at WAEL.
          </p>
        </div>
      </div>

      {/* Trending News */}
      <div className="flex md:items-center md:flex-row flex-col justify-between mb-6">
        <h2 className="text-2xl font-medium">Trending News</h2>
        <button onClick={()=>push('/resources/news/#see-all')} className="text-gray-600 cursor-pointer self-end hover:text-gray-900 flex items-center space-x-1">
          <span>See all</span>
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Main News Card */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="relative w-full md:h-[500px] h-60 overflow-hidden rounded-2xl">
          {recentTrending?.imageUrl ? (
            <Image
              src={recentTrending.imageUrl}
              alt={recentTrending.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              No image
            </div>
          )}
        </div>

        {/* Text Section */}
        <div className="space-y-5">
          <h3 className="text-3xl font-semibold leading-snug">
            {recentTrending.title}
          </h3>
          <PortableText value={limitedContent} components={components} />

          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <p>{recentTrending.category}</p> |{" "}
              <p className="ml-2">
                {new Date(recentTrending.publishedAt).toLocaleDateString()}
              </p>
            </div>
            <button
              onClick={() => push(`/resources/news/post/?slug=${recentTrending.slug}`)}
              className="mt-4 px-5 py-2 border border-gray-800 rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
