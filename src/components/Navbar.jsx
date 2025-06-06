"use client";
import { useState } from "react";

function Navbar() {
  const [input, setInput] = useState("");

  return (
    <div className="fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-gray-200/20 shadow-sm z-50 flex justify-between items-center p-4 h-16 mx-10 my-4 rounded-4xl overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold">MemeHub</h1>
      </div>
      <div>
        <h3 className="text-2xl cursor-pointer hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          Meme Generator
        </h3>
      </div>
      <div>
        <input
          className="bg-black/70 dark:bg-black/50 backdrop-blur-sm rounded-3xl pl-4 py-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navbar;
