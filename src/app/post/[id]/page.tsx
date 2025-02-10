import PostContent from "@/components/PostContent";
import Link from "next/link";

export default function PostPage({ params }: { params: { id: string } }) {

  return (
    <main className="max-w-3xl mx-auto p-8">
      {params.id && <PostContent id={params.id} />}
      <Link href="/" className="block mt-6 text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}
