import PostsHeader from "@/components/posts/PostsHeader";
import FiltersBar from "@/components/posts/FiltersBar";
import PostsTable from "@/components/posts/PostsTable";

export default function PostsPage() {
  return (
    <div className="p-6 space-y-6">
      <PostsHeader />
      <FiltersBar />
      <PostsTable />
    </div>
  );
}