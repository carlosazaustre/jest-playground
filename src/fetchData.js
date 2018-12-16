const axios = require('axios')
const API_URL = 'https://jsonplaceholder.typicode.com'
async function fetchData (data) {
  let response
  try {
    response = await axios.get(`${API_URL}/${data}`)
  } catch (err) {
    return err
  }

  return response.data.name
}

module.exports = fetchData