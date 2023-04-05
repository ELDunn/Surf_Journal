const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://ericlewisdunn:elephant1@cluster0.xowczqe.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'surf'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const surfSchema = new Schema({
    waveHeight: Number,
    airTemperature: Number,
    swellDirection: Number,
    swellHeight: Number,
    swellPeriod: Number,
    waterTemperature: Number,
    lat:Number,
    long:Number,
    numWaves: Number,
    vibes:Number,
    crowd:Number
})

const Wave = mongoose.model('wave', surfSchema);

module.exports = {};