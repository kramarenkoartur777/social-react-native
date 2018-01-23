import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MessageBlock from './MessageBlock';

class MessagesContainer extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Messages</Text>
          <View style={styles.blockSetting}>
            <TouchableOpacity
              style={styles.chatBtn}
            >
              <Image
                style={styles.iconChatAdd}
                source={require('../img/iconChatAdd.png')}
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
          <MessageBlock
            sourceAvaImage={require('../img/peopleLike1.jpg')}
            textNameMessage='Gigi Hadid'
            dateSendMessage='10 Jan 2018'
            textMessage='How are you?'
          />
          <MessageBlock
            sourceAvaImage={require('../img/peopleLike3.jpg')}
            textNameMessage='Johannes Huebl'
            dateSendMessage='10 Jan 2018'
            textMessage='You photo is great!❤️❤️❤️'
          />
          <MessageBlock
            sourceAvaImage={require('../img/dart.jpg')}
            textNameMessage='Darth Vader'
            dateSendMessage='10 Jan 2018'
            textMessage='Hi, baby! 😍'
          />
          <MessageBlock
            sourceAvaImage={require('../img/jolie.jpg')}
            textNameMessage='Angelina Jolie'
            dateSendMessage='10 Jan 2018'
            textMessage='😏'
          />
          <MessageBlock
            sourceAvaImage={require('../img/rihanna.jpg')}
            textNameMessage='Rihanna Fenty'
            dateSendMessage='10 Jan 2018'
            textMessage='My girl ❤️❤️❤️'
          />
          <MessageBlock
            sourceAvaImage={require('../img/efron.jpg')}
            textNameMessage='Zac Efron'
            dateSendMessage='10 Jan 2018'
            textMessage='Hi, Cara.'
          />
          <MessageBlock
            sourceAvaImage={require('../img/gosling.jpg')}
            textNameMessage='Ryan Gosling'
            dateSendMessage='10 Jan 2018'
            textMessage="I'm fine 😏"
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(82, 0, 56, 0.5)'
  },
  header: {
    backgroundColor: 'rgba(82, 0, 56, 0.8)',
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
  chatBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  settingBtn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconChatAdd: {
    width: 27,
    height: 27,
    margin: 2
  },
  iconSetting: {
    width: 30,
    height: 30
  }
});

export default MessagesContainer;
