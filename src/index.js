const axios = require('axios');
const cron = require("node-cron");

cron.schedule("* * * * *", function () {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`)
        .then(response => {
            console.log(response.data.url);
            console.log(response.data.explanation);
        })
        .catch(error => {
            console.log(error);
        });
});
