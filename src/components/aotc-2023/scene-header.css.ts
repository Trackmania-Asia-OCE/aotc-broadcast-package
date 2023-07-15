import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const title = style(
  createStyleObject({
    fontSize: 48,
    leading: 48,
    fontMetrics,
  })
);

export const subtitle = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);
