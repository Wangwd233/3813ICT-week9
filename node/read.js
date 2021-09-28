const { MongoClient } = require("mongodb")

module.exports = {
    connect: function(db, colName){
        //console.log('colName', colName);
        db.collection(colName).find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
}