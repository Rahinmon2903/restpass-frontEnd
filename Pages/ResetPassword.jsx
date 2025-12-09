import React from "react";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[340px]">

        {/* Brand */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-12">

          {/* New Password */}
          <div>
            <input
              type="password"
              placeholder="New password"
              className="w-full border-b border-black py-3 text-sm bg-transparent focus:outline-none placeholder-gray-400"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm new password"
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
            Back to{" "}
            <a href="/login" className="text-black hover:underline">
              Sign in
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;
