const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courseName = require('./data/courseName.json');

app.get('/', (req, res) => {
    res.send('API running');
});

app.get('/courseName', (req, res) => {
    res.send(courseName);
})


app.listen(port, () => {
    console.log('server is running on port', port)
})