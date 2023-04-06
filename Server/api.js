const express = require('express');
const router = express.Router();
const locationController = require('./locationController');

router.post('/location', locationController.getLocationInformation, (req, res) => {
  res.status(200).json(res.locals.locationInfo)
});

router.get('/getLogs', locationController.getLogs, (req,res) => {
  // console.log('Im in the router /getLogs')
  res.status(200).json(res.locals.logData);
  // res.status(200).json(res.locals.)
})

module.exports = router;