import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import FotoGallery from './FotoGallery';
import ProfileNav from './ProfileNav';
import NavPhotos from './NavPhotos';
import Music from './Music';

import { connect } from 'react-redux';
import { photos, logout, music } from '../actions/AuthAction';

class Profile extends Component {
  constructor(){
    super();
    this._photosFunc = this._photosFunc.bind(this);
    this._logOut = this._logOut.bind(this);
    this._musicFunc = this._musicFunc.bind(this);
  }
  _photosFunc(){
    this.props.inPhotos();
  }
  _musicFunc(){
    this.props.inMusic();
  }
  _logOut(){
    this.props.logOutFunc();
  }
  render(){
    if(this.props.isPhotos){
      return <NavPhotos />;
    } else {
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.editBtn}
            >
              <Image
                style={styles.iconEditProfile}
                source={require('../img/iconEditProfile.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._logOut}
              style={styles.logoutBtn}
            >
              <Image
                style={styles.iconLogout}
                source={require('../img/iconLogout.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.blockProfile}>
            <View style={styles.avatar}>
              <Image
                source={require('../img/profileavatar.jpg')}
                style={styles.avatarImage}
              />
            </View>
            <Text style={styles.profileName}>Cara Delevingne</Text>
            <Text style={styles.profileInfo}>Age 25 | London</Text>
          </View>
          <View style={styles.navigation}>
            <ProfileNav
              textNav='Friends'
              textCount='236'
            />
            <ProfileNav
              textNav='Photos'
              textCount='12'
              onPress={this._photosFunc}
            />
            <ProfileNav
              textNav='Videos'
              textCount='7'
            />
            <ProfileNav
              textNav='Music'
              textCount='127'
              onPress={this._musicFunc}
            />
          </View>
          <ScrollView
            horizontal
            style={{paddingHorizontal: 5, marginTop: 10, marginRight: 5}}
          >
            <FotoGallery source={require('../img/img1.jpg')}/>
            <FotoGallery source={require('../img/img2.jpg')}/>
            <FotoGallery source={require('../img/img3.jpg')}/>
            <FotoGallery source={require('../img/img4.jpg')}/>
            <FotoGallery source={require('../img/img5.jpg')}/>
            <FotoGallery source={require('../img/img6.jpg')}/>
            <FotoGallery source={require('../img/img7.jpg')}/>
            <FotoGallery source={require('../img/img8.jpg')}/>
            <FotoGallery source={require('../img/img9.jpg')}/>
            <FotoGallery source={require('../img/img10.jpg')}/>
            <FotoGallery source={require('../img/img11.jpg')}/>
            <FotoGallery source={require('../img/img12.jpg')}/>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  logoutBtn: {
    padding: 10
  },
  iconLogout: {
    height: 30,
    width: 30
  },
  blockProfile: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    padding: 2,
    borderWidth: 1,
    borderColor: 'rgba(193, 193, 193, 0.5)',
    borderRadius: 50,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  profileName: {
    color: '#dfdfdf',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 5
  },
  profileInfo: {
    color: '#dfdfdf',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 5
  },
  editBtn: {
    padding: 10,
  },
  iconEditProfile: {
    width: 25,
    height: 25
  },
  navigation: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.5)',
  }
});

const mapStateToProps = (state) => {
  return {
    isPhotos: state.auth.isPhotos,
    isLogin: state.auth.isLogin,
    isHome: state.auth.isHome,
    isLoginIn: state.auth.isLoginIn,
    isMusic: state.auth.isMusic
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inPhotos: () => {
      dispatch(photos())
    },
    logOutFunc: () => {
      dispatch(logout())
    },
    inMusic: () => {
      dispatch(music())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
