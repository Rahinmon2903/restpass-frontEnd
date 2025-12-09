import React from "react";

const NavBar = () => {
  return (
    <nav className="w-full border-b border-black bg-white">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

        {/* Brand */}
        <div className="text-center">
          <h1 className="text-2xl font-light tracking-[0.35em] text-black">
            ZARA
          </h1>
        </div>

        {/* Links */}
        <div className="flex items-center gap-12 text-[11px] tracking-widest uppercase text-gray-600">

          <a href="/" className="hover:text-black transition">
            Home
          </a>

         

          

          <a href="/login" className="hover:text-black transition">
            Sign In
          </a>

        </div>

      </div>
    </nav>
  );
};

export default NavBar;
