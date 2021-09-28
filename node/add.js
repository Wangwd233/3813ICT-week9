const { MongoClient } = require("mongodb")

const item = [{
    id: "1",
    name: "Beer",
    Description: "Cheap Beer",
    price: "$2.96",
    type: "single can",
},
{
    id: "2",
    name: "Peaches",
    Description: "Fresh fruit",
    price: "$3.92 per kilo",
    type: "kilogram",
},
{
    id: "3",
    name: "Meat",
    Description: "Nice meat",
    price: "$5.68 per gram",
    type: "gram",
}
];

module.exports = {
    connect: function(db, colName){
        //console.log('colName', colName);
        db.collection(colName).insertMany(item, function(err, res){
            if (err) throw err;
            console.log("Number of documents inserted:" + res.insertedCount);
        });
    }
}