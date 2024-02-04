const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler')
const fs = require("fs");
const { request } = require('https');
const dotenv =  require("dotenv").config();
const port = process.env.PORT || 8080;
const connectDB = require("../node_app/db");
connectDB();
app.use(cors());
app.use(express.json());
// app.use("/api/contacts",require('./routes/contactRoutes'));
app.use("/api/users",require('./routes/usersRoutes'))
app.use(errorHandler)

// module.exports = router;


app.get('/',(req,res)=>{ 
    const data = fs.readFileSync('index.html')
    res.send(data.toString());
    // res.send("Hello World!");
})
app.get('/about',(req,res)=>{
    res.send("About Page");
})
app.get('/login',(req,res)=>{
    res.send("login Page");
})
app.get('/home',(req,res)=>{
    res.send("home Page");
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})