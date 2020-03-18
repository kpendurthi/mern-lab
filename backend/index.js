const express = require('express');
const app = express();
const usersController = require('./controllers/users');

//middleware
app.use(express.json());

//controllers
app.use('/api/users',usersController);

app.listen(8080, () => {
    console.log('They see me rolling on port 8080..');
});

