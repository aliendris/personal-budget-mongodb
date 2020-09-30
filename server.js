const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

//  const budget = {
//    myBudget: [
//      {
//     "title": "Eat out",
//     "budget": 25
// },
// {
//     "title": "Rent",
//     "budget": 375
// },
// {
//     "title": "Grocery",
//     "budget": 110
// },
// {
//      "title": "Health Insurance",
//     "budget": 100
// } ,
// {
//    "title": "Gym",
//    "budget": 20
// },
// {
//     "title": "Student loans",
//     "budget": 200
// },
// {
//     "title": "Utility bills",
//     "budget": 225
// },

//  ]
// };

app.get('/hello', (req, res) => {
    res.send('Hello World!');
})


app.get('/budget', (req, res) => {
    'use strict';
let jsonData = require('./budget.json');
// console.log(jsonData);
res.json(jsonData);
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});