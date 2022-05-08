import { NextApiHandler } from 'next';
import { getGoogleSheetById } from '~/utils/google-sheets';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const sheet = await getGoogleSheetById(889329062);
    await sheet.loadCells('A1:B9');

    res.status(200).json({
      username: sheet.getCellByA1('A1').value,
      realName: sheet.getCellByA1('A2').value,
      nationality: sheet.getCellByA1('A3').value,
      age: sheet.getCellByA1('A4').value,
      bestResults: sheet.getCellByA1('A6').value,
      input: sheet.getCellByA1('A7').value,
      camera: sheet.getCellByA1('A8').value,
      style: sheet.getCellByA1('A9').value,
    });
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
