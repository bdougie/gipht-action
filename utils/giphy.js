const axios = require('axios')

function fetchGif(url) {
  return Promise.resolve(axios.get(url)
    .then(payload => payload.data.data.images.fixed_height.url)
    .catch(err => console.error(err)))
}

module.exports = fetchGif