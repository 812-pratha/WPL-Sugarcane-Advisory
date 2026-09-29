const http = require('http');
const fs = require('fs').promises;


http.createServer(async (req, res) => {
    await fs.writeFile('advisory.txt', 'Sugarcane Irrigation Log\n');
    await fs.appendFile('advisory.txt', 'Day 1: Soil moisture 45%. No irrigation.\n');
    await fs.appendFile('advisory.txt', 'Day 2: Soil moisture 30%. Irrigation recommended.\n');
    await fs.appendFile('advisory.txt', 'Day 3: Soil moisture 60%. No irrigation.\n');
    await fs.appendFile('advisory.txt', 'Day 4: Soil moisture 25%. Heavy irrigation required.\n');
    const data = await fs.readFile('advisory.txt', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h2>Asynchronous File Operations</h2>
        <p>Executed sequentially using fs promises:</p>
        <div>
            <strong>Final File Content:</strong><br>
            <pre>${data}</pre>
        </div>
        <p>Write then Append then Read</p>
    `);
}).listen(3000, () => console.log('Running at http://localhost:3000'));
