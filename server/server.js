const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Now we will define that from where the server needs to take the files and run
const path = require('path');
const publicPath = path.join(__dirname, '../public')
app.use(express.static(publicPath));

// When someone run the get request we need to setup
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Now we will start the server
// 1st argument port number 2nd argument callback function which calles when server is up.
app.listen(port, () => {
    console.log('Server is up');
});
