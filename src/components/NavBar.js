import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <button><a href="#">Home</a></button>
      <button><a href="#">Notifications</a></button>
      <button><a href="#">Messages</a></button>
      <input type="text" placeholder="Search"></input>
      <button><a href="#">Tweet</a></button>
    </React.Fragment>
  )
}

export default NavBar;