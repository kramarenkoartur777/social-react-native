import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class ProfileNav extends Component {
  render(){
    return(
      <TouchableOpacity
        style={styles.navBtn}
        onPress={this.props.onPress}
      >
        <Text style={styles.text}>{this.props.textNav}</Text>
        <Text style={styles.count}>{this.props.textCount}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  navBtn: {
    width: 86,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    flexDirection: 'row',
    paddingVertical: 5,
    margin: 4,

  },
  text: {
    color: '#fff',
    fontSize: 15,
    paddingLeft: 5
  },
  count: {
    color: '#c18d8d',
    fontSize: 15,
    paddingLeft: 5
  }
});

export default ProfileNav;
