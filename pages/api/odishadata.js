import axios from 'axios';
import xlsx from 'xlsx';

export default async function handler(req, res) {
    const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/ecomines-c62a4.appspot.com/o/extended_coal_mine_emissions_january_new.xlsx?alt=media&token=a0e89ed4-d859-48db-ac14-e008bc0be2bc';  // Your Firebase download URL

    try {
        // Fetch the Excel file from Firebase Storage
        const response = await axios.get(fileUrl, { responseType: 'arraybuffer' });

        // Parse the Excel file using xlsx
        const workbook = xlsx.read(response.data, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];  // Get the first sheet
        const worksheet = workbook.Sheets[sheetName];

        // Convert the worksheet to JSON
        const jsonData = xlsx.utils.sheet_to_json(worksheet);

        // Return the parsed data as a JSON response
        res.status(200).json(jsonData);
    } catch (error) {
        console.error('Error fetching or parsing Excel file:', error);
        res.status(500).json({ error: 'Failed to fetch or parse Excel file' });
    }
}
