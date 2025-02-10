"use client";
import { usePostById } from "@/hooks/usePostById";

interface PostContentProps {
  id: string;
}

export default function PostContent({ id }: PostContentProps) {
  const { post, error, loading } = usePostById(id);

  return (
    <div className="flex flex-col items-center">
      {loading && (
        <p className="text-gray-500 text-lg mb-4 animate-fade-in-quick">
          Loading...
        </p>
      )}

      {error && (
        <p className="text-red-500 text-lg mb-4 animate-fade-in-quick">
          {error}
        </p>
      )}

      {!loading && !error && post && (
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 opacity-0 animate-fade-in transition-all duration-500 ease-in-out hover:scale-[1.02]">
          <h1 className="text-3xl font-bold text-gray-800">{post?.title}</h1>
          <p className="text-gray-600 mt-4">{post?.body}</p>
        </div>
      )}
    </div>
  );
}
