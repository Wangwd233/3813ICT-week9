const { MongoClient } = require("mongodb")

module.exports = {
    connect: function(db, colName){
        //console.log('colName', colName);
        const query = { id: "1" };
        const newValues = { $set: {name: "Drinks", price: "$3.00"} };
        db.collection(colName).updateMany(query, newValues, function(err, res){
            if (err) throw err;
            console.log("1 document updated");
        });
    }
}