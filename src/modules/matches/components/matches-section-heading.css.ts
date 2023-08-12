import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const root = style({
  width: 'fit-content',
});

export const title = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);
