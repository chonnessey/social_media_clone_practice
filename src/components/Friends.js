import React from "react";
import PropTypes from 'prop-types';
function Friends(props) {
  return (
    <>
      <table id="friends">
        <tr>
          <th rowspan="2">{props.image}</th>
          <th>{props.name}</th>
        </tr>
        <tr>
          <td><button>Button</button></td>
        </tr>
      </table>
    </>
  )
}


Friends.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Friends;