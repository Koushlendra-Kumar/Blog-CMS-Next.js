import Blog from "@models/Blog";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  try {
    const { title, content, author } = await req.json();

    // Create a new blog
    const newBlog = new Blog({
      title,
      content,
      author,
    });
    console.log(newBlog);
    await connectToDB();
    await newBlog.save();
    return new Response(JSON.stringify({ msg: "created blog successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.log(req.json(), "error creating blog", error);
    return new Response(
      JSON.stringify({ msg: "Internal Server Error", error }),
      { status: 500 }
    );
  }
};
