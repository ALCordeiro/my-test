interface PostItemProps {
  title: string;
  body: string;
  id: number;
}

export default function PostItem({ title, body, id }: PostItemProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="text-gray-600 mt-2 line-clamp-3">{body}</p>
      <a
        href={`/post/${id}`}
        className="inline-block mt-4 text-blue-600 font-medium hover:underline"
      >
        Read more →
      </a>
    </div>
  );
}
