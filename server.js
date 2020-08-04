const express = require('express')
const app = express()
const cors = require('cors');

app.use(express.static(__dirname + '/public'))
app.use(cors());

const port = process.env.PORT || 3000;

app.get('/users', function(req, res) {
    res.json({
        ok: true,
        data: [
            { name: 'manuel', edad: 30 },
            { name: 'manuel', edad: 30 },
            { name: 'manuel', edad: 30 },
            { name: 'manuel', edad: 30 },
        ]
    })
})

app.listen(port, () => {
    console.log(`Escuchando el purto ${port}`);

})