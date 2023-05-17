"use client";
import { useEffect, useState } from "react";

const BlogPost = ({ params }) => {
  const blogId = params.id;

  const [post, setPost] = useState({
    title: "wait while we load",
    content: "wait while we load",
    author: { username: "wait while we load" },
    likes: "wait while we load",
  });
  useEffect(() => {
    const getBlog = async () => {
      let data = await fetch(`/api/blogs/${blogId}`).then((res) => res.json());
      setPost(data);
    };
    getBlog();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex items-center">
            Author: {post.author.username}
          </div>
          <div className="flex items-center mt-4">Likes {post.likes}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
