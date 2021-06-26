import express from 'express';

const port = 9000;

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
    console.log(`Server is running on ${port}`);
});
