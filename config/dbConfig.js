const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true } , { useUnifyTopology: true })
        .then(console.log("Database is connected !"))
        .catch((err) => console.log("Eroor of connection !"))