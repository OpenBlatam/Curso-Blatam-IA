import { GoogleSpreadsheet, ServiceAccountCredentials } from 'google-spreadsheet';

let credentials: ServiceAccountCredentials;
try {
  credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || '{}');
} catch (error) {
  console.error('Error parsing Google credentials:', error);
  throw error;
}

interface ISpreadsheetConfig {
  id: string;
  sheetName: string;
}

interface IRow {
  [header: string]: string | number | boolean;
}

export default async function addRowToSpreadsheet(spreadsheet: ISpreadsheetConfig, row: IRow) {
  if (!credentials) {
    throw new Error('no credentials');
  }

  const doc = new GoogleSpreadsheet(spreadsheet.id);
  await doc.useServiceAccountAuth(credentials);

  await doc.loadInfo();
  const sheet = doc.sheetsByTitle[spreadsheet.sheetName];
  if (!sheet) {
    throw new Error(`Sheet "${spreadsheet.sheetName}" not found`);
  }
  await sheet.addRow(row);
}
