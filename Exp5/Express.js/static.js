const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to the Express.js Basic Routing Demo!');
});

app.get('/api', (req, res) => {
    res.json({
        crop: "Sugarcane",
        soil_moisture: "45%",
        advisory: "Do not irrigate"
    });
});

app.get('/user/:id', (req, res) => {
    res.json({
        message: `User profile for ID: ${req.params.id}`,
        userId: req.params.id
    });
});

app.use((req, res) => {
    res.status(404).send('Page does not exist');
});

app.listen(3000, () => console.log('Express server running at http://localhost:3000'));
