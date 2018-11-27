
import * as express from 'express';
import { Request, Response, NextFunction } from "express";
import { getTop5, getUserProfile} from './routes/twitter.route';

const app = express();
const port = process.env.PORT || 3000;

//cors
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes
app.get("/getTop5", getTop5);
app.get("/getUserProfile", getUserProfile);

app.listen(port, () => console.log(`app listening on port ${port}!`))