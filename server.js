const express=require("express");
const bcrypt=require("bcrypt");
const colletion = require("./config");
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("login")
});
app.post('/login',async(req,res)=>{
    const check=await colletion.findOne({username:req.body.username});
    if(!check){
        res.render("signup",{text:"User not found Create new account"});
    }
    else{
        const matchpassword=await bcrypt.compare(req.body.password,check.password);
        if(matchpassword){
            res.send("Logged in.....");
        }
        else{
            res.render("login",{text:"Wrong Password Try Again"});
        }
    }
});

app.get('/signup',async(req,res)=>{
    res.render("signup")
})
app.post('/signup',async(req,res)=>{
    const data={
        username:req.body.username,
        password:req.body.password
    }
    const existinguser=await colletion.findOne({username:data.username})
    if(existinguser){
        res.render("signup",{text:"username alrady exits, Try another"});
    }
    else{
        // Encryption
        const saltRound=10;
        const hashpassword=await bcrypt.hash(data.password,saltRound);
        data.password=hashpassword;

        const userdata=await colletion.insertMany(data);
        console.log(userdata);
        res.send("Welcome");
    }
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
})