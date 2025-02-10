import PostList from "@/components/PostList";

export default function Home() {

  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Server-Rendered Blog
      </h1>
      <PostList />
    </main>
  );
}
