import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js";

// import connnection file
import connect from "./database/conn.js";

const app = express(); // app object will be used to define the roues and start the server

// app middlewares
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());
config();

// applicaton port
const port = process.env.PORT || 8000;

// routes //
app.use('/api', router) // api route

app.get('/', (req, res)=> {
    try{
        res.json("Get Request")
    }catch(err){
        res.json(err)
    }
})

// start server only when we have a valid connection
connect().then(()=>{
    try {
        // starting the server, making it to listen on localhost
        app.listen(port, ()=> {
            console.log(`Server connected to the local host ${port}`)
        })
    } catch(error){
        console.log("cannot connect with the server", err);
    }
}).catch(error => {
    console.log("Invalid Database Connection", err);
})