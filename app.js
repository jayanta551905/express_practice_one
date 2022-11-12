const express = require('express');
const router = require('./src/routes/api');
const app = express();

app.use("/api/v1", router);



// undefine route
app.use("*", (req, res)=>{
    res.status(404).json({
        status: "Failed",
        data: "Page not found"
    });
});

module.exports = app;