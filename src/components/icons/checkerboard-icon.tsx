import * as React from 'react';

export function CheckerboardIcon({
  fill = 'currentColor',
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill={fill} d="M0 8H8V16H0z" />
      <path fill={fill} d="M24 0H32V8H24z" />
      <path fill={fill} d="M8 0H16V8H8z" />
      <path fill={fill} d="M16 8H24V16H16z" />
    </svg>
  );
}
