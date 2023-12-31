const express = require("express");
const app = express();
const cors = require('cors')



//------------------- * Middleware * -----------------

const PORT = process.env.PORT | 2000
app.use(cors({origin: ["http://localhost:3000","https://yelpcamps-client.vercel.app"],methods: ["POST", "GET", "PUT", "DELETE"] ,credentials: true}))
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

 //Server
app.listen(PORT,function(){
    console.log(`Server is running on port: ${PORT}`);
});

//module.exports = app;

