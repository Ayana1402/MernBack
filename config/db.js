const { default: mongoose } = require("mongoose");
mongoose.connect('mongodb+srv://ayanagangadharan1402:Ayana123@cluster0.egurskh.mongodb.net/EmpDB?retryWrites=true&w=majority')
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log(" Not Connected")
})