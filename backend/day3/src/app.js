// used to create the server

const express = require("express")

const app = express();
app.use(express.json()) //express doesnt have the capacity to read the raw data format, so we must use this middleware

const notes = []

app.post("/notes",(req,res)=>{
    notes.push(req.body)

    res.status(201).json({message : "note created successfully"});
})


app.get("/notes",(req,res)=>{
    res.status(200).json({
        message: "notes fetched successfully",
        notes : notes
    })
})


app.delete("/notes/:index",(req,res)=>{

    const idx = req.params.index
    delete notes[idx]

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch("/notes/:index",(req,res)=>{
    
    const idx = req.params.index
    const desc = req.body.description

    notes[idx].description = desc

    res.status(200).json({
        message: "note updated successfully"
    })
})

app.put("/notes/:index",(req,res)=>{

    const idx = req.params.index
    
    notes[idx] = req.body
    
    res.status(200).json({
        message: "note fully updated"
    })
})

module.exports = app