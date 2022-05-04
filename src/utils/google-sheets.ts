import { GoogleSpreadsheet } from 'google-spreadsheet';

export async function getGoogleSheetById(sheetId: string | number) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '',
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '',
  });

  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetId];

  return sheet;
}
