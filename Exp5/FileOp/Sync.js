const http = require('http');
const fs = require('fs');


const file = 'advisory.txt';


fs.writeFileSync(file, 'Sugarcane Irrigation Log\n');


fs.appendFileSync(file, 'Day 1: Soil moisture 45%. No irrigation needed.\n');
fs.appendFileSync(file, 'Day 2: Soil moisture 30%. Irrigation recommended.\n');


const data = fs.readFileSync(file, 'utf8');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Synchronous File Operations</h1>
             <h3>READ Result:</h3>
             <pre style="background:#f4f4f4; padding:15px;">${data}</pre>`);
}).listen(3000, () => console.log('Running at http://localhost:3000'));
