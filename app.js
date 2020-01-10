const {argvWeather : argv} = require('./config/yargs');
const location = require('./location/location');

const getInfov2 = async (address) => {
  const response = await location.getLatLngLocation(argv.address)
  .then(res => 
    location.getWeather(res.lat, res.lng))
  .then(res => {
    return `Weather of ${address} is ${res.temp} °C`;
    })
  .catch(err => `Weather of ${address} is unavailable`)
  
  return response;
}

const getInfo = async (address) => {
  try{
    const coord = await location.getLatLngLocation(argv.address)
    const weather = await location.getWeather(coord.lat, coord.lng)
    return `Weather of ${address} is ${weather.temp} °C`;
  }catch(err){
    return `Weather of ${address} is unavailable`
  }
}

getInfo(argv.address)
  .then(console.log)
  .catch(console.log)

