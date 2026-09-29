const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Express.js Basic Routing');
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
app.listen(3000)
