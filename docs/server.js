const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = Number(process.env.PORT || 4173);
const rootDir = __dirname;

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.gpx': 'application/gpx+xml; charset=utf-8',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};

function getFilePath(urlPath) {
  const normalizedPath = decodeURIComponent(urlPath.split('?')[0]);
  const safePath = path.normalize(normalizedPath).replace(/^(\.\.[/\\])+/, '');
  let targetPath = path.join(rootDir, safePath);

  if (safePath === path.sep || safePath === '.' || safePath === '') {
    targetPath = path.join(rootDir, 'index.html');
  }

  return targetPath;
}

function sendFile(response, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      if (error.code === 'ENOENT') {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        response.end('Not Found');
        return;
      }

      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Internal Server Error');
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || 'application/octet-stream';

    response.writeHead(200, {
      'Cache-Control': 'no-store',
      'Content-Type': contentType
    });
    response.end(data);
  });
}

const server = http.createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify({ ok: true }));
    return;
  }

  const filePath = getFilePath(request.url || '/');

  fs.stat(filePath, (error, stats) => {
    if (!error && stats.isDirectory()) {
      sendFile(response, path.join(filePath, 'index.html'));
      return;
    }

    if (!error) {
      sendFile(response, filePath);
      return;
    }

    sendFile(response, path.join(rootDir, 'index.html'));
  });
});

server.listen(port, host, () => {
  console.log(`Local server running at http://${host}:${port}`);
});
