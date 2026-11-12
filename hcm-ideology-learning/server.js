// server.js - Máy chủ HTTP tĩnh tích hợp sẵn của Node.js (Zero external dependencies)
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0];
  if (cleanUrl === '/') cleanUrl = '/index.html';

  const filePath = path.join(PUBLIC_DIR, decodeURIComponent(cleanUrl));
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 Not Found</h1><p>Tệp không tồn tại.</p>');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h1>500 Server Error</h1><p>${err.code}</p>`);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`================================================================`);
  console.log(`🇻🇳 WEBSITE ÔN TẬP TƯ TƯỞNG HỒ CHÍ MINH ĐÃ SẴN SÀNG!`);
  console.log(`Đang chạy tại địa chỉ: http://localhost:${PORT}`);
  console.log(`Đầy đủ 6 chương lý thuyết & 600 câu hỏi trắc nghiệm chất lượng cao.`);
  console.log(`================================================================`);
});
