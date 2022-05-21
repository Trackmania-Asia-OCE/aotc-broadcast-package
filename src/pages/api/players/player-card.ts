import { NextApiHandler } from 'next';
import { getSheetIdByLocale } from '~/modules/locale/get-sheet-id-by-locale';
import { getGoogleSheetById } from '~/utils/google-sheets';
import { parseString } from '~/utils/query-parser';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const locale = parseString(req.query.locale);
    const sheet = await getGoogleSheetById(getSheetIdByLocale(locale));
    await sheet.loadCells('B19:B27');

    res.status(200).json({
      username: sheet.getCellByA1('B19').value,
      realName: sheet.getCellByA1('B20').value,
      nationality: sheet.getCellByA1('B21').value,
      age: sheet.getCellByA1('B22').value,
      bestResults: sheet.getCellByA1('B24').value,
      input: sheet.getCellByA1('B25').value,
      camera: sheet.getCellByA1('B26').value,
      style: sheet.getCellByA1('B27').value,
    });
  } else {
    res.status(404).json({
      message: 'Not found.',
    });
  }
};

export default handler;
