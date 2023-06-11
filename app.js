const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'src/dist')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/* const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.use(express.static('src/dist'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 */