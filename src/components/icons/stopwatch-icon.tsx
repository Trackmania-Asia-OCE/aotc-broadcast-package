import * as React from 'react';

export function StopwatchIcon({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill={fill}>
        <path d="M25.5 10.917c-9.189 0-16.666 7.477-16.666 16.667 0 9.19 7.477 16.666 16.667 16.666 9.19 0 16.666-7.477 16.666-16.666 0-9.19-7.477-16.667-16.666-16.667zm0 29.167c-6.893 0-12.5-5.607-12.5-12.5 0-6.894 5.607-12.5 12.5-12.5 6.894 0 12.5 5.606 12.5 12.5 0 6.893-5.606 12.5-12.5 12.5z" />
        <path d="M23.417 19.25h4.166v10.417h-4.166V19.25zM19.25 4.667h12.5v4.167h-12.5V4.667zm21.444 11.89l-4.167-4.167 2.946-2.946 4.167 4.167-2.946 2.946z" />
      </g>
    </svg>
  );
}