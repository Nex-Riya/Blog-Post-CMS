"use client";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800 bg-black">

      <h1 className="text-lg font-semibold tracking-wide">
        Create Post
      </h1>

      <div className="flex items-center gap-3">

        <button className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 
          hover:bg-gray-800 hover:text-white transition">
          Save Draft
        </button>

        <button className="px-4 py-2 rounded-md bg-white text-black font-medium 
          hover:bg-[#311950]">
          Publish
        </button>

      </div>
    </div>
  );
}