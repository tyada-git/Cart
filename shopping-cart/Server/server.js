import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(cors({
    origin: 'http://localhost:5174', // or '*' for any origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }));
// app.use((res, req, next)=>{
// req.send('<p>Server is up</p>')
// })

app.use(express.json());
const savedResponses = [];
app.post("/cart",(req,res, next)=>{
    console.log(req.body)
    savedResponses.push(req.body);
    res.json(req.body)
})

app.get("/show-item",(req,res, next)=>{
    res.json(savedResponses);
})
app.listen("3001", ()=>{ console.log("server running")});