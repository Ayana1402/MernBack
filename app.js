const express = require('express')
const app = new express()
require('dotenv').config()
const cors = require('cors')
const PORT = process.env.PORT
const userRoutes = require('./Routes/userRoutes')
require('./config/db')
const loginRoutes = require('./Routes/loginRoutes')

app.use('/api',userRoutes)
app.use('/login',loginRoutes)




app.use(cors())




app.listen(PORT,()=>{
    console.log('Listening to '+ PORT)
})