import React, { Component } from 'react';
import firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
          firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
  }
  onLoginFail() {
    this.setState({ error: 'Authentication Fail', loading: false });
  }
  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log in
      </Button>
    );
  }
  render() {
    return (
      <Card>
          <CardSection>
              <Input
                  placeholder="user@gmail.com"
                  label="Email"
                  value={this.state.text}
                  onchangeText={email => this.setState({ email })}
                  style={{ height: 20, width: 300 }}
              />
          </CardSection>

          <CardSection>
              <Input
                  secureTextEntry
                  placeholder="password"
                  label="Password"
                  value={this.state.password}
                  onChangeText={password => this.setState({ password })}
              />
          </CardSection>

          <Text style={styles.errorTextStyle}>
              {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignItems: 'center',
    paddingLeft: 80,
    color: 'red',
  }
};
export default LoginForm;
