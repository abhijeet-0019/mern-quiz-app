import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";

const app = express()

// app middlewares
app.use(morgan('tiny'))
app.use(cors());
app.use(express.json());
config();

// applicaton port
const port = process.env.PORT || 8000;

// routes //
app.get('/', (req, res)=> {
    try{
        res.json("Get Request")
    }catch(err){
        res.json(err)
    }
})

// starting the server, making it to listen on localhost 8000
app.listen(port, ()=> {
    console.log(`Server connected to the local host ${port}`)
})