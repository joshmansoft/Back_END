import express from "express"; 
import dotenv from "dotenv";
import {mongoose} from "mongoose"; 
import userRouter from "./route/user.js";
const index = express()
index.use(express.json());
dotenv.config()
 index.listen(5000, () => {
    console.log(`server is running in port ${process.env.PORT}`);
 });

 //ROUTE
 index.use("/api/users", userRouter);
 console.log(`My name is josh`)

index.get('/', (req, res)=> {
    res.send('Hello soft');
});

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('connected to database josh');
}).catch((err) => {
    console.log('Error connecting to database josh');
});

export default userRouter;
