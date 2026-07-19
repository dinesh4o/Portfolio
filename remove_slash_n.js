const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    if (content.includes('\\n')) {
        content = content.split('\\n').join('');
        fs.writeFileSync(f, content);
        console.log('Fixed ' + f);
    }
});
