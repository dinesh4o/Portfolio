const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');
const oldStr = "link: 'https://chennai-pets.ai.studio/' }";
if (html.includes(oldStr) && !html.includes('Clove Dental')) {
    html = html.replace(oldStr, oldStr + ",\n    { title: 'Clove Dental', desc: 'A Chennai based dental clinic.', img: 'clove-dental.svg', link: 'https://clove-dental.ai.studio' }");
    fs.writeFileSync('index.html', html);
}
html = fs.readFileSync('works.1.html', 'utf8');
if (html.includes(oldStr) && !html.includes('Clove Dental')) {
    html = html.replace(oldStr, oldStr + ",\n    { title: 'Clove Dental', desc: 'A Chennai based dental clinic.', img: 'clove-dental.svg', link: 'https://clove-dental.ai.studio' }");
    fs.writeFileSync('works.1.html', html);
}
