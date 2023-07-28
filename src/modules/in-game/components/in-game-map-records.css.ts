import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

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
  color: '#fff',
});

export const title = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);

export const subtitle = style(
  createStyleObject({
    fontSize: 16,
    leading: 16,
    fontMetrics,
  })
);
