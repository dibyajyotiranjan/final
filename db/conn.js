const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://dibya:dibya@cluster0.4dsm4.mongodb.net/dibya",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection to compass")
})
.catch((err)=>{
    console.log(err, "connection err is here mongoose database");
});