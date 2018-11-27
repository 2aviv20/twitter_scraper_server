import * as scrapeTwitter from 'scrape-twitter';
import streamToPromise = require('stream-to-promise');
//interfaces
import { Profile } from '../interfaces/profile.interface';
import { Tweet} from '../interfaces/tweet.interface';
import { Top5 } from '../interfaces/top5.interface';

export class TwitterService{

    top5Tweets ():Promise<Top5>{
        return new Promise((resolve, reject) => {
            const timelineStream = new scrapeTwitter.TimelineStream('__MICHAELJ0RDAN',{retweets: true});
            streamToPromise(timelineStream).then((tweets:any) => {
                if(!tweets){
                    reject(tweets);
                }
                //quick sort by property
                let top5Tweets:Tweet[]   = this.quickSort(tweets,"retweetCount");
                let top5Comments:Tweet[] = this.quickSort(tweets,"replyCount");
                //slice ,top 5
                top5Tweets   = top5Tweets.slice(top5Tweets.length-5,top5Tweets.length);
                top5Comments = top5Comments.slice(top5Comments.length-5,top5Comments.length);
                resolve({top5Tweets: top5Tweets,top5Comments: top5Comments});
            },(error) =>{reject(error)});
        });
    }

    
    getUserProfile():Promise<Profile>{
        return new Promise((resolve,reject) => {
            scrapeTwitter.getUserProfile("__MICHAELJ0RDAN").then((data:Profile)=> {
                resolve(data);
            });
        });
    }
    
    private quickSort(a:Tweet[], prop:string):Tweet[]{
        if(a.length <=1){
            return a;
        }
        
        let pivot:Tweet  = a[a.length-1];
        let left:Tweet[]  = [];
        let right:Tweet[] = [];
        
        for(let i =0; i<a.length-1; i++){
            if(a[i][prop] > pivot[prop]){
                left.push(a[i])
            }
            else{
                right.push(a[i]);
            }
        }
        return [...this.quickSort(right,prop) ,pivot ,...this.quickSort(left,prop)];
    }
}
