const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// serve static files from public
app.use(express.static(path.join(__dirname, 'public')));
// serve sound files (digits 0-9)
app.use('/sound', express.static(path.join(__dirname, 'sound')));

// fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});