const {argvWeather : argv} = require('./config/yargs');
const location = require('./location/location');

location.getLatLngLocation(argv.address)
  .then(res => {
    console.log(res)
    return location.getWeather(res.lat, res.lng)
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))