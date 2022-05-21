import { NextApiHandler } from 'next';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { parseString } from '~/utils/query-parser';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const locale = parseString(req.query.locale);
    const sheet = await getGoogleSheetById(getSheetIdByLocale(locale));
    await sheet.loadCells('B14:D17');

    res.status(200).json([
      {
        name: sheet.getCellByA1('C14').value,
        country: sheet.getCellByA1('B14').value,
        result: sheet.getCellByA1('D14').value,
      },
      {
        name: sheet.getCellByA1('C15').value,
        country: sheet.getCellByA1('B15').value,
        result: sheet.getCellByA1('D15').value,
      },
      {
        name: sheet.getCellByA1('C16').value,
        country: sheet.getCellByA1('B16').value,
        result: sheet.getCellByA1('D16').value,
      },
      {
        name: sheet.getCellByA1('C17').value,
        country: sheet.getCellByA1('B17').value,
        result: sheet.getCellByA1('D17').value,
      },
    ]);
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
