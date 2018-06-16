import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App1 extends Component {
  state = { loggedIn: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCho9hSlwVo8TzlfFYJgbqFA0ll5bdm-Xg',
      authDomain: 'authentication-58046.firebaseapp.com',
      databaseURL: 'https://authentication-58046.firebaseio.com',
      // projectId: 'authentication-58046',
      storageBucket: 'authentication-58046.appspot.com',
      messagingSenderId: '991343915167'
    });

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
    });
  }
    renderContent() {
      switch (this.state.loggedIn) {
        case true:
          return <Button>Log Out </Button>;
        case false:
          return //<LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }
  render() {
    return (
      <View>
        <Header name="Authentication" />
        {this.renderContent()}
        <LoginForm />
      </View>
    );
  }
}

export default App1;
