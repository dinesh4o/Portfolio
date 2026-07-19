const fs = require('fs');

function patchFile(filename) {
    let html = fs.readFileSync(filename, 'utf8');
    const targetStr = "img: 'mockup-portfolio.svg', link: 'https://github.com/dinesh4o/Portfolio' }";
    if (html.includes(targetStr) && !html.includes("title: 'Clove Dental'")) {
        const replacement = targetStr + ",\n    { title: 'Escape Chennai', desc: 'A clothing brand website in Chennai.', img: 'escape-chennai.svg', link: 'https://escape-chennai.vercel.app/' },\n    { title: 'Chennai Pets', desc: 'A pet accessory shop in Chennai.', img: 'chennai-pets.svg', link: 'https://chennai-pets.ai.studio/' },\n    { title: 'Clove Dental', desc: 'A Chennai based dental clinic.', img: 'clove-dental.svg', link: 'https://clove-dental.ai.studio' }";
        html = html.replace(targetStr, replacement);
        fs.writeFileSync(filename, html);
        console.log("Patched " + filename);
    } else {
        console.log("Could not find target string in " + filename + " or already patched.");
    }
}

patchFile('index.html');
patchFile('works.1.html');
