const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));

const replacements = [
  // Colors
  { from: /bg-white/g, to: 'bg-[#FEF9EF]' },
  { from: /bg-\[#FEFAE0\]/g, to: 'bg-[#FEF9EF]' },
  { from: /bg-\[#111111\]/g, to: 'bg-[#227c9d]' },
  { from: /bg-\[#0a0a0a\]/g, to: 'bg-[#17c3b2]' },
  { from: /text-\[#8B5E3C\]/g, to: 'text-[#fe6d73]' },
  
  // Specific Hex codes inside styles or arbitrary values
  { from: /#CCD5AE/gi, to: '#17C3B2' },
  { from: /#FAEDCD/gi, to: '#FFCB77' },
  { from: /#D4A373/gi, to: '#FE6D73' },
  { from: /#E9EDC9/gi, to: '#227C9D' },
  
  // Remove border classes
  { from: /border-\d+/g, to: '' },
  { from: /border-[tbrl]-\d+/g, to: '' },
  { from: /border-black/g, to: '' },
  { from: /border-gray-[0-9]+/g, to: '' },
  { from: /\bborder\b/g, to: '' }, // generic border class
  
  // Replace brutalist shadows with soft shadows
  { from: /shadow-\[[^\]]+\]/g, to: 'shadow-lg' },
  
  // Cleanup any double spaces created by empty replacements
  { from: /  +/g, to: ' ' },
];

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(r => {
    content = content.replace(r.from, r.to);
  });
  
  fs.writeFileSync(filePath, content);
});

// Also check App.jsx
const appPath = path.join(__dirname, 'src/App.jsx');
if (fs.existsSync(appPath)) {
  let appContent = fs.readFileSync(appPath, 'utf8');
  replacements.forEach(r => {
    appContent = appContent.replace(r.from, r.to);
  });
  fs.writeFileSync(appPath, appContent);
}

console.log('Styles updated.');
