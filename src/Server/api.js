const express = require('express');
const router = express.Router();
const locationController = require('./locationController');

router.post('/location',
  (req, res, next) => {
    console.log('hello from the backend')
    next()
  },
  locationController.getLocationInformation,
  (req, res) => res.status(200)/*.json(res.locals.locationInfo)*/
);

module.exports = router;