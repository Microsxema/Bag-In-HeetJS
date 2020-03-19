const xlsx = require('xlsx');

const book = xlsx.readFile('C:\\Users\\RobertG\\Desktop\\test.csv', { codepage: 65001, dateNF: 'YYYY-DD-MM HH:MM:SS' });
const sheet = book.Sheets[book.SheetNames[0]];

console.log(sheet['B1']);
console.log(sheet['B2']);
console.log(sheet['B3']);
