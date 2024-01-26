const mongoose=require("mongoose")
const connect = mongoose.connect("mongodb://127.0.0.1:27017/Login");

//Check dtabase connection
connect.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log("Database not connected",err);
});

const loginschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
});

const colletion=new mongoose.model("users",loginschema);
module.exports=colletion;