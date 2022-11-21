const express = require ('express')
// require mongoose 
const mongoose = require('mongoose')
// DEPENDENCIES
const methodOverride = require('method-override')


// creating shorthand for the Schema constructor 
const { Schema } = mongoose 


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
  () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)


require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
})

// MIDDLEWARE
app.use(express.static('public'))


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// MIDDLEWARE
app.use(methodOverride('_method'))





// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

