const fs = require('fs');
const html = fs.readFileSync('template_arjuna.html', 'utf8');
const matches = [...html.matchAll(/<path[^>]+d=\"([^\"]+)\"[^>]*>/g)];
matches.slice(0, 5).forEach(m => console.log(m[1].substring(0, 50)));
