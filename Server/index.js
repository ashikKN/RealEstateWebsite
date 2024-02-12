import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoute } from './routes/userRoute.js';
import { residencyRoute } from './routes/residencyRoute.js';

// loads the environment variables from the .env file
//  and adds them to the process.env object
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});

// connect userRoute with our appliction
app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)
