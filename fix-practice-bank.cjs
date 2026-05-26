const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const t = `{['Topic Wise', 'Archive', 'Reasoning', 'Uploaded Modules'].map(category => (
                 <div key={category} className="space-y-8">`;
                 
const r = `{['Topic Wise', 'Archive', 'Reasoning', 'Uploaded Modules'].map(category => {
                 const hasItems = category === 'Uploaded Modules' ? dynamicQuizzes.length > 0 : PRACTICE_RESOURCES_LIST.some(r => r.category === category);
                 if (!hasItems) return null;
                 return (
                 <div key={category} className="space-y-8">`;
                 
code = code.replace(t, r);

code = code.replace(`                 </div>\n                 ))}`, `                 </div>\n                 );})}`);

fs.writeFileSync('src/App.tsx', code);
console.log('Fixed Empty Headings');
