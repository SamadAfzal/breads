const express = require ('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})
// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
