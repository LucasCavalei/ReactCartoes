const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const cardsRouter = require('./routes/cardsRoute');
const path = require("path");

app.use(cors());
app.use(express.json())

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.use('/cards',cardsRouter);
        
mongoose.connect("mongodb+srv://LucasBanco:12065722@cluster0.shujl.mongodb.net/just-testretryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log("database conectado"))
.catch((err) => console.log("Erro no DB", err));


app.get("/", (req, res)=>{
    res.send("na rota root")
});

const port= 8080
app.listen(port,()=>{
    console.log(`Server is Running on Port : ${port}`) 
})
