import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { photoSize } from '../actions/AuthAction';

class PhotosBlock extends Component {
  constructor(){
    super();
    this.photoSizeFunc = this.photoSizeFunc.bind(this);
  }
  photoSizeFunc(){
    this.props.bigSize()
  }
  render(){
    return(
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={this.photoSizeFunc}
        >
          <Image
            style={styles.imageGallery}
            source={this.props.source}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 120,
    height: 80,
    borderRadius: 5,
    margin: 4
  },
  imageGallery: {
    width: '100%',
    height: '100%',
    borderRadius: 5,

  }
});

const mapStateToProps = (state) => {
  return {
    auth: state.auth.isPhotoSize
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    bigSize: () => {
      dispatch(photoSize())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotosBlock);
