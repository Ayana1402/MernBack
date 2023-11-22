const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Username: String,
    Password: String,
})

const UserData = mongoose.model('userdatas',userSchema)
module.exports = UserData