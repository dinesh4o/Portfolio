const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const matches = html.match(/<a[^>]*href=\"([^\"]+)\"[^>]*>/g) || [];
const links = matches
  .map(m => m.match(/href=\"([^\"]+)\"/)[1])
  .filter(url => url.includes('work'));

console.log('Links containing "work" in index.html:');
console.log([...new Set(links)]);
