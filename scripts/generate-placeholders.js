const fs = require('fs');
const path = require('path');

const restaurants = [
  'palette-du-gout',
  'note-enchantee',
  'a-la-francaise',
  'delice-des-sens'
];

const svgTemplate = (name) => `
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="#f6f6f6"/>
  <text x="50%" y="50%" font-family="Arial" font-size="24" fill="#666" text-anchor="middle">
    ${name}
  </text>
</svg>
`;

// Create restaurants directory if it doesn't exist
const restaurantsDir = path.join(__dirname, '../public/restaurants');
if (!fs.existsSync(restaurantsDir)) {
  fs.mkdirSync(restaurantsDir, { recursive: true });
}

// Generate placeholder images
restaurants.forEach(name => {
  const svg = svgTemplate(name);
  fs.writeFileSync(path.join(restaurantsDir, `${name}.jpg`), svg);
}); 