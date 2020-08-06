require('./config/config.js')

const express = require('express')
const mongoose = require('mongoose');

const path = require('path');


const app = express()

const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const cors = require('cors');

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors());


app.use(require('./routes/users'))


mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err

    console.log('Base de datos online');

});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el purto ${process.env.PORT}`);

})