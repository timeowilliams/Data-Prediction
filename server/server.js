const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});


//Attempt fresh api fetch using new "app"
// const apiApp = express();
app.get('/api', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'))
})

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

/**
 * express error handler
 * @see https://expressjs.com/en/guide/error-handling.html#writing-error-handlers
 */

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 *///listens on port 3000 -> http://localhost:3000/
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

