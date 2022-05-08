import * as React from 'react';

export function ControllerIcon({ fill = 'currentColor', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M19 31l-5.936 5.936A4.724 4.724 0 015 33.596V31l2.714-13.568A8 8 0 0115.558 11h18.884a8 8 0 017.844 6.432L45 31v2.594a4.723 4.723 0 01-8.064 3.34L31 31H19z"
        stroke={fill}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 11l2 4h8l2-4"
        stroke={fill}
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
