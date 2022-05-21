import { NextApiHandler } from 'next';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { parseString } from '~/utils/query-parser';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const locale = parseString(req.query.locale);
    const sheet = await getGoogleSheetById(getSheetIdByLocale(locale));
    await sheet.loadCells('B2:C5');

    res.status(200).json([
      {
        name: sheet.getCellByA1('C2').value,
        country: sheet.getCellByA1('B2').value,
      },
      {
        name: sheet.getCellByA1('C3').value,
        country: sheet.getCellByA1('B3').value,
      },
      {
        name: sheet.getCellByA1('C4').value,
        country: sheet.getCellByA1('B4').value,
      },
      {
        name: sheet.getCellByA1('C5').value,
        country: sheet.getCellByA1('B5').value,
      },
    ]);
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
