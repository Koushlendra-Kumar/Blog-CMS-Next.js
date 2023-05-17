import User from "@models/User";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  try {
    const { email, username, password, isAdmin } = await req.json();

    // Create a new user
    const newUser = new User({
      email,
      username,
      password,
      role: isAdmin,
    });
    console.log(newUser);
    await connectToDB();
    await newUser.save();
    return new Response(JSON.stringify({ msg: "registered successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.log(req.json(), "error registering user", error);
    return new Response(
      JSON.stringify({ msg: "Internal Server Error", error }),
      { status: 500 }
    );
  }
};
