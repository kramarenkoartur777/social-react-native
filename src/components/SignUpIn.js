import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SignUp from '../containers/SignUp';
import HomeScreen from '../containers/HomeScreen';

import { connect } from 'react-redux';

class SignUpIn extends Component {
  render(){
    if(this.props.isSignIn){
      return <HomeScreen />;
    } else {
      return <SignUp />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  return {
    isSignIn: state.auth.isSignIn
  }
}

export default connect(mapStateToProps)(SignUpIn);
