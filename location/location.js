
const axios = require('axios');

const getLatLngLocation = async (city) =>{
  const response = await axios({
    "method":"GET",
    "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    "headers":{
      "x-rapidapi-key":"8f50cb10bdmshec653a3c7ce5202p16a059jsna1000593a272"
    },
    "params":{
      "location":city
    }
    });
    
    if(response.data.Results.length === 0) {
      throw new Error(`City '${city}' not found`)
    }
    
    const data = response.data.Results[0];
    const {name:address, lat, lon:lng} = data;

    return {
      address,
      lat,
      lng
    }
}

const getWeather = async (lat, lon) => {
  const response = await axios({
    'method': "GET",
    'url' : `https://api.openweathermap.org/data/2.5/weather`,
    'params' : {
      'lat':lat,
      'lon':lon,
      'appid':'28b13597aa4adfa9bd0d57be91aad873',
      'units':'metric'
    }
  });
  
  return response.data.main;
}

module.exports = {
  getLatLngLocation,
  getWeather
}