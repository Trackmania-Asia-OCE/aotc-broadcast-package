import { NextApiHandler } from 'next';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { parseString } from '~/utils/query-parser';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const locale = parseString(req.query.locale);
    const sheet = await getGoogleSheetById(getSheetIdByLocale(locale));
    await sheet.loadCells('B11:C12');

    res.status(200).json([
      {
        name: sheet.getCellByA1('C11').value,
        country: sheet.getCellByA1('B11').value,
      },
      {
        name: sheet.getCellByA1('C12').value,
        country: sheet.getCellByA1('B12').value,
      },
    ]);
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
