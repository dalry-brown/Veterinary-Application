const express = require('express');
const cookieParser = require('cookie-parser');
const verifyJWT = require('./middleware/verifyJWT');
const mongoose = require('mongoose');
const credentials = require('./middleware/credentials')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const cors = require('cors');
require('dotenv').config();
const { reqLogger, errLogger } = require("./middleware/logEvents");
const PORT = process.env.PORT;

mongoose.set({"strictQuery": true});
const app = express();
connectDB()


app.use(reqLogger);
//app.use(credentials);
app.use(cors(corsOptions))

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/refresh', require('./routes/api/refresh'))
app.use('/auth', require('./routes/api/auth'))
app.use(verifyJWT)
app.use('/register', require('./routes/api/registration'))

app.all("*", (req, res) => {
    res.status = 404;
    res.type('txt').send("404 file not found");
})

app.use(errLogger);

mongoose.connection.once('open', () => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
})

