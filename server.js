
const express = require('express');

require('dotenv').config()

const app = express();
const port = process.env.PORT  || 3000;

app.use(express.json())

app.get('src/index.html' , (req , res) => {
    res.send('hello')
})
app.listen(port, () => {
  console.log(`Le serveur a démarré sur le port ${port}`);
});
