// server.js
const express = require('express');
//const path = require('path');
// Import routes
// Create App
const app = express();
const port = process.env.PORT || 3001;
// Adds a parsed json body object to req
app.use(express.json({ limit: '10000kb' }));
// Future route
// app.use('/api/', router);
// DEPLOYMENT: for express to find static assets in the React build
// app.use(express.static(path.resolve('client', 'build')));
// DEPLOYMENT: so express can return an actual webpage
// app.get('*', (req, res) => {
      res.sendFile(path.resolve('client', 'build', 'index.html'));
// });
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));