const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

const dotenv = require("dotenv")
dotenv.config()

const connect = ()=>{
    return mongoose.connect(process.env.BACKEND_DATABASE_KEY,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    })
}
console.log(process.env.BACKEND_DATABASE_KEY)
const booktableSchema = new mongoose.Schema({
    
        resturant_name: String,
        image: String,
        location: String,
        timings: String,
        girf: [
        {}
        ],
        dineoutPay: Boolean,
        passport: String,
        free_offer: [
        {}
        ],
        menu_images: [
        {}
        ],
        about: String,
        cuisine: String,
        type: String,
        average_cost: String,
        best_selling_items: String,
        facilities: [
        {}
        ],
        rating:Number
        }
)
const Bookingtable = mongoose.model("bookingtable",booktableSchema)

app.get("/booktables",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    console.log(booktables)
    res.status(200).json({data:booktables})
})
app.post("/booktables",async (req,res)=>{
    const booktable = await Bookingtable.create(req.body)
    console.log(booktable)
    res.status(200).json({data:booktable})
})
app.delete("/booktables/:id",async (req,res)=>{
    const booktable = await Bookingtable.findByIdAndDelete(req.params.id)
    console.log(booktable)
    res.status(204)
    res.end()
})
async function start(){
    await connect();
    app.listen(6678,()=>{
        console.log("Listening on port 6678")
    })
}

start()