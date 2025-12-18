
import React from 'react';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card)] text-center text-[var(--text)]/70 px-4 py-6">
      <p>© {year} Student Portal</p>
    </footer>
  );
};
``
