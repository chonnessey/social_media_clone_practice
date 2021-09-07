import React from "react";
import ProfileHeader from "./ProfileHeader"
import ProfileBody from "./ProfileBody"
import Tweets from "./Tweets"
import Friends from "./Friends"

function Body() {
  return (
    <React.Fragment>
      <table>
        <tr>
          <ProfileHeader />
          <Tweets />
          <Friends />
        </tr>
        <tr>
          <ProfileBody />
        </tr>
      </table>
    </React.Fragment>
  );
}


export default Body;