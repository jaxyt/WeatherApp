const https = require('https');
const http = require('http');
const url = require('url');
const apiKey = '0af18737722b3d867cbf25114c09f760';
const location = process.argv.slice(2);

function getWeather(locationArgs) {
    if (cityId) {
        
    } else if (zipcode) {
        if (zipcode && country) {
            
        } else {

        }
    } else if (cityName && country) {
        
    }
}

function getByZip(zipcode, country = 'us') {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&APPID=${apiKey}`, (response) => {
        let body = '';
        response.on('data', (data) => {
            body += data.toString();
        });

        response.on('end', () => {
            const weatherInfo = JSON.parse(body);
            console.dir(weatherInfo);
            console.log(`It is currently ${(weatherInfo.main.temp/10).toFixed(2)} degrees celsius in ${weatherInfo.name}`)
        });
    })
}

function getByCityAndCountry(cityName, country = '') {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${apiKey}`, (response) => {
        let body = '';
        response.on('data', (data) => {
            body += data.toString();
        });

        response.on('end', () => {
            const weatherInfo = JSON.parse(body);
            console.dir(weatherInfo);
            console.log(`It is currently ${(weatherInfo.main.temp/10).toFixed(2)} degrees celsius in ${weatherInfo.name}`)
        });
    })
}

function getById(cityId) {
    const request = https.get(`https://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=${apiKey}`, (response) => {
        let body = '';
        response.on('data', (data) => {
            body += data.toString();
        });

        response.on('end', () => {
            const weatherInfo = JSON.parse(body);
            console.dir(weatherInfo);
            console.log(`It is currently ${(weatherInfo.main.temp/10).toFixed(2)} degrees celsius in ${weatherInfo.name}`)
        });
    })
}


getById(location[0]);


const sampleWeather = { 
    coord: { lon: -80.11, lat: 26.5 },
    weather:
    [ { id: 802,
        main: 'Clouds',
        description: 'scattered clouds',
        icon: '03d' } ],
    base: 'stations',
    main:
    { temp: 303.91,
        pressure: 1017,
        humidity: 62,
        temp_min: 301.48,
        temp_max: 305.37 },
    visibility: 16093,
    wind: { speed: 6.2, deg: 70, gust: 7.7 },
    clouds: { all: 40 },
    dt: 1561591436,
    sys:
    { type: 1,
        id: 5314,
        message: 0.0076,
        country: 'US',
        sunrise: 1561544956,
        sunset: 1561594623 },
    timezone: -14400,
    id: 4148411,
    name: 'Boca Raton',
    cod: 200 
};

