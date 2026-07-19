const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(
    /if \(externalUrl\) \{/g,
    `if (href.endsWith('/works') || href === './works' || href === 'works' || href === '/works/') {
         e.preventDefault();
         e.stopPropagation();
         window.location.href = '/works';
         return;
      }
      if (externalUrl) {`
  );
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log(`Patched ${file}`);
  }
});

const worksFiles = fs.readdirSync('./works').filter(f => f.endsWith('.html'));
worksFiles.forEach(file => {
  let content = fs.readFileSync('./works/' + file, 'utf8');
  let newContent = content.replace(
    /if \(externalUrl\) \{/g,
    `if (href.endsWith('/works') || href === './works' || href === 'works' || href === '/works/') {
         e.preventDefault();
         e.stopPropagation();
         window.location.href = '/works';
         return;
      }
      if (externalUrl) {`
  );
  if (content !== newContent) {
    fs.writeFileSync('./works/' + file, newContent);
    console.log(`Patched works/${file}`);
  }
});
