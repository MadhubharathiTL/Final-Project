const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routerUrl = require('./Router/Router'); 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/app', routerUrl);
if(mongoose.connect('mongodb://127.0.0.1:27017/userDB'))
    {
        console.log("Database connected");
    
    } 
    
    
    app.listen(4000, () => {
    console.log('Server has connected on port 4000');
});
