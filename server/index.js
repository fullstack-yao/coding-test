import express from 'express';

import config from './configuration/config.js';

const { server } = config;
const { hostname, port } = server;

const app = express();

// Routes
app.use('/photos', (req, res) => {
    res.send('Hello');
});

// Error handling
app.use((req, res) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

app.listen(port, () => {
    console.log(`Server is running on ${hostname}:${port}`);
});
