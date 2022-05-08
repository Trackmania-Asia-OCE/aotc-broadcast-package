import * as React from 'react';

export function HashtagIcon({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M38.16 21.6l.68-3.28h-5.28l1.32-6.56H31.2l-1.36 6.56h-7.72l1.32-6.56h-3.68l-1.36 6.56h-5.28l-.68 3.28h5.28l-1.56 7.76h-5.28l-.68 3.28h5.28L13.96 40h3.72l1.52-7.36h7.72L25.4 40h3.72l1.52-7.36h5.32l.64-3.28h-5.32l1.6-7.76h5.28zM27.6 29.36h-7.76l1.6-7.76h7.72l-1.56 7.76z"
        fill={fill}
      />
    </svg>
  );
}
