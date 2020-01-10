const {argvWeather : argv} = require('./config/yargs');
const location = require('./location/location');

const getInfo = async (address) => {
  const response = await location.getLatLngLocation(argv.address)
  .then(res => 
    location.getWeather(res.lat, res.lng))
  .then(res => {
    return `Weather of ${address} is ${res.temp} °C`;
    })
  .catch(err => `Weather of ${address} is unavailable`)
  
  return response;
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log)

