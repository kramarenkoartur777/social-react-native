import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import SignUpIn from './SignUpIn';
import HomeScr from './HomeScr';
import LoginIn from './LoginIn';

import { connect } from 'react-redux';

class Home extends Component {
  render(){
    if( this.props.isHome && this.props.isSign){
      return <SignUpIn />;
    } else if(this.props.isHome && this.props.isLogin){
      return <LoginIn /> ;
    } else {
      return <HomeScr />
    }
  }
}


const mapStateToProps = (state) => {
  return {
    isHome: state.auth.isHome,
    isSign: state.auth.isSign,
    isLogin: state.auth.isLogin,
    isSignIn: state.auth.isSignIn
  }
};


export default connect(mapStateToProps)(Home);
