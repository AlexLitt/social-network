import React from 'react';
import './Profile.module.css';
import Post from '../Post/Post.jsx';


let test = {
            'content' : 'Profile_content__2n2zP'
}

const Profile = () => {
  return(
    <div className={test.content}>
    <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="main__img"/>
    <div className="main__content">
      <img src="#" alt=""/>
      <div className="main__info">
        <div className="item">Dmitry K.</div>
        <div className="item">Date of Birth: 2 january</div>
        <div className="item">City: Minsk</div> 
      </div>
     <Post message="Hello, buddy" like="2" />
     <Post message="Second post" like="3" /> 
    </div>
  </div>
  )
}

export default Profile;