"use client";

import LoginForm from "@components/LoginForm";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonText, setButtonText] = useState("Log in");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic
    let userDetails = {
      username,
      password,
    };
    try {
      const userData = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      }).then((res) => res.json());

      console.log(userData._id);
      if (userData._id) {
        // login successful
        setUsername("");
        setPassword("");
        router.push("/");
        window.sessionStorage.setItem("userId", userData._id);
        window.sessionStorage.setItem("username", userData.username);
        console.log(window.sessionStorage.getItem("userId"));
        console.log(window.sessionStorage.getItem("username"));
        console.log("login successful", userData);
      } else {
        // login failed
        console.log("login failed");
      }
    } catch (error) {
      // Error occurred during the request
      console.error("An error occurred", error);
    }
  };
  return (
    <div>
      <LoginForm
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        setButtonText={setButtonText}
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
    </div>
  );
};

export default LoginPage;
