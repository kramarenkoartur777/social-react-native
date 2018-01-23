import firebase from 'firebase';

class Backend {
  uid = '';
  messagesRef = null;

  constructor(){
    firebase.initializeApp({
      apiKey: "AIzaSyA0jwSYMDOVwQuiWWTXRBA2diu0t9DVes8",
      authDomain: "chatchat-2c818.firebaseapp.com",
      databaseURL: "https://chatchat-2c818.firebaseio.com",
      projectId: "chatchat-2c818",
      storageBucket: "",
      messagingSenderId: "346104340666"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });
  }
  setUid(value){
    this.uid = value;
  }
  getUid(){
    return this.uid;
  }
  loadMessages(callback){
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();
      callback({
        _id: data.key,
        text: message.text,
        user: {
          id: message.user._id,
          name: message.user.name
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }

  sendMessage(message){
    for(let i = 0; i < message.length; i++){
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
      });
    }
  }

  closeChat(){
    if(this.messagesRef){
      this.messagesRef.off();
    }
  }
}

export default new Backend();
