import * as React from 'react';

export function ArrowIcon({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 14.121V9.88h26.186l-6.62-6.88L22.454 0 34 12 22.454 24l-2.888-3 6.62-6.879H0z"
        fill={fill}
      />
    </svg>
  );
}
