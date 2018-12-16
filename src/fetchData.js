'use strict'

const axios = require('axios')
const API_URL = 'https://jsonplaceholder.typicode.com'

const fetchData = {
  async from(data) {
    let response
    try {
      response = await axios.get(`${API_URL}/${data}`)
    } catch (err) {
      return err
    }
  
    return response.data
  }

}

module.exports = fetchData