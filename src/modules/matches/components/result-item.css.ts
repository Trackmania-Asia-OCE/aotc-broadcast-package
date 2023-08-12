import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const capText = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);
