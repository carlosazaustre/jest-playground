'use strict'

const admin = require('firebase-admin')

const serviceAccount = require('./config/key.json')
const { FIREBASE_PROJECT_NAME } = require('./config')

const credential = admin.credential.cert(serviceAccount)
const databaseURL = `https://${FIREBASE_PROJECT_NAME}.firebaseio.com`

admin.initializeApp({ credential, databaseURL })

const db = admin.firestore()
db.settings({
  timestampsInSnapshots: true
})

module.exports = db