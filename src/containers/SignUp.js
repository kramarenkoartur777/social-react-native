import React, {Component} from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, Image, TextInput, StyleSheet } from 'react-native';
import { backHome, signIn } from '../actions/AuthAction';
import { connect } from 'react-redux';

class SignUp extends Component {
  constructor(props){
    super(props);
    this._backHomeScreen = this._backHomeScreen.bind(this);
    this._signInIn = this._signInIn.bind(this);
  }
  _signInIn(){
    this.props.inSignIn();
  }

  _backHomeScreen(){
    this.props.backHomeScr();
  }

  render(){
    return(
      <ImageBackground
        source={require('../img/bg.jpg')}
        style={{width: '100%', height: '100%'}}
      >
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              placeholder='First name'
              style={styles.textInput}
              underlineColorAndroid='transparent'
            />
            <TextInput
              placeholder='Last name'
              selectionColor='#024'
              style={styles.textInput}
              underlineColorAndroid='transparent'
            />
            <TextInput
              placeholder='e-mail'
              selectionColor='#024'
              style={styles.textInput}
              underlineColorAndroid='transparent'
            />
            <TextInput
              placeholder='password'
              secureTextEntry={true}
              selectionColor='#024'
              style={styles.textInput}
              underlineColorAndroid='transparent'
            />
            <TextInput
              placeholder='confirm password'
              secureTextEntry={true}
              selectionColor='#024'
              style={styles.textInput}
              underlineColorAndroid='transparent'
            />
          </View>
          <TouchableOpacity
            onPress={this._signInIn}
            style={styles.loginBtn}
          >
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._backHomeScreen}
            style={styles.backBtn}
          >
            <Image
              style={styles.iconBack}
              source={require('../img/navBackButton.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  form: {
    width: '80%',
  },
  textInput: {
    backgroundColor: 'rgba(255,255,255, 0.7)',
    margin: 10,
  },
  loginBtn: {
    backgroundColor: 'rgba(85, 85, 85, 0.7)',
    width: 100,
    height: 40,
    marginTop: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: '#bebebe',
    fontWeight: 'bold'
  },
  backBtn: {
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 0.8
  },
  iconBack: {
    width: 25,
    height: 25
  }
});

const mapStateToProps = (state) => {
  return {
    isHome: state.auth.isHome,
    isLogin: state.auth.isLogin,
    isSign: state.auth.isSign,
    isSignIn: state.auth.isSignIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backHomeScr: () => {
      dispatch(backHome())
    },
    inSignIn: () => {
      dispatch(signIn())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
