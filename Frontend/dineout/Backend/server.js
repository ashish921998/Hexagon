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
// console.log(process.env.BACKEND_DATABASE_KEY)
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
    // console.log(booktables)
    res.status(200).json({data:booktables})
})
app.post("/booktables",async (req,res)=>{
    const booktable = await Bookingtable.create(req.body)
    // console.log(booktable)
    res.status(200).json({data:booktable})
})
app.patch("/booktables/:id",async (req,res)=>{
    const booktable = await Bookingtable.findByIdAndUpdate(req.params.id,req.body,{new:true})
    // console.log(booktable)
    res.status(200).json({data:booktable})
})
app.delete("/booktables/:id",async (req,res)=>{
    const booktable = await Bookingtable.findByIdAndDelete(req.params.id)
    // console.log(booktable)
    res.status(204)
    res.end()
})
//getting northIndian
app.get("/booktables/northindian",async (req,res)=>{
     console.log("bk",req.query)
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let cuisines = booktables[i].cuisine.split(",")
        // console.log(cuisines)
        for(let j=0;j<cuisines.length;j++)
        {
            if(cuisines[j]==="North Indian")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//getting fastfoods
app.get("/booktables/fastfoods",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let cuisines = booktables[i].cuisine.split(",")
        // console.log(cuisines)
        for(let j=0;j<cuisines.length;j++)
        {
            if(cuisines[j]==="Fast Foods")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//getting chinese
app.get("/booktables/chinese",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let cuisines = booktables[i].cuisine.split(",")
        // console.log(cuisines)
        for(let j=0;j<cuisines.length;j++)
        {
            if(cuisines[j]===" Chinese")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//getting-multi-cuisine
app.get("/booktables/multi",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let cuisines = booktables[i].cuisine.split(",")
        // console.log(cuisines)
        for(let j=0;j<cuisines.length;j++)
        {
            if(cuisines[j]==="Multi-Cuisine")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//getting qsr
app.get("/booktables/qsr",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]===" QSR")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//getting casual dining
app.get("/booktables/casualdining",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]===" Casual Dining")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//dineoutpay
app.get("/booktables/dineoutpay",async (req,res)=>{
    const booktables = await Bookingtable.find({"dineoutPay":{$eq:"true"}}).lean().exec()
    // console.log(booktables)
    res.status(200).json({data:booktables})
})
//casualdining&dineoutpay
app.get("/booktables/casualdining&dineoutpay",async (req,res)=>{
    const booktables = await Bookingtable.find({"dineoutPay":{$eq:"true"}}).lean().exec()
    // console.log(booktables)
     let result1=[]
     let final=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]===" Casual Dining")
            {
                 result1.push(booktables[i])
            }
        }
        return result1
    })
    // console.log(result1)
     
    
    final=[...new Set(result1)]
    res.status(200).json({data:final})
})
//welcomeback
app.get("/booktables/welcome",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]===" Welcome Back")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//cards 
app.get("/booktables/cards",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let facilities = booktables[i].facilities
        for(let j=0;j<facilities.length;j++)
        {
            if(facilities[j].facilities==="Cards Accepted")
            {
                result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//homedelivery
app.get("/booktables/delivery",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let facilities = booktables[i].facilities
        for(let j=0;j<facilities.length;j++)
        {
            if(facilities[j].facilities==="Home Delivery")
            {
                result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//ac
app.get("/booktables/ac",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let facilities = booktables[i].facilities
        for(let j=0;j<facilities.length;j++)
        {
            if(facilities[j].facilities==="Air Conditioned")
            {
                result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//Parking
app.get("/booktables/parking",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let facilities = booktables[i].facilities
        for(let j=0;j<facilities.length;j++)
        {
            if(facilities[j].facilities==="Parking")
            {
                result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//25%
app.get("/booktables/25",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]==="25% Dineout Passport")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//happy hours
app.get("/booktables/happy",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]==="Happy Hours")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//15
app.get("/booktables/15",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]==="15% Gourmet Takeaway")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
//Main Course
app.get("/booktables/main",async (req,res)=>{
    const booktables = await Bookingtable.find({}).lean().exec()
    // console.log(booktables)
    let result=[]
    booktables.filter((item,i)=>{
        let type = booktables[i].type.split(",")
        // console.log(type)
        for(let j=0;j<type.length;j++)
        {
            if(type[j]==="Main Course")
            {
                 result.push(booktables[i])
            }
        }
        return result
    })
    // console.log(result)
    res.status(200).json({data:result})
})
async function start(){
    await connect();
    app.listen(6678,()=>{
         console.log("Listening on port 6678")
    })
}

start()