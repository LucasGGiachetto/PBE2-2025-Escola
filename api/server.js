const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./src/routes.js')

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(5000, (req, res) => {
    console.log('Server is running on http://localhost:5000');
});
