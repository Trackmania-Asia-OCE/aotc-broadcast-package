import { router } from '../trpc';
import { playersRouter } from './players';

export const appRouter = router({
  players: playersRouter,
});

export type AppRouter = typeof appRouter;
