const MongoClient = require('mongodb').MongoClient;
const express = require('express')
const bodyParser = require("body-parser");


const ID= 'user';
const PASSWORD = '1';
const DATABASE = 'podscholar';
const NET = 'cluster0.c6lhm.mongodb.net';

const URL = `mongodb+srv://${ID}:${PASSWORD}@${NET}/${DATABASE}?retryWrites=true&w=majority`

var db;
MongoClient.connect(URL, { useUnifiedTopology: true }, function (error, client) {
    if (error) return console.log(error)
    db = client.db('podscholar');
});

const PORT = process.env.PORT || 5500

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

app.use(express.static(__dirname));


app.listen(PORT,function(){
    console.log(`App is listening on port ${PORT}`)
})


app.get('/',(req,res) => {
    res.render('index.ejs')
});
