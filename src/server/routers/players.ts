/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as trpc from '@trpc/server';
import * as z from 'zod';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { publicProcedure, router } from '../trpc';
import { PlayerData, PlayerDataSpreadsheet } from '../types';

export const playersRouter = router({
  getAllPlayersData: publicProcedure
    .input(
      z.object({
        locale: z.string().optional(),
      })
    )
    .query(async () => {
      try {
        const sheet = await getGoogleSheetById(1194987725);
        const playersRows = await sheet.getRows<PlayerDataSpreadsheet>();

        const players: PlayerData[] = [];

        for (const row of playersRows) {
          players.push({
            nickname: row.get('Nickname'),
            realName: row.get('Real Name'),
            age: row.get('Age'),
            country: row.get('Country'),
            inputDevice: row.get('Input Device'),
            camera: row.get('Preferred Cam'),
            preferredStyle: row.get('Preferred Surface'),
            bestResult: row.get('Best Results'),
          });
        }

        return players;
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    }),
});
