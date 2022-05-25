import { NextApiHandler } from 'next';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { parseString } from '~/utils/query-parser';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const locale = parseString(req.query.locale);
    const sheet = await getGoogleSheetById(getSheetIdByLocale(locale));
    await sheet.loadCells('I2:L2');

    res.status(200).json({
      minutes: sheet.getCellByA1('I2').value,
      seconds: sheet.getCellByA1('K2').value,
    });
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
