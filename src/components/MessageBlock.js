import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { chat } from '../actions/AuthAction';

class MessageBlock extends Component {
  constructor(){
    super();
    this._chatFunc = this._chatFunc.bind(this);
  }
  _chatFunc(){
    this.props.inChat();
  }
  render(){
    return(
      <View style={styles.container}>
        <Image
          source={this.props.sourceAvaImage}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={this._chatFunc}
          style={styles.textBlock}
        >
          <View style={styles.headerTextBlock}>
            <Text style={styles.textName}>{this.props.textNameMessage}</Text>
            <View><Text style={styles.date}>{this.props.dateSendMessage}</Text></View>
          </View>
          <Text style={styles.textMessage}>{this.props.textMessage}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10
  },
  textBlock: {
    flex: 1
  },
  headerTextBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textName: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  date: {
    fontSize: 12,
    padding: 3,
  }
});

const mapStateToProps = (state) => {
  return {
    isChat: state.auth.isChat
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    inChat: () => {
      dispatch(chat())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBlock);
