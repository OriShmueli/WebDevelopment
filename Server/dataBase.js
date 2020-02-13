const mongodb = require('mongodb').MongoClient
const dbKey = require('./config/keys')

let DBstate = null

function connectToDataBase(){
    mongodb.connect(dbKey.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
        if(err) throw err
        console.log('connect to data base')
        DBstate = client.db(dbKey.dbName)
    })
}

const getDB = () => {
    return DBstate
}

module.exports = {connectToDataBase, getDB} 