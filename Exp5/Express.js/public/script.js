document.getElementById('apiButton').addEventListener('click', async () => {
    try {
        const response = await fetch('/api');
        const data = await response.json();
        
        document.getElementById('apiData').innerHTML = `
            <h3>API Data:</h3>
            <p><strong>Crop:</strong> ${data.crop}</p>
            <p><strong>Soil Moisture:</strong> ${data.soil_moisture}</p>
            <p><strong>Advisory:</strong> ${data.advisory}</p>
        `;
    } catch (error) {
        console.error('Error fetching API data:', error);
        document.getElementById('apiData').innerHTML = '<p>Error fetching data</p>';
    }
});
