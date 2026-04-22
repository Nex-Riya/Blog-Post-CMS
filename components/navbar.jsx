"use client";

import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.jsx";

export default function Navbar() {
  const userName = "Riya";

  const today = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <nav className="h-14 border-b flex items-center  px-6 shadow-sm">
      <h1 className="w-3xs">LOGO</h1>
      <div className="flex w-full justify-between">
        <h2 className="text-lg font-semibold ">Welcome {userName}</h2>

        <div className="flex items-center gap-5">
          <Bell className="w-5 h-5 cursor-pointer" />

          <span className="text-sm text-gray-600">{today}</span>

          <Avatar>
            <AvatarImage src="/avatar.png" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}
