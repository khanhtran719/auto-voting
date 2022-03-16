import { readFile, utils } from 'xlsx';
// Reading our test file
// const file = readFile('./test.xlsx');
export function readFileExcel(pathFile: string) {
    const file = readFile(pathFile);
    const data = [];

    const sheets = file.SheetNames;

    for (let i = 0; i < sheets.length; i++) {
        const temp = utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        temp.forEach((res) => {
            data.push(res);
        });
    }

    // Printing data
    return data;
}



