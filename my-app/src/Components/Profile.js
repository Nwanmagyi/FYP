import React from 'react';
import "./profile.css";


const ProfilePage = () => {
  const name = window.localStorage.getItem("name_id")
  const matric = window.localStorage.getItem("matricNo")
  const email = window.localStorage.getItem("email_id")
  // Assume you have access to the user's sign-up details
  const user = {
    picture: "../kaulogo.webp",
    name: name,
    matric: matric,
    email: email,
  };

 

  return (
    <div className='vh-100'>
      <div className="container">
      <h1>Profile</h1>
      <table>
        <tbody>
          <tr>
            <td><input type='file'  name='file'/></td>
            <td>
              <img src={user.picture} alt="Profile" />
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td>Matric Number:</td>
            <td>{user.matric}</td>
          </tr>
          <tr>
            <td>Email Address:</td>
            <td>{user.email}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ProfilePage;