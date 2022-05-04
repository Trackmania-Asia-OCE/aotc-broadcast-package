import { NextApiHandler } from 'next';
import { getGoogleSheetById } from '~/utils/google-sheets';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const sheet = await getGoogleSheetById(0);
    await sheet.loadCells('A1:B4');

    res.status(200).json([
      {
        name: sheet.getCellByA1('B1').value,
        country: sheet.getCellByA1('A1').value,
      },
      {
        name: sheet.getCellByA1('B2').value,
        country: sheet.getCellByA1('A2').value,
      },
      {
        name: sheet.getCellByA1('B3').value,
        country: sheet.getCellByA1('A3').value,
      },
      {
        name: sheet.getCellByA1('B4').value,
        country: sheet.getCellByA1('A4').value,
      },
    ]);
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
