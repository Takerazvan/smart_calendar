const fs = require('fs');
const csv = require('csv-parser');
 
function csvToJson(csvFilePath, jsonFilePath) {
    const results = [];
 
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
            console.log('CSV file successfully converted to JSON!');
        });
}
 
// Example usage
const csvFilePath = 'TestReport.csv';
const jsonFilePath = 'file.json';
csvToJson(csvFilePath, jsonFilePath);