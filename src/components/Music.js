import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navBackButton} from '../actions/AuthAction';

import MusicBox from './MusicBox';

class Music extends Component {
  constructor(){
    super();
    this._backFunc = this._backFunc.bind(this);
  }
  _backFunc(){
    this.props.backOut();
  }
  render(){
    return(
      <ImageBackground
        style={styles.photosBg}
        source={require('../img/musicBg.jpg')}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={this._backFunc}
            >
              <Image
                style={styles.iconBack}
                source={require('../img/navBackButton.png')}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Music</Text>
            <TouchableOpacity style={{marginRight: 10}}>
              <Image
                style={styles.audio}
                source={require('../img/audio.png')}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <MusicBox />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  photosBg: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconBack: {
    width: 30,
    height: 30,
  },
  audio: {
    width: 30,
    height: 30
  }
});

const mapStateToProps = (state) => {
  return {
    isMusic: state.auth.isMusic
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backOut: () => {
      dispatch(navBackButton())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Music);
