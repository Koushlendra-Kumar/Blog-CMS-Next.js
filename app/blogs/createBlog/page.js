"use client";
import { useState } from "react";
import BlogForm from "@components/BlogForm";
import { useRouter } from "next/navigation";
import getUserData from "@utils/getUserData";

const BlogPage = () => {
  const router = useRouter();
  let author = getUserData("username");
  let authorId = getUserData("userId");
  const [blog, setBlog] = useState({
    title: "",
    author: author || "",
    content: "",
  });
  const [buttonText, setButtonText] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/blogs/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: blog.title,
          author: authorId,
          content: blog.content,
        }),
      });
      if (response.ok) {
        // creation successful

        setBlog({
          title: "",
          author: author || "",
          content: "",
        });
        router.push("/");
        console.log("creation successful", response);
      } else {
        // creation failed
        console.log("creation failed", response);
      }
    } catch (error) {
      // Error occurred during the request
      console.error("An error occurred", error);
    }
  };

  return (
    <div>
      <BlogForm
        handleSubmit={handleSubmit}
        blog={blog}
        buttonText={buttonText}
        setButtonText={setButtonText}
        setBlog={setBlog}
      />
    </div>
  );
};

export default BlogPage;
