import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r p-5 flex flex-col">
      {/* Logo / Title */}
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-sm">
        <Link href="/admin/dashboard" className="hover:text-blue-600">
          Dashboard
        </Link>

        <Link href="/admin/posts" className="hover:text-blue-600">
          Posts
        </Link>

        <Link href="/admin/create" className="hover:text-blue-600">
          Create Post
        </Link>

        <Link href="#" className="hover:text-blue-600">
          Media
        </Link>

        <Link href="#" className="hover:text-blue-600">
          Settings
        </Link>
      </nav>
    </div>
  );
}
