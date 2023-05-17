"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import getUserData from "@utils/getUserData";
const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleClick = (e) => {
    window.sessionStorage.clear();
  };
  useEffect(() => {
    let user = getUserData("userId");
    if (user) {
      setIsLoggedIn(true);
    }
  });
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <span className="text-white text-lg font-bold">Blog Master</span>
        </div>
        <div className="flex space-x-2 md:space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                href="/blogs/createBlog"
                className="text-white px-4 py-2 rounded-md bg-blue-500"
              >
                Create Blog
              </Link>
              <Link
                href="/"
                onClick={handleClick}
                className="text-white px-4 py-2 rounded-md bg-red-500"
              >
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="text-white px-4 py-2 rounded-md bg-green-500"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="text-white px-4 py-2 rounded-md bg-blue-500"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
