const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) +'&appid=dc53a4676717bdcbca329816ab72bc14&unit=metric'

    request({ url, json: true }, (error, response) => {
        const {temp} = response.body.current
          if (error) {
              callback('Unable to connect to weather service!', undefined)
          } else if (response.body.error) {
              callback('Unable to find location', undefined)
          } else {
              callback(undefined, "your weather is "+ response.body.current.weather[0].description +" and the tempreature is "+temp+",and the humidity is "+response.body.current.humidity)   
          }
    })
}

module.exports = forecast