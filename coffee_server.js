const express = require('express');
const app = express();
const PORT = 4012;

app.use(express.static('build'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));