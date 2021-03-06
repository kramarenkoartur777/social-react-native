import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';

import MusicBox from './MusicBox';

class MusicContainer extends Component {
  render(){
    return(
      <ImageBackground
        style={styles.photosBg}
        source={require('../img/musicBg.jpg')}
      >
        <View style={styles.container}>
          <View style={styles.header}>
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

export default MusicContainer;
