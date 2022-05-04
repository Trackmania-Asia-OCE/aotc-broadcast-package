import { NextApiHandler } from 'next';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const handler: NextApiHandler = async (_, res) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? '',
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') ?? '',
  });

  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsById[0];

  await sheet.loadCells('A1:B4');
  res.status(200).json({
    player1: {
      name: sheet.getCellByA1('B1').value,
      country: sheet.getCellByA1('A1').value,
    },
    player2: {
      name: sheet.getCellByA1('B2').value,
      country: sheet.getCellByA1('A2').value,
    },
    player3: {
      name: sheet.getCellByA1('B3').value,
      country: sheet.getCellByA1('A3').value,
    },
    player4: {
      name: sheet.getCellByA1('B4').value,
      country: sheet.getCellByA1('A4').value,
    },
  });
};

export default handler;
