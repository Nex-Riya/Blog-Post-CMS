"use client";

import DashboardNavbar from "@/components/dashboardnav";
import StatsCard from "@/components/dashboard/StatsCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import RecentPosts from "@/components/dashboard/RecentPosts";
import QuickDraft from "@/components/dashboard/QuickDraft";
import RecentComments from "@/components/dashboard/RecentComments";
import TopCategories from "@/components/dashboard/TopCategories";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">

      <div className="p-6 space-y-6">
        {/* TOP stats */}
        <div className="grid grid-cols-4 gap-4">
          <StatsCard title="Total Posts" value="128" />
          <StatsCard title="Total Users" value="1,254" />
          <StatsCard title="Page Views" value="24.8K" />
          <StatsCard title="Comments" value="342" />
        </div>

        {/* MID SECTION */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <AnalyticsChart />
          </div>

          <QuickDraft />
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <RecentPosts />
          </div>

          <div className="space-y-6">
            {/* <RecentComments /> */}
            <TopCategories />
          </div>
        </div>
      </div>
    </div>
  );
}