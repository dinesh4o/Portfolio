const fs = require('fs');
const html = fs.readFileSync('template_arjuna.html', 'utf8');
const matches = [...html.matchAll(/src=\"(https:\/\/framerusercontent\.com[^\"]+)\"/g)];
matches.forEach(m => console.log(m[1]));
