import React from "react";
import ProfileHeader from "./ProfileHeader"
import ProfileBody from "./ProfileBody"
import TweetsEntry from "./TweetsEntry"
import TweetsList from "./TweetsList"
import FriendsList from "./FriendsList"

function Body() {
  return (
    <React.Fragment>
      <table>
        <tr>
          <th><ProfileHeader /></th>
          <th><TweetsEntry /></th>
          <th>Friends<FriendsList /></th>
        </tr>
        <tr>
          <td><ProfileBody /></td>
          <td><TweetsList /></td>
        </tr>
      </table>
    </React.Fragment>
  );
}


export default Body;