import User from "@models/User";
import { connectToDB } from "@utils/database";

export const POST = async (req) => {
  try {
    const { username, password } = await req.json();
    await connectToDB();
    let user = await User.findOne({ username });
    let passwordMatched = await user.comparePassword(password);
    if (user && passwordMatched) {
      return new Response(JSON.stringify(user), { status: 200 });
    }
    return new Response(JSON.stringify({ msg: "failed to login " }), {
      status: 502,
    });
  } catch (error) {
    return new Response(
      JSON.stringify([{ msg: "internal server error", error }]),
      { status: 501 }
    );
  }
};
