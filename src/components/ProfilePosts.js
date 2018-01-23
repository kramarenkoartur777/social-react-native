import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

class ProfilePosts extends Component {
  constructor(props){
    super(props);
    this.state = {
      heart: false,
      count: 25
    };
    this.funcHeart = this.funcHeart.bind(this);
  }
  funcHeart(){
    if(this.state.heart){
      return <Image style={styles.imageHeartLike} source={require('../img/heartLikeRed.png')} />;
    } else {
      return <Image style={styles.imageHeartLike} source={require('../img/heartLike.png')} />;
    }
  }
  render(){
    const countLikes = this.state.heart ? this.state.count + 1 : this.state.count;
    const imageCount = this.state.heart ? '../img/peopleLike1.jpg' : '../img/peopleLike2.jpg';
    return(
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.avatarPost}
            source={this.props.sourceAvatarPost}
          />
          <View style={styles.headerCol2}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.textName}>{this.props.textName}</Text>
              <Text style={{marginLeft: 3, fontSize: 14, marginTop: 2}}>upload new photos</Text>
            </View>
            <Text style={styles.date}>{this.props.date}</Text>
          </View>
          <View style={styles.likeBlock}>
            <TouchableOpacity
              style={styles.likeBtn}
              onPress={(heart) => this.setState({ heart: !this.state.heart})}
            >
              {this.funcHeart()}
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.blockPost}>
          <Image
            style={styles.imagePost}
            source={this.props.sourceImagePost}
          />
        </View>
        <View style={styles.footer}>
          <Image
            style={styles.imagePeopleLike}
            source={this.state.heart ? require('../img/profileavatar.jpg') : require('../img/jolie.jpg')}
          />
          <Image
            style={styles.imagePeopleLike}
            source={this.state.heart ? require('../img/jolie.jpg') : require('../img/peopleLike2.jpg')}
          />
          <Image
            style={styles.imagePeopleLike}
            source={this.state.heart ? require('../img/peopleLike2.jpg') : require('../img/rihanna.jpg')}
          />
          <TouchableOpacity
            style={styles.blockCountLike}
          >
            <Text style={styles.countLike}>+ {countLikes}</Text>
          </TouchableOpacity>
          <Text style={styles.textLike}>Likes</Text>
          <View style={styles.commentsBlock}>
            <TouchableOpacity
              style={styles.commentsBtn}
            >
              <Image
                style={styles.commentsIcon}
                source={require('../img/commentsIcon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 10
  },
  avatarPost: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginRight: 10
  },
  textName: {
    color: '#222222',
    fontWeight: 'bold',
    fontSize: 16
  },
  likeBlock: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  likeBtn: {
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'flex-end'
  },
  imageHeartLike: {
    width: '100%',
    height: '100%'
  },
  blockPost: {
    width: '100%',
    height: 200,
  },
  imagePost: {
    width: '100%',
    height: '100%',
    borderRadius: 10
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  imagePeopleLike: {
    width: 35,
    height: 35,
    borderRadius: 30,
    marginRight: 5
  },
  blockCountLike: {
    backgroundColor: '#b24',
    borderRadius: 30
  },
  countLike: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 10,
    fontSize: 16
  },
  textLike: {
    margin: 5,
    fontSize: 16
  },
  commentsBlock: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  commentsBtn: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    marginRight: 5
  },
  commentsIcon: {
    width: '100%',
    height: '100%'
  }
});

export default ProfilePosts;
