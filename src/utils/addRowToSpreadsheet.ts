import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

interface ISpreadsheetConfig {
  id: string;
  sheetName: string;
}

interface IRow {
  [header: string]: string | number | boolean;
}

export default async function addRowToSpreadsheet(spreadsheet: ISpreadsheetConfig, row: IRow) {
  let credentials;
  try {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_CREDENTIALS || '{}');
  } catch (error) {
    console.error('Error parsing Google credentials:', error);
    throw error;
  }

  if (!credentials) {
    throw new Error('no credentials');
  }

  const auth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const doc = new GoogleSpreadsheet(spreadsheet.id, auth);
  await doc.loadInfo();
  
  const sheet = doc.sheetsByTitle[spreadsheet.sheetName];
  if (!sheet) {
    throw new Error(`Sheet "${spreadsheet.sheetName}" not found`);
  }
  await sheet.addRow(row);
}
