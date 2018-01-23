import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class FotoGalery extends Component {
  render(){
    return(
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageGallery}
          source={this.props.source}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 86,
    height: 60,
    borderRadius: 5,
    margin: 4
  },
  imageGallery: {
    width: '100%',
    height: '100%',
    borderRadius: 5,

  }
});

export default FotoGalery;
