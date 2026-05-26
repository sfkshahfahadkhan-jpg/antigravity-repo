import * as fs from 'fs';

const datasets = ['aku2009', 'aku2012', 'aku2020', 'aku2021', 'aku2022'];

datasets.forEach(d => {
  try {
    const file = fs.readFileSync('src/data/' + d + '_dataset.ts', 'utf8');
    const match = file.match(/"id":\s*"(.*?)"/g);
    console.log(d, "-> Total questions/elements:", match ? match.length : 0);
  } catch (e) {
    console.error(e.message);
  }
});
