const weather = require('./weather');
// join multiple values passed as arguments and replace all spaces with underscores
const query = process.argv.slice(2).join("_").replace(' ', '_');
weather.get(query);