'use strict'

const Entity = require('../entity')
const dbMock = require('../db')

dbMock.collection = jest.fn(() => {
  return {
    add: jest.fn(() => Promise.resolve({ id: 1 }))
  }
})

test('Entity constructor', () => {
  const entity = new Entity(dbMock)
  expect(dbMock.collection).toHaveBeenCalledTimes(1)
  expect(dbMock.collection).toBeCalledWith('entities')
})

test('Entity instance', () => {
  const entity = new Entity(dbMock)
  expect(entity.add).toBeDefined()
  expect(entity.get).toBeDefined()
})

test('Entity#add', async () => {
  const entity = new Entity(dbMock)
  const data = { name: 'Test' }
  const id = await entity.add(data)
  expect(dbMock.collection).toHaveBeenCalled()
  expect(dbMock.collection.add).toHaveBeenCalled() // Doesn't work on nested functions
})
