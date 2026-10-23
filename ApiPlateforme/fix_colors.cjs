const fs = require('fs');

const files = [
  'src/components/factorGrid.tsx',
  'src/components/foncierModal.tsx',
  'src/components/mainOeuvreModal.tsx',
  'src/components/costsBySectorModal.tsx',
  'src/components/fiscaliteModal.tsx',
  'src/components/factorModal.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Remove the gradients completely, replace with solid #0F0B60
  content = content.replace(/bg-gradient-to-[a-z]+\s+from-\[#0F0B60\]\s+to-\[#1a1599\]/g, 'bg-[#0F0B60]');
  content = content.replace(/from-\[#0F0B60\]\s+to-\[#1a1599\]/g, 'bg-[#0F0B60]');
  content = content.replace(/bg-gradient-to-[a-z]+\s+\$\{factor\.color\}/g, '${factor.color}');
  content = content.replace(/bg-gradient-to-[a-z]+\s+/g, ''); // catch any leftover gradients like `bg-gradient-to-br bg-[#0F0B60]`

  // Fix text-yellow-300 and text-yellow-400
  content = content.replace(/text-yellow-300/g, 'text-white');
  content = content.replace(/text-yellow-400/g, 'text-white');
  content = content.replace(/text-yellow-500/g, 'text-white');
  content = content.replace(/text-yellow-600/g, 'text-white');

  // Fix text-green, text-red, etc that might have survived
  content = content.replace(/text-green-[0-9]+/g, 'text-[#0F0B60]');
  content = content.replace(/text-red-[0-9]+/g, 'text-[#0F0B60]');
  content = content.replace(/text-orange-[0-9]+/g, 'text-[#0F0B60]');
  
  // Fix background issues: text-[#0F0B60] inside a bg-[#0F0B60] block.
  // This is hard to do with regex reliably. Let's do some specific replacements for known bad patterns.
  // In factorGrid.tsx:
  content = content.replace(/text-\[#0F0B60\]\/80/g, 'text-gray-100'); // If it was meant to be light text

  // Fix buttons that might have black text on dark background
  content = content.replace(/text-gray-900\s+hover:bg-\[#1a1599\]/g, 'text-white hover:bg-[#1a1599]');

  fs.writeFileSync(f, content);
});

console.log('Fixed gradients and colors.');
