'use client'
import NewsBody from "@/components/news/news-body";
import NewsHeader from "@/components/news/news-header";
import useSWR from "swr";

const API_URL = "https://wael-server-1.onrender.com";

export default function Page() {
const fetcher = url => fetch(url).then(r => r.json());

const { data, isLoading } = useSWR(`${API_URL}/api/news`, fetcher);

  if (isLoading) return <div className="p-10 text-center">Loading news...</div>;

  if (!data.length) return <div className="p-10 text-center">No news yet.</div>;

  return (
    <div>
      <NewsHeader news={data} />
      <NewsBody news={data} />
    </div>
  );
}
