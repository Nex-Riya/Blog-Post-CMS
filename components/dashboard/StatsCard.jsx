"use client";

import { ArrowUpRight } from "lucide-react";

export default function StatsCard({
  title,
  value,
  icon: Icon,
  growth,
  color = "bg-purple-600",
}) {
  return (
    <div className="shadow-[1px_1px_10px_1px_#800fd1] bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between hover:bg-white/10 transition-all duration-200">
      <div className="space-y-1">
        <p className="text-sm text-gray-400 ">{title}</p>

        <h3 className="text-xl font-semibold text-white">{value}</h3>

        {growth && (
          <p className="text-xs text-green-400 flex items-center gap-1">
            <ArrowUpRight size={14} />
            {growth} this week
          </p>
        )}
      </div>

      {/* ICON */}
      {Icon && (
        <div className={`p-3 rounded-lg ${color} shadow-md`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      )}
    </div>
  );
}