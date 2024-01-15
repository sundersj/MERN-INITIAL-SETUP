// server.js

import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

const app = express();

//Imprt all the application configuration
import appConfig from './backend/config/index.js';
appConfig(app);




const port = process.env.PORT || 5000;
const __dirname = path.resolve();


mongoose.connect('mongodb://127.0.0.1:27017/lsmsystem', {
    // Deprecated in MongoDB Node.js Driver 4.0.0
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function ()
{
    console.log('Connected to MongoDB ');
});


app.get('/', (req, res) =>
{
    res.json({ message: 'Data from Express.js API' });
});


app.listen(port, () =>
{
    console.log(`Server is running at http://localhost:${port}`);
});

