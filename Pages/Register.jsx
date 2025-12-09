import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[360px]">

        {/* ZARA Logo */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
          <p className="text-[11px] text-gray-500 tracking-widest mt-3 uppercase">
            Create a new account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">

          {/* Name */}
          <div>
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
          </div>

        
          {/* Button */}
          <button
            type="submit"
            className="w-full border border-black py-3 text-[12px] tracking-widest uppercase text-black hover:bg-black hover:text-white transition"
          >
            Create Account
          </button>

        </form>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-[11px] text-gray-500 tracking-wide">
            Already have an account?{" "}
            <a href="/login" className="text-black hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;
