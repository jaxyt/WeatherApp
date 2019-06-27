const https = require('https');
const apiKey = '0af18737722b3d867cbf25114c09f760';
const location = process.argv.slice(2);



function weather(args) {
    try {
        const method = args[0];
        const main = args[1];
        const request = https.get(`https://api.openweathermap.org/data/2.5/weather?${method}=${main}&APPID=${apiKey}`, (res) => {
            let body = ""; 
            res.on('data', (chunk) => {
                body += chunk.toString();
            });
            res.on('end', () => {
                const weatherData = JSON.parse(body);
                console.dir(weatherData);
            });
        }); 
    } catch (error) {
        console.log(error);
    }
}


weather(location);