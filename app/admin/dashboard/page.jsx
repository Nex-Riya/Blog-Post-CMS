import { Card, CardContent } from "@/components/ui/card.jsx";

export default function AdminDashboard() {
  return (
    <div className="space-y-6 bg-amber-300 w-full p-10">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="grid grid-cols-4 gap-4">
        <Card>
          <CardContent>Total Posts: 0</CardContent>
        </Card>

        <Card>
          <CardContent>Total Users: 0</CardContent>
        </Card>

        <Card>
          <CardContent>Total Media: 0</CardContent>
        </Card>

        <Card>
          <CardContent>Comments: 0</CardContent>
        </Card>
      </div>
    </div>
  );
}
