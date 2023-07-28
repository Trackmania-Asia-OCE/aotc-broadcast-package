/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as trpc from '@trpc/server';
import queryString from 'query-string';
import * as z from 'zod';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { publicProcedure, router } from '../trpc';
import { MapData, MapDataSpreadsheet, MapRecordData } from '../types';

const TMIO_LEADERBOARD_API_URL = 'https://trackmania.io/api/leaderboard/map';

export const mapsRouter = router({
  getAllMapsData: publicProcedure.query(async () => {
    try {
      const mapsSheetId = process.env.GOOGLE_SHEETS_MAPS_SHEET_ID ?? '0';
      const sheet = await getGoogleSheetById(Number(mapsSheetId));
      const mapsRows = await sheet.getRows<MapDataSpreadsheet>();

      const maps: MapData[] = [];

      for (const row of mapsRows) {
        const surfaceMaps: string[] = [
          row.get('Road')?.toLowerCase() === 'true' ? 'road' : '',
          row.get('Dirt')?.toLowerCase() === 'true' ? 'dirt' : '',
          row.get('Grass')?.toLowerCase() === 'true' ? 'grass' : '',
          row.get('Ice')?.toLowerCase() === 'true' ? 'ice' : '',
          row.get('Plastic')?.toLowerCase() === 'true' ? 'plastic' : '',
          row.get('Magnet')?.toLowerCase() === 'true' ? 'magnet' : '',
        ];

        maps.push({
          uid: row.get('UID'),
          name: row.get('Name'),
          author: row.get('Author'),
          authorTime: row.get('Author Time'),
          surfaces: surfaceMaps.filter(Boolean),
        });
      }

      return maps;
    } catch (err: unknown) {
      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'An unexpected error occurred, please try again later.',
        cause: err,
      });
    }
  }),
  getMapRecordByUID: publicProcedure
    .input(
      z.object({
        uid: z.string().optional(),
      })
    )
    .query(async ({ input }) => {
      if (!input.uid) {
        throw new trpc.TRPCError({
          code: 'BAD_REQUEST',
          message: 'No map selected.',
        });
      }

      try {
        const url = queryString.stringifyUrl({
          url: `${TMIO_LEADERBOARD_API_URL}/${input.uid}`,
          query: { offset: 0, length: 1 },
        });

        const data = await fetch(url, {
          headers: {
            'User-Agent': 'aotc-broadcast-package/1.0.0',
          },
        }).then(res => res.json());

        if (data?.tops?.length > 0 && data.playercount > 0) {
          return {
            record: data.tops[0],
            playercount: data.playercount,
          } as MapRecordData;
        }

        return {
          record: undefined,
          playercount: 0,
        } as MapRecordData;
      } catch (err: unknown) {
        throw new trpc.TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'An unexpected error occurred, please try again later.',
          cause: err,
        });
      }
    }),
});
