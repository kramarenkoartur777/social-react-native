import React, { Component } from 'react';
import { View } from 'react-native';
import ProfilePosts from './ProfilePosts';

class ProfilePostContainer extends Component {
  render(){
    return(
      <View>
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img1.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img2.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img3.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img4.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img5.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img6.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img7.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img8.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img9.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img10.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img11.jpg')}
        />
        <ProfilePosts
          sourceAvatarPost={require('../img/profileavatar.jpg')}
          textName='Cara Delevingne'
          date='10 Jan 2018'
          sourceImagePost={require('../img/img12.jpg')}
        />
      </View>
    );
  }
}

export default ProfilePostContainer;
