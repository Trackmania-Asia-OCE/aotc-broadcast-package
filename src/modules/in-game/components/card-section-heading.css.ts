import { createStyleObject } from '@capsizecss/core';
import { style } from '@vanilla-extract/css';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const title = style(
  createStyleObject({
    fontSize: 20,
    leading: 20,
    fontMetrics,
  })
);
