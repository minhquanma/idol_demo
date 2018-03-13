const express = require('express');
const cors = require('cors');
const fs = require('fs');

const DATABASE_PATH = "server/database.json"
var app = express();

app.use(cors());
app.get("/idol", (req, res) => {
    // Reads json from database
    fs.readFile(DATABASE_PATH, (err, data) => {
        json = JSON.parse(data); 

        // Simulates loading time
        setTimeout(() => {
            res.send(json);
        }, 1000)
    })
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))