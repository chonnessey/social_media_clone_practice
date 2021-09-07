import React from 'react'

function ProfileHeader() {
  return (
    <React.Fragment>
      <div className="border">
        <img src="#" alt="profile picture"></img>
        <h3>Adrian Dave</h3>
        <table>
          <tr>
            <th>Tweets</th>
            <th>Following</th>
            <th>Fololowers</th>
          </tr>
          <tr>
            <td>124</td>
            <td>1233</td>
            <td>12</td>
          </tr>
        </table>
      </div>
    </React.Fragment>
  )
}

export default ProfileHeader;