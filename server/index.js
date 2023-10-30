const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/Users")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://mnithul:Sathooo2@cluster0.urs1evf.mongodb.net/Crud" ,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then((console.log("mongodb connected")))

app.get("/", (req,res)=>{
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get("/getUser/:id", (req,res)=>{
    const id = req.params.id
    UserModel.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndUpdate({_id:id}, {name: req.body.name, email: req.body.email, age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req,res)=>{
    const id = req.params.id
    UserModel.findByIdAndDelete({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})


app.post("/createUser", (req,res)=>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(5001,()=>{
    console.log("Server is running on 5001");
})

