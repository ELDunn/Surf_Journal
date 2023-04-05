const models = require('./surfModel');

const locationController = {};

locationController.getLocationInformation = (req, res, next) => {
   const {
    lat,
    long,
    numWaves,
    vibes,
    crowd
   } = req.body;
    const params = ['waveHeight', 'airTemperature', 'swellDirection', 'swellHeight', 'swellPeriod', 'waterTemperature'] ;
    const src = 'sg'

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&source=${sg}`, {
    headers: {
        'Authorization': 'ad4905d2-cb4e-11ed-bce5-0242ac130002-ad490690-cb4e-11ed-bce5-0242ac130002'
    }})
    .then((response) => response.json())
    .then((jsonData) => {
        console.log(jsonData);
        const waveHeight = jsonData.hours[0].waveheight;
        const airTemperature = jsonData.hours[0].airTemperature;
        const swellDirection = jsonData.hours[0].swellDirection;
        const swellHeight = jsonData.hours[0].swellHeight;
        const swellPeriod = jsonData.hours[0].swellPeriod;
        const waterTemperature = jsonData.hours[0].waterTemperature;

        models.Wave.create({
            lat, long, numWaves, vibes, crowd, waveHeight, airTemperature, waterTemperature, swellDirection, swellHeight, swellPeriod
        })
        res.locals.locationInfo = {jsonData, lat, long, numWaves, vibes, crowd};
        return next();
    });
}

module.exports = locationController;


