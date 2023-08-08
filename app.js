const express = require('express');
const morgan = require('morgan');
const rounter = require('./router');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use('/api', rounter);

app.use(errorHandler());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});