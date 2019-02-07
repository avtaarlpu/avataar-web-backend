const express = require('express');
const app = express();

const server = require('http').Server(app);

app.get('/', function (req, res, next) {
    req.send('hello world');
});

// Start the server
const PORT = process.env.PORT || 6566;
server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});