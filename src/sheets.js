import { GoogleSpreadsheet } from "google-spreadsheet";
import sheetId from "./Constants/sheetId";

const sendContactData = (row) => {
	// Config variables
	const SPREADSHEET_ID = sheetId.SPREADSHEET_ID;
	const SHEET_ID = sheetId.SHEET_ID;
	const GOOGLE_CLIENT_EMAIL = sheetId.CLIENT_EMAIL;
	const GOOGLE_SERVICE_PRIVATE_KEY = sheetId.PRIVATE_KEY;

	// GoogleSpreadsheet Initialize
	const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

	// Append Function
	const appendSpreadsheet = async (row) => {
		try {
			await doc.useServiceAccountAuth({
				client_email: GOOGLE_CLIENT_EMAIL,
				private_key: GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
			});

			// loads document properties and worksheets
			await doc.loadInfo();

			const sheet = doc.sheetsById[SHEET_ID];
			await sheet.addRow(row);
		} catch (e) {
			console.error("Error: ", e);
		}
	};

	appendSpreadsheet(row);
};

export default sendContactData;
