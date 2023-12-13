import express from 'express';
import connectToMongo from './db.js';
import Auth from './Routes/Auth.js';
import Transactions from './Routes/Transactions.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
connectToMongo();

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

app.use(express.json());
app.use('/',Auth);
app.use('/transaction/',Transactions);

app.listen(port,()=>{
    console.log('Server is running on port ' + port);
})