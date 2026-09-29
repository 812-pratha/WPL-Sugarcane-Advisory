const http = require('http');
const math = require('./mathModule');


http.createServer((req, res) => {
    const params = new URL(req.url, 'http://localhost').searchParams;
    const a = parseFloat(params.get('a')) || 0;
    const b = parseFloat(params.get('b')) || 0;


    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <h2>Custom Math Module</h2>
        <form method="GET">
            A: <input type="number" name="a" value="${a}" step="any">
            B: <input type="number" name="b" value="${b}" step="any">
            <button type="submit">Calculate</button>
        </form>
        <p>Operands: ${a} and ${b}</p>
        <p>Addition: ${math.add(a, b)}</p>
        <p>Subtraction: ${math.subtract(a, b)}</p>
        <p>Multiplication: ${math.multiply(a, b)}</p>
        <p>Division: ${math.divide(a, b)}</p>
    `);
}).listen(3000, () => console.log('Running at http://localhost:3000'));
