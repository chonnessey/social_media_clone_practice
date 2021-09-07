import React from "react";
import PropTypes from "prop-types";

function Tweets(props) {
  return (

    <React.Fragment>
      <hr/>
      <table>
        <tr>
          <th rowspan="2">{props.image}</th>
          <th>{props.name}</th>
        </tr>
        <tr>
          <td>{props.content}</td>
        </tr>
      </table>
    </React.Fragment>
  );
}

Tweets.propTypes = {
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string
};


export default Tweets;