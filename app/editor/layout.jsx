"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@/components/admin/editor/Editor"),
  { ssr: false }
);

export default function CreatePostPage() {
  const [content, setContent] = useState("");

  return (
    <div className=" bg-black text-white">

      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Create Post</h1>

        <button className="bg-white text-black px-4 py-2 rounded">
          Publish
        </button>
      </div>

      <div className="max-w-3xl w-full p-6 contents">
        <Editor content={content} setContent={setContent} />
      </div>

    </div>
  );
}