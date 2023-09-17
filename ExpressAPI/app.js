const express = require("express");
const app = express();
const methodOverride = require("method-override");
const cors = require('cors')



//------------------- * Middleware * -----------------

app.set("view engine","ejs");
app.use(express.static('public'));
app.use(methodOverride("_method"));
app.use(cors({origin: true, credentials: true}))
app.use(express.json())

app.use(express.urlencoded({extended: false}))


//-------------------- * Database * ---------------
const mongoose = require("mongoose")
const database = require("./config/database")
const yelpcamps = require("./models/model")


//----------------- * Routes * ------------------

//Home Route
app.get("/", async (req,res)=>{
    await yelpcamps.find({}).then((data)=>res.json(data))
 });


app.get("/add", (req,res)=>{
    res.render("Add");
 })
app.post('/add', (req,res)=>{
    yelpcamps.create(
        {
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        }
    ).then(()=>console.log(`${req.body.name} Added to Database`)).catch((e)=>console.log(`${e} While adding a new entry`))
})
app.get('/deleteAll', async (req,res)=>{
    await yelpcamps.find({}).then(()=>yelpcamps.deleteMany({})).then(()=>res.json("Cleared")).catch((e)=>console.log(e, 'Error in Deletion'))
})

app.get('/edit/:id', (req,res)=>{
    yelpcamps.findOne({_id: req.params.id}).then((data)=>res.json(data))
})
app.put('/edit/:id', (req,res)=>{
    yelpcamps.findOne({_id: req.params.id}).then((data)=>{
        data.name = req.body.name,
        data.image = req.body.image,
        data.description = req.body.description

        data.save()
    }).then((data)=>console.log(data.name, 'updated')).catch(e=>console.log(e, 'Update Route Error'))
})
app.get('/delete/:id', (req,res)=>{
    yelpcamps.deleteOne({_id: req.params.id}).then(()=>console.log('Deleted Successfully')).catch(e=>console.log(e))
    res.status(200).json({message: 'Deleted'})
})

 //Server
app.listen(2000,function(){
    console.log("Server is running on port: 2000");
});

//module.exports = app;

