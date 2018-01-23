import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import { sign, login } from '../actions/AuthAction';
import { connect } from 'react-redux';

class HomeScr extends Component {
  constructor(props){
    super(props);
    this._signUp = this._signUp.bind(this);
    this._logIn = this._logIn.bind(this);
  }

  _signUp(){
    this.props.inSign();
  }
  _logIn(){
    this.props.inLogin();
  }

  render(){
    return(
      <ImageBackground
        source={require('../img/homeBg.jpg')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={styles.container}>
          <View style={styles.footerButtons}>
            <TouchableOpacity
              style={styles.homeBtn}
              onPress={this._signUp}
            >
              <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.homeBtn}
              onPress={this._logIn}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  homeBtn: {
    margin: 10,
    marginBottom: 20,
    width: 120,
    height: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 1,
    borderWidth: 0.5,
    borderColor: '#eee',
    backgroundColor: 'rgba(108, 108, 108, 0.3)'
  },
  text: {
    color: '#fff',
    fontSize: 18,
  }
});

const mapStateToProps = (state) => {
  return {
    isHome: state.auth.isHome,
    isSign: state.auth.isSign,
    isLogin: state.auth.isLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inSign: () => {
      dispatch(sign())
    },
    inLogin: () => {
      dispatch(login())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScr);
