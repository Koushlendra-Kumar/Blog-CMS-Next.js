import Link from "next/link";

const BlogCard = ({ title, content, author, id }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Link href={`/blogs/${id}`}>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{content}</p>
          <p className="text-gray-500 text-sm">Author: {author}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
