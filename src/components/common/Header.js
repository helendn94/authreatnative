import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text style={styles.TextView}>{this.props.name}</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',


  },
  TextView: {
    fontSize: 30,
  }
});
export { Header };
// make the Component available to other parts of the app
