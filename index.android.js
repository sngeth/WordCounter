/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class WordCounter extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      count: 0
    };
  }

  inputChange(str) {
    this.setState({input: str, count: str.length});
  }

  render() {
    const {input, count} = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Word Counter!
        </Text>
        <Text style={styles.instructions}>
          What is the input string?
        </Text>

        <TextInput
            value = {this.state.name}
            onChangeText={(str) => this.inputChange(str)}
            style={styles.input}
            placeholderTextColor='#CACACA'
            selectionColor='#666666' />
          <Text style={styles.instructions}>
            {input} has {count} characters.
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height: 60,
    width: 300,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
});

AppRegistry.registerComponent('WordCounter', () => WordCounter);
