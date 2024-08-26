import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app: Express = express();
//send json data
app.use(express.json());
mongoose.connect(process.env.Db!).then(() => {
    console.log(`Database connected to : ${process.env.Db}`);
  }).catch((err: Error) => {
    console.log(err);
  });
  
app.get('/', (req: Request, res: Response) => {
  res.json({message : 'Hello app'});
});

app.listen(process.env.PORT);
