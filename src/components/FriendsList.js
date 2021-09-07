import React from "react";
import Friends from "./Friends"

const masterFriendsList = [
  {
    name: 'Thato',
    image: 'URL'
  },
  {
    name: 'Sleater',
    image: 'URL'
  },
  {
    name: 'Imani',
    image: 'URL'
  }
];

function FriendsList() {
  return (
    <React.Fragment>
      <hr/>
        {masterFriendsList.map((friends, index) =>
          <Friends name={friends.name}
          image={friends.image}
          key={index}/>
        )}
      <hr/>
    </React.Fragment>
  );
}


export default FriendsList;