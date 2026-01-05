import React from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";

const Stat = ({ label, value }) => (
  <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
    <div className="text-sm text-[var(--text)]/80">{label}</div>
    <div className="mt-2 text-2xl font-bold">{value}</div>
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="flex">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="text-sm text-[var(--text)]/70">
            Overview of platform metrics
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <Stat label="Students" value={1200} />
          <Stat label="Courses" value={34} />
        </div>

        <section className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4">
          <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
          <p className="text-[var(--text)]/80">
            No recent activity (placeholder).
          </p>
        </section>
      </main>
    </div>
  );
}
