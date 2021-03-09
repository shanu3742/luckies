const express = require("express");
const path = require("path");
const app = express();
const hbs =  require("hbs");
require("../db/conn");
const Lucky = require("../models/reg");

const port = process.env.PORT||3093;


console.log(path.join(__dirname,"../parts"))
const actualPath =  path.join(__dirname,"../views/main")
const partialpath = path.join(__dirname,"../parts")
hbs.registerPartials(partialpath);
 app.set("view engine", "hbs")
 app.set("views",actualPath);
 app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/luckies", (req,res) => {
    res.render("regs.hbs")
})







app.post("/luckies",async(req,res) => {
        try{
            const info = new Lucky({
                name:req.body.name,
                mobile:req.body.mobile,
                email : req.body.email,
                password : req.body.pswd

            })
            const result = await info.save();
            res.status(201).send("We contact you if you win")
        }catch(err){
                res.status(401).send(err)
        }
})



app.listen(port, () => {
    console.log("listen form server side......");
})
