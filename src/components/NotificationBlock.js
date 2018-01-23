import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';

class NotificationBlock extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.col1}>
          <Image
            style={styles.avatarLike}
            source={this.props.avatarLike}
          />
          <Image
            style={styles.iconLike}
            source={require('../img/heartNotification.png')}
          />
        </View>
        <View style={styles.col2}>
          <View style={styles.headerText}>
            <Text style={styles.namePeopleLike}>{this.props.namePeopleLike}</Text>
            <Text style={styles.textNotification}>{this.props.textNotification}</Text>
          </View>
          <Text style={styles.textDateLike}>{this.props.textDateLike}</Text>
        </View>
        <View style={styles.col3}>
          <Image
            style={styles.photoLike}
            source={this.props.photoLike}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 4,
    padding: 5,
    borderRadius: 2
  },
  col1: {
    margin: 5
  },
  col2: {
    flex: 1,
    padding: 5
  },
  col3: {
    justifyContent: 'center'
  },
  avatarLike: {
    width: 50,
    height: 50,
    borderRadius: 30
  },
  headerText: {
    flexDirection: 'row',
  },
  namePeopleLike: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  textNotification: {
    fontSize: 16,
    marginLeft: 5,
    color: 'rgba(0, 0, 0, 0.7)',
  },
  textDateLike: {
    fontSize: 12,
    marginTop: 5,
    color: '#9c9c9c'
  },
  photoLike: {
    width: 60,
    height: 40,
    borderRadius: 5
  },
  iconLike: {
    width: 25,
    height: 25,
    marginTop: -15,
  }
});

export default NotificationBlock;
