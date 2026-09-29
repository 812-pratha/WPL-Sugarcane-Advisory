const http = require("http");


const server = http.createServer((req, res) => {
    res.write("<h1>Sugarcane Irrigation Advisory System</h1>");
    res.write("<p>Server is running successfully.</p>");
    res.end();
});


server.listen(8000, () => {
    console.log("Server running at http://localhost:8000");
});
