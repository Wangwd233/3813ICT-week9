const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'; //Connection URL
const dbName = 'mydb'; //Database Name
const client = new MongoClient(url); //Create a new MongoClient 
const db = client.db(dbName);
const colName = 'products'; //Collection Name
const add = require('./add.js');
const remove = require('./remove.js');
const update = require('./update.js');
const read = require('./read.js');
//const funOrders = require('./dbOperations/funOrders');

//use connect method to connect to the server
client.connect(function(err){
    if (err) throw err;
    console.log("Connected successfully to server");
    db.createCollection("products", function(err, res) {
        if (err) {
            return;
        }
        console.log("Collection created!");
    })
    
    //funOrders(client, collection);
});

//add.connect(db, colName);

//update.connect(db, colName);

read.connect(db, colName);




