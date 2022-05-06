import { NextApiHandler } from 'next';
import { getGoogleSheetById } from '~/utils/google-sheets';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const sheet = await getGoogleSheetById(78778798);
    await sheet.loadCells('A3:B4');

    res.status(200).json([
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
