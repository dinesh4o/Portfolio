const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Helper to send HTML files
const serveHtml = (req, res, fileName) => {
  const filePath = path.join(__dirname, fileName);
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send('Page not found');
  }
};

// Serve static assets (CSS, JS, images, etc.) from the root
// We exclude .html files from direct static serving so we can enforce clean routes
app.use(express.static(__dirname, {
  extensions: ['html'], // Automatically map clean URLs to .html files
  index: 'index.html'
}));

// Fallback manual routes if static extensions mapping isn't enough
app.get('/works', (req, res) => serveHtml(req, res, 'works.1.html'));
app.get('/about', (req, res) => serveHtml(req, res, 'about.html'));
app.get('/achievements', (req, res) => serveHtml(req, res, 'achievements.html'));
app.get('/blog', (req, res) => serveHtml(req, res, 'blog.html'));
app.get('/contact', (req, res) => serveHtml(req, res, 'contact.html'));
app.get('/waitlist', (req, res) => serveHtml(req, res, 'waitlist.html'));

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`Your deployable React/Framer project is ready!`);
});
