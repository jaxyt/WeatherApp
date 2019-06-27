const https = require('https');
const http = require('http');
const apiKey = '0af18737722b3d867cbf25114c09f760';
const location = process.argv.slice(2);

function printError(error) {
    console.error(error)
}

function weather(args) {
    try {
        const method = args[0];
        const main = args[1];
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?${method}=${main}&APPID=${apiKey}`, (res) => {
            if (res.statusCode === 200) {
                let body = ""; 
                res.on('data', (chunk) => {
                    body += chunk.toString();
                });
                res.on('end', () => {
                    try {
                        const weatherData = JSON.parse(body);
                        console.log(`it is currently ${(weatherData.main.temp * (9/5) - 459.67).toFixed(1)}F in ${weatherData.name}`);
                    } catch (error) {
                        printError(error);
                    }
                });
            } else {
                const statusCodeError = new Error(`${http.STATUS_CODES[res.statusCode]}`);
                printError(statusCodeError);
            }
            
        }); 
    } catch (error) {
        printError(error);
    }
}


weather(location);