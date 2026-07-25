const express = require('express')

const app = express() // create a server instance

app.get("/",(req,res) =>{ // this is the '/' endpoint page
    res.send("Hello Abhishek")
})

app.get("/contact",(req,res)=>{ // this is /contact api endpoint
    res.send("Mob: 1234567890")
})

app.listen(3000) // start the server and run it as port 3000



// npm init -y => helps to initiate node application

// npm i express => install express package

// server.js => server code



// REST API - HTTP Methods

// GET --> read or get the data/resource from the server
// POST --> create new resource on the server
// PUT --> used to update the entire resource/data, all field must be given
// PATCH --> helps in partially updating the resource, only required field can be sent
// DELETE --> helps in deleting resource on the server