const request = require('request');
const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (body === '[]') {
    console.log(`The ${breed} is not found.`);
  } else if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0]["description"]);
  }
});