const fs = require('fs');
const path = require('path');

// 创建 public 目录如果不存在
const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG 图标内容 - FLUX Kontext 风格的 "FK" 标志
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f97316;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- 背景圆形 -->
  <circle cx="256" cy="256" r="240" fill="#030712" stroke="url(#gradient)" stroke-width="8"/>
  
  <!-- 内部渐变背景 -->
  <circle cx="256" cy="256" r="220" fill="url(#gradient)" opacity="0.1"/>
  
  <!-- FK 字母组合 -->
  <g filter="url(#glow)">
    <!-- F -->
    <path d="M 140 160 L 140 352 L 180 352 L 180 280 L 240 280 L 240 240 L 180 240 L 180 200 L 260 200 L 260 160 L 140 160 Z" 
          fill="white" opacity="0.95"/>
    
    <!-- K -->
    <path d="M 280 160 L 280 352 L 320 352 L 320 270 L 360 320 L 360 352 L 400 352 L 350 280 L 400 160 L 360 160 L 320 230 L 320 160 L 280 160 Z" 
          fill="white" opacity="0.95"/>
  </g>
  
  <!-- 装饰性元素 -->
  <circle cx="380" cy="380" r="20" fill="url(#gradient)" opacity="0.6"/>
  <circle cx="132" cy="132" r="15" fill="url(#gradient)" opacity="0.5"/>
  <circle cx="400" cy="150" r="10" fill="url(#gradient)" opacity="0.4"/>
</svg>`;

// 保存 SVG 文件
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgContent);
console.log('✓ Created icon.svg');

// 创建 favicon.ico 的 SVG 版本（现代浏览器支持 SVG favicon）
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
console.log('✓ Created favicon.svg');

// 创建不同尺寸的 PNG 占位符说明文件
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mstile-150x150.png', size: 150 },
];

// 创建 PNG 占位符（实际项目中需要用图像处理库生成真实 PNG）
sizes.forEach(({ name, size }) => {
  // 创建简单的 SVG 作为 PNG 的替代
  const pngSvg = svgContent.replace('viewBox="0 0 512 512"', `viewBox="0 0 512 512" width="${size}" height="${size}"`);
  fs.writeFileSync(path.join(publicDir, name), pngSvg);
  console.log(`✓ Created ${name} (${size}x${size})`);
});

// 创建 site.webmanifest
const manifest = {
  name: "FLUX Kontext Italia",
  short_name: "FLUX Kontext",
  icons: [
    {
      src: "/android-chrome-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/android-chrome-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  theme_color: "#a855f7",
  background_color: "#030712",
  display: "standalone"
};

fs.writeFileSync(
  path.join(publicDir, 'site.webmanifest'),
  JSON.stringify(manifest, null, 2)
);
console.log('✓ Created site.webmanifest');

// 创建 browserconfig.xml for Windows
const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#a855f7</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;

fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfig);
console.log('✓ Created browserconfig.xml');

console.log('\n✅ All icons generated successfully!');
console.log('Note: The PNG files are actually SVG files. For production, use a proper image processing library to generate real PNG files.');
