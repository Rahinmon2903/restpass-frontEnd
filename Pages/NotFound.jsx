import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-[360px] text-center">

        {/* ZARA Logo */}
        <div className="mb-16">
          <h1 className="text-4xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
        </div>

        {/* 404 */}
        <h2 className="text-7xl font-light tracking-widest text-black mb-6">
          404
        </h2>

        <p className="text-[11px] text-gray-500 tracking-widest uppercase mb-14 leading-relaxed">
          The page you are looking for does not exist
        </p>

        {/* Buttons */}
        <div className="space-y-5">

          <button
            onClick={() => navigate(-1)}
            className="w-full border border-black py-3 text-[12px] tracking-widest uppercase text-black hover:bg-black hover:text-white transition"
          >
            Go Back
          </button>

          <button
            onClick={() => navigate("/", { replace: true })}
            className="w-full border border-black py-3 text-[12px] tracking-widest uppercase text-black hover:bg-black hover:text-white transition"
          >
            Go Home
          </button>

        </div>

        {/* Footer */}
        <div className="mt-16">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            Page Not Found
          </p>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
