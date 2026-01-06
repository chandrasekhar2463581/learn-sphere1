
import React from "react";
import { NavLink } from "react-router-dom";

const itemClass = ({ isActive }) =>
  `block px-3 py-2 rounded-md text-sm font-medium ${
    isActive ? "bg-white/10" : "hover:bg-white/5"
  }`;

export default function AdminSidebar() {
  const [open, setOpen] = React.useState(false); // mobile drawer

  return (
    <>
      {/* Mobile toggle button (visible < md) */}
      <button
        type="button"
        className="md:hidden fixed top-3 left-3 z-50 px-3 py-2 rounded-md bg-[var(--card)] border border-[var(--border)] text-[var(--text)]"
        onClick={() => setOpen(true)}
        aria-label="Open admin menu"
      >
        ☰
      </button>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer content */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-screen w-64 p-4 border-r border-[var(--border)] bg-[var(--card)] text-[var(--text)] transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Admin sidebar"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 inline-block mr-2" />
            <span className="font-bold">Admin</span>
          </div>
          <button
            type="button"
            className="px-3 py-1 rounded-md hover:bg-white/10"
            onClick={() => setOpen(false)}
            aria-label="Close admin menu"
          >
            ✕
          </button>
        </div>

        <nav className="space-y-2" aria-label="Admin navigation">
          <NavLink to="/admin/profile" className={itemClass} onClick={() => setOpen(false)}>
            Profile
          </NavLink>
          <NavLink to="/admin" end className={itemClass} onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/courses" className={itemClass} onClick={() => setOpen(false)}>
            Courses
          </NavLink>
          <NavLink to="/admin/users" className={itemClass} onClick={() => setOpen(false)}>
            Users
          </NavLink>
          <NavLink to="/admin/assessments" className={itemClass} onClick={() => setOpen(false)}>
            Assessments
          </NavLink>
          <NavLink to="/admin/analytics" className={itemClass} onClick={() => setOpen(false)}>
            Analytics
          </NavLink>
          <NavLink to="/admin/settings" className={itemClass} onClick={() => setOpen(false)}>
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Desktop sidebar (your original) */}
      <aside
        className="w-64 p-4 border-r border-[var(--border)] bg-[var(--card)] text-[var(--text)] hidden md:block"
        aria-label="Admin sidebar"
      >
        <div className="mb-4">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-600 to-blue-500 inline-block mr-2" />
          <span className="font-bold">Admin</span>
        </div>

        <nav className="space-y-2" aria-label="Admin navigation">
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
    </>
  );
}
``
