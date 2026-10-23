const fs = require('fs');

const files = [
  'src/components/factorGrid.tsx',
  'src/components/foncierModal.tsx',
  'src/components/mainOeuvreModal.tsx',
  'src/components/costsBySectorModal.tsx',
  'src/components/fiscaliteModal.tsx',
  'src/components/factorModal.tsx'
];

const iconMap = {
  ShoppingCart: 'ShoppingCartOutlined',
  Truck: 'CarOutlined',
  MapPin: 'EnvironmentOutlined',
  Zap: 'ThunderboltOutlined',
  Wifi: 'WifiOutlined',
  Users: 'TeamOutlined',
  Shield: 'SafetyCertificateOutlined',
  CreditCard: 'CreditCardOutlined',
  ChevronRight: 'RightOutlined',
  TrendingUp: 'LineChartOutlined',
  DollarSign: 'DollarOutlined',
  X: 'CloseOutlined',
  Home: 'HomeOutlined',
  Building: 'BankOutlined',
  FileText: 'FileTextOutlined',
  Scale: 'AccountBookOutlined',
  BarChart3: 'BarChartOutlined',
  Calculator: 'CalculatorOutlined',
  Percent: 'PercentageOutlined',
  ChevronDown: 'DownOutlined',
  ChevronUp: 'UpOutlined',
  Droplet: 'BgColorsOutlined',
  MessageSquare: 'MessageOutlined',
  Phone: 'PhoneOutlined',
  Plane: 'SendOutlined',
  Fuel: 'FireOutlined',
  Briefcase: 'ProfileOutlined'
};

const colorsRegex = /(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)/g;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace Lucide imports with Antd
  const importMatch = content.match(/import\s+\{([^}]+)\}\s+from\s+['\"]lucide-react['\"]/);
  if (importMatch) {
    const icons = importMatch[1].split(',').map(i => i.trim()).filter(Boolean);
    const newIcons = [...new Set(icons.map(i => iconMap[i] || i))];
    content = content.replace(importMatch[0], `import { ${newIcons.join(', ')} } from '@ant-design/icons'`);
    
    // Replace icon components in the JSX
    icons.forEach(icon => {
      if (iconMap[icon]) {
        content = content.replace(new RegExp(`<${icon}\\b`, 'g'), `<${iconMap[icon]}`);
        // Handle "icon": "Users" strings
        content = content.replace(new RegExp(`"icon":\\s*"${icon}"`, 'g'), `"icon": "${iconMap[icon]}"`);
        // Handle string assignments in getIcon
        content = content.replace(new RegExp(`${icon},`, 'g'), `${iconMap[icon]},`);
        content = content.replace(new RegExp(`${icon}(?=\\s|})`, 'g'), `${iconMap[icon]}`);
      }
    });
  }

  // Replace multiple colors with #0F0B60 variants
  content = content.replace(/bg-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(500|600|700|800|900)/g, 'bg-[#0F0B60]');
  content = content.replace(/bg-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(50|100|200)/g, 'bg-[#0F0B60]/10');
  content = content.replace(/text-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(500|600|700)/g, 'text-[#0F0B60]');
  content = content.replace(/text-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(50|100|200)/g, 'text-[#0F0B60]/80');
  content = content.replace(/border-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(500|600)/g, 'border-[#0F0B60]');
  content = content.replace(/border-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(100|200|300)/g, 'border-[#0F0B60]/20');
  content = content.replace(/hover:bg-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(600|700)/g, 'hover:bg-[#1a1599]');
  content = content.replace(/hover:text-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(600|700)/g, 'hover:text-[#1a1599]');
  content = content.replace(/from-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(500|600|700)/g, 'from-[#0F0B60]');
  content = content.replace(/to-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-(500|600|700)/g, 'to-[#1a1599]');
  
  // Specific fix for factorGrid.tsx's color property in the JSON array
  content = content.replace(/color:\s*"from-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-[0-9]+\s+to-(blue|green|yellow|orange|purple|red|indigo|pink|teal|emerald|amber)-[0-9]+"/g, 'color: "from-[#0F0B60] to-[#1a1599]"');

  fs.writeFileSync(f, content);
});

console.log("Refactored all modals and factorGrid with Antd icons and #0F0B60 colors.");
