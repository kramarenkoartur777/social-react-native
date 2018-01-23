import React, { Component } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, TextInput, FlatList, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navBackButton } from '../actions/AuthAction';

import { GiftedChat } from 'react-native-gifted-chat';
import Backend from '../Backend';

class ChatContainer extends Component {
  constructor(){
    super();
    this.state = {
      messages: [
        {
          _id: 1,
          text: 'How are you?',
          user: {
            _id: 2,
            name: 'Gigi Hadid',
            avatar: 'https://www.theplayerway.com/wp-content/uploads/2017/04/Gigi-Hadid-Blue-Hair.jpg',
          },
        }
      ],
    };
    this._backFunc = this._backFunc.bind(this);
  }
  _backFunc(){
    this.props.backOut();
  }
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    console.ignoredYellowBox = ['Setting a timer'];
    return(
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
          <Text style={styles.headerText}>Chat</Text>
          <TouchableOpacity
            style={{alignItems: 'center', justifyContent: 'center'}}
          >
            <Image
              style={styles.addPhoto}
              source={require('../img/addPhoto.png')}
            />
          </TouchableOpacity>
        </View>

        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 3,
          }}
        />

      </View>
    );
  }
  componentDidMount(){
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount(){
    Backend.closeChat();
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(82, 0, 56, 0.5)'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'rgba(82, 0, 56, 0.8)'
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
  addPhoto: {
    width: 25,
    height: 25
  }
});

const mapStateToProps = (state) => {
  return {
    isChat: state.auth.isChat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    backOut: () => {
      dispatch(navBackButton())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer);
