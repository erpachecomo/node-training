const {argvWeather : argv} = require('./config/yargs');
const axios = require('axios');

axios({
    "method":"GET",
    "url":"https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php",
    "headers":{
      "x-rapidapi-key":"8f50cb10bdmshec653a3c7ce5202p16a059jsna1000593a272"
    },
    "params":{
      "location":argv.address
    }
    })
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })