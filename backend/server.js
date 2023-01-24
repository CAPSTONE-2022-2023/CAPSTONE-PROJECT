const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
mongoose.set('strictQuery', false);

const connection = mongoose.connection;
connection.once('open', () => 
{
    console.log("MongoDB database connection established successfully.");
});

// This is different from the front-end routes.
// The routes you see in src/App.js are used to move between webpages. These routes are used to communicate with the database.
// If you need to add more routes, create a new .js file in the backend/routes folder and copy this format.
const registerRouter = require('./routes/register');
app.use('/register', registerRouter);

const loginRouter = require('./routes/login');
app.use('/login', loginRouter);

app.listen(port, () => 
{
    console.log(`Server is running on port: ${port}`);
});