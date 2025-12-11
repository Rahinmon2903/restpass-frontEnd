import React from "react";

const Welcome = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-4xl font-light tracking-[0.35em] text-black">
          ZARA
        </h1>

        <p className="mt-6 text-gray-600 text-sm tracking-wide">
          You are successfully logged in 🎉
        </p>

        <p className="mt-2 text-gray-500 text-xs">
          This is a sample page shown after login.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
