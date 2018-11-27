import { TwitterService } from '../services/twitterService';
//interfaces
import { Request, Response } from "express";
import { Profile } from '../interfaces/profile.interface';
import { Top5 } from '../interfaces/top5.interface';

const twitter: TwitterService = new TwitterService();

export const getUserProfile = (req: Request, res:Response) => {
    twitter.getUserProfile().then((data:Profile) => {
        res.send(data);
    });
};

export const getTop5 = (req: Request, res: Response) => {
    twitter.top5Tweets().then((data:Top5) =>{
        res.send(data);
    });
};

