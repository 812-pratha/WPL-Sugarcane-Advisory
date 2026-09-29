const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(err ? 'Error loading file' : data);
        });
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            crop: "Sugarcane",
            soil_moisture: "45%",
            advisory: "Do not irrigate"
        }));
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page does not exist');
    }
}).listen(3000, () => console.log('Server running at http://localhost:3000'));
