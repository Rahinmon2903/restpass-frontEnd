import React, { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../src/service/api.js";
import { toast } from "react-toastify";

const ResetPassword = ({ setLoading }) => {
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !password1) {
      setError("Enter both passwords");
      return;
    }
    if (password !== password1) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await api.post(`/auth/reset-password/${id}/${token}`, {
        password,
      });

      toast.success(response.data.message);
      setError(null);
      navigate("/login");
      setLoading(false);
    } catch (error) {
      const msg = error.response?.data?.message || "Password reset failed";
      toast.error(msg);
      setError(msg);
      setLoading(false);
    
    }
    setPassword("");
    setPassword1("");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[340px]">
        {/* Brand */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
        </div>
        {error && (
          <p className="text-[11px] text-red-600 tracking-wide text-center mt-6">
            {error}
          </p>
        )}

        {/* Form */}
        <form className="space-y-12" onSubmit={handleSubmit}>
          {/* New Password */}
          <div className="relative">
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              New Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="New password"
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

          {/* Confirm New Password */}
          <div className="relative">
            <label className="block text-[10px] text-gray-500 tracking-widest uppercase mb-2">
              Confirm Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm password"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
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

          {/* Button */}
          <button
            type="submit"
            className="w-full border border-black py-3 text-[12px] tracking-widest uppercase text-black hover:bg-black hover:text-white transition"
          >
            Reset Password
          </button>
        </form>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-[11px] text-gray-500 tracking-wide">
            Back to{" "}
            <Link to="/login" className="text-black hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
