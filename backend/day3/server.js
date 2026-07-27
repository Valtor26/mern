// used to start the server

const app = require("./src/app") //importing the src/app.js file

app.listen(3000,(req,res)=>{
    console.log("Server is running on post 3000")
})