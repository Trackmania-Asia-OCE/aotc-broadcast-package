export function getSheetIdByLocale(locale = 'en-US') {
  if (locale.startsWith('en')) {
    return 1956605752;
  }

  if (locale.startsWith('fr')) {
    return 489109556;
  }

  if (locale.startsWith('id')) {
    return 1138647086;
  }

  return 1956605752;
}
