const express = require("express");
const morgan=require("morgan");
const cors = require("cors");


const app = express();

app.use([express.json(), morgan("dev"), cors()]);

app.get("/health", (req, res)=>{
	res.send({message: "This is Health Route"});
});


// 404 Not Found Error Handling
app.use((req, res, next)=>{
    
    const error = new Error('Resource Not Found')
    error.status= 400
    next(error)
});

// Global Error Handling
app.use((err, req, res, next)=>{
    if(err.status){
        return res.status(err.status).json({
            error: err.message
        })
    }else{
        return res.status(500).json({
            error: "Something Went Wrong"
        })
    }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
	console.log(`Your Application is Running on PORT ${PORT}`)
})
