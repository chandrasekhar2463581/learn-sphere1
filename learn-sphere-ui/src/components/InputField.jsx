
import React from 'react';

export const InputField = ({ label, name, type = 'text', value, onChange, error, placeholder }) => {
  const errorId = error ? `${name}-error` : undefined;

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-slate-200 mb-1">
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={errorId}
        className={[
          'w-full rounded-lg bg-black/20 text-slate-100',
          'border px-3 py-2 outline-none',
          error ? 'border-red-500 focus:ring-2 focus:ring-red-400' : 'border-white/15 focus:ring-2 focus:ring-blue-500',
          'placeholder:text-slate-400',
        ].join(' ')}
      />

      {error && (
        <small id={errorId} className="mt-1 block text-sm text-red-400">
          {error}
        </small>
      )}
    </div>
  );
};

