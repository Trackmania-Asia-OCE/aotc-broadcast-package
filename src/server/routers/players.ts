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
        const playersSheetId = process.env.GOOGLE_SHEETS_PLAYERS_SHEET_ID ?? '0';
        const sheet = await getGoogleSheetById(Number(playersSheetId));
        const playersRows = await sheet.getRows<PlayerDataSpreadsheet>();

        const players: PlayerData[] = [];

        for (const row of playersRows) {
          players.push({
            accountId: row.get('Trackmania Account ID'),
            nickname: row.get('Nickname'),
            realName: row.get('Real Name'),
            country: row.get('Country'),
            inputDevice: row.get('Input device'),
            inputDeviceModel: row.get('Input device model'),
            camera: row.get('Preferred camera'),
            preferredStyle: row.get('Preferred map style'),
            lastResult: row.get('Last AOTC result'),
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
