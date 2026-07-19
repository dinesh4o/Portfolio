# DOM Text Replacement Strategies

When replacing text in Framer-generated websites (or similar React applications) where text might be split into individual `<span>` tags per character for animation purposes, a simple `textContent` string replacement will fail and destroy the animation structure.

## Handling Split-Span Animations
Instead of checking for the full string in a single text node, check the `textContent` of the *parent* container. If it matches, replace its `innerHTML` with a reconstructed series of `<span>` tags:

```javascript
// Example: Replacing "ARJUNA" with "ESPRESSO"
if (node.children.length > 0 && node.textContent.trim().toUpperCase() === 'ARJUNA') {
    const createSpans = (word) => word.split('').map(char => 
        `<span style="display:inline-block;opacity:1;transform:none;will-change:transform">\${char}</span>`
    ).join('');
    
    node.innerHTML = createSpans('ESPRESSO');
    node.style.whiteSpace = 'nowrap';
}
```

## Handling Specific Components
If you need to replace or hide specific components (like Testimonials or Logos) and the `MutationObserver` misses them due to hydration, you can inject a global `<style>` block at build time to hide them completely, or use `querySelectorAll` by `data-framer-name`:

```css
/* Hiding specific components */
[data-framer-name="Testimonial highlight"], 
[data-framer-name="Start"] {
    display: none !important;
}
```

## Logo Replacements
To reliably replace logos that are images, check the `src` attribute for the specific Framer image ID. 
If the logo is an SVG, check the `d` attribute of the SVG `<path>` and replace the entire `<svg>` node with an `<img>` tag pointing to the new logo.
