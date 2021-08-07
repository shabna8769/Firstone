const express = require('express');
const connectDB = require('./config/db');
const app = express();
connectDB();
//init middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('API is running.......'));
//Define Routes

app.use('/api/users', require('./routes/api/users'));



app.use('/api/profile', (req, res) => {
    res.send('we are at 1');
});
app.use('/api/auth', (req, res) => {
    res.send('we are at 2');
});

app.use('/api/posts', (req, res) => {
    res.send('we are at 3');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
