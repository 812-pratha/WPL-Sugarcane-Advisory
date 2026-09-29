function getSensorData(callback) {


    const soilMoisture = 35;


    console.log("Reading soil moisture sensor...");


    setTimeout(() => {
        callback(soilMoisture);
    }, 2000);
}


function giveAdvisory(soilMoisture) {


    if (soilMoisture < 40) {
        console.log("Soil moisture is low.");
        console.log("Advisory: Irrigation is required.");
    }
   else {
        console.log("Soil moisture is sufficient.");
        console.log("Advisory: Irrigation is not required.");  }
}
getSensorData(giveAdvisory);
