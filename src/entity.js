'use strict'

class Entity {
  constructor (db) {
    this.db = db
    this.collection = db.collection('entities')
  }

  async add (data) {
    const ref = await this.collection.add({...data})
    
    return ref.id
  }

  async get (id) {
    const ref = await this.collection.doc(id)
    const doc = await ref.get()

    return doc.data()
  }
}

module.exports = Entity
