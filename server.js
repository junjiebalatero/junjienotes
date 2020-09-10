const express = require('express');
const mongoose = require('mongoose');
const { MONGO_URI } = require('./config');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

// Routes
const postRoutes = require('./routes/api/posts');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()) // Use this after the variable declaration
// Connect to MongoDB

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));

// User routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port ${PORT}'));


// mongodb+srv://junjieapi:junjieapi@cluster0.p63jc.mongodb.net/dbjunjieatlas?retryWrites=true&w=majority