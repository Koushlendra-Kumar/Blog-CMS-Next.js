import { connectToDB } from "@utils/database";
import Blog from "@/models/Blog";
export const GET = async (request, { params }) => {
  try {
    await connectToDB();
    const blog = await Blog.findById(params.id).populate("author"); // Populate the author field
    console.log(params.id);
    console.log(blog);
    return new Response(JSON.stringify(blog), { status: 200 });
  } catch (error) {
    console.log(error, params.id);
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    const { title, content, author } = await request.json();
    await connectToDB();
    // Update the blog
    let id = params.id;
    let body = {
      title,
      content
    };
    const updatedBlog = await Blog.findByIdAndUpdate(id, body);

    return new Response(
      JSON.stringify({ msg: "Blog updated successfully", id: params.id }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  try {
    await Blog.findByIdAndDelete(params.id);
    return new Response(
      JSON.stringify({ msg: "Blog deleted successfully", id: params.id }),
      { status: 200 }
    );
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
