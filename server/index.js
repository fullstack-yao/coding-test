import cors from 'cors';
import express from 'express';

import config from './configuration/config.js';
import photosRouter from './routes/photos.js';

const { server } = config;
const { hostname, port } = server;

const app = express();
app.use(cors());

// Routes
app.use('/photos', photosRouter);

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
