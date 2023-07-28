import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const country = style(
  createStyleObject({
    fontSize: 24,
    leading: 24,
    fontMetrics,
  })
);

export const name = style(
  createStyleObject({
    fontSize: 32,
    leading: 32,
    fontMetrics,
  })
);

export const handle = style(
  createStyleObject({
    fontSize: 20,
    leading: 20,
    fontMetrics,
  })
);
