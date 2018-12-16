'use strict'

const fetchData = require('./fetchData')

async function getName (uri) {
  let data
  try {
    data = await fetchData.from(uri)
  } catch (err) {
    return err
  }

  return data.name
}

module.exports = getName