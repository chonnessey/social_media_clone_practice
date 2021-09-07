import React from 'react';
import Tweets from "./Tweets";

const masterTweetsList = [
  {
    name: 'Thato',
    content: 'Let go of my purse, I don\'t know you!',
    image: 'URL'
  },
  {
    name: 'Sleater',
    content: 'CLB is better than Donda',
    image: 'URL'
  },
  {
    name: 'Imani',
    content: 'This is a tweet OMG',
    image: 'URL'
  }
];

function TweetsList() {
  return (
    <React.Fragment>
      <hr/>
        {masterTweetsList.map((tweets, index) =>
          <Tweets name={tweets.name}
          content={tweets.content}
          image={tweets.image}
          key={index}/>
        )}
      <hr/>
    </React.Fragment>
  );
}


export default TweetsList;



        