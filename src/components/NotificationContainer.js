import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import NotificationBlock from './NotificationBlock';

class NotificationContainer extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notification</Text>
        </View>
        <View style={styles.notificationBlock}>
          <ScrollView>
            <NotificationBlock
              avatarLike={require('../img/rihanna.jpg')}
              namePeopleLike='Rihanna Fenty'
              textNotification='liked your photo.'
              textDateLike='17:59'
              photoLike={require('../img/img1.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/rihanna.jpg')}
              namePeopleLike='Rihanna Fenty'
              textNotification='liked your photo.'
              textDateLike='17:58'
              photoLike={require('../img/img3.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/dart.jpg')}
              namePeopleLike='Darth Vader'
              textNotification='liked your photo.'
              textDateLike='16:47'
              photoLike={require('../img/img3.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/gosling.jpg')}
              namePeopleLike='Ryan Gosling'
              textNotification='liked your photo.'
              textDateLike='16:02'
              photoLike={require('../img/img4.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/efron.jpg')}
              namePeopleLike='Zac Efron'
              textNotification='liked your photo.'
              textDateLike='15:33'
              photoLike={require('../img/img10.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/jolie.jpg')}
              namePeopleLike='Angelina Jolie'
              textNotification='liked your photo.'
              textDateLike='14:55'
              photoLike={require('../img/img9.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/peopleLike3.jpg')}
              namePeopleLike='Johannes Huebl'
              textNotification='liked your photo.'
              textDateLike='12:12'
              photoLike={require('../img/img2.jpg')}
            />
            <NotificationBlock
              avatarLike={require('../img/peopleLike1.jpg')}
              namePeopleLike='Gigi Hadid'
              textNotification='liked your photo.'
              textDateLike='11:00'
              photoLike={require('../img/img11.jpg')}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 1, 82, 0.6)'
  },
  header: {
    backgroundColor: 'rgba(0, 1, 82, 0.8)',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10
  },
  notificationBlock: {
    flex: 1
  }
});

export default NotificationContainer;
