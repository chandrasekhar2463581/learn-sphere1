import React from "react";
import { NavLink } from "react-router-dom";

const itemClass = ({ isActive }) =>
  `block px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "bg-white/10" : "hover:bg-white/5"
  }`;

export default function AdminSidebar() {
  return (
    <aside className="w-64 p-4 border-r border-[var(--border)] bg-[var(--card)] text-[var(--text)] hidden md:block">
      <div className="mb-4">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 inline-block mr-2" />
        <span className="font-bold">Admin</span>
      </div>

      <nav className="space-y-2">
        <NavLink to="/admin/profile" className={itemClass}>
          Profile
        </NavLink>
        <NavLink to="/admin" end className={itemClass}>
          Dashboard
        </NavLink>
        <NavLink to="/admin/courses" className={itemClass}>
          Courses
        </NavLink>
        <NavLink to="/admin/users" className={itemClass}>
          Users
        </NavLink>
        <NavLink to="/admin/assessments" className={itemClass}>
          Assessments
        </NavLink>
        <NavLink to="/admin/analytics" className={itemClass}>
          Analytics
        </NavLink>
        <NavLink to="/admin/settings" className={itemClass}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
