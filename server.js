// budget API
const express = require('express');
const app = express();
const port = 3000;
app.use('/', express.static('public'));


const mongoose = require("mongoose");
const budgetModel = require("./models/budget_schema");
const bodyParser = require("body-parser");
app.use(express.json());
// to remove this warning DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
// mongoose.set('useCreateIndex', true);
// const mongoDBClient = require('mongodb').MongoClient
let url = 'mongodb://localhost:27017/budget';

app.get('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            budgetModel.find({})
                .then((data) => {
                    res.json(data);
                     console.log("Connected to mongos");
                    mongoose.connection.close();
                })
                .catch((connectionError)=> {
                    console.log(connectionError)
                });
        })
        .catch((connectionError)=> {
            console.log(connectionError)
        });
});

app.post('/budget', (req, res) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            // let budgetData = new budgetModel({
                
            //     title: req.body.title,
            //     value: req.body.value,
            //     color: req.body.color
                
            // });

            let postmanData =  { 
                title: req.body.title,
                value: req.body.value,
                color: req.body.color
            }
            budgetModel.insertMany(postmanData)
            .then((data) => {
                res.json(data);
                mongoose.connection.close();
                })
                .catch((connectionError)=> {
                    console.log(connectionError)
                });
        })
        .catch((connectionError)=> {
            console.log(connectionError)
        });
});



// app.get('/budget', (req, res) => {
//     'use strict';
// let jsonData = require('./budget.json');
// // console.log(jsonData);
// res.json(jsonData);
    
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});