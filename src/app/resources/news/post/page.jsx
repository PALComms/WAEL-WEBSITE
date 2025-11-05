import { Suspense } from "react";
import NewsPage from "@/components/news/news-main";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <NewsPage />
    </Suspense>
  );
}
