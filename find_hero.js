const fs = require('fs');
const html = fs.readFileSync('template_arjuna.html', 'utf8');
const idx = html.indexOf('ARJUNA');
console.log(html.substring(idx, idx + 1500));
