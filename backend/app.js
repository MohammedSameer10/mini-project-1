
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors=require('cors');
const connectDb = require('./config/connectDb');
const loginRouter = require('./routes/loginRoute');
const homeRouter = require('./routes/homeRoute');
const hostelRouter = require('./routes/hostelRoute');
const cookieParser = require('cookie-parser');
dotenv.config();
connectDb();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:'http://localhost:3000'}))
app.use('/api/v1/login',loginRouter);
app.use('/api/v1/home',homeRouter);
app.use('/api/v1/room-details',hostelRouter);
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port no ${process.env.PORT}`);
});
 
