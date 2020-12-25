const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./Backend/config/connectDB')
const path = require('path')
const cors = require('cors')

//load config
dotenv.config()
//assigned express into app
const app = express()
app.use(cors())

//connect Mongo
connectDB()


//body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//logging
app.use(morgan('dev'))

//sessions
/*app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)*/

//passport middleware initialized and session
// app.use(passport.initialize())
// app.use(passport.session())

//routes
app.use('/api/user', require('./Backend/routes/authManual'))
app.use('/api/konten', require('./Backend/routes/konten'))
app.use('/api/kuesioner', require('./Backend/routes/kuesioner'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/build')))

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html'))
  })
}
//PORT
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running on port ${PORT} `))
