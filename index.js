const express = require('express')

const app = express()

require('./routes')(app)

//$ HTTP_PORT=3002 npm run dev
const HTTP_PORT = process.env.HTTP_PORT || 5000;

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));