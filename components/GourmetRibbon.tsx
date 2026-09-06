import React from 'react';

interface GourmetRibbonProps {
  className?: string;
  variant?: 'line' | 'heart' | 'wave';
  color?: string;
}

export function GourmetRibbon({
  className = '',
  variant = 'line',
  color = '#d94a73',
}: GourmetRibbonProps) {
  if (variant === 'heart') {
    return (
      <svg
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-hidden="true"
      >
        <path
          d="M24 35C24 35 6 23.5 6 13.5C6 7.5 10.5 4 16 4C19.5 4 22.5 6 24 8.5C25.5 6 28.5 4 32 4C37.5 4 42 7.5 42 13.5C42 23.5 24 35 24 35Z"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M17 11C15 11 13 13 13 15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    );
  }

  if (variant === 'wave') {
    return (
      <svg
        viewBox="0 0 240 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`inline-block ${className}`}
        aria-hidden="true"
      >
        <path
          d="M2 12C32 3 48 21 78 12C108 3 124 21 154 12C184 3 200 21 238 12"
          stroke={color}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 160 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path
        d="M2 8C26 2 42 14 66 8C90 2 106 14 130 8C142 5 152 7 158 8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
