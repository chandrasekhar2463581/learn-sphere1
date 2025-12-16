
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const DashboardPage = () => {
  const location = useLocation();
  const name = location.state?.name || 'Student';

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h2 className="text-2xl font-bold text-[var(--text)]">Welcome, {name}!</h2>
      <p className="mt-2 text-[var(--text)]/80">Your courses will appear here</p>

      <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5">
        <h3 className="text-lg font-semibold">Enrolled courses</h3>
        <ul className="mt-2 list-disc list-inside text-[var(--text)]/80 space-y-1">
          <li>Course placeholder 1</li>
          <li>Course placeholder 2</li>
        </ul>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block px-3 py-2 rounded-lg font-semibold border border-[var(--border)] bg-[var(--card)] text-[var(--text)] hover:brightness-110 transition"
        >
          Back to Registration
        </Link>
      </div>
    </section>
  );
};
``
    