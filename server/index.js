const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from React client
app.use(express.static(path.resolve(__dirname, '../client/build')));

/*********** API Request ***********/
// @route    /api
// @desc     A test route the returns an greeting
// @access   Public
app.get('/api', (req, res) => {
  res.json({ message: 'Hello and Welcome to To Do It Up API' });
});

// @route    /api/numbers
// @desc     A test route the returns an array of random numbers
// @access   Public
app.get('/api/numbers', (req, res) => {
  const getNumber = max => {
    return Math.floor(Math.random() * max + Math.random() * max);
  };
  const count = 5;
  // Generate some numbers
  const numbers = Array.from(Array(count).keys()).map(i => getNumber(100));
  // return them as json
  res.json(numbers);
});

// @route    *
// @desc     All other request returns the React client index.html
// @access   Depends on the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
