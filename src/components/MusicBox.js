import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View, StyleSheet, Image, TextInput } from 'react-native';

class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      text: ''
    }
    this.arrayholder = [] ;
  }

  componentDidMount() {
    return fetch('http://davidpots.com/jakeworry/017%20JSON%20Grouping,%20part%203/data.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.songs),
        }, function() {
          this.arrayholder = responseJson.songs ;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text){

     const newData = this.arrayholder.filter(function(item){
         const itemData = item.title.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputSearch}
          underlineColorAndroid='transparent'
          placeholder='Search...'
          placeholderTextColor='rgba(210, 11, 138, 0.5)'
          selectionColor='#d30b8b'
          onChangeText={(text) => this.SearchFilterFunction(text)}
          value={this.state.text}
        />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => {
            return(
              <View style={styles.audioBlock}>
                <Image
                  style={styles.audioIcon}
                  source={require('../img/audio.png')}
                />
                <View style={styles.textAudio}>
                  <Text style={styles.textArtist}>{rowData.artist} - </Text>
                  <Text style={styles.textTitle}>{rowData.title}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contsiner: {
    flex: 1,
    padding: 5,
  },
  inputSearch: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 3,
    paddingHorizontal: 10,
    textAlign: 'center'
  },
  audioBlock: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    margin: 5,
    padding: 5,
    borderRadius: 15,
    flexDirection: 'row'
  },
  audioIcon: {
    width: 25,
    height: 25
  },
  textAudio: {
    flexDirection: 'row'
  },
  textArtist: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  },
  textTitle: {
    padding: 2
  }
});
export default MusicBox;
