import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../Service/api.js";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Enter all credentials");
      return;
    }
    try {
        const response=await api.post("/auth/login",{email,password})
        localStorage.setItem("token",response.data.token);
        toast.success(response.data.message);
      setError(null);
    } catch (error) {
      const msg = error.response?.data?.message || "Registration failed";
      toast.error(msg);
      setError(msg);
    }
     setEmail("");
    setPassword("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[360px]">
        {/* ZARA Logo */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
          <p className="text-[11px] text-gray-500 tracking-widest mt-3 uppercase">
            Sign in to your account
          </p>
        </div>
        {error && (
          <p className="text-[11px] text-red-600 tracking-wide text-center mt-6">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="you@email.com"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Password */}

          {/* Password */}
          <div className="relative">
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400 pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-7 text-[10px] tracking-widest uppercase text-gray-500 hover:text-black transition"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Forgot */}
          <div className="text-right">
            <a
              href="/forgot-password"
              className="text-[11px] text-gray-500 tracking-wide hover:underline"
            >
              FORGOT PASSWORD?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full border border-black py-3 text-[12px] tracking-widest uppercase text-black hover:bg-black hover:text-white transition"
          >
            Continue
          </button>
        </form>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-[11px] text-gray-500 tracking-wide">
            Don’t have an account?{" "}
            <a href="/register" className="text-black hover:underline">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
