import GoogleButton from "react-google-button";
import { FacebookLoginButton } from "react-social-login-buttons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const { logIn, googleSignIn ,facebookSignIn} = useUserAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/account");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="max-w-[700px] max-auto mx-auto my-16 p-4 bg-gray-200">
      <div>
        <h1 className="text-3xl font-bold py-2">Sign-in to your account</h1>
      </div>
      <div></div>
      <form action="">
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="py-2 rounded font-medium"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="py-2 rounded font-medium "
          />
        </div>
        <p>{error} </p>
        <div className=" py-2">
          <button
            onClick={handleSubmit}
            className="py-2 font-medium bg-orange-600 w-full text-white"
          >
            Sign in
          </button>
        </div>
        <div className="flex justify-center">
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        <div>
        <FacebookLoginButton onClick={handleFacebookSignIn} />
        </div>
      </form>
      <p className="text-center">
        Don't have an account yet?{" "}
        <Link className="underline" to="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
