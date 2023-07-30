import { style } from '@vanilla-extract/css';
import { createStyleObject } from '@capsizecss/core';
import { TASAOrbiter as fontMetrics } from '~/utils/capsize-metrics';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  height: 75,
  border: '1px solid #fff',
  selectors: {
    '&:last-of-type': {
      borderBottomRightRadius: 25,
    },
  },
});

export const iconWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 75,
  height: 73,
  backgroundColor: '#fff',
  color: '#2c2c2c',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  height: '100%',
  paddingLeft: 24,
  paddingRight: 24,
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
