"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";

import Toolbar from "./Toolbar";
import ImageUpload from "./ImageUpload";

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
    ],
    content: "<p>Start writing...</p>",
    immediatelyRender: false,
  });

  if (!editor) return null;

  return (
    <div className="flex w-full h-full">

      <div className="w-72 border-r border-gray-800 p-4 flex flex-col gap-6 ">

        <div className="bg-[#311950] p-4 rounded-xl border border-gray-700">
          <p className="text-xs text-gray-400 mb-3">TEXT FORMATTING</p>
          <Toolbar editor={editor} />
        </div>

        <div className="bg-[#311950] p-4 rounded-xl border border-gray-700">
          <p className="text-xs text-gray-400 mb-3">UPLOAD IMAGE</p>
          <ImageUpload editor={editor} />
        </div>

      </div>

      <div className="flex-1 p-10 bg-black overflow-y-auto">

        <input
          placeholder="Add a title..."
          className="w-full text-4xl font-bold bg-transparent outline-none mb-6 placeholder-gray-500"
        />

        <div className="bg-[#311950] p-6 rounded-xl border border-gray-700 min-h-[500px]">
          <EditorContent editor={editor} />
        </div>

      </div>
    </div>
  );
}