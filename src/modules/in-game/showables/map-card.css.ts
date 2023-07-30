import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const footer = style(
  createStyleObject({
    fontSize: 20,
    leading: 20,
    fontMetrics,
  })
);
