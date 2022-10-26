const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courseName = require('./data/courseName.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('API running');
});

app.get('/courseName', (req, res) => {
    res.send(courseName);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(c => c.id == id)

    res.send(selectedCourse);
});


app.listen(port, () => {
    console.log('server is running on port', port)
})