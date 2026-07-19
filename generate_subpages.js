const fs = require('fs');

const projects = [
  { id: 'aurex', title: 'Aurex', desc: 'AI-powered trading assistant with real-time analytics', img: 'aurex-mockup.png', url: 'https://aurexai.vercel.app/', github: '-' },
  { id: 'hireme', title: 'HireMe.ai', desc: 'AI recruitment platform with smart candidate matching', img: 'hireme-mockup.png', url: 'https://hiremeai.vercel.app/', github: '-' },
  { id: 'luvara', title: 'Luvara', desc: 'AI Drug Repurposing Platform for accelerated discovery', img: 'luvara-mockup.png', url: 'https://luvara.vercel.app/', github: '-' },
  { id: 'espresso', title: 'Espresso', desc: 'Meet your new Interview Buddy', img: 'espresso.jpg', url: 'https://espresso-interview-buddy.vercel.app/', github: 'https://github.com/dinesh4o/Espresso' },
  { id: 'sih', title: 'SIH Smart Campus', desc: 'Alumni Smart Campus Frontend', img: 'premium-sih.svg', url: 'https://sih-alumini-smart-campus-frontend.vercel.app/', github: '-' },
  { id: 'flow', title: 'Flow', desc: 'Live Placeholder', img: 'premium-flow.svg', url: 'https://github.com/dinesh4o/Flow', github: '-' },
  { id: 'portfolio', title: 'Portfolio', desc: 'My Portfolio Website', img: 'premium-portfolio.svg', url: 'https://github.com/dinesh4o/Portfolio', github: '-' },
  { id: 'escape-chennai', title: 'Escape Chennai', desc: 'A clothing brand website in Chennai.', img: 'escape-chennai.svg', url: 'https://escape-chennai.vercel.app/', github: '-' },
  { id: 'chennai-pets', title: 'Chennai Pets', desc: 'A pet accessory shop in Chennai.', img: 'chennai-pets.svg', url: 'https://chennai-pets.ai.studio/', github: '-' },
  { id: 'clove-dental', title: 'Clove Dental', desc: 'A Chennai based dental clinic.', img: 'clove-dental.svg', url: 'https://clove-dental.ai.studio', github: '-' }
];

let templateHtml = fs.readFileSync('template_arjuna.html', 'utf8');
templateHtml = templateHtml.replace('</head>', '<style>[data-framer-name="Start"], [data-framer-name="Loader"] { display: none !important; opacity: 0 !important; visibility: hidden !important; z-index: -1 !important; }</style></head>');
const worksHtml = fs.readFileSync('works.1.html', 'utf8');
const ctaStartIndex = worksHtml.indexOf('<section class="framer-txjj5d" data-framer-name="CTA Wrapper">');
const worksBottomHtml = ctaStartIndex !== -1 ? worksHtml.substring(ctaStartIndex, worksHtml.indexOf('</body>')) : '';

if (!fs.existsSync('works')) {
  fs.mkdirSync('works');
}

projects.forEach(p => {
  let deepCopy = '';
  if (p.id === 'espresso') {
    deepCopy = `
      if (text.includes('Arjuna is a skilled design engineer')) {
        node.nodeValue = 'Practice naturally with our charming AI. Real-time voice feedback, tailored interview questions, and a friendly face to help you land that dream job.';
      }
      if (text.includes('We built a sleek one-page website')) {
        node.nodeValue = 'Everything you need to master your next technical or behavioral interview. Espresso\\'s advanced voice recognition understands your tone, pacing, and content just like a real human interviewer.';
      }
      if (text.includes('Arjuna’s site now reflects his skill')) {
        node.nodeValue = 'Need a subtle hint during a real interview? Enable Stealth Mode to keep Espresso completely invisible to Zoom, Teams, and screen captures. Hook up your own Google Gemini API key or use a local LLM to get the smartest, lowest-latency responses possible.';
      }
      if (text.includes('Working with Nakula felt personal.')) {
        node.nodeValue = 'Join thousands of professionals who improved their interview skills with Espresso.';
      }
      if (text.includes('New inquiries in 30 days')) {
        node.nodeValue = 'Download for Windows';
      }
        `;
  }

  if (p.id === 'escape-chennai') {
    deepCopy = `
      if (text.includes('Arjuna is a skilled design engineer')) {
        node.nodeValue = 'We built a modern one-pager landing page for Escape Chennai, a local clothing brand, to showcase their unique apparel collections.';
      }
      if (text.includes('We built a sleek one-page website')) {
        node.nodeValue = 'The landing page is designed with vibrant colors and smooth scrolling to provide an immersive brand experience and drive customer conversions.';
      }
      if (text.includes('Arjuna’s site now reflects his skill')) {
        node.nodeValue = 'With a focus on mobile responsiveness and fast loading times, the site serves as a perfect digital storefront for the brand\\'s latest drops.';
      }
      if (text.includes('Working with Nakula felt personal.')) {
        node.nodeValue = 'The minimalist approach combined with high-quality product imagery helped Escape Chennai stand out in the competitive fashion market.';
      }
      if (text.includes('New inquiries in 30 days')) {
        node.nodeValue = '10x brand awareness';
      }
        `;
  }

  if (p.id === 'chennai-pets') {
    deepCopy = `
      if (text.includes('Arjuna is a skilled design engineer')) {
        node.nodeValue = 'A clean and engaging landing page for Chennai Pets, a premier pet accessory shop in Chennai, to highlight their best-selling products.';
      }
      if (text.includes('We built a sleek one-page website')) {
        node.nodeValue = 'The website features a playful design with easy navigation, helping pet owners quickly find the accessories they need for their furry friends.';
      }
      if (text.includes('Arjuna’s site now reflects his skill')) {
        node.nodeValue = 'By integrating clear calls-to-action and a simple layout, the shop saw an increase in local inquiries and online engagement.';
      }
      if (text.includes('Working with Nakula felt personal.')) {
        node.nodeValue = 'We focused on a friendly aesthetic that resonates with animal lovers, perfectly capturing the essence of the Chennai Pets brand.';
      }
      if (text.includes('New inquiries in 30 days')) {
        node.nodeValue = '5x online engagement';
      }
        `;
  }
  if (p.id === 'clove-dental') {
    deepCopy = `
      if (text.includes('Arjuna is a skilled design engineer')) {
        node.nodeValue = 'A premium landing page for Clove Dental, a leading dental clinic in Chennai, focused on showcasing their advanced treatments and expert team.';
      }
      if (text.includes('We built a sleek one-page website')) {
        node.nodeValue = 'The website was designed with a clean, medical-grade aesthetic, ensuring that patients can easily book appointments and explore services.';
      }
      if (text.includes('Arjuna’s site now reflects his skill')) {
        node.nodeValue = 'By prioritizing user trust and accessible information, the new digital presence significantly boosted local search visibility and patient onboarding.';
      }
      if (text.includes('Working with Nakula felt personal.')) {
        node.nodeValue = 'The modern design truly elevated the clinic\\'s brand, making the appointment booking process seamless for patients.';
      }
      if (text.includes('New inquiries in 30 days')) {
        node.nodeValue = '3x patient bookings';
      }
        `;
  }

  const observerScript = `
<style id="custom-hiding-styles">
  [data-framer-name="Testimonial highlight"],
  #testimonial,
  .__framer-badge,
  [data-framer-name="Light"] {
    display: none !important;
  }
</style>
<script id="custom-subpage-injector">
(function() {
  const p = ${JSON.stringify(p)};
  document.title = p.title + " - Dinesh Portfolio";

  const espressoImages = [
      '../images/espresso/Screenshot 2026-06-18 183745.png',
      '../images/espresso/Screenshot 2026-06-18 190709.png',
      '../images/espresso/Screenshot 2026-06-18 191001.png'
  ];
  let imgCounter = 0;
  window.dineshLogoCounter = 0;

  function processNode(node) {
    if (node.nodeType === 3) { // Text node
      let text = node.nodeValue.trim();
      if (!text) return;

      if (text === 'Personal Portfolio Website for talented design engineer' || node.nodeValue.includes('Personal Portfolio Website for talented design engineer')) {
        node.nodeValue = node.nodeValue.replace('Personal Portfolio Website for talented design engineer', p.desc);
      }
      if (text === 'A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.' || node.nodeValue.includes('A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.')) {
        node.nodeValue = node.nodeValue.replace('A clean and strategic portfolio website for a design engineer, built in Framer to showcase projects, personality, and process.', p.desc);
      }
      if (node.nodeValue.toLowerCase().includes('nakula')) {
        node.nodeValue = node.nodeValue.replace(/Nakula/gi, 'Dinesh');
      }
      if (node.nodeValue.toLowerCase().includes('arjuna')) {
        node.nodeValue = node.nodeValue.replace(/Arjuna/gi, p.title);
      }

      // Deep copy injections
      ${deepCopy}
    }
  }

  function processTextContentOverrides() {
      // Find elements whose entire text content is exactly 'Arjuna' or 'ARJUNA' (like split spans)
      const walkers = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, {
          acceptNode: function(node) {
              if (node.children.length > 0 && node.textContent.trim().toUpperCase() === 'ARJUNA') {
                  // Only target the deepest elements that contain the full text to avoid replacing the whole document body!
                  // We check if any child also has the exact text content
                  let childHasExact = Array.from(node.children).some(c => c.textContent.trim().toUpperCase() === 'ARJUNA');
                  if (!childHasExact) return NodeFilter.FILTER_ACCEPT;
              }
              if (node.children.length > 0 && node.textContent.trim().toUpperCase() === 'NAKULA') {
                  let childHasExact = Array.from(node.children).some(c => c.textContent.trim().toUpperCase() === 'NAKULA');
                  if (!childHasExact) return NodeFilter.FILTER_ACCEPT;
              }
              return NodeFilter.FILTER_SKIP;
          }
      }, false);
      
      let elementsToReplace = [];
      let el;
      while (el = walkers.nextNode()) {
          elementsToReplace.push(el);
      }
      
      elementsToReplace.forEach(el => {
          let txt = el.textContent.trim().toUpperCase();
          if (txt === 'ARJUNA') {
              el.innerHTML = '<span style="white-space: nowrap;">' + p.title.toUpperCase().split('').map(c => '<span style="display: inline-block; opacity: 1; transform: none; will-change: transform;">' + c + '</span>').join('') + '</span>';
          } else if (txt === 'NAKULA') {
              el.innerHTML = '<span style="white-space: nowrap;">' + 'DINESH'.split('').map(c => '<span style="display: inline-block; opacity: 1; transform: none; will-change: transform;">' + c + '</span>').join('') + '</span>';
          }
      });
  }

  const observer = new MutationObserver(mutations => {
    mutations.forEach(m => {
      if (m.type === 'childList') {
        m.addedNodes.forEach(node => {
          if (node.nodeType === 1) { // Element node
            const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);
            let textNode;
            while (textNode = walker.nextNode()) {
              processNode(textNode);
            }
          } else if (node.nodeType === 3) {
            processNode(node);
          }
        });
      } else if (m.type === 'characterData') {
        processNode(m.target);
      }
    });
    processTextContentOverrides();
  });

  // Process existing nodes in the DOM
  const initialWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  let initialNode;
  while (initialNode = initialWalker.nextNode()) {
    processNode(initialNode);
  }
  processTextContentOverrides();

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true
  });

  setInterval(() => {
    document.title = p.title + " - Dinesh Portfolio";

    // Update the logo SVGs
    document.querySelectorAll('svg path').forEach(path => {
        const d = path.getAttribute('d');
        if (d && d.includes('M16.9042 1.34449L32.1866 12.8727')) {
            let svg = path.closest('svg');
            if (svg && !svg.dataset.dineshLogo) {
               svg.dataset.dineshLogo = 'true';
               let img = document.createElement('img');
               
               const isLarge = svg.getBoundingClientRect().width > 100;
               img.src = isLarge ? '../images/DINESH1.png' : '../images/DINESH.png';
               
               img.style.width = '100%';
               img.style.height = '100%';
               img.style.objectFit = 'contain';
               svg.replaceWith(img);
            }
        }
    });

    // Replace images
    document.querySelectorAll('img').forEach(img => {
      const src = img.src || img.getAttribute('src') || '';
      
      // Fix for Splash Screen Logo
      if (src.includes('CQA5T3Vhi3GK8vZJPeYCoOXi1k')) {
         if (!img.dataset.splashFixed) {
             img.dataset.splashFixed = 'true';
             img.style.setProperty('content', 'url("../images/DINESH1.png")', 'important');
             img.style.objectFit = 'contain';
             img.src = '../images/DINESH1.png';
             img.srcset = '';
         }
      } 
      // Replace Arjuna body images with project specific placeholders
      else if (src.includes('framerusercontent.com') && 
               !src.includes('3X1HO3X74cUE2rChqeNy9aFq20') && 
               !src.includes('fByRJnifHpxJBPPalEfESi6BrE')) {
          
          if (p.id === 'espresso') {
              if (!img.dataset.replacedEspresso) {
                  img.dataset.replacedEspresso = 'true';
                  const newSrc = espressoImages[imgCounter % espressoImages.length];
                  imgCounter++;
                  img.style.setProperty('content', 'url("' + newSrc + '")', 'important');
                  img.style.objectFit = 'contain';
                  img.src = newSrc;
                  img.srcset = '';
              }
          } else {
              if (!img.dataset.replacedProjectImg) {
                  img.dataset.replacedProjectImg = 'true';
                  img.style.setProperty('content', 'url("../images/' + p.img + '")', 'important');
                  img.style.objectFit = 'contain';
                  img.src = '../images/' + p.img;
                  img.srcset = '';
              }
          }
      }
    });

    // Update external "Live Site" links specifically targeting the project link
    document.querySelectorAll('a').forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.includes('arjuna.framer.media')) {
            if (!a.dataset.livewired) {
                a.dataset.livewired = 'true';
                
                a.setAttribute('href', p.url);
                a.setAttribute('target', '_blank');
                
                // Add github button for ALL projects
                if (!a.dataset.clonedGithub) {
                    a.dataset.clonedGithub = 'true';
                    let githubBtn = a.cloneNode(true);
                    
                    if (p.github === '-') {
                        githubBtn.setAttribute('href', '#');
                        githubBtn.style.opacity = '0.5';
                        githubBtn.style.cursor = 'not-allowed';
                        githubBtn.style.pointerEvents = 'none';
                    } else {
                        githubBtn.setAttribute('href', p.github || '#');
                    }
                    
                    const gWalker = document.createTreeWalker(githubBtn, NodeFilter.SHOW_TEXT, null, false);
                    let gtn;
                    while (gtn = gWalker.nextNode()) {
                       if (gtn.nodeValue.trim().length > 2) gtn.nodeValue = "GitHub Repo";
                    }
                    
                    const aWalker = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, false);
                    let atn;
                    while (atn = aWalker.nextNode()) {
                       if (atn.nodeValue.trim().length > 2) atn.nodeValue = "Live Website";
                    }
                    
                    a.parentElement.insertBefore(githubBtn, a.nextSibling);
                    if (getComputedStyle(a.parentElement).display === 'flex') {
                        a.parentElement.style.gap = '15px';
                    } else {
                        githubBtn.style.marginLeft = '15px';
                    }
                }
            }
        }
    });

    // Remove the template purchasing CTAs
    document.querySelectorAll('.framer-1skrs4u, [data-framer-name="Buy"], [data-framer-name="Backdrop"], [data-framer-name="Open"]').forEach(el => {
        // Do not remove Gradient component or its framer class since user wants to keep it for the Hand image
        if (!el.classList.contains('framer-1skrs4u')) {
            el.style.display = 'none';
            el.remove();
        }
    });

  }, 100);

})();
</script>
`;

  let finalHtml = templateHtml;

  // Statically replace the original Nakula CTA and footer with the Works page's CTA and footer
  const ctaStart = finalHtml.indexOf('<section class="framer-txjj5d" data-framer-name="CTA Wrapper">');
  if (ctaStart !== -1) {
    const scriptStart = finalHtml.indexOf('<script', ctaStart);
    if (scriptStart !== -1) {
      finalHtml = finalHtml.substring(0, ctaStart) + worksBottomHtml + finalHtml.substring(scriptStart);
    }
  }

  if (finalHtml.includes('</body>')) {
    finalHtml = finalHtml.replace('</body>', observerScript + '\n</body>');
  } else {
    finalHtml += observerScript;
  }

  fs.writeFileSync('works/' + p.id + '.html', finalHtml);
  console.log('Created works/' + p.id + '.html');
});
