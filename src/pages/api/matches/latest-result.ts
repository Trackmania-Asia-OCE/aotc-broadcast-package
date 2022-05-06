import { NextApiHandler } from 'next';
import { getGoogleSheetById } from '~/utils/google-sheets';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const sheet = await getGoogleSheetById(717283615);
    await sheet.loadCells('A6:C9');

    res.status(200).json([
      {
        name: sheet.getCellByA1('B6').value,
        country: sheet.getCellByA1('A6').value,
        result: sheet.getCellByA1('C6').value,
      },
      {
        name: sheet.getCellByA1('B7').value,
        country: sheet.getCellByA1('A7').value,
        result: sheet.getCellByA1('C7').value,
      },
      {
        name: sheet.getCellByA1('B8').value,
        country: sheet.getCellByA1('A8').value,
        result: sheet.getCellByA1('C8').value,
      },
      {
        name: sheet.getCellByA1('B9').value,
        country: sheet.getCellByA1('A9').value,
        result: sheet.getCellByA1('C9').value,
      },
    ]);
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
