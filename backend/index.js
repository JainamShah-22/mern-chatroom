const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.REACT_APP_port || 5000;
app.listen(PORT, ()=>{
    console.log("Server started at http://localhost:"+PORT);
})