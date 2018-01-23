import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';

import { connect } from 'react-redux';

import Profile from '../components/Profile';
import ProfilePostContainer from '../components/ProfilePostContainer';
import NewsContainer from '../components/NewsContainer';
import MessagesContainer from '../components/MessagesContainer';
import NotificationContainer from '../components/NotificationContainer';
import MusicContainer from '../components/MusicContainer';

import NavPhotos from '../components/NavPhotos';
import Music from '../components/Music';
import ChatContainer from '../components/ChatContainer';

const NewsScreen = () => (
  <NewsContainer />
);
const MusicScreen = () => (
  <MusicContainer />
);
const MessageScreen = () => (
  <MessagesContainer />
);
const NotificationScreen = () => (
  <NotificationContainer />
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <ImageBackground
        style={styles.profileBg}
        source={require('../img/profileBg.jpg')}
      >
        <Profile />
      </ImageBackground>
      <View style={styles.profilePostBg}>
        <ProfilePostContainer />
      </View>
    </ScrollView>
  </View>
);

const HomeScreens = TabNavigator({
  News: {
    screen: NewsScreen,
    navigationOptions: {
       tabBarLabel: () => (
        <Image
          source={require('../img/newsLabel.png')}
          style={[styles.newsLabel, {tintColor: '#000'}]}
        />
      ),
    }
  },
  Music: {
    screen: MusicScreen,
    navigationOptions: {
       tabBarLabel: () => (
        <Image
          source={require('../img/musicLabel.png')}
          style={[styles.musicLabel, {tintColor: '#000'}]}
        />
      ),
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
       tabBarLabel: () => (
        <Image
          source={require('../img/messageLabel.png')}
          style={[styles.messageLabel, {tintColor: '#000'}]}
        />
      ),
    }
  },
  NotificationLabel: {
    screen: NotificationScreen,
    navigationOptions: {
       tabBarLabel: () => (
        <Image
          source={require('../img/notificationLabel.png')}
          style={[styles.notificationLabel, {tintColor: '#000'}]}
        />
      ),
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
       tabBarLabel: () => (
        <Image
          source={require('../img/profileLabel.png')}
          style={[styles.profileLabel, {tintColor: '#000'}]}
        />
      ),
    }
  },
},
{
  initialRouteName: 'Profile',
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    style: {
      backgroundColor: '#eee'
    },
    pressColor: '#000',
    indicatorStyle: {
      backgroundColor: 'transparent'
    }
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileBg: {
    width: '100%',
  },
  profilePostBg: {
    backgroundColor: '#000'
  },
  profileLabel: {
    width: 30,
    height: 30
  },
  newsLabel: {
    width: 25,
    height: 25
  },
  musicLabel: {
    width: 25,
    height: 25,
  },
  messageLabel: {
    width: 25,
    height: 25
  },
  notificationLabel: {
    width: 22,
    height: 22
  }
});

class HomeScreen extends Component {
  constructor(){
    super();
  }
  render(){
    if(this.props.isPhotos){
      return <NavPhotos />;
    } else if(this.props.isMusic){
      return <Music />;
    } else if(this.props.isChat){
      return <ChatContainer />;
    } else {
      return <HomeScreens />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isPhotos: state.auth.isPhotos,
    isMusic: state.auth.isMusic,
    isChat: state.auth.isChat
  }
};

export default connect(mapStateToProps)(HomeScreen);
