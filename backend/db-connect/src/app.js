const express = require("express")
const noteModel = require("./models/note.model")


const app = express();
app.use(express.json())

app.post("/notes",async(req,res)=>{

    const data = req.body;

    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({
        message: "Note created"
    })
})

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find() // always returns an array, we can also use conditions for find() too, if not found it returns an empty array

    // const notes = await noteModel.findOne({
    //     title:"test_title"
    // }) -----> this is used to get one note based on the condition you give, and it returns an object, if not found it returns null

    res.status(200).json({
        message: "Notes fetched successfully",
        notes : notes
    })
})  

app.delete("/notes/:id",async(req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message:"Note deleted successfully"
    })
})

app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const title = req.body.title

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        title : title
    })

    res.status(200).json({
        message: "Note updated partially"
    })

})


app.put("/notes/:id",async(req,res)=>{
    const id = req.params.id;
    const data = req.body

    await noteModel.findOneAndReplace({
        _id: id
    },{
        title: data.title,
        description: data.description
    })

    res.status(200).json({
        message:"Notes fully updated"
    })
})

module.exports = app