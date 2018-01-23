import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { navBackButton} from '../actions/AuthAction';

import PhotosBlock from './PhotosBlock';

class NavPhotos extends Component {
  constructor(){
    super();
    this._backFunc = this._backFunc.bind(this);
  }
  _backFunc(){
    this.props.backOut();
  }
  render(){
    return(
      <ImageBackground
        style={styles.photosBg}
        source={require('../img/photosBg.jpg')}
      >
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
            <Text style={styles.headerText}>Photos</Text>
            <View style={styles.headerBtnBlock}>
              <TouchableOpacity style={{marginRight: 10}}>
                <Image
                  style={styles.iconAddBtn}
                  source={require('../img/iconAddBtn.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.settingImage}
                  source={require('../img/iconSetting.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView
            style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}
          >
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <PhotosBlock source={require('../img/img1.jpg')} />
              <PhotosBlock source={require('../img/img2.jpg')} />
              <PhotosBlock source={require('../img/img3.jpg')} />
              <PhotosBlock source={require('../img/img4.jpg')} />
              <PhotosBlock source={require('../img/img5.jpg')} />
              <PhotosBlock source={require('../img/img6.jpg')} />
              <PhotosBlock source={require('../img/img7.jpg')} />
              <PhotosBlock source={require('../img/img8.jpg')} />
              <PhotosBlock source={require('../img/img9.jpg')} />
              <PhotosBlock source={require('../img/img10.jpg')} />
              <PhotosBlock source={require('../img/img11.jpg')} />
              <PhotosBlock source={require('../img/img12.jpg')} />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  photosBg: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
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
  settingImage: {
    width: 25,
    height: 25
  },
  headerBtnBlock: {
    flexDirection: 'row'
  },
  iconAddBtn: {
    width: 25,
    height: 25
  }
});

const mapStateToProps = (state) => {
  return {
    isPhotos: state.auth.isPhotos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    backOut: () => {
      dispatch(navBackButton())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavPhotos);
