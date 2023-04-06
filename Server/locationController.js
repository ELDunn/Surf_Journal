const Wave = require('./surfModel');

const locationController = {};

locationController.getLocationInformation = (req, res, next) => {
    console.log('Made it into the controller')
   const {
    lat,
    long,
    numWaves,
    vibes,
    crowd
   } = req.body;
    const params = ['waveHeight', 'airTemperature', 'swellDirection', 'swellHeight', 'wavePeriod', 'waterTemperature'] ;
    const src = 'sg'

    fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${long}&params=${params}&source=${src}`, {
        headers: {
            'Authorization': 'ad4905d2-cb4e-11ed-bce5-0242ac130002-ad490690-cb4e-11ed-bce5-0242ac130002'
        }})
        .then((response) => response.json())
        .then((jsonData) => {
            console.log(jsonData.hours[40].waveHeight, jsonData.hours[40].swellPeriod)
            const waveHeight = jsonData.hours[40].waveheight
            console.log('waveHeight: ', waveHeight)
            const airTemperature = jsonData.hours[40].airTemperature
            console.log('airTemperature:', airTemperature)
            const swellDirection = jsonData.hours[40].swellDirection
            console.log('swellDirection: ', swellDirection)
            const swellHeight = jsonData.hours[40].swellHeight
            console.log('swellHeight: ', swellHeight)
            const swellPeriod = jsonData.hours[40].swellPeriod
            console.log('SwellPeriod:', swellPeriod)
            const waterTemperature = jsonData.hours[40].waterTemperature
            console.log('Water Temp:', waterTemperature)
            
            Wave.create({lat, long, numWaves, vibes, crowd, waveHeight, airTemperature, waterTemperature, swellDirection, swellHeight, swellPeriod})
                .then((data) => {
                    res.locals.locationInfo = data
                    // console.log('=========-=-===============-======================== DATA from CREATING A DOCUMENT', data)
                    return next();
            })
        })
}

locationController.getLogs = (req, res, next) => {
    console.log('Getting the logs')
    Wave.find()
    .then((data) => {
        console.log('Data:', data);
        res.locals.logData = data;
        next();
    })
}
module.exports = locationController;
