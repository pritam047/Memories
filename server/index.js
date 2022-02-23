import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import 'dotenv/config';

// require("dotenv").config();
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js';

const app = express();

app.use(morgan('tiny'))
app.use(bodyParser.json({limit : "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit : "30mb", extended: true}))
app.use(cors());

app.use('/posts', postRoutes);
app.use('/user', userRoutes);

app.get('/', (req,res)=>{
    res.send('Welcome to Memories API');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(
    process.env.DB_URL, 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
    .catch((err)=> console.log(err.message))



