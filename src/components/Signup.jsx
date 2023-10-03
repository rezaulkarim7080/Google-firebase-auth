import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
// import firebase from "firebase/app";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {

  const { signUp } = useUserAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }

    // if (!name && !email && !password) {
    //   setError("Fill All Details");
    // } else if (!name) {
    //   setError("Enter your Name");
    // } else if (!email) {
    //   setError("Enter your email");
    // } else if (!password) {
    //   setError("Enter your password");
    // } else if (password.length < 7)
    //   setError("password need minimum 8 character");
    // else {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //       updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: "https://www.w3schools.com/w3images/avatar2.png",
    //       }).then(() => {
    //         // Profile updated!
    //         setError("");
    //         navigate("/login");

    //       })

    //     })
    //     .catch((error) => {
    //       console.log(error.code);
    //       // ..
    //     });
    // }
  };

  return (
    <div className="max-w-[700px] max-auto mx-auto my-16 p-4 bg-gray-200">
      <div>
        <h1 className="text-3xl font-bold py-2">Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className="py-2 rounded font-medium"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="py-2 rounded font-medium"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className="py-2 rounded font-medium "
          />
        </div>
        <p>{error} </p>
        <div className=" py-2">
          <button
            onClick={handleSubmit}
            className="py-2 font-medium bg-orange-600 w-full text-white"
          >
            Sign up
          </button>
        </div>
      </form>{" "}
      <p>
        already have an account{" "}
        <Link className="underline" to="/login">
          LogIn
        </Link>{" "}
        <Link className="underline" to="/">
          home
        </Link>{" "}
      </p>
    </div>
  );
};

export default Signup;
