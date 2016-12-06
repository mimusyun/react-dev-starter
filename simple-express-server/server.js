var express = require('express')
var app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3333')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Content-Type', 'application/json')
    next()
})

var profiles = [
    {
        id: 0,
        name: 'David', 
        age: 30,
        biography: 'enjoys swimming and biking',
        hobbies: ['swimming', 'biking']
    },
    {
        id: 1,
        name: 'Bill', 
        age: 42,
        biography: 'enjoys long walks on the beach',
        hobbies: ['gardening', 'gaming']
    }
]

app.get('/profiles', (req, res) => {
    res.json(profiles)
})

app.listen(8888);