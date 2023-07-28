import { router } from '../trpc';
import { mapsRouter } from './maps';
import { playersRouter } from './players';

export const appRouter = router({
  players: playersRouter,
  maps: mapsRouter,
});

export type AppRouter = typeof appRouter;
