import BlogPostPage from "@/components/blog/blog-body";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <BlogPostPage />
    </Suspense>
  );
}
