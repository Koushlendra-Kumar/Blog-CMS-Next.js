"use client";

import getUserData from "@utils/getUserData";
import BlogCard from "@components/BlogCard";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const fetchPosts = async () => {
    const data = await fetch("/api/blogs").then((res) => res.json());

    setAllBlogs(data);
  };

  useEffect(() => {
    if (getUserData("userId")) {
      setLoggedIn(true);
    }
    fetchPosts();
  }, []);

  const blogs = allBlogs.map((blog) => (
    <BlogCard
      key={blog._id}
      title={blog.title}
      content={blog.content}
      author={blog.author.username}
      id={blog._id}
    />
  ));
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-14 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Blog Master
      </h1>
      {!loggedIn ? (
        <p className="text-lg text-gray-600 text-center max-w-lg mb-8">
          Register or Login to view blogs of our expert bloggers from all around
          the world.
        </p>
      ) : (
        <div className="flex flex-row flex-wrap gap-5 h-screen mx-20">
          {blogs}
        </div>
      )}
    </div>
  );
};

export default HomePage;
