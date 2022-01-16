const tasks = require("./routers/taskRouter");
const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', ()=> {
    console.log("Mongo is connected")
})

app.use("/api/tasks", tasks);
app.listen(port, ()=> {
    console.log(`Server is running on port number: ${port}`);
});
