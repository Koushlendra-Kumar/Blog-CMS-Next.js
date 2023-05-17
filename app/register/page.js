"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import RegistrationForm from "@components/RegistrationForm";

const RegistrationPage = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    email: "",
    isAdmin: false,
  });
  const [buttonText, setButtonText] = useState("Register");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });
      if (response.ok) {
        // Registration successful
        setUserDetails({
          username: "",
          password: "",
          email: "",
          isAdmin: false,
        });
        router.push("/login");
        console.log("Registration successful", response);
      } else {
        // Registration failed
        console.log("Registration failed", response);
      }
    } catch (error) {
      // Error occurred during the request
      console.error("An error occurred", error);
    }
  };
  return (
    <div>
      <RegistrationForm
        userDetails={userDetails}
        setUserDetails={setUserDetails}
        handleSubmit={handleSubmit}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
    </div>
  );
};

export default RegistrationPage;
