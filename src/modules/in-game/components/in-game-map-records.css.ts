import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  width: 360,
  height: 75,
  padding: '5px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 65,
  height: 65,
  backgroundColor: '#b54d99',
});
