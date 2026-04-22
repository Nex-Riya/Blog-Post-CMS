import Navbar from "@/components/navbar.jsx";
import Sidebar from "@/components/sidebar.jsx";
import AdminDashboard from "./dashboard/page.jsx";

export default function AdminLayout() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <AdminDashboard />
      </div>
    </>
  );
}
