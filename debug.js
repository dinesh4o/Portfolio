
(function() {
    if (!window.__nakulaTextPatchedV7) {
        window.__nakulaTextPatchedV7 = true;

        const R = [
          ["Nakula", "Dinesh"],
          ["NAKULA", "DINESH"],
          ["Arjuna", "Aurex"],
          ["Personal Portfolio Website for talented design engineer", "AI-powered trading assistant with real-time analytics"],
          ["Bima", "HireMe.ai"],
          ["Website and branding for AI Automation Company", "AI recruitment platform with smart candidate matching"],
          ["Batavia", "Luvara"],
          ["Scale Your Brand With Growth Experts", "AI Drug Repurposing Platform for accelerated discovery"],
          ["Mandala", "Blueprints 2026"],
          ["FASHION THAT STANDS THE TEST OF TIME", "Hackathon Winner — GDSC SVCE"],

          ["(WHY ME)", "(WHY ME)"],
          ["12+", "200+"],
          ["Successful projects completed", "Github Commits"],
          ["36", "10+"],
          ["Satisfied clients served", "Github Contributions"],
          ["8", "99+"],
          ["Years of experience", "Problem solved in leetcode , hackerRank, and etc."],
          ["250", "25+"],
          ["Positive reviews received", "Production-ready full-stack AI platforms deployed"],

          ["(WHY US)", "(WHY ME)"],
          ["With a decade of expertise, We crafts bold brands and high-impact digital experience that get results.", "Driven by a passion for AI and problem-solving, I build intelligent systems and consistently push boundaries in competitive programming."],
          ["300+", "100+"],
          ["10+", "1st"],
          ["Years of experience in creative industry", "Place in Smart India Hackathon (SIH 2025)"],
          ["99%", "3+"],
          ["Customer satisfaction rate", "Major hackathons & coding competitions won"],
          ["25M", "4+"],
          ["In Client revenue growth", "Production-ready full-stack AI platforms deployed"],

          ["hello@nakula.com", "dinesh0x7e8@gmail.com"],

          ["Beyond", "Code that"],
          ["Visuals.", "Ships Products."],
          ["Built", ""],
          ["with", ""],
          ["Vision.", ""],
          ["EARLY FEB 2025", "Full Time · Remote"],
          ["EARLY FEB", "Full Time · Remote"],
          ["Early Feb 2025", "Full Time · Remote"],
          ["Available for project", "OPEN TO WORK"],
          ["AVAILABLE FOR PROJECT", "OPEN TO WORK"],
          ["START A PROJECT", "CONTACT ME"],
          ["START A", "CONTACT"],
          ["PROJECT", "ME"],
        ];

        var rawSetData = Object.getOwnPropertyDescriptor(CharacterData.prototype, "data").set;
        var rawSetNodeValue = Object.getOwnPropertyDescriptor(Node.prototype, "nodeValue").set;
        var rawSetTextContent = Object.getOwnPropertyDescriptor(Node.prototype, "textContent").set;

        function replaceText(t) {
            if (typeof t !== "string" || !t) return t;
            t = t.split('+91 6399+2957995').join('+91 6382957995');
            t = t.split('+12 345678').join('+91 6382957995');
            t = t.split('+12345678').join('+91 6382957995');

            for (var i = 0; i < R.length; i++) {
                if (R[i][0] === "Built" || R[i][0] === "with" || R[i][0] === "Vision.") {
                    if (t.trim() === R[i][0]) t = R[i][1];
                } else {
                    if (t.indexOf(R[i][0]) !== -1) {
                        t = t.split(R[i][0]).join(R[i][1]);
                    }
                }
            }
            return t;
        }

        Object.defineProperty(CharacterData.prototype, "data", {
            set: function(val) { return rawSetData.call(this, replaceText(val)); },
            get: Object.getOwnPropertyDescriptor(CharacterData.prototype, "data").get,
        });
        Object.defineProperty(Node.prototype, "nodeValue", {
            set: function(val) { return rawSetNodeValue.call(this, replaceText(val)); },
            get: Object.getOwnPropertyDescriptor(Node.prototype, "nodeValue").get,
        });
        Object.defineProperty(Node.prototype, "textContent", {
            set: function(val) { return rawSetTextContent.call(this, replaceText(val)); },
            get: Object.getOwnPropertyDescriptor(Node.prototype, "textContent").get,
        });
        var origCreateTextNode = document.createTextNode;
        document.createTextNode = function(val) {
            return origCreateTextNode.call(document, replaceText(val));
        };

        setInterval(() => {
            const path = window.location.pathname.toLowerCase();
            
            // Text Overrides for phone
            const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
            let node;
            while (node = walker.nextNode()) {
                if (node.nodeValue) {
                    if (node.nodeValue.includes('+91 6399+2957995')) {
                        node.nodeValue = node.nodeValue.replace('+91 6399+2957995', '+91 6382957995');
                    }
                    if (node.nodeValue.includes('+12 345678')) {
                        node.nodeValue = node.nodeValue.replace('+12 345678', '+91 6382957995');
                    }
                }
            }

            document.querySelectorAll('a').forEach(a => {
                const href = (a.getAttribute('href') || '').toLowerCase();
                if (href.includes('tel:')) {
                    a.setAttribute('href', 'tel:+916382957995');
                    if (a.textContent.includes('6399') || a.textContent.includes('345678')) {
                        a.textContent = '+91 6382957995';
                    }
                }
            });

            // Contact Form Wrapper Fix
            if (path.includes('contact') && !document.getElementById('injected-dinesh-contact')) {
                const forms = Array.from(document.querySelectorAll('form'));
                let targetForm = null;
                for (let f of forms) {
                    if (f.innerHTML.includes('Enter your name') || f.innerHTML.includes('Email') || f.innerHTML.includes('Message')) {
                        targetForm = f;
                        break;
                    }
                }
                if (targetForm && targetForm.parentElement) {
                    const wrapper = targetForm.parentElement;
                    targetForm.style.opacity = '0';
                    targetForm.style.pointerEvents = 'none';
                    wrapper.style.position = 'relative';

                    const contactDiv = document.createElement('div');
                    contactDiv.id = 'injected-dinesh-contact';
                    contactDiv.style.cssText = 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 10; background: rgba(20,20,20,1); padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 20px; color: white; box-sizing: border-box; font-family: sans-serif;';
                    contactDiv.innerHTML = `
                       <h3 style="margin:0; font-size: 28px; font-weight: bold;">Reach out directly</h3>
                       <p style="margin:0; color: #aaa; font-size: 16px; line-height: 1.5;">I'm always open to discussing new projects, creative ideas, or opportunities.</p>
                       <a href="mailto:dinesh0x7e8@gmail.com" style="display: flex; align-items: center; gap: 15px; color: white; text-decoration: none; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 18px; font-weight: bold; border: 1px solid rgba(255,255,255,0.1);">
                          <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                          dinesh0x7e8@gmail.com
                       </a>
                       <a href="tel:+916382957995" style="display: flex; align-items: center; gap: 15px; color: white; text-decoration: none; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 18px; font-weight: bold; border: 1px solid rgba(255,255,255,0.1);">
                          <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z"/></svg>
                          +91 6382957995
                       </a>
                       <a href="https://wa.me/916382957995" style="display: flex; align-items: center; gap: 15px; color: white; text-decoration: none; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 12px; font-size: 18px; font-weight: bold; border: 1px solid rgba(255,255,255,0.1);">
                          <svg width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                          WhatsApp
                       </a>
                    `;
                    wrapper.appendChild(contactDiv);
                }
            }

            // Safe Section Hiding V7
            const hideCompletely = ['meet our team', 'origins', 'awards'];
            const hideSafely = ['visit us', '(address)', '(office hours)', 'prefer to hop on a call', 'book a call instead', '123 market street', 'los angeles', 'monday - friday', '9:00 am'];

            Array.from(document.querySelectorAll('p, h1, h2, h3, h4, span, div')).forEach(el => {
                const childNodes = Array.from(el.childNodes);
                // V7 FIX: Only hide specific terminal elements that contain text. This prevents hiding massive page wrappers!
                const hasOnlyText = childNodes.length > 0 && childNodes.every(c => c.nodeType === Node.TEXT_NODE);
                if (hasOnlyText) {
                    const txt = (el.textContent || '').trim().toLowerCase();
                    if (hideCompletely.includes(txt)) {
                        let parent = el.parentElement;
                        while (parent && parent.tagName !== 'BODY') {
                            if (parent.className.includes('framer-') && parent.offsetHeight > 100 && parent.offsetHeight < 1200) {
                                parent.style.display = 'none';
                                break;
                            }
                            parent = parent.parentElement;
                        }
                    }
                    if (hideSafely.some(s => txt.includes(s))) {
                        if (el.parentElement) {
                            el.parentElement.style.opacity = '0';
                            el.parentElement.style.pointerEvents = 'none';
                        }
                    }
                }
            });

            // About Page Hero Fixes
            if (path.includes('about')) {
                document.querySelectorAll('img').forEach(img => {
                    const src = img.src || '';
                    if (src.includes('LygfEM1hzZnWcFv8NVM9TC5LoE') || src.includes('2guBNLKizparECDNF5JpIZ4sWA') || src.includes('1550751827-4bd374c3f58b')) {
                        img.style.display = 'none';
                        if (img.parentElement && img.parentElement.className.includes('framer')) img.parentElement.style.display = 'none';
                    }
                });

                const heroTextsToHide = ['behind nakula', 'behind dinesh', 'we combines years of web design', 'driven by a passion for ai'];
                Array.from(document.querySelectorAll('*')).forEach(el => {
                    const childNodes = Array.from(el.childNodes);
                    const hasOnlyText = childNodes.length > 0 && childNodes.every(c => c.nodeType === Node.TEXT_NODE);
                    if (hasOnlyText) {
                        const txt = (el.textContent || '').trim().toLowerCase();
                        if (heroTextsToHide.some(ht => txt.includes(ht))) {
                            let parent = el;
                            while(parent && parent.tagName !== 'BODY') {
                                if (parent.className.includes('framer-') && parent.offsetHeight > 50 && parent.offsetHeight < 1200) {
                                    parent.style.display = 'none';
                                    break;
                                }
                                parent = parent.parentElement;
                            }
                        }
                    }
                });

                if (!document.getElementById('injected-dinesh-story')) {
                    const topSection = document.querySelector('div[data-framer-name="Top"]');
                    if (topSection) {
                        topSection.style.position = 'relative';
                        topSection.style.display = 'flex';
                        topSection.style.alignItems = 'center';
                        topSection.style.justifyContent = 'center';
                        
                        const storyDiv = document.createElement('div');
                        storyDiv.id = 'injected-dinesh-story';
                        storyDiv.style.cssText = 'position: absolute; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; z-index: 10; padding: 20px; box-sizing: border-box; pointer-events: none;';
                        storyDiv.innerHTML = '<p style="color:#ffffff; font-size:28px; font-weight: 500; line-height:1.6; max-width:900px; text-align:center; font-family: sans-serif; pointer-events: auto;">I\'m Dinesh, a passionate Design Engineer and Full-Stack Developer. Driven by an obsession for AI and problem-solving, I build intelligent systems and consistently push boundaries in competitive programming. I thrive at the intersection of beautiful design and complex engineering, turning bold visions into production-ready platforms.</p>';
                        topSection.appendChild(storyDiv);
                    }
                }
            }

            // Burger Menu Mapping Fix
            const socialLabels = Array.from(document.querySelectorAll('p, span, div')).filter(el => (el.textContent || '').trim() === '(SOCIALS)');
            socialLabels.forEach(label => {
                let container = label.parentElement;
                while (container && container.tagName !== 'BODY') {
                    const links = container.querySelectorAll('a');
                    if (links.length >= 4) {
                        links[0].setAttribute('href', 'https://github.com/dinesh0x7e8');
                        links[0].innerHTML = '<svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> <span style="margin-left:8px; color:white;">GitHub</span>';
                        links[0].style.setProperty('color', '#ffffff', 'important');
                        links[0].style.display = 'flex';
                        links[0].style.alignItems = 'center';
                        links[0].style.textDecoration = 'none';

                        links[1].setAttribute('href', 'https://www.linkedin.com/in/dineshkumar-c-s/');
                        links[1].innerHTML = '<svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> <span style="margin-left:8px; color:white;">LinkedIn</span>';
                        links[1].style.setProperty('color', '#ffffff', 'important');
                        links[1].style.display = 'flex';
                        links[1].style.alignItems = 'center';
                        links[1].style.textDecoration = 'none';

                        links[2].setAttribute('href', 'https://wa.me/916382957995');
                        links[2].innerHTML = '<svg width="24" height="24" fill="#ffffff" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg> <span style="margin-left:8px; color:white;">WhatsApp</span>';
                        links[2].style.setProperty('color', '#ffffff', 'important');
                        links[2].style.display = 'flex';
                        links[2].style.alignItems = 'center';
                        links[2].style.textDecoration = 'none';

                        for(let i=3; i<links.length; i++){
                            links[i].style.display = 'none';
                        }
                        
                        break;
                    }
                    container = container.parentElement;
                }
            });

            const emailLinks = Array.from(document.querySelectorAll('a')).filter(a => a.href && a.href.includes('mailto:dinesh0x7e8@gmail.com'));
            emailLinks.forEach(emailLink => {
                if (emailLink.closest('div[data-framer-name="Link"]')) {
                    const linkWrapper = emailLink.closest('div[data-framer-name="Link"]');
                    if (!linkWrapper.dataset.phoneInjected) {
                        linkWrapper.dataset.phoneInjected = 'true';
                        const phoneLink = document.createElement('a');
                        phoneLink.href = 'tel:+916382957995';
                        phoneLink.style.cssText = 'color: #ff4925; text-decoration: none; font-size: 24px; font-weight: bold; display: block; margin-top: 10px; font-family: sans-serif;';
                        phoneLink.textContent = '+91 6382957995';
                        linkWrapper.appendChild(phoneLink);
                    }
                }
            });

            // Project links interceptor V7 (external redirects for home page / latest works)
            document.querySelectorAll('a').forEach(a => {
                const href = (a.getAttribute('href') || '').toLowerCase();
                const isInternalProject = href.includes('/works/') || href.includes('aurex') || 
                                          href.includes('hireme') || href.includes('luvara') || 
                                          href.includes('blueprints') || href.includes('portfolio') || href.includes('sih');
                
                // On index/home, intercept clicks and go straight to external URL
                if (isInternalProject && (path === '/' || path === '/index.html' || path === '')) {
                    if (href.includes('arjuna') || href.includes('aurex')) {
                        a.setAttribute('href', 'https://aurexai.vercel.app/');
                    }
                    else if (href.includes('bima') || href.includes('hireme')) {
                        a.setAttribute('href', 'https://hiremeai.vercel.app/');
                    }
                    else if (href.includes('batavia') || href.includes('luvara')) {
                        a.setAttribute('href', 'https://luvara.vercel.app/');
                    }
                    else if (href.includes('mandala') || href.includes('blueprints')) {
                        a.setAttribute('href', 'https://sih-alumini-smart-campus-frontend.vercel.app/');
                    }
                    
                    a.setAttribute('target', '_blank');
                    a.removeAttribute('data-framer-page-link'); // Stop framer from hijacking click
                }
            });

            // Image Mockup overrides for index/works
            if (path === '/' || path === '/index.html' || path === '' || path.includes('works')) {
                document.querySelectorAll('img').forEach(img => {
                    const src = img.getAttribute('src') || '';
                    // First resolve image based on parent a-tag
                    const parentA = img.closest('a');
                    let targetProject = '';
                    if (parentA) {
                        targetProject = parentA.getAttribute('href') || '';
                    } else {
                        // Fallback: look at nearby text node
                        const textWrap = img.parentElement ? img.parentElement.parentElement : null;
                        if (textWrap && textWrap.textContent) {
                           targetProject = textWrap.textContent.toLowerCase();
                        }
                    }

                    targetProject = targetProject.toLowerCase();
                    if (targetProject) {
                        if (targetProject.includes('aurexai') || targetProject.includes('arjuna') || targetProject.includes('aurex')) {
                            if (!src.includes('aurex-mockup.png')) img.setAttribute('src', '/images/aurex-mockup.png');
                            img.style.objectFit = 'contain';
                        }
                        else if (targetProject.includes('hiremeai') || targetProject.includes('bima') || targetProject.includes('hireme')) {
                            if (!src.includes('hireme-mockup.png')) img.setAttribute('src', '/images/hireme-mockup.png');
                            img.style.objectFit = 'contain';
                        }
                        else if (targetProject.includes('luvara.vercel') || targetProject.includes('batavia') || targetProject.includes('luvara')) {
                            if (!src.includes('luvara-mockup.png')) img.setAttribute('src', '/images/luvara-mockup.png');
                            img.style.objectFit = 'contain';
                        }
                        else if (targetProject.includes('mandala') || targetProject.includes('blueprints')) {
                            if (!src.includes('DINESH.png')) img.setAttribute('src', '/images/DINESH.png');
                            img.style.objectFit = 'contain';
                        }
                        else if (targetProject.includes('portfolio')) {
                            if (!src.includes('portfolio-mockup.png')) img.setAttribute('src', '/images/portfolio/portfolio-mockup.png');
                            img.style.objectFit = 'contain';
                        }
                        else if (targetProject.includes('sih')) {
                            if (!src.includes('sih-mockup.png')) img.setAttribute('src', '/images/SIH/sih-mockup.png');
                            img.style.objectFit = 'contain';
                        }
                    }
                });
            }

            // Dynamically Add SIH and Portfolio on works page
            if (path.includes('works')) {
                const projectLinks = Array.from(document.querySelectorAll('a')).filter(a => a.href && a.href.includes('/works/'));
                if (projectLinks.length > 0) {
                    const lastLink = projectLinks[projectLinks.length - 1];
                    const container = lastLink.parentElement;
                    
                    if (container && !document.getElementById('injected-sih-card')) {
                        const sihCard = lastLink.cloneNode(true);
                        sihCard.id = 'injected-sih-card';
                        sihCard.setAttribute('href', 'https://sih-alumini-smart-campus-frontend.vercel.app/');
                        sihCard.setAttribute('target', '_blank');
                        sihCard.removeAttribute('data-framer-page-link');
                        
                        const sihWalker = document.createTreeWalker(sihCard, NodeFilter.SHOW_TEXT, null, false);
                        let snode;
                        while (snode = sihWalker.nextNode()) {
                            if (snode.nodeValue.includes('04.')) snode.nodeValue = '05.';
                            if (snode.nodeValue.includes('Blueprints 2026') || snode.nodeValue.includes('Mandala')) snode.nodeValue = 'SIH Smart Campus';
                            if (snode.nodeValue.includes('Hackathon Winner') || snode.nodeValue.includes('FASHION')) snode.nodeValue = 'Alumni Smart Campus Frontend';
                            if (snode.nodeValue.includes('UX/UI Design')) snode.nodeValue = 'Full-Stack Development';
                        }
                        const sihImg = sihCard.querySelector('img');
                        if (sihImg) {
                            sihImg.setAttribute('src', '/images/SIH/sih-mockup.png');
                            sihImg.style.objectFit = 'contain';
                        }
                        container.appendChild(sihCard);
                    }
                    
                    if (container && !document.getElementById('injected-portfolio-card')) {
                        const portCard = lastLink.cloneNode(true);
                        portCard.id = 'injected-portfolio-card';
                        portCard.setAttribute('href', 'https://github.com/dinesh4o/Portfolio');
                        portCard.setAttribute('target', '_blank');
                        portCard.removeAttribute('data-framer-page-link');
                        
                        const portWalker = document.createTreeWalker(portCard, NodeFilter.SHOW_TEXT, null, false);
                        let pnode;
                        while (pnode = portWalker.nextNode()) {
                            if (pnode.nodeValue.includes('04.') || pnode.nodeValue.includes('05.')) pnode.nodeValue = '06.';
                            if (pnode.nodeValue.includes('Blueprints 2026') || pnode.nodeValue.includes('Mandala')) pnode.nodeValue = 'Personal Portfolio';
                            if (pnode.nodeValue.includes('Hackathon Winner') || pnode.nodeValue.includes('FASHION')) pnode.nodeValue = 'Next.js Framer Motion Web App';
                            if (pnode.nodeValue.includes('UX/UI Design')) pnode.nodeValue = 'Web Design & Development';
                        }
                        const portImg = portCard.querySelector('img');
                        if (portImg) {
                            portImg.setAttribute('src', '/images/portfolio/portfolio-mockup.png');
                            portImg.style.objectFit = 'contain';
                        }
                        container.appendChild(portCard);
                    }
                }
            }

        }, 500);
    }
})();
