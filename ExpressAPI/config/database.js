const mongoose = require("mongoose");
if (process.env.NODE_ENV != "production"){
   require("dotenv").config();

}
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
async function database(){
    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.dsl9bpe.mongodb.net/YelpCamps?retryWrites=true&w=majority`, connectionParams).then(()=>console.log("Atlas DB Connected")).catch((error)=>console.log(error))
    }
    catch(e){
        console.log(`${e} Error in Atlas Database Connectivity!`)
    }
}
database()

// const databaseLocal = mongoose.connect("mongodb://127.0.0.1:27017/YelpCamps", connectionParams).then(()=>console.log("Local Database Connected Successfully")).catch(e =>console.log(`${e} Error in Database Connectivity`));



// module.exports= databaseLocal;
module.exports= database;