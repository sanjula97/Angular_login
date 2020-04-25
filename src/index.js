import express from "express"

import connectDB from './config/db'

const app = express();

//connect to mongoDB
connectDB();


const PORT = process.env.PORT || 5003 ;

app.listen(PORT, () => {
    console.log(`App started on PORT ${PORT}`)
});