import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/service/api.js";
import { toast } from "react-toastify";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();


  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Enter email");
      return;
    }
    try {
        const response=await api.post("/auth/forgot-password",{email});
        
        toast.success(response.data.message);
      setError(null);
      navigate("/login");
    } catch (error) {
      const msg = error.response?.data?.message || "Registration failed";
      toast.error(msg);
      setError(msg);
    }
     setEmail("");
  
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

          {/* Email */}
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
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
            Remembered your password?{" "}
            <a href="/login" className="text-black hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;
