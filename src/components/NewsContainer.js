import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';

import ProfilePosts from './ProfilePosts';

class NewsContainer extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>News</Text>
          <View style={styles.blockSetting}>
            <TouchableOpacity
              style={styles.searchBtn}
            >
              <Image
                style={styles.iconSearch}
                source={require('../img/searchLabel.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.settingBtn}
            >
              <Image
                style={styles.iconSetting}
                source={require('../img/iconSetting.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <ProfilePosts
            sourceAvatarPost={require('../img/peopleLike3.jpg')}
            textName='Johannes Huebl'
            date='10 Jan 2018'
            sourceImagePost={require('../img/huebl1.png')}
            sourceImagePeopleLike1={require('../img/peopleLike1.jpg')}
            sourceImagePeopleLike2={require('../img/profileavatar.jpg')}
            sourceImagePeopleLike3={require('../img/peopleLike2.jpg')}
          />
          <ProfilePosts
            sourceAvatarPost={require('../img/peopleLike3.jpg')}
            textName='Johannes Huebl'
            date='10 Jan 2018'
            sourceImagePost={require('../img/huebl2.jpg')}
            sourceImagePeopleLike1={require('../img/peopleLike2.jpg')}
            sourceImagePeopleLike2={require('../img/peopleLike1.jpg')}
            sourceImagePeopleLike3={require('../img/profileavatar.jpg')}
          />
          <ProfilePosts
            sourceAvatarPost={require('../img/peopleLike1.jpg')}
            textName='Gigi Hadid'
            date='10 Jan 2018'
            sourceImagePost={require('../img/gigi1.jpg')}
            sourceImagePeopleLike1={require('../img/peopleLike3.jpg')}
            sourceImagePeopleLike2={require('../img/peopleLike2.jpg')}
            sourceImagePeopleLike3={require('../img/profileavatar.jpg')}
          />
          <ProfilePosts
            sourceAvatarPost={require('../img/peopleLike1.jpg')}
            textName='Gigi Hadid'
            date='10 Jan 2018'
            sourceImagePost={require('../img/gigi2.jpg')}
            sourceImagePeopleLike1={require('../img/peopleLike2.jpg')}
            sourceImagePeopleLike2={require('../img/peopleLike3.jpg')}
            sourceImagePeopleLike3={require('../img/profileavatar.jpg')}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(88, 0, 20, 0.8)'
  },
  header: {
    backgroundColor: 'rgba(187, 34, 68, 0.6)',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  blockSetting: {
    flexDirection: 'row',
  },
  searchBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  settingBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconSearch: {
    width: 27,
    height: 27,
    margin: 2
  },
  iconSetting: {
    width: 30,
    height: 30
  }
});

export default NewsContainer;
