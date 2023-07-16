import * as trpc from '@trpc/server';
import * as z from 'zod';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { publicProcedure, router } from '../trpc';

export const playersRouter = router({
  getAllPlayersData: publicProcedure
    .input(
      z.object({
        locale: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      try {
        const sheetId = getSheetIdByLocale(input.locale);

        return { sheetId };
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    }),
});
