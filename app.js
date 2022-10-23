const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const register = require("./routes/register")
const login = require("./routes/login")
const profile = require("./routes/profile")
const cards = require("./routes/cards")
const cors = require("cors")


const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors()) 

mongoose
    .connect(process.env.db, {useNewUrlParser: true})
    .then(()=>console.log('Connected to MongoDB'))
    .catch(()=>console.log('Cannot connect to to MongoDB...'))


    app.use("/api/register",register)
    app.use("/api/login",login)
    app.use("/api/profile",profile)
    app.use("/api/cards",cards)

    app.listen(PORT, ()=> console.log('Server runs on Port ' + PORT))