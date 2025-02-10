'use client'
import { usePosts } from "@/hooks/usePosts";
import PostItem from "../PostItem";

export default function PostList() {
  const { posts } = usePosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}
