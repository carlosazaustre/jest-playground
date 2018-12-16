'use strict'

const fetchData = require('../fetchData')

test('should be return an object', async () => {
  const data = await fetchData.from('users/1')
  expect(data).toBeDefined()
  expect(data).toBeInstanceOf(Object)
  expect(data).toHaveProperty('name')
  expect(data).toHaveProperty('email')
  expect(data).toHaveProperty('username')
})