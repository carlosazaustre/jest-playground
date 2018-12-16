const fetchData = require('../fetchData')

test('should be return a name', async () => {
  const name = await fetchData('users/1')
  expect(name).toBeDefined()
  expect(name).toEqual('Leanne Graham')
})