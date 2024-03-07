import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import bodyParser from 'body-parser';
import dbconnect from './DB/connect.js';
import route from './routes/route.js';

const app = express();
const port = process.env.port;

app.get('/', (req,res)=>{
    res.send("<h2>this is something</h2>");
})

const allowedOrigins = ['http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}));

app.use(bodyParser.json({exented:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use('/', route)
dbconnect();
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})