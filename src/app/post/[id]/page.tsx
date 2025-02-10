import PostContent from "@/components/PostContent";
import Link from "next/link";

export default function PostPage({ params }: { params?: { id?: string } }) {
  if (!params?.id) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        <p className="text-red-500 text-center">Invalid or missing post ID.</p>
        <Link href="/" className="block mt-6 text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <PostContent id={params.id} />
      <Link href="/" className="block mt-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
