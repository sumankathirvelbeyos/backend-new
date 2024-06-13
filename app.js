require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/emissionRoutes");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port =  process.env.PORT || 8080;

const path =require('path')





app.use(express.json());
app.use(cookiParser());
app.use(cors());

app.use(router);





app.use(cors(
    {
        origin:"*",
        methods:["GET","POST","DELETE","PUT"],
    }
))

app.listen(port);