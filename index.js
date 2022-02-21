const express = require('express');
const app = express();


var cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env.PORT || 8000;  
require('./config/dbConfig')


const userRoutes = require('./routes/user.route')

app.use(express.json());
app.use(cors)
app.use(cookieParser)

app.use('/api', userRoutes);


app.listen(port, () => console.log('Server listenning on port: ', port));
