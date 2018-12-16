'use strict'

const fetchData = require('../fetchData')
const getName = require('../getName')

// Mock own functions
fetchData.from = jest.fn(() => Promise.resolve({
  id: 1,
  name: 'Leanne Graham',
  username: "Bret",
  email: "Sincere@april.biz",
}))

test('should be return a name', async () => {
  const name = await getName('users/1')
  expect(name).toEqual('Leanne Graham')
  expect(fetchData.from).toHaveBeenLastCalledWith('users/1')
})