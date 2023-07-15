import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  width: 360,
  height: 90,
  padding: '10px 15px',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

export const overlayTitle = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);

export const overlaySubtitle = style(
  createStyleObject({
    fontSize: 16,
    leading: 16,
    fontMetrics,
  })
);
