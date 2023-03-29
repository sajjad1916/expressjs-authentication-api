const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDb = require('./config/connectDb');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 8001;
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

// Database Connection
connectDb(DATABASE_URL)

// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Load Routes
app.use('/api/user', userRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});